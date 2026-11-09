import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, Users, Clock, ThumbsUp } from "lucide-react";

export function ImpactMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);

  const metrics = [
    {
      icon: TrendingUp,
      value: "45%",
      label: "Increase in Productivity",
      detail: "Users complete tasks significantly faster with streamlined workflows",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      icon: Users,
      value: "89%",
      label: "User Satisfaction",
      detail: "Post-launch survey shows high satisfaction across all user roles",
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      icon: Clock,
      value: "3.5hrs",
      label: "Time Saved Daily",
      detail: "Average time saved per user through automation and better UX",
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      icon: ThumbsUp,
      value: "92%",
      label: "Adoption Rate",
      detail: "Rapid adoption across all user roles within first month",
      color: "text-orange-500",
      bgColor: "bg-orange-100",
    },
  ];

  const performanceData = [
    { name: "Week 1", before: 45, after: 68 },
    { name: "Week 2", before: 48, after: 75 },
    { name: "Week 3", before: 47, after: 82 },
    { name: "Week 4", before: 50, after: 88 },
  ];

  const satisfactionData = [
    { name: "Super Admin", score: 92 },
    { name: "IMA", score: 87 },
    { name: "OMA", score: 90 },
    { name: "Underwriter", score: 89 },
    { name: "Compliance", score: 85 },
    { name: "Finance", score: 91 },
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
              "The redesign improved efficiency, transparency, and user satisfaction across all roles."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-900 mb-4">Impact & Outcomes</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            The redesign delivered measurable improvements across all key metrics, validating our user-centered approach.
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredMetric(index)}
              onMouseLeave={() => setHoveredMetric(null)}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${metric.bgColor} rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2`} />
              
              <div className="relative">
                <div className={`w-12 h-12 ${metric.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  {(() => {
                    const Icon = metric.icon;
                    return <Icon className={`w-6 h-6 ${metric.color}`} />;
                  })()}
                </div>
                <div className={`${metric.color} mb-2`}>{metric.value}</div>
                <p className="text-slate-700">{metric.label}</p>

                {/* Hover detail */}
                {hoveredMetric === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 pt-4 border-t border-slate-200"
                  >
                    <p className="text-slate-600 text-sm">{metric.detail}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-slate-800 mb-6">Task Completion Rate</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="before"
                  stroke="#94a3b8"
                  strokeWidth={2}
                  name="Before Redesign"
                  dot={{ fill: "#94a3b8", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="after"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  name="After Redesign"
                  dot={{ fill: "#3b82f6", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-slate-500 text-sm mt-4 text-center">
              Significant improvement in task completion rates post-redesign
            </p>
          </motion.div>

          {/* Satisfaction Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-slate-800 mb-6">User Satisfaction by Role</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={satisfactionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#64748b" domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
                <Bar
                  dataKey="score"
                  fill="#10b981"
                  radius={[8, 8, 0, 0]}
                  name="Satisfaction Score"
                />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-slate-500 text-sm mt-4 text-center">
              High satisfaction scores across all user personas
            </p>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white"
        >
          <h3 className="text-white mb-3">Real Results, Real Impact</h3>
          <p className="text-blue-100 max-w-2xl mx-auto">
            These metrics represent more than numbers—they reflect improved daily experiences for hundreds of users
            and millions of dollars in mortgage deals processed more efficiently.
          </p>
        </motion.div>
      </div>
    </section>
  );
}