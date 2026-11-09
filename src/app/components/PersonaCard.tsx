import { motion } from "motion/react";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

interface PersonaCardProps {
  title: string;
  icon: LucideIcon;
  responsibilities: string[];
  needs: string[];
  color: string;
  delay: number;
}

export function PersonaCard({ title, icon: Icon, responsibilities, needs, color, delay }: PersonaCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative h-80 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-4`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-slate-800 mb-3">{title}</h3>
          <p className="text-slate-500 mb-4">Key Responsibilities</p>
          <ul className="space-y-2">
            {responsibilities.slice(0, 3).map((resp, idx) => (
              <li key={idx} className="text-slate-600 flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span className="text-sm">{resp}</span>
              </li>
            ))}
          </ul>
          <p className="text-blue-500 text-sm mt-4 text-center">Click to see UX needs →</p>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 ${color} rounded-2xl shadow-lg p-6`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-white mb-4">{title}</h3>
          <p className="text-white/80 mb-3">UX Needs</p>
          <ul className="space-y-2">
            {needs.map((need, idx) => (
              <li key={idx} className="text-white/90 flex items-start gap-2">
                <span className="text-white mt-1">✓</span>
                <span className="text-sm">{need}</span>
              </li>
            ))}
          </ul>
          <p className="text-white text-sm mt-4 text-center">Click to flip back ←</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
