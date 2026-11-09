import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Target, TrendingUp, Zap, Eye, AlertCircle } from "lucide-react";

export function ProjectOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const goals = [
    { icon: Target, text: "Enhance usability with intuitive, role-based interfaces" },
    { icon: TrendingUp, text: "Reduce manual work through intelligent automation" },
    { icon: Zap, text: "Introduce automation for repetitive tasks and workflows" },
    { icon: Eye, text: "Improve transparency across the entire deal lifecycle" },
  ];

  const workflowStages = [
    {
      name: "Deal Submission",
      painPoint: "Manual data entry and duplicate information requests",
      roles: "IMA, OMA"
    },
    {
      name: "Processing & Review",
      painPoint: "Lack of real-time updates and unclear task ownership",
      roles: "Underwriter, IMA"
    },
    {
      name: "Compliance Check",
      painPoint: "Fragmented compliance tracking and missing documentation",
      roles: "Compliance Officer"
    },
    {
      name: "Final Approval",
      painPoint: "Delayed approvals due to poor visibility into deal status",
      roles: "Finance Team, Super Admin"
    }
  ];

  return (
    <section id="project-overview" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Voiceover style narration */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl px-8 py-4 mb-8">
            <p className="text-blue-900 italic text-lg">
              "As the platform scaled, workflows became fragmented, manual, and error-prone."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-900 mb-4">Project Overview</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-slate-800 mb-4">The Challenge</h3>
            <p className="text-slate-600 mb-6">
              The Infin8 mortgage platform served multiple user roles but lacked a cohesive,
              role-specific experience. Users struggled with information overload, manual
              processes, and unclear deal status tracking.
            </p>
            <p className="text-slate-600 mb-8">
              Our mission was to reimagine the platform from the ground up, focusing on user
              needs, workflow optimization, and seamless collaboration across all stakeholders.
            </p>

            {/* Key Goals */}
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <goal.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-slate-700 pt-2">{goal.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Interactive Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg">
              <p className="text-center text-slate-500 text-sm mb-6">
                💡 Hover over each stage to reveal pain points
              </p>
              
              {/* Workflow visualization */}
              <div className="space-y-6">
                {workflowStages.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="relative"
                    onMouseEnter={() => setHoveredStage(index)}
                    onMouseLeave={() => setHoveredStage(null)}
                  >
                    <motion.div
                      className={`bg-white rounded-xl p-4 shadow-md border-l-4 transition-all cursor-pointer ${
                        hoveredStage === index
                          ? "border-red-500 shadow-xl scale-105"
                          : "border-blue-500 hover:shadow-lg"
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                          hoveredStage === index ? "bg-red-500" : "bg-blue-500"
                        }`}>
                          {hoveredStage === index ? (
                            <AlertCircle className="w-4 h-4" />
                          ) : (
                            index + 1
                          )}
                        </div>
                        <span className="text-slate-700">{stage.name}</span>
                      </div>
                      
                      {/* Pain point reveal */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: hoveredStage === index ? "auto" : 0,
                          opacity: hoveredStage === index ? 1 : 0,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-slate-200 mt-2">
                          <p className="text-sm text-red-600 mb-2">
                            ⚠️ {stage.painPoint}
                          </p>
                          <p className="text-xs text-slate-500">
                            Affects: {stage.roles}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                    {index < 3 && (
                      <motion.div
                        className={`absolute left-8 top-full w-0.5 h-6 transition-colors ${
                          hoveredStage === index ? "bg-red-300" : "bg-blue-300"
                        }`}
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        style={{ transformOrigin: "top" }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}