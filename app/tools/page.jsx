import Link from "next/link";
import {
  Sparkles,
  Pill,
  Baby,
  ArrowRight,
  Activity,
  Heart,
  Shield,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function ToolsPage() {
  const tools = [
    {
      id: "ai-assistant",
      title: "AI Health Assistant",
      description: "Get instant answers to your health questions, understand symptoms, and know when to see a doctor.",
      icon: Sparkles,
      color: "emerald",
      features: [
        "24/7 availability",
        "Symptom guidance",
        "Evidence-based answers",
        "Emergency detection",
      ],
    },
    {
      id: "medication-tracker",
      title: "Medication & Health Tracker",
      description: "Never miss a dose. Track your medications, blood pressure, blood sugar, weight, and water intake.",
      icon: Pill,
      color: "teal",
      features: [
        "Medication reminders",
        "BP & sugar logging",
        "Weight tracking",
        "Water intake counter",
      ],
    },
    {
      id: "pregnancy-companion",
      title: "Pregnancy Companion",
      description: "Week-by-week guidance, nutrition tips, kick counter, and contraction timer for expectant mothers.",
      icon: Baby,
      color: "pink",
      features: [
        "Weekly development info",
        "Nutrition guides",
        "Kick counter",
        "Contraction timer",
      ],
    },
  ];

  const colorMap = {
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200", btn: "bg-emerald-600 hover:bg-emerald-700" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200", btn: "bg-teal-600 hover:bg-teal-700" },
    pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200", btn: "bg-pink-600 hover:bg-pink-700" },
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              <Activity className="w-4 h-4" />
              Free Health Tools
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Take Control of Your{" "}
              <span className="text-emerald-600">Health Journey</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful, easy-to-use tools designed to help you manage your health,
              track your progress, and get reliable guidance — all from your phone.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-8">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const colors = colorMap[tool.color];
              return (
                <div
                  key={tool.id}
                  className={`bg-white border-2 ${colors.border} rounded-3xl p-6 md:p-10 hover:shadow-xl transition-all`}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        {tool.title}
                      </h2>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                        {tool.description}
                      </p>
                      <Link
                        href={`/tools/${tool.id}`}
                        className={`inline-flex items-center gap-2 px-5 py-3 ${colors.btn} text-white rounded-lg font-medium transition text-sm md:text-base`}
                      >
                        Open Tool
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {tool.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-sm text-gray-700"
                          >
                            <CheckCircle2 className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Use Our Tools */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Use CareWellConnect Tools?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Shield}
              title="Nurse-Verified"
              description="All tools are designed and reviewed by a qualified registered nurse."
            />
            <FeatureCard
              icon={Clock}
              title="Available 24/7"
              description="Access your health tools anytime, anywhere — even offline."
            />
            <FeatureCard
              icon={Heart}
              title="Made for Nigerians"
              description="Tailored to our local context, culture, and healthcare realities."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-emerald-50">
            Choose a tool above and start taking control of your health today.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/ai-assistant"
              className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition"
            >
              Try AI Assistant
            </Link>
            <Link
              href="/premium"
              className="px-6 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition border border-white/20"
            >
              Unlock Premium Features
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
      <div className="w-14 h-14 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-emerald-600" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
