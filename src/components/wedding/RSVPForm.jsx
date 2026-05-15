import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/lib/supabaseClient';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Send } from 'lucide-react';
import GlassCard from './GlassCard';
import AnimatedSection from './AnimatedSection';
import GoldDivider from './GoldDivider';
import { toast } from 'sonner';

export default function RSVPForm() {
  const [attendance, setAttendance] = useState('');
  const [nama, setNama] = useState('');
  const [phone, setPhone] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data) => {
      const { error } = await supabase.from('rsvp').insert([data]);
      if (error) throw error;
    },
    onSuccess: () => {
      setSubmitted(true);
      toast.success('Terima kasih atas maklum balas anda!');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!attendance || !nama.trim()) return;
    mutation.mutate({
      nama, // ✅ guna nama sebab kolum Supabase Nor ialah 'nama'
      phone,
      attendance,
      guest_count: Number(guestCount),
    });
  };

  if (submitted) {
    return (
      <AnimatedSection>
        <GlassCard className="text-center">
          <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
          <p className="font-serif text-lg text-foreground">Terima Kasih!</p>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            Maklum balas anda telah direkodkan.
          </p>
        </GlassCard>
      </AnimatedSection>
    );
  }

  return (
    <div>
      <AnimatedSection className="text-center">
        <p className="font-serif text-base md:text-lg tracking-widest uppercase text-muted-foreground">
          RSVP
        </p>
        <GoldDivider />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <GlassCard className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Attendance selection */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setAttendance('hadir')}
                className={`flex-1 py-3 rounded-xl border font-serif text-sm transition-all ${
                  attendance === 'hadir'
                    ? 'bg-primary/20 border-primary/40 text-foreground'
                    : 'bg-white/30 border-white/30 text-muted-foreground'
                }`}
              >
                <CheckCircle
                  className={`w-5 h-5 mx-auto mb-1 ${
                    attendance === 'hadir'
                      ? 'text-primary'
                      : 'text-muted-foreground/50'
                  }`}
                />
                Hadir
              </button>
              <button
                type="button"
                onClick={() => setAttendance('tidak_hadir')}
                className={`flex-1 py-3 rounded-xl border font-serif text-sm transition-all ${
                  attendance === 'tidak_hadir'
                    ? 'bg-destructive/10 border-destructive/30 text-foreground'
                    : 'bg-white/30 border-white/30 text-muted-foreground'
                }`}
              >
                <XCircle
                  className={`w-5 h-5 mx-auto mb-1 ${
                    attendance === 'tidak_hadir'
                      ? 'text-destructive'
                      : 'text-muted-foreground/50'
                  }`}
                />
                Tidak Hadir
              </button>
            </div>

            <Input
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="bg-white/50 border-white/40 font-sans text-sm"
            />
            <Input
              placeholder="No Telefon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-white/50 border-white/40 font-sans text-sm"
            />
            {attendance === 'hadir' && (
              <Input
                type="number"
                min="1"
                placeholder="Bilangan tetamu"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="bg-white/50 border-white/40 font-sans text-sm"
              />
            )}
            <Button
              type="submit"
              disabled={mutation.isPending || !attendance || !nama.trim()}
              className="w-full bg-primary/80 hover:bg-primary font-serif"
            >
              <Send className="w-4 h-4 mr-2" />
              {mutation.isPending ? 'Menghantar...' : 'Hantar'}
            </Button>
          </form>
        </GlassCard>
      </AnimatedSection>
    </div>
  );
}
