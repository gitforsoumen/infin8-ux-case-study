import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { FileText, Search, CheckCircle, DollarSign, PartyPopper } from "lucide-react";

export function JourneyMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stages = [
    {
      icon: FileText,
      title: "Submission",
      description: "IMA submits deal with client information",
      color: "bg-blue-500",
      borderColor: "border-blue-500",
    },
    {
      icon: Search,
      title: "Underwriting",
      description: "Underwriter reviews and assesses application",
      color: "bg-purple-500",
      borderColor: "border-purple-500",
    },
    {
      icon: CheckCircle,
      title: "Compliance",
      description: "Compliance officer verifies regulatory requirements",
      color: "bg-orange-500",
      borderColor: "border-orange-500",
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Finance processes payments and commissions",
      color: "bg-green-500",
      borderColor: "border-green-500",
    },
    {
      icon: PartyPopper,
      title: "Completion",
      description: "Deal completed and all parties notified",
      color: "bg-cyan-500",
      borderColor: "border-cyan-500",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Voiceover narration */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl px-8 py-4 mb-8">
            <p className="text-blue-900 italic text-lg">
              "Here's how each role navigates the deal lifecycle—from submission to final approval."
            </p>
          </div>
        </motion.div>

        {/* Horizontal scroll timeline */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex-shrink-0 w-72 relative"
              >
                {/* Timeline dot and line */}
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`w-16 h-16 ${stage.color} rounded-full flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {(() => {
                      const Icon = stage.icon;
                      return <Icon className="w-8 h-8 text-white" />;
                    })()}
                  </motion.div>
                  {index < stages.length - 1 && (
                    <motion.div
                      className="flex-1 h-1 bg-gradient-to-r from-slate-300 to-slate-200 mx-4"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </div>

                {/* Card */}
                <motion.div
                  className={`bg-white rounded-xl p-6 shadow-lg border-t-4 ${stage.borderColor} hover:shadow-xl transition-shadow`}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-slate-800 mb-2">{stage.title}</h3>
                  <p className="text-slate-600">{stage.description}</p>

                  {/* Stage number */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-slate-400">Step {index + 1}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-slate-400">← Scroll to explore the journey →</p>
        </motion.div>
      </div>
    </section>
  );
}