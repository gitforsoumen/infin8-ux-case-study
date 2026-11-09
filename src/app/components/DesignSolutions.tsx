import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { ChevronLeft, ChevronRight, Lightbulb, Zap, Layout, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

export function DesignSolutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const solutions = [
    {
      icon: Layout,
      title: "Role-Based Dashboards",
      problem: "Users overwhelmed by irrelevant information and cluttered interfaces",
      solution: "Personalized dashboards showing only role-relevant data and actions",
      impact: "67% reduction in time to find critical information",
      color: "bg-blue-500",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      problem: "Hours wasted on repetitive manual tasks and data entry",
      solution: "Intelligent automation for routine processes and smart form pre-filling",
      impact: "45% reduction in manual processing time",
      color: "bg-purple-500",
    },
    {
      icon: MessageSquare,
      title: "Integrated Communication",
      problem: "Siloed communication causing delays and miscommunication",
      solution: "Built-in messaging and activity feeds with context-aware notifications",
      impact: "80% faster response times between teams",
      color: "bg-green-500",
    },
    {
      icon: Lightbulb,
      title: "Visual Status Tracking",
      problem: "No clear visibility into deal progress and next steps",
      solution: "Interactive pipeline views with real-time status updates and milestones",
      impact: "92% of users report improved clarity on deal status",
      color: "bg-orange-500",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % solutions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  return (
    <section className="py-24 bg-white" ref={ref}>
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
              "We introduced automation, role-specific views, and streamlined workflows."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-900 mb-4">Design Solutions</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            We designed targeted solutions that directly addressed user pain points while improving overall
            platform efficiency.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden"
          >
            {/* Current Solution */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${solutions[currentSlide].color} rounded-2xl flex items-center justify-center`}>
                  {(() => {
                    const Icon = solutions[currentSlide].icon;
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-slate-800">{solutions[currentSlide].title}</h3>
                  <p className="text-slate-500">Solution {currentSlide + 1} of {solutions.length}</p>
                </div>
              </div>

              {/* Before / After Comparison */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Before */}
                <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="text-red-700">Before</span>
                  </div>
                  <p className="text-slate-700">{solutions[currentSlide].problem}</p>
                  
                  {/* Placeholder visualization */}
                  <div className="mt-4 bg-red-50 rounded-lg p-6 border border-red-200">
                    <div className="space-y-2">
                      <div className="h-4 bg-red-200 rounded w-full opacity-60" />
                      <div className="h-4 bg-red-200 rounded w-5/6 opacity-40" />
                      <div className="h-4 bg-red-200 rounded w-4/6 opacity-30" />
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-green-700">After</span>
                  </div>
                  <p className="text-slate-700">{solutions[currentSlide].solution}</p>
                  
                  {/* Placeholder visualization */}
                  <div className="mt-4 bg-green-50 rounded-lg p-6 border border-green-200">
                    <div className="space-y-2">
                      <div className="h-4 bg-green-400 rounded w-full" />
                      <div className="h-4 bg-green-300 rounded w-3/4" />
                      <div className="h-4 bg-green-200 rounded w-2/4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact */}
              <div className="bg-blue-500 rounded-xl p-6 text-white">
                <p className="text-blue-100 mb-2">Measured Impact</p>
                <p className="text-xl">{solutions[currentSlide].impact}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              className="rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? "bg-blue-500 w-8" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              className="rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}