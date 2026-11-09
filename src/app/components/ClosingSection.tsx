import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { Button } from "./ui/button";
import { ExternalLink, Mail, Sparkles } from "lucide-react";

export function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          {/* Thank you message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white mb-6"
          >
            Thank You for Exploring Our Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-blue-100 mb-4 max-w-2xl mx-auto"
          >
            The Infin8 Platform redesign demonstrates how thoughtful UX research and design can transform complex
            systems into intuitive, efficient tools that users love.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-blue-100/80 mb-12 max-w-2xl mx-auto"
          >
            This case study showcases our approach to user-centered design: deep research, iterative prototyping,
            and continuous validation with real users.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Explore Prototype
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 rounded-full backdrop-blur-sm"
            >
              Contact Us
              <Mail className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <p className="text-blue-200/60">
              Want to learn more about our UX process or discuss your project?
            </p>
            <p className="text-blue-200/80 mt-2">
              We'd love to hear from you.
            </p>
          </motion.div>

          {/* Project details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Timeline", value: "6 months" },
              { label: "Team Size", value: "8 members" },
              { label: "User Roles", value: "6 personas" },
              { label: "Users Impacted", value: "500+" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-300 mb-1">{item.value}</div>
                <p className="text-blue-200/60 text-sm">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative bottom element */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
      />
    </section>
  );
}
