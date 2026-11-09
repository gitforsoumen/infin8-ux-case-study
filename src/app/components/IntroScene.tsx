import { motion } from "motion/react";
import { Infinity, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface IntroSceneProps {
  onStart: () => void;
}

export function IntroScene({ onStart }: IntroSceneProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 20,
          repeat: 999999,
          ease: "linear",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: 999999,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: 999999,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center px-6">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1,
          }}
          className="mb-8 inline-block"
        >
          <div className="relative">
            <motion.div
              className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl"
              animate={{
                boxShadow: [
                  "0 20px 60px rgba(59, 130, 246, 0.4)",
                  "0 20px 80px rgba(168, 85, 247, 0.6)",
                  "0 20px 60px rgba(59, 130, 246, 0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: 999999,
                ease: "easeInOut",
              }}
            >
              <Infinity className="w-16 h-16 text-white" strokeWidth={2.5} />
            </motion.div>
            
            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 border-4 border-blue-400/30 rounded-3xl"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: 999999,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-white mb-6 max-w-4xl mx-auto">
            Infin8 Platform Reimagined
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6" />
        </motion.div>

        {/* Subtitle with typewriter effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-blue-100 text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Welcome to the Infin8 UX transformation story—a journey to simplify deal management
          and empower every role in the mortgage lifecycle.
        </motion.p>

        {/* Animated graphics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mb-12 flex justify-center gap-8 flex-wrap"
        >
          {["Automation", "Transparency", "Efficiency"].map((text, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
              className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20"
            >
              <span className="text-white">{text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <Button
            onClick={onStart}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group"
          >
            Start the Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: 999999 }}
            className="text-blue-300 text-sm"
          >
            ↓ Click to begin
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
