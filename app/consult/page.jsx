import Link from "next/link";
import {
  Stethoscope,
  Video,
  MessageCircle,
  Home as HomeIcon,
  Clock,
  Shield,
  CheckCircle2,
  AlertCircle,
  Phone,
  Calendar,
  Users,
  Heart,
  Baby,
  Activity,
  ArrowRight,
  Star,
  HelpCircle,
} from "lucide-react";

export default function ConsultPage() {
  const services = [
    {
      id: "chat",
      title: "Quick Chat Consult",
      icon: MessageCircle,
      price: "₦2,500",
      duration: "15 min text reply",
      delivery: "WhatsApp / In-app chat",
      responseTime: "Within 24 hours",
      description: "Perfect for quick questions, medication clarifications, or minor health concerns. Get a written response from Nurse Eunice.",
      features: [
        "Text-based consultation",
        "Reply within 24 hours",
        "Follow-up question included",
        "Written summary provided",
      ],
      color: "emerald",
      popular: false,
    },
    {
      id: "video",
      title: "Standard Video Consult",
      icon: Video,
      price: "₦5,000",
      duration: "30 minutes",
      delivery: "Google Meet / Zoom",
      responseTime: "Same-day booking available",
      description: "A comprehensive video session to discuss your health concerns, review symptoms, and receive personalized guidance.",
      features: [
        "30-minute video session",
        "Screen sharing for reports",
        "Personalized care plan",
        "Email summary after session",
        "Prescription guidance",
      ],
      color: "teal",
      popular: true,
    },
    {
      id: "extended",
      title: "Extended Video Consult",
      icon: Video,
      price: "₦9,000",
      duration: "60 minutes",
      delivery: "Google Meet / Zoom",
      responseTime: "Priority booking",
      description: "In-depth consultation for complex health concerns, multiple conditions, or detailed care planning.",
      features: [
        "60-minute video session",
        "Comprehensive health review",
        "Detailed care plan",
        "Priority scheduling",
        "7-day follow-up chat",
      ],
      color: "cyan",
      popular: false,
    },
    {
      id: "followup",
      title: "Follow-up Consult",
      icon: Clock,
      price: "₦2,000",
      duration: "15 minutes",
      delivery: "Video or chat",
      responseTime: "Within 48 hours",
      description: "Quick check-in after a previous consultation to review progress and adjust your care plan.",
      features: [
        "15-minute session",
        "Progress review",
        "Plan adjustments",
        "Available to previous clients",
      ],
      color: "blue",
      popular: false,
    },
    {
      id: "second-opinion",
      title: "Second Opinion Review",
      icon: Stethoscope,
      price: "₦7,500",
      duration: "30 minutes + report review",
      delivery: "Video consultation",
      responseTime: "Within 48 hours",
      description: "Get a professional nursing perspective on your test results, diagnosis, or treatment plan.",
      features: [
        "Lab report review",
        "Professional interpretation",
        "Clear explanations",
        "Recommendations provided",
      ],
      color: "purple",
      popular: false,
    },
    {
      id: "family",
      title: "Family Health Review",
      icon: Users,
      price: "12,000",
      duration: "45 minutes",
      delivery: "Video consultation",
      responseTime: "Scheduled booking",
      description: "Comprehensive review for up to 4 family members. Perfect for families wanting a complete health assessment.",
      features: [
        "Up to 4 family members",
        "45-minute session",
        "Family health overview",
        "Individualized guidance",
        "Group discount value",
      ],
      color: "indigo",
      popular: false,
    },
    {
      id: "pregnancy",
      title: "Pregnancy Consult",
      icon: Baby,
      price: "₦6,500",
      duration: "45 minutes",
      delivery: "Video consultation",
      responseTime: "Priority booking",
      description: "Specialized consultation for expectant mothers. Discuss pregnancy concerns, nutrition, and birth preparation.",
      features: [
        "Pregnancy-specific guidance",
        "45-minute session",
        "Nutrition planning",
        "Birth prep advice",
        "Newborn care tips",
      ],
      color: "pink",
      popular: false,
    },
    {
      id: "chronic",
      title: "Chronic Care Review",
      icon: Activity,
      price: "₦6,000",
      duration: "30 minutes",
      delivery: "Video consultation",
      responseTime: "Scheduled booking",
      description: "Ongoing management support for hypertension, diabetes, asthma, and other chronic conditions.",
      features: [
        "Condition-specific review",
        "Medication adherence support",
        "Lifestyle guidance",
        "Progress tracking",
      ],
      color: "rose",
      popular: false,
    },
    {
      id: "home",
      title: "Home Nursing Visit",
      icon: HomeIcon,
      price: "From ₦25,000",
      duration: "1-2 hours",
      delivery: "In-person (Lagos only)",
      responseTime: "Scheduled booking",
      description: "Professional nursing care at your home. Available in Lagos and selected areas. Price varies by service.",
      features: [
        "In-person nursing care",
        "Available in Lagos",
        "Wound care, injections, monitoring",
        "Elderly care support",
        "Post-surgery care",
      ],
      color: "orange",
      popular: false,
    },
  ];

  const colorMap = {
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200", btn: "bg-emerald-600 hover:bg-emerald-700" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200", btn: "bg-teal-600 hover:bg-teal-700" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200", btn: "bg-cyan-600 hover:bg-cyan-700" },
    blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", btn: "bg-blue-600 hover:bg-blue-700" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200", btn: "bg-purple-600 hover:bg-purple-700" },
    indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200", btn: "bg-indigo-600 hover:bg-indigo-700" },
    pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200", btn: "bg-pink-600 hover:bg-pink-700" },
    rose: { bg: "bg-rose-100", text: "text-rose-600", border: "border-rose-200", btn: "bg-rose-600 hover:bg-rose-700" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200", btn: "bg-orange-600 hover:bg-orange-700" },
  };

  const faqs = [
    {
      q: "How do I book a consultation?",
      a: "Click the 'Book Now' button on any service, choose your preferred date and time, and pay securely via Paystack. You'll receive a confirmation email with your consultation link.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major Nigerian payment methods including debit cards, bank transfers, and USSD through our secure Paystack payment gateway.",
    },
    {
      q: "Can I get a refund if I need to cancel?",
      a: "Yes. Cancellations made 24 hours before your appointment receive a full refund. Cancellations within 24 hours receive a credit for future use.",
    },
    {
      q: "Are consultations confidential?",
      a: "Absolutely. All consultations are strictly confidential. Your health information is protected and never shared without your consent.",
    },
    {
      q: "Is this a replacement for my doctor?",
      a: "No. Our nursing consultations provide education, guidance, and support. They do not replace medical diagnosis or treatment from a licensed physician. For emergencies, call 112.",
    },
    {
      q: "Do Premium members get discounts?",
      a: "Yes! Premium members receive 15% off all consultation fees, priority booking, and access to exclusive services.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              <Stethoscope className="w-4 h-4" />
              Professional Nursing Consultations
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Book a Consultation with{" "}
              <span className="text-emerald-600">Nurse Eunice</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Get personalized health guidance from a qualified Nigerian nurse.
              Choose from video, chat, or in-person consultations.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition text-sm md:text-base"
              >
                View Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/2349167187407"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-gray-50 text-emerald-700 border border-emerald-200 rounded-lg font-medium transition text-sm md:text-base"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <TrustCard icon={Shield} title="Confidential" subtitle="100% private" />
            <TrustCard icon={Clock} title="Fast Booking" subtitle="Same-day available" />
            <TrustCard icon={Star} title="5-Star Rated" subtitle="Trusted by 1000+" />
            <TrustCard icon={Phone} title="Support" subtitle="WhatsApp available" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Consultation Services
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Choose the service that fits your needs. All consultations are
              led by a qualified registered nurse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              const colors = colorMap[service.color];
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`relative bg-white border-2 ${colors.border} rounded-2xl p-6 hover:shadow-xl transition-all`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {service.title}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className={`text-2xl font-bold ${colors.text}`}>
                      {service.price}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs text-gray-600 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {service.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-3 h-3" />
                      {service.delivery}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {service.responseTime}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2 className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/2349167187407?text=Hello%20Nurse%20Eunice%2C%20I%20want%20to%20book%20a%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center px-4 py-3 ${colors.btn} text-white rounded-lg font-medium transition text-sm`}
                  >
                    Book Now
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="mt-3 text-gray-600">
              Booking a consultation is simple and secure
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <StepCard
              number="1"
              title="Choose Service"
              description="Select the consultation type that fits your needs from our service menu."
            />
            <StepCard
              number="2"
              title="Book & Pay"
              description="Pick your date and time, then pay securely via Paystack."
            />
            <StepCard
              number="3"
              title="Get Confirmation"
              description="Receive email and WhatsApp confirmation with your consultation link."
            />
            <StepCard
              number="4"
              title="Meet Nurse Eunice"
              description="Join your consultation at the scheduled time and get expert guidance."
            />
          </div>
        </div>
      </section>

      {/* Premium Upgrade */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                Premium Members Save 15%
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Get More With Premium
              </h2>
              <p className="text-emerald-50 mb-4">
                Join Premium to enjoy discounted consultations, priority
                booking, and exclusive wellness features.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  15% off all consultations
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  Priority booking
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  Unlimited AI Health Assistant
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  Monthly wellness check-in (free)
                </li>
              </ul>
              <Link
                href="/premium"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition"
              >
                View Premium Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-sm text-emerald-100 mb-1">Starting from</div>
                <div className="text-4xl font-bold">₦3,500</div>
                <div className="text-sm text-emerald-100 mb-4">per month</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-white/20">
                    <span>Basic Plan</span>
                    <span className="font-semibold">₦3,500/mo</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/20">
                    <span>Family Plan</span>
                    <span className="font-semibold">₦7,500/mo</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Annual Plan</span>
                    <span className="font-semibold">₦35,000/yr</span>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Medical Disclaimer */}
      <section className="py-8 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">
                Important Medical Notice
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Consultations on CareWellConnect are <strong>nursing-led educational and wellness services</strong>. 
                They do not replace a doctor's diagnosis, emergency care, or prescribed medical treatment. 
                Our nurses provide guidance, education, and support — but cannot prescribe medications or 
                provide medical diagnoses. In any emergency, please call <strong>112</strong> or go to the 
                nearest hospital immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Ready to Speak with Nurse Eunice?
          </h2>
          <p className="mt-3 text-gray-600">
            Book your consultation today and take the first step toward better health.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#services"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition"
            >
              Book a Consultation
            </a>
            <a
              href="https://wa.me/2349167187407"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white hover:bg-gray-50 text-emerald-700 border border-emerald-200 rounded-lg font-medium transition"
            >
              Ask a Question First
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function TrustCard({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100">
      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-emerald-600" />
      </div>
      <div>
        <div className="font-semibold text-gray-900 text-sm">{title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 mx-auto bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-3">
        {number}
      </div>
      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
