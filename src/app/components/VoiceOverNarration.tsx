import { motion } from "motion/react";
import { Volume2 } from "lucide-react";

interface VoiceOverNarrationProps {
  text: string;
  isVisible: boolean;
}

export function VoiceOverNarration({ text, isVisible }: VoiceOverNarrationProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-4xl mx-auto px-6"
    >
      <div className="bg-gradient-to-r from-slate-900/95 to-blue-900/95 backdrop-blur-xl border border-blue-400/30 rounded-2xl px-8 py-6 shadow-2xl">
        <div className="flex items-start gap-4">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: 999999,
              ease: "easeInOut",
            }}
            className="flex-shrink-0"
          >
            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Volume2 className="w-5 h-5 text-blue-400" />
            </div>
          </motion.div>
          <div className="flex-1">
            <p className="text-white text-lg leading-relaxed">
              {text}
            </p>
          </div>
        </div>
        
        {/* Audio wave animation */}
        <div className="flex items-center gap-1 mt-4 justify-center">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-blue-400 rounded-full"
              animate={{
                height: [4, Math.random() * 20 + 10, 4],
              }}
              transition={{
                duration: 0.8,
                repeat: 999999,
                delay: i * 0.05,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
