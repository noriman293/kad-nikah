import { useState, useEffect } from 'react';
import { supabase, addMessage } from '@/lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AnimatedSection from '@/components/wedding/AnimatedSection';
import GlassCard from '@/components/wedding/GlassCard';
import GoldDivider from '@/components/wedding/GoldDivider';
import { toast } from 'sonner';

const EMOJI_PRESETS = ['💐', '🎉', '❤️', '💍', '✨', '💌'];

export default function GuestbookSection() {
  const [showForm, setShowForm] = useState(false);
  const [nama, setNama] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('❤️');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [displayLimit, setDisplayLimit] = useState(6);

  // Ambil data dari Supabase
  const fetchMessages = async () => {
    setFetchError(null);
    setIsFetching(true);
    try {
      const { data, error } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching messages:', error.message);
        setFetchError('Gagal mengambil ucapan tetamu.');
        return;
      }
      setMessages(data || []);
    } catch (err) {
      console.error('Unexpected error fetching messages:', err);
      setFetchError('Ralat tidak dijangka berlaku.');
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchMessages();

    // Real-time subscription
    const channel = supabase
      .channel('guestbook-changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'guestbook' },
        (payload) => {
          setMessages((prev) => {
            // Elakkan duplikasi jika user yang hantar sendiri
            const exists = prev.some((m) => m.id === payload.new.id);
            if (exists) return prev;
            return [payload.new, ...prev];
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi Input
    if (!nama.trim()) {
      toast.error('Sila masukkan nama anda 🌸');
      return;
    }
    if (!message.trim()) {
      toast.error('Sila tulis ucapan anda 💕');
      return;
    }
    if (message.length > 300) {
      toast.error('Ucapan terlalu panjang (maksimum 300 aksara)');
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await addMessage(nama, message, relation, selectedEmoji);
      
      if (error) throw error;

      toast.success('Terima kasih! Ucapan anda telah dihantar 💖');
      setShowForm(false);
      setNama('');
      setRelation('');
      setMessage('');
      setSelectedEmoji('❤️');
    } catch (err) {
      console.error('Error submitting message:', err);
      toast.error('Gagal menghantar ucapan. Sila cuba lagi 🛠️');
    } finally {
      setIsLoading(false);
    }
  };

  const visibleMessages = messages.slice(0, displayLimit);
  const hasMore = messages.length > displayLimit;

  return (
    <section className="relative py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center">
          <p className="font-serif text-base md:text-lg tracking-widest uppercase text-muted-foreground">
            Ucapan Tetamu
          </p>
          <GoldDivider />
        </AnimatedSection>

        {/* Messages */}
        <div className="mt-8 pr-2">
          {isFetching && messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-2">
              <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              <p className="text-xs text-muted-foreground font-sans italic">Memuatkan memori indah...</p>
            </div>
          ) : fetchError ? (
            <div className="text-center py-10">
              <p className="text-sm text-destructive font-sans">{fetchError}</p>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={fetchMessages}
                className="mt-2 text-xs text-primary hover:text-primary/80"
              >
                Cuba Lagi 🔄
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatePresence initial={false}>
                  {visibleMessages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="relative h-full bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl rounded-tl-sm p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <div className="pr-8">
                          <p className="font-sans text-sm text-foreground/90 leading-relaxed break-words italic">
                            "{msg.message}"
                          </p>
                        </div>
                        {msg.emoji && (
                          <span className="text-2xl absolute top-2 right-2" title="Emoji pilihan">
                            {msg.emoji}
                          </span>
                        )}

                        <div className="flex items-center justify-between mt-auto border-t border-primary/10 pt-3">
                          <div className="flex flex-col">
                            <p className="font-serif text-xs font-semibold text-primary">{msg.nama}</p>
                            {msg.relation && (
                              <span className="text-[10px] text-primary/70 font-sans">
                                {msg.relation}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-muted-foreground font-sans">
                            {new Date(msg.created_at).toLocaleDateString('ms-MY', {
                                day: 'numeric',
                                month: 'short',
                              })}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {hasMore && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="text-center pt-4"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setDisplayLimit(prev => prev + 5)}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    Lihat Lebih Banyak Ucapan 🌸
                  </Button>
                </motion.div>
              )}
            </>
          )}
          
          {!isFetching && messages.length === 0 && (
            <div className="text-center py-10 bg-white/20 rounded-3xl border border-dashed border-primary/20">
              <p className="text-sm text-muted-foreground font-sans italic">
                Belum ada ucapan lagi. <br/>Jadilah yang pertama meninggalkan kata-kata manis 💕
              </p>
            </div>
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
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 20 }}
                className="max-w-lg mx-auto"
              >
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
                      maxLength={50}
                    />
                    <Input
                      placeholder="Hubungan (cth: Rakan sekerja)"
                      value={relation}
                      onChange={(e) => setRelation(e.target.value)}
                      className="bg-white/50 border-white/40 font-sans text-sm"
                      maxLength={50}
                    />
                    <div className="relative">
                      <Textarea
                        placeholder="Tulis ucapan anda..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-white/50 border-white/40 font-sans text-sm h-24"
                        maxLength={300}
                      />
                      <span className={`absolute bottom-2 right-2 text-[10px] ${message.length >= 300 ? 'text-destructive' : 'text-muted-foreground'}`}>
                        {message.length}/300
                      </span>
                    </div>

                    {/* Emoji Preset Selection */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Pilih Emoji / Sticker</label>
                      <div className="flex flex-wrap gap-2">
                        {EMOJI_PRESETS.map((emoji) => (
                          <button
                            key={emoji}
                            type="button"
                            onClick={() => setSelectedEmoji(emoji)}
                            className={`text-2xl p-2 rounded-xl transition-all ${
                              selectedEmoji === emoji 
                                ? 'bg-primary/20 border-2 border-primary/40 scale-110 shadow-sm' 
                                : 'bg-white/30 border-2 border-transparent hover:bg-white/50'
                            }`}
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary/80 hover:bg-primary font-serif"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isLoading ? 'Menghantar...' : 'Hantar'}
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
