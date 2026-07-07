import Link from "next/link";
import {
  Crown,
  Star,
  Users,
  CheckCircle2,
  XCircle,
  Sparkles,
  Shield,
  Clock,
  Heart,
  MessageCircle,
  Video,
  Download,
  BookOpen,
  TrendingUp,
  ArrowRight,
  HelpCircle,
  Zap,
  Gift,
} from "lucide-react";

export default function PremiumPage() {
  const plans = [
    {
      id: "basic",
      name: "Basic Premium",
      price: "₦3,500",
      period: "/month",
      description: "Perfect for individuals wanting unlimited AI access and health discounts",
      icon: Star,
      color: "emerald",
      features: [
        { text: "Unlimited AI Health Assistant chats", included: true },
        { text: "15% discount on all consultations", included: true },
        { text: "Priority booking", included: true },
        { text: "Monthly wellness check-in (15 min)", included: true },
        { text: "Personalized wellness plan", included: true },
        { text: "Downloadable health guides", included: true },
        { text: "Family health dashboard", included: false },
        { text: "Exclusive health classes", included: false },
      ],
      cta: "Start Basic",
      popular: false,
    },
    {
      id: "family",
      name: "Family Premium",
      price: "₦7,500",
      period: "/month",
      description: "Best value for families — covers up to 4 members with all benefits",
      icon: Users,
      color: "teal",
      features: [
        { text: "Unlimited AI Health Assistant chats", included: true },
        { text: "15% discount on all consultations", included: true },
        { text: "Priority booking", included: true },
        { text: "Monthly wellness check-in (15 min)", included: true },
        { text: "Personalized wellness plan", included: true },
        { text: "Downloadable health guides", included: true },
        { text: "Family health dashboard (up to 4)", included: true },
        { text: "Exclusive health classes", included: true },
      ],
      cta: "Start Family Plan",
      popular: true,
    },
    {
      id: "annual",
      name: "Annual Premium",
      price: "₦35,000",
      period: "/year",
      description: "Save 2 months — get all Family Premium benefits for a full year",
      icon: Crown,
      color: "cyan",
      features: [
        { text: "Everything in Family Premium", included: true },
        { text: "Save ₦7,000 vs monthly", included: true },
        { text: "Priority support (WhatsApp)", included: true },
        { text: "Early access to new features", included: true },
        { text: "Free consultation (1x per year)", included: true },
        { text: "Exclusive member events", included: true },
        { text: "Annual health report", included: true },
        { text: "Cancel anytime", included: true },
      ],
      cta: "Get Annual Plan",
      popular: false,
    },
  ];

  const colorMap = {
    emerald: {
      bg: "bg-emerald-100",
      text: "text-emerald-600",
      border: "border-emerald-200",
      btn: "bg-emerald-600 hover:bg-emerald-700",
      gradient: "from-emerald-500 to-emerald-600",
    },
    teal: {
      bg: "bg-teal-100",
      text: "text-teal-600",
      border: "border-teal-200",
      btn: "bg-teal-600 hover:bg-teal-700",
      gradient: "from-teal-500 to-teal-600",
    },
    cyan: {
      bg: "bg-cyan-100",
      text: "text-cyan-600",
      border: "border-cyan-200",
      btn: "bg-cyan-600 hover:bg-cyan-700",
      gradient: "from-cyan-500 to-cyan-600",
    },
  };

  const benefits = [
    {
      icon: Sparkles,
      title: "Unlimited AI Chats",
      description: "Ask unlimited health questions to our AI assistant. Free users get 10/day — Premium gets unlimited.",
      color: "emerald",
    },
    {
      icon: Shield,
      title: "Priority Support",
      description: "Skip the queue with priority WhatsApp support and faster response times.",
      color: "teal",
    },
    {
      icon: Video,
      title: "Discounted Consultations",
      description: "Save 15% on all consultation fees. That's ₦750 off every ₦5,000 consultation.",
      color: "cyan",
    },
    {
      icon: Heart,
      title: "Wellness Check-ins",
      description: "Monthly 15-minute check-in calls with Nurse Eunice to review your progress.",
      color: "pink",
    },
    {
      icon: Download,
      title: "Health Guides Library",
      description: "Access exclusive downloadable PDF guides on nutrition, fitness, pregnancy, and more.",
      color: "purple",
    },
    {
      icon: BookOpen,
      title: "Live Health Classes",
      description: "Join exclusive live webinars on topics like diabetes management, pregnancy care, and wellness.",
      color: "indigo",
    },
    {
      icon: Users,
      title: "Family Dashboard",
      description: "Track health metrics for your entire family in one place (Family & Annual plans).",
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: "Personalized Plans",
      description: "Get customized wellness plans based on your health goals and conditions.",
      color: "rose",
    },
  ];

  const comparisonFeatures = [
    { feature: "AI Health Assistant chats", free: "10/day", premium: "Unlimited" },
    { feature: "Consultation discounts", free: "None", premium: "15% off" },
    { feature: "Priority booking", free: "No", premium: "Yes" },
    { feature: "Monthly wellness check-in", free: "No", premium: "Yes" },
    { feature: "Personalized wellness plan", free: "No", premium: "Yes" },
    { feature: "Downloadable health guides", free: "Limited", premium: "Full library" },
    { feature: "Family health dashboard", free: "No", premium: "Yes (up to 4)" },
    { feature: "Exclusive health classes", free: "No", premium: "Yes" },
    { feature: "Priority WhatsApp support", free: "No", premium: "Yes" },
    { feature: "Early access to features", free: "No", premium: "Yes" },
  ];

  const testimonials = [
    {
      name: "Chioma N.",
      location: "Lagos",
      text: "The family plan is amazing! I track my husband's blood pressure, my pregnancy, and my mom's diabetes all in one place. The monthly check-ins with Nurse Eunice are so helpful.",
      rating: 5,
    },
    {
      name: "Tunde A.",
      location: "Abuja",
      text: "I was skeptical at first, but the unlimited AI chats have been a lifesaver. I can ask questions anytime without worrying about limits. Worth every naira.",
      rating: 5,
    },
    {
      name: "Mrs. Bisi K.",
      location: "Ibadan",
      text: "The 15% discount on consultations alone pays for the membership. Plus, the priority booking means I never have to wait. Highly recommend!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "Can I cancel my Premium membership anytime?",
      a: "Yes! You can cancel your subscription at any time. Your Premium benefits will remain active until the end of your current billing period.",
    },
    {
      q: "How does the 15% consultation discount work?",
      a: "As a Premium member, you automatically receive 15% off all consultation fees. The discount is applied at checkout when you book a consultation.",
    },
    {
      q: "Can I upgrade or downgrade my plan?",
      a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes! We offer a 7-day free trial for new members. You can cancel anytime during the trial period without being charged.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major Nigerian payment methods including debit cards, bank transfers, and USSD through our secure Paystack payment gateway.",
    },
    {
      q: "Can I share my Family plan with friends?",
      a: "The Family plan is designed for household family members only (up to 4 people). For non-family members, each person needs their own account.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              <Crown className="w-4 h-4" />
              Premium Membership
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Health,{" "}
              <span className="text-emerald-600">Always Within Reach</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock unlimited access to AI health guidance, priority consultations,
              exclusive wellness features, and save 15% on all services.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition text-sm md:text-base"
              >
                View Plans
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#comparison"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-gray-50 text-emerald-700 border border-emerald-200 rounded-lg font-medium transition text-sm md:text-base"
              >
                Compare Plans
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full text-sm text-yellow-800">
              <Gift className="w-4 h-4" />
              Start with a 7-day free trial
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Choose Your Plan
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Flexible plans designed for individuals and families. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const colors = colorMap[plan.color];
              return (
                <div
                  key={plan.id}
                  id={plan.id}
                  className={`relative bg-white border-2 ${colors.border} rounded-2xl p-6 hover:shadow-xl transition-all ${
                    plan.popular ? "md:-mt-4 md:mb-4" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-3xl font-bold ${colors.text}`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    {plan.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm"
                      >
                        {feature.included ? (
                          <CheckCircle2 className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                        ) : (
                          <XCircle className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/2349167187407?text=Hello%20Nurse%20Eunice%2C%20I%20want%20to%20join%20the%20${encodeURIComponent(plan.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center px-4 py-3 ${colors.btn} text-white rounded-lg font-medium transition text-sm`}
                  >
                    {plan.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Go Premium?
            </h2>
            <p className="mt-3 text-gray-600">
              Everything you need to take your health to the next level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const colorMapLocal = {
                emerald: "bg-emerald-100 text-emerald-600",
                teal: "bg-teal-100 text-teal-600",
                cyan: "bg-cyan-100 text-cyan-600",
                pink: "bg-pink-100 text-pink-600",
                purple: "bg-purple-100 text-purple-600",
                indigo: "bg-indigo-100 text-indigo-600",
                blue: "bg-blue-100 text-blue-600",
                rose: "bg-rose-100 text-rose-600",
              };
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition"
                >
                  <div className={`w-10 h-10 rounded-lg ${colorMapLocal[benefit.color]} flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Free vs Premium
            </h2>
            <p className="mt-3 text-gray-600">
              See what you get with Premium membership
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="p-4 font-semibold text-gray-900 text-sm">
                Feature
              </div>
              <div className="p-4 text-center font-semibold text-gray-600 text-sm border-l border-gray-200">
                Free
              </div>
              <div className="p-4 text-center font-semibold text-emerald-600 text-sm border-l border-gray-200">
                Premium
              </div>
            </div>

            {comparisonFeatures.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-3 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } border-b border-gray-100 last:border-b-0`}
              >
                <div className="p-4 text-sm text-gray-700">{row.feature}</div>
                <div className="p-4 text-center text-sm text-gray-600 border-l border-gray-100">
                  {row.free}
                </div>
                <div className="p-4 text-center text-sm text-emerald-600 font-medium border-l border-gray-100">
                  {row.premium}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              What Premium Members Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition"
              >
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Upgrade Your Health?
          </h2>
          <p className="mt-4 text-emerald-50">
            Join thousands of Nigerians who trust CareWellConnect Premium for
            unlimited health guidance and priority support.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#pricing"
              className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition"
            >
              Start Premium — ₦3,500/mo
            </a>
            <a
              href="https://wa.me/2349167187407?text=Hello%20Nurse%20Eunice%2C%20I%20have%20questions%20about%20Premium"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition border border-white/20"
            >
              Ask Questions
            </a>
          </div>
          <p className="mt-4 text-sm text-emerald-100">
            7-day free trial • Cancel anytime • No hidden fees
          </p>
        </div>
      </section>
    </main>
  );
}
