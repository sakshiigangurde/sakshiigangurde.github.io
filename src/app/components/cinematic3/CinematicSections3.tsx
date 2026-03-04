import { motion } from "motion/react";
import { 
  Building2, Globe, Lock, AlertTriangle, X, 
  Search, Target, Users, CreditCard, Wrench, Package, 
  Sparkles, Users2, Activity, Check, CheckCircle, TrendingUp, Zap,
  Lightbulb, Sliders, BarChart3, LayoutDashboard, ArrowDown
} from "lucide-react";


export function PlatformContext() {
  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-blue-950/10 to-[#121212]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-blue-400/70">The Platform</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
            JioBusiness Platform
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-gray-400 leading-relaxed mb-24 max-w-4xl"
        >
          A comprehensive platform offering Jio services to businesses of all scales—from small enterprises to large corporations.
        </motion.p>

        {/* Two parts of the platform */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pre-login */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-10 h-full hover:border-blue-400/30 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">Pre-login</h3>
              <p className="text-xl text-gray-500 mb-6">Website</p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Helps businesses explore Jio services, understand offerings, and make informed decisions before signing up.
              </p>
            </div>
          </motion.div>

          {/* Post-login */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="relative bg-gradient-to-br from-indigo-950/30 to-blue-950/30 border border-indigo-500/30 rounded-3xl p-10 h-full hover:border-indigo-400/50 transition-all duration-500">
              {/* Highlight badge */}
              <div className="absolute -top-4 -right-4 px-6 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full text-sm font-semibold text-white shadow-lg">
                Our Focus
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-blue-500/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Lock className="w-8 h-8 text-indigo-400" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">Post-login</h3>
              <p className="text-xl text-indigo-400 mb-6">Selfcare Portal</p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Enables businesses to manage services, pay bills, track orders, and perform critical business operations.
              </p>

              {/* Key features */}
              <div className="space-y-2 pt-6 border-t border-white/10">
                {["Manage services", "Pay bills", "Track orders"].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <p className="text-gray-400">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Focus statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-indigo-950/40 to-blue-950/40 border border-indigo-500/30 rounded-2xl backdrop-blur-xl">
            <Building2 className="w-8 h-8 text-indigo-400" />
            <p className="text-xl text-gray-300">
              <span className="text-white font-semibold">This case study focuses on:</span> Redesigning the Selfcare Dashboard—the most critical entry point after login.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



export function ProblemStatement3() {
  const painPoints = [
    {
      number: "01",
      title: "Lack of Personalization",
      description: "Users could not easily achieve their intended tasks—the dashboard felt generic and unhelpful.",
      impact: "High"
    },
    {
      number: "02",
      title: "Poor Visual Hierarchy",
      description: "Information was difficult to scan quickly, leading to confusion and slower decision-making.",
      impact: "High"
    },
    {
      number: "03",
      title: "Bills Widget Failure",
      description: "Showed no pending bill information, defeating its primary purpose.",
      impact: "Critical"
    },
    {
      number: "04",
      title: "Services Widget Lost Value",
      description: "Only displayed status (mostly 'Active'), which provided no actionable insight over time.",
      impact: "Medium"
    },
    {
      number: "05",
      title: "Order Summary Wasn't Useful",
      description: "Did not provide glanceable or useful recent activity details.",
      impact: "Medium"
    }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-red-950/10 to-[#121212]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-red-400/70">The Problem</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight"
        >
          <span className="text-gray-400">The dashboard was</span>
          <br />
          <span className="bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">
            underutilized
          </span>
          <br />
          <span className="text-gray-400">and failed to guide users.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-gray-400 leading-relaxed mb-24 max-w-4xl"
        >
          Users were spending unnecessary time navigating deeper into the portal to complete simple actions.
        </motion.p>

        {/* Pain points */}
        <div className="space-y-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-red-950/30 to-orange-950/30 border border-red-500/20 rounded-3xl p-8 hover:border-red-500/40 transition-all duration-500">
                <div className="flex items-start gap-6">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-red-400">{point.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{point.title}</h3>
                      <div className={`
                        px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider
                        ${point.impact === 'Critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : ''}
                        ${point.impact === 'High' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : ''}
                        ${point.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : ''}
                      `}>
                        {point.impact} Impact
                      </div>
                    </div>
                    <p className="text-lg text-gray-400 leading-relaxed">{point.description}</p>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-start gap-4 px-8 py-6 bg-gradient-to-br from-red-950/40 to-orange-950/40 border border-red-500/30 rounded-2xl max-w-3xl">
            <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
            <p className="text-xl text-gray-300 leading-relaxed text-left">
              <span className="text-white font-semibold">The result:</span> Business users couldn't accomplish their goals efficiently, leading to frustration and decreased platform utilization.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



export function ResearchInsights() {
  const keyActions = [
    {
      icon: CreditCard,
      title: "View and Pay Bills",
      description: "Quickly see pending bills and complete payments without navigation",
      priority: "High"
    },
    {
      icon: Wrench,
      title: "Monitor Service Health",
      description: "Check service status, usage insights, and manage subscriptions",
      priority: "High"
    },
    {
      icon: Package,
      title: "Track Orders & Requests",
      description: "View recent activity and order status at a glance",
      priority: "Medium"
    }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-indigo-950/10 to-[#121212]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-indigo-400/70">Research</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight"
        >
          <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
            Understanding User Needs
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-gray-400 leading-relaxed mb-24 max-w-4xl"
        >
          We evaluated how business users interacted with the Selfcare portal to identify the most frequent and critical tasks.
        </motion.p>

        {/* My role */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-indigo-950/30 to-blue-950/30 border border-indigo-500/20 rounded-3xl p-12 mb-24"
        >
          <h3 className="text-3xl font-bold text-white mb-8">My Role</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Heuristic Evaluation",
                description: "Analyzed existing dashboard"
              },
              {
                icon: Target,
                title: "Requirements Synthesis",
                description: "Aligned business & user needs"
              },
              {
                icon: Users,
                title: "Design & Collaboration",
                description: "Iterated with product & dev teams"
              }
            ].map((role, index) => (
              <div key={index}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <role.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{role.title}</h4>
                <p className="text-gray-400 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key actions title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-12"
        >
          Key Actions Identified
        </motion.h3>

        {/* Key actions cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {keyActions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-8 h-full hover:border-indigo-400/30 transition-all duration-500 hover:scale-105">
                {/* Priority badge */}
                <div className={`absolute -top-3 -right-3 px-4 py-1.5 rounded-full text-xs font-semibold ${
                  action.priority === 'High' 
                    ? 'bg-gradient-to-r from-indigo-500 to-blue-500' 
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600'
                } text-white shadow-lg`}>
                  {action.priority} Priority
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center">
                    <action.icon className="w-7 h-7 text-indigo-400" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold text-white mb-4">{action.title}</h4>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">{action.description}</p>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-blue-500/0 group-hover:from-indigo-500/10 group-hover:to-blue-500/10 blur-xl rounded-3xl transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Goal statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-3xl md:text-4xl text-gray-300 italic leading-relaxed max-w-4xl mx-auto">
            "The redesign aimed to bring these tasks{" "}
            <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent font-semibold not-italic">
              front and center
            </span>
            ."
          </p>
        </motion.div>
      </div>
    </section>
  );
}


export function DesignSolutions() {
  const solutions = [
    {
      icon: Sparkles,
      title: "Personalization",
      description: "Made dashboard widgets role and task-oriented",
      details: [
        "Prioritized information based on user's service portfolio",
        "Adapted content to logged-in user's context",
        "Dynamic widget ordering by relevance"
      ],
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: CreditCard,
      title: "Bills Widget Redesign",
      description: "Displayed pending bills upfront with quick actions",
      details: [
        "Prominent pending bill display",
        "One-click payment CTA",
        "Upcoming dues summary"
      ],
      color: "from-blue-400 to-indigo-400"
    },
    {
      icon: Activity,
      title: "Services Widget Evolution",
      description: "Reframed to show service health and usage insights",
      details: [
        "Service health indicators instead of just status",
        "Usage insights and trends",
        "Direct action capabilities from widget"
      ],
      color: "from-cyan-400 to-blue-400"
    },
    {
      icon: Package,
      title: "Order Summary Upgrade",
      description: "Redesigned to surface latest activity at a glance",
      details: [
        "Recent activity timeline",
        "Order status at a glance",
        "Reduced dependency on sub-pages"
      ],
      color: "from-indigo-400 to-purple-400"
    }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-blue-950/10 to-[#121212]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-blue-400/70">The Solution</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            Restructuring the Dashboard
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-gray-400 leading-relaxed mb-24 max-w-4xl"
        >
          Based on insights, we redesigned each widget to be more actionable, personalized, and valuable to business users.
        </motion.p>

        {/* Solutions grid */}
        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-10 hover:border-blue-400/30 transition-all duration-500">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Icon and title */}
                  <div className="flex-shrink-0 lg:w-80">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.color} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <solution.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-lg text-gray-400">{solution.description}</p>
                  </div>

                  {/* Details */}
                  <div className="flex-1 lg:border-l lg:border-white/10 lg:pl-8">
                    <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Key Improvements</h4>
                    <div className="space-y-4">
                      {solution.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${solution.color} bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-1`}>
                            <div className="w-2 h-2 rounded-full bg-white" />
                          </div>
                          <p className="text-gray-300 leading-relaxed text-lg">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 blur-2xl rounded-3xl transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Design principles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Design Principles</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Clear Hierarchy", value: "Easy to scan" },
              { label: "Quick Actions", value: "Reduce clicks" },
              { label: "Scalable", value: "Future-ready" }
            ].map((principle, index) => (
              <div key={index} className="text-center">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">{principle.label}</p>
                <p className="text-xl text-white font-semibold">{principle.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


export function BeforeAfter3() {
  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-purple-950/10 to-[#121212]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-purple-400/70">Transformation</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-24 leading-tight text-center"
        >
          <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Old vs New Dashboard
          </span>
        </motion.h2>

        {/* Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-red-400 mb-2">Before</h3>
              <p className="text-gray-500">Underutilized Dashboard</p>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-gray-950/30 border border-red-500/20 rounded-3xl p-8">
              {/* Old dashboard mockup */}
              <div className="space-y-4">
                {/* Header */}
                <div className="h-12 bg-gray-700/50 rounded-xl flex items-center px-4 gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gray-600" />
                  <div className="h-3 bg-gray-600 rounded w-32" />
                </div>

                {/* Widgets - poor layout */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 h-24 bg-gray-800/50 rounded-xl p-4">
                    <div className="h-3 bg-gray-700 rounded w-24 mb-3" />
                    <div className="h-2 bg-gray-700 rounded w-16" />
                  </div>
                  <div className="h-32 bg-gray-800/50 rounded-xl p-4">
                    <div className="h-3 bg-gray-700 rounded w-20 mb-3" />
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-700 rounded" />
                      <div className="h-2 bg-gray-700 rounded" />
                    </div>
                  </div>
                  <div className="h-32 bg-gray-800/50 rounded-xl p-4">
                    <div className="h-3 bg-gray-700 rounded w-20 mb-3" />
                    <div className="h-2 bg-gray-700 rounded w-12" />
                  </div>
                </div>
              </div>

              {/* Issues list */}
              <div className="mt-8 space-y-3 pt-6 border-t border-red-500/20">
                {[
                  "No personalization",
                  "Poor hierarchy",
                  "Widgets not actionable"
                ].map((issue, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <p className="text-gray-400 text-sm">{issue}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">After</h3>
              <p className="text-gray-500">Redesigned Dashboard</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-2xl scale-110" />
              <div className="relative bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/30 rounded-3xl p-8">
                {/* New dashboard mockup */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="h-12 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-xl flex items-center px-4 gap-4 border border-blue-500/20">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500" />
                    <div className="h-3 bg-blue-400/40 rounded w-32" />
                  </div>

                  {/* Widgets - improved layout */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Bills widget - prominent */}
                    <div className="col-span-2 h-28 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl p-4 border border-blue-500/30">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="h-3 bg-blue-400/50 rounded w-24 mb-2" />
                          <div className="h-5 bg-blue-400/70 rounded w-32" />
                        </div>
                        <div className="h-8 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg" />
                      </div>
                    </div>

                    {/* Services widget */}
                    <div className="h-36 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl p-4 border border-indigo-500/30">
                      <div className="h-3 bg-indigo-400/50 rounded w-20 mb-3" />
                      <div className="space-y-2">
                        <div className="h-2 bg-indigo-400/40 rounded" />
                        <div className="h-2 bg-indigo-400/30 rounded" />
                        <div className="h-2 bg-indigo-400/20 rounded" />
                      </div>
                    </div>

                    {/* Orders widget */}
                    <div className="h-36 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-4 border border-cyan-500/30">
                      <div className="h-3 bg-cyan-400/50 rounded w-20 mb-3" />
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <div className="h-2 bg-cyan-400/40 rounded flex-1" />
                          <div className="h-2 w-12 bg-cyan-400/60 rounded" />
                        </div>
                        <div className="flex gap-2">
                          <div className="h-2 bg-cyan-400/30 rounded flex-1" />
                          <div className="h-2 w-12 bg-cyan-400/50 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Improvements list */}
                <div className="mt-8 space-y-3 pt-6 border-t border-blue-500/20">
                  {[
                    "Personalized content",
                    "Clear visual hierarchy",
                    "Quick action CTAs",
                    "Glanceable insights"
                  ].map((improvement, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{improvement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


export function Outcome3() {
  const outcomes = [
    {
      icon: Zap,
      title: "Efficient Task Completion",
      description: "Users can complete tasks more quickly with fewer navigation steps"
    },
    {
      icon: CheckCircle,
      title: "Reduced Effort",
      description: "Pending bills, service health, and activity surfaced directly on homepage"
    },
    {
      icon: Users,
      title: "Personalized Experience",
      description: "Dashboard adapts to user's service portfolio and context"
    },
    {
      icon: TrendingUp,
      title: "Improved Confidence",
      description: "Glanceable overview helps users make informed decisions quickly"
    }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-green-950/10 to-[#121212]">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-green-400/70">Impact</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold mb-24 leading-tight text-center"
        >
          <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            Outcome
          </span>
        </motion.h2>

        {/* Outcomes grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-10 h-full hover:border-blue-400/30 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <outcome.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{outcome.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{outcome.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-3xl p-12 md:p-16 mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">The Redesigned Dashboard Now</h3>
          <div className="space-y-6">
            {[
              "Guides users to complete tasks more efficiently",
              "Reduces effort by surfacing key information directly on the homepage",
              "Provides a personalized and glanceable overview",
              "Improves user confidence with clear hierarchy and quick actions"
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white/5 rounded-2xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stakeholder feedback */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-indigo-950/40 to-blue-950/40 border border-indigo-500/30 rounded-3xl p-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-400 mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <p className="text-2xl md:text-3xl text-white font-semibold mb-4">
            Positive Internal Feedback
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            from stakeholders, with rollout planned for phased release
          </p>
        </motion.div>
      </div>
    </section>
  );
}



export function Learnings3() {
  const insights = [
    {
      icon: TrendingUp,
      title: "Utility Over Aesthetics",
      description: "In enterprise dashboards, widgets must serve as decision-making tools first. Beautiful design supports functionality, not the other way around."
    },
    {
      icon: Lightbulb,
      title: "Prioritize Tasks Over Data",
      description: "Users care about what they can do, not just what they can see. Every widget should answer: 'What action can I take right now?'"
    }
  ];

  const futureIdeas = [
    {
      icon: Sliders,
      title: "Customizable Widgets",
      description: "Allow users to choose which widgets to pin and reorder them based on their preferences"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Add usage insights and trends across services with interactive charts and graphs"
    }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-purple-950/10 to-[#121212]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-purple-400/70">Reflection</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-24 leading-tight"
        >
          <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Key Learnings
          </span>
        </motion.h2>

        {/* Insights */}
        <div className="space-y-8 mb-24">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-10 hover:border-purple-400/30 transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <insight.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{insight.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{insight.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

