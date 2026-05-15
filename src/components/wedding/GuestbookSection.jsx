import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';
import GoldDivider from './GoldDivider';
import { toast } from 'sonner';

export default function GuestbookSection() {
  const [showForm, setShowForm] = useState(false);
  const [nama, setNama] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const queryClient = useQueryClient();

  // ambil data dari Supabase
  const { data: messages = [] } = useQuery({
    queryKey: ['guestbook'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  // tambah ucapan baru
  const createMutation = useMutation({
    mutationFn: async (data) => {
      const { error } = await supabase.from('guestbook').insert([data]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guestbook'] });
      setShowForm(false);
      setNama('');
      setRelation('');
      setMessage('');
      toast.success('Ucapan anda telah dihantar!');
    },
  });

  // realtime listener untuk ucapan baru
  useEffect(() => {
    const channel = supabase
      .channel('guestbook-realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'guestbook' },
        (payload) => {
          // Update cache React Query
          queryClient.setQueryData(['guestbook'], (old = []) => [payload.new, ...old]);

          // Toast realtime
          toast.success(`Ucapan baru dari ${payload.new.nama}: "${payload.new.message}"`);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama.trim() || !message.trim()) return;
    createMutation.mutate({
      nama,
      relation,
      message,
    });
  };

  return (
    <section className="relative py-20 md:py-28 px-4">
      <div className="max-w-lg mx-auto">
        <AnimatedSection className="text-center">
          <p className="font-serif text-base md:text-lg tracking-widest uppercase text-muted-foreground">
            Ucapan Tetamu
          </p>
          <GoldDivider />
        </AnimatedSection>

        {/* Messages */}
        <div className="space-y-4 mt-8 max-h-96 overflow-y-auto pr-2">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/30 backdrop-blur-sm border border-white/30 rounded-2xl rounded-tl-sm p-4">
                  <p className="font-sans text-sm text-foreground/90 leading-relaxed">{msg.message}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="font-serif text-xs font-medium text-primary">{msg.nama}</p>
                    {msg.relation && (
                      <span className="text-xs text-muted-foreground">· {msg.relation}</span>
                    )}
                    {/* Tarikh + masa ucapan */}
                    <span className="text-xs text-muted-foreground">
                      · {new Date(msg.created_at).toLocaleString('ms-MY', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {messages.length === 0 && (
            <p className="text-center text-sm text-muted-foreground font-sans">
              Jadilah yang pertama meninggalkan ucapan 💕
            </p>
          )}
        </div>

        {/* Add button */}
        <div className="text-center mt-6">
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Button
                  onClick={() => setShowForm(true)}
                  variant="outline"
                  className="rounded-full border-accent/30 bg-white/40 backdrop-blur-sm hover:bg-white/60 font-serif"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Tambah Ucapan
                </Button>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
                <GlassCard className="text-left">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="font-serif text-sm font-medium text-foreground">Ucapan Anda</p>
                      <button type="button" onClick={() => setShowForm(false)}>
                        <X className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                    <Input
                      placeholder="Nama anda"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      className="bg-white/50 border-white/40 font-sans text-sm"
                    />
                    <Input
                      placeholder="Hubungan (cth: Rakan sekerja)"
                      value={relation}
                      onChange={(e) => setRelation(e.target.value)}
                      className="bg-white/50 border-white/40 font-sans text-sm"
                    />
                    <Textarea
                      placeholder="Tulis ucapan anda..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-white/50 border-white/40 font-sans text-sm h-20"
                    />
                    <Button
                      type="submit"
                      disabled={createMutation.isPending}
                      className="w-full bg-primary/80 hover:bg-primary font-serif"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {createMutation.isPending ? 'Menghantar...' : 'Hantar'}
                    </Button>
                  </form>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
