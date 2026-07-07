import Link from "next/link";
import {
  Heart,
  Sparkles,
  Pill,
  Baby,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Star,
  ShoppingBag,
  CheckCircle2,
  Activity,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                <Shield className="w-4 h-4" />
                Trusted by Nigerian Families
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your Health,{" "}
                <span className="text-emerald-600">Always Within Reach</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed">
                Nigeria's trusted digital health companion. Get reliable health
                education, track your medications, and connect with a qualified
                nurse — all from your phone.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/tools/ai-assistant"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition shadow-sm text-sm md:text-base"
                >
                  Try AI Health Assistant
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/consult"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-gray-50 text-emerald-700 border border-emerald-200 rounded-lg font-medium transition text-sm md:text-base"
                >
                  Book a Consultation
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-5 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span>1000+ users</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl p-6 md:p-8 shadow-2xl">
                <div className="h-full bg-white/10 backdrop-blur rounded-2xl p-5 flex flex-col justify-between text-white">
                  <div>
                    <Heart className="w-10 h-10 md:w-12 md:h-12 fill-white" />
                    <h3 className="text-xl md:text-2xl font-bold mt-3">
                      CareWellConnect
                    </h3>
                    <p className="text-white/90 text-sm md:text-base mt-1">
                      By Nurse Eunice Daramola
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/20 rounded-lg p-3 text-sm">
                       AI Health Assistant
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-sm">
                      💊 Medication Tracker
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-sm">
                       Pregnancy Companion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Tools */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Three Powerful Tools, One Platform
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Everything you need to take control of your health — free to start.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <ToolCard
              icon={Sparkles}
              title="AI Health Assistant"
              description="Ask about symptoms, get evidence-based guidance, and know when to see a doctor."
              href="/tools/ai-assistant"
              color="emerald"
            />
            <ToolCard
              icon={Pill}
              title="Medication Reminder"
              description="Never miss a dose. Track your BP, blood sugar, weight, and water intake."
              href="/tools/medication-tracker"
              color="teal"
            />
            <ToolCard
              icon={Baby}
              title="Pregnancy Companion"
              description="Week-by-week guidance, nutrition tips, kick counter, and contraction timer."
              href="/tools/pregnancy-companion"
              color="cyan"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Why Families Trust CareWellConnect
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Shield}
              title="Nurse-Led & Trusted"
              description="Built by a qualified Nigerian nurse with years of clinical experience."
            />
            <FeatureCard
              icon={Clock}
              title="Available 24/7"
              description="Access health information and tools anytime, anywhere — from your phone."
            />
            <FeatureCard
              icon={Heart}
              title="Made for Nigerians"
              description="Content tailored to our culture, language, and healthcare realities."
            />
          </div>
        </div>
      </section>

      {/* Medical Devices Preview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-3">
                <ShoppingBag className="w-4 h-4" />
                Trusted Medical Devices
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Shop Verified Medical Devices
              </h2>
              <p className="mt-3 text-gray-600 text-sm md:text-base">
                Get genuine, nurse-recommended medical devices delivered to your
                doorstep. Blood pressure monitors, glucose meters, thermometers,
                and more.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "NAFDAC-approved products",
                  "Trusted brands like Omron & Accu-Chek",
                  "Nationwide delivery",
                  "Professional recommendations",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/medical-devices"
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition text-sm md:text-base"
              >
                Browse Medical Devices
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "BP Monitors", icon: Activity, color: "emerald" },
                { name: "Glucose Meters", icon: Pill, color: "teal" },
                { name: "Thermometers", icon: Activity, color: "cyan" },
                { name: "First Aid Kits", icon: Heart, color: "rose" },
              ].map((item) => {
                const Icon = item.icon;
                const colorMap = {
                  emerald: "bg-emerald-100 text-emerald-600",
                  teal: "bg-teal-100 text-teal-600",
                  cyan: "bg-cyan-100 text-cyan-600",
                  rose: "bg-rose-100 text-rose-600",
                };
                return (
                  <div
                    key={item.name}
                    className="bg-gray-50 border border-gray-100 rounded-xl p-4 hover:shadow-md transition"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${colorMap[item.color]} flex items-center justify-center mb-2`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {item.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              What Our Users Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <TestimonialCard
              name="Adaeze O."
              location="Lagos"
              text="The pregnancy companion helped me so much during my first pregnancy. Nurse Eunice's guidance felt personal and reassuring."
            />
            <TestimonialCard
              name="Tunde A."
              location="Abuja"
              text="I never miss my blood pressure medication anymore thanks to the tracker. The AI assistant also helped me understand my symptoms."
            />
            <TestimonialCard
              name="Mrs. Bisi K."
              location="Ibadan"
              text="Booking a consultation was so easy. Nurse Eunice was professional and caring. I recommend CareWellConnect to all my friends."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold">
            Ready to Take Control of Your Health?
          </h2>
          <p className="mt-4 text-emerald-50 text-base md:text-lg">
            Join thousands of Nigerians who trust CareWellConnect for reliable
            health guidance.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/premium"
              className="px-5 py-3 bg-white text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition text-sm md:text-base"
            >
              Start Premium — ₦3,500/mo
            </Link>
            <Link
              href="/consult"
              className="px-5 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition border border-white/20 text-sm md:text-base"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ToolCard({ icon: Icon, title, description, href, color }) {
  const colorMap = {
    emerald: "bg-emerald-100 text-emerald-600",
    teal: "bg-teal-100 text-teal-600",
    cyan: "bg-cyan-100 text-cyan-600",
  };
  return (
    <Link
      href={href}
      className="group p-5 md:p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <div
        className={`w-12 h-12 rounded-xl ${colorMap[color]} flex items-center justify-center mb-4`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 text-sm md:text-base">{description}</p>
      <div className="flex items-center gap-1 text-emerald-600 font-medium text-sm group-hover:gap-2 transition-all">
        Try it free <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="text-center bg-white rounded-2xl p-6 shadow-sm">
      <div className="w-14 h-14 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-emerald-600" />
      </div>
      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, location, text }) {
  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-yellow-500 fill-yellow-500"
          />
        ))}
      </div>
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
        "{text}"
      </p>
      <div>
        <div className="font-semibold text-gray-900 text-sm">{name}</div>
        <div className="text-xs text-gray-500">{location}</div>
      </div>
    </div>
  );
}