import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AlertCircle, Clock, FileQuestion, Users2 } from "lucide-react";

export function Challenges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      x: "20%",
      y: "25%",
      icon: AlertCircle,
      title: "Information Overload",
      description: "Users overwhelmed by cluttered dashboards with irrelevant data for their role",
    },
    {
      x: "70%",
      y: "30%",
      icon: Clock,
      title: "Manual Processes",
      description: "Repetitive tasks consuming hours of valuable time daily",
    },
    {
      x: "35%",
      y: "60%",
      icon: FileQuestion,
      title: "Unclear Deal Status",
      description: "No visibility into where deals are in the pipeline or next steps",
    },
    {
      x: "75%",
      y: "70%",
      icon: Users2,
      title: "Poor Collaboration",
      description: "Siloed communication leading to delays and misunderstandings",
    },
  ];

  return (
    <section className="py-24 bg-slate-50" ref={ref}>
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
              "Manual processes, poor visibility, and lack of automation slowed everything down."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Dashboard Mockup */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Browser chrome */}
            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded px-3 py-1 mx-4">
                <span className="text-slate-400 text-sm">infin8.platform/dashboard</span>
              </div>
            </div>

            {/* Dashboard image with overlay */}
            <div className="relative aspect-video bg-slate-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1726365222176-425a1a1b9b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYzMTE3OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dashboard mockup"
                className="w-full h-full object-cover opacity-40"
              />

              {/* Overlay grid pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

              {/* Hotspots */}
              {hotspots.map((hotspot, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="absolute"
                  style={{ left: hotspot.x, top: hotspot.y }}
                  onMouseEnter={() => setActiveHotspot(index)}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  {/* Pulsing dot */}
                  <motion.div
                    className="relative"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: 999999,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-6 h-6 bg-red-500 rounded-full shadow-lg cursor-pointer flex items-center justify-center">
                      {(() => {
                        const Icon = hotspot.icon;
                        return <Icon className="w-3 h-3 text-white" />;
                      })()}
                    </div>
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-50" />
                  </motion.div>

                  {/* Popup */}
                  {activeHotspot === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-8 left-1/2 -translate-x-1/2 w-64 bg-white rounded-lg shadow-xl p-4 border border-slate-200 z-10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          {(() => {
                            const Icon = hotspot.icon;
                            return <Icon className="w-5 h-5 text-red-600" />;
                          })()}
                        </div>
                        <div>
                          <h4 className="text-slate-800 mb-1">{hotspot.title}</h4>
                          <p className="text-slate-600 text-sm">{hotspot.description}</p>
                        </div>
                      </div>
                      {/* Arrow */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-slate-500">🔍 Hover over the hotspots to explore each challenge</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}