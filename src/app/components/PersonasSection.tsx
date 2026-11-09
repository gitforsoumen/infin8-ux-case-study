import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { PersonaCard } from "./PersonaCard";
import { Shield, Users, Building2, FileCheck, Scale, DollarSign } from "lucide-react";

export function PersonasSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const personas = [
    {
      title: "Super Admin",
      icon: Shield,
      color: "bg-purple-500",
      responsibilities: [
        "Oversee entire platform operations",
        "Manage user roles and permissions",
        "Monitor system health and analytics",
        "Configure platform settings",
      ],
      needs: [
        "Centralized dashboard with key metrics",
        "Quick access to user management",
        "Real-time system status monitoring",
        "Comprehensive reporting tools",
      ],
    },
    {
      title: "IMA (Independent Mortgage Advisor)",
      icon: Users,
      color: "bg-blue-500",
      responsibilities: [
        "Submit new mortgage deals",
        "Track deal progress and status",
        "Communicate with underwriters",
        "Manage client relationships",
      ],
      needs: [
        "Simple, streamlined deal submission",
        "Clear visibility of deal status",
        "Easy document upload system",
        "Direct communication channels",
      ],
    },
    {
      title: "OMA (Office Manager Admin)",
      icon: Building2,
      color: "bg-cyan-500",
      responsibilities: [
        "Oversee team performance",
        "Review and approve submissions",
        "Manage office resources",
        "Track team productivity",
      ],
      needs: [
        "Team dashboard with performance metrics",
        "Bulk approval workflows",
        "Resource allocation tools",
        "Team activity tracking",
      ],
    },
    {
      title: "Underwriter",
      icon: FileCheck,
      color: "bg-green-500",
      responsibilities: [
        "Review and assess mortgage applications",
        "Request additional documentation",
        "Make approval/decline decisions",
        "Ensure compliance with guidelines",
      ],
      needs: [
        "Focused deal review interface",
        "Quick access to applicant information",
        "Efficient document review tools",
        "Decision workflow automation",
      ],
    },
    {
      title: "Compliance Officer",
      icon: Scale,
      color: "bg-orange-500",
      responsibilities: [
        "Verify regulatory compliance",
        "Audit deal documentation",
        "Flag compliance issues",
        "Generate compliance reports",
      ],
      needs: [
        "Compliance checklist automation",
        "Risk flagging system",
        "Audit trail visibility",
        "Regulatory reporting tools",
      ],
    },
    {
      title: "Finance Manager",
      icon: DollarSign,
      color: "bg-emerald-500",
      responsibilities: [
        "Process commission payments",
        "Manage financial records",
        "Generate financial reports",
        "Track revenue and expenses",
      ],
      needs: [
        "Automated commission calculations",
        "Financial dashboard with KPIs",
        "Payment processing workflow",
        "Export and reporting capabilities",
      ],
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
              "We interviewed key roles and mapped their journeys to uncover pain points."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-900 mb-4">Meet the Key Personas</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            Understanding our users was key to creating a role-based experience. We identified six primary personas,
            each with unique responsibilities and UX needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <PersonaCard key={index} {...persona} delay={index * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500">💡 Click on each card to explore their UX needs</p>
        </motion.div>
      </div>
    </section>
  );
}