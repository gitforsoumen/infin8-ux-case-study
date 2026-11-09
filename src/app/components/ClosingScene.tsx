import { motion } from "motion/react";
import { ArrowRight, Mail, ExternalLink, Infinity } from "lucide-react";
import { Button } from "./ui/button";

export function ClosingScene() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: 999999,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-60 h-60 bg-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: 999999,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1,
          }}
          className="mb-8 inline-block"
        >
          <div className="w-28 h-28 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <svg
                className="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-white mb-6">
            Thank You for Exploring
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-blue-100 text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          The Infin8 UX transformation demonstrates how user-centered design, automation, and
          role-specific solutions can revolutionize complex workflows—improving efficiency,
          reducing errors, and enhancing user satisfaction across the entire deal lifecycle.
        </motion.p>

        {/* Key achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { value: "45%", label: "Time Saved", color: "from-green-400 to-emerald-500" },
            { value: "60%", label: "Fewer Errors", color: "from-blue-400 to-cyan-500" },
            { value: "85%", label: "User Satisfaction", color: "from-purple-400 to-pink-500" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className={`text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-6 text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group"
          >
            Explore Prototype
            <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-lg border-white/30 text-white hover:bg-white/20 px-10 py-6 text-lg group"
          >
            Contact Us
            <Mail className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </motion.div>

        {/* Brand mark */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-3 text-blue-300"
        >
          <Infinity className="w-6 h-6" />
          <span className="text-sm">Infin8 Platform • UX Case Study 2024</span>
        </motion.div>
      </div>
    </section>
  );
}
