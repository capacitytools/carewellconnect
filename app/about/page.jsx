import Image from "next/image";
import {
  Heart,
  Award,
  BookOpen,
  Users,
  CheckCircle2,
  Stethoscope,
  GraduationCap,
  Calendar,
  MapPin,
  Quote,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              About CareWellConnect
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Meet Nurse Eunice
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              A qualified Nigerian nurse dedicated to making quality healthcare
              information accessible to every family.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Photo/Avatar */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="aspect-square bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl p-1 shadow-xl">
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                        <Stethoscope className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Nurse Eunice Tolulope
                      </h3>
                      <p className="text-emerald-600 font-medium text-sm mt-1">
                        Daramola, RN
                      </p>
                      <div className="mt-4 flex items-center justify-center gap-1 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        Lagos, Nigeria
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-emerald-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-emerald-600">5+</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-teal-600">
                      1000+
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Patients Helped
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  A Nurse's Mission to Transform Healthcare Access
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I'm Nurse Eunice Tolulope Daramola, a registered nurse with
                  over 5 years of clinical experience in Nigeria. Throughout my
                  career, I've seen firsthand how many Nigerians struggle to
                  access timely, affordable, and trustworthy medical guidance.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hospitals are often crowded, consultation fees can be
                  difficult to afford, and many people only seek care when an
                  illness has become severe. Meanwhile, smartphones and internet
                  access have become common across the country.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This inspired me to create <strong>CareWellConnect</strong> —
                  a digital health platform that brings trusted health
                  education, practical tools, and professional nursing guidance
                  directly to people's phones. My goal is to empower families to
                  take control of their health, make informed decisions, and
                  know when to seek professional care.
                </p>
              </div>

              {/* Credentials */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-emerald-600" />
                  Professional Credentials
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Registered Nurse (RN)
                      </div>
                      <div className="text-sm text-gray-600">
                        Nursing and Midwifery Council of Nigeria
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Bachelor of Nursing Science (BNSc)
                      </div>
                      <div className="text-sm text-gray-600">
                        Accredited Nigerian University
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">
                        5+ Years Clinical Experience
                      </div>
                      <div className="text-sm text-gray-600">
                        Maternal health, community health, patient education
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Certified in Digital Health Education
                      </div>
                      <div className="text-sm text-gray-600">
                        Specialized training in telehealth and patient
                        communication
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Mission & Values */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-emerald-600" />
                  My Mission & Values
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ValueCard
                    icon={BookOpen}
                    title="Education First"
                    description="Empowering people with knowledge to make informed health decisions."
                  />
                  <ValueCard
                    icon={Users}
                    title="Accessible to All"
                    description="Quality health information should be available to every Nigerian family."
                  />
                  <ValueCard
                    icon={Award}
                    title="Trust & Integrity"
                    description="Evidence-based guidance with transparency about limitations."
                  />
                  <ValueCard
                    icon={Calendar}
                    title="Always Available"
                    description="Health support when you need it — 24/7 from your phone."
                  />
                </div>
              </div>

              {/* Quote */}
              <div className="bg-emerald-50 rounded-xl p-6 border-l-4 border-emerald-600">
                <Quote className="w-8 h-8 text-emerald-600 mb-3" />
                <p className="text-gray-800 italic leading-relaxed">
                  "I believe that every Nigerian family deserves access to
                  reliable health information and professional guidance.
                  CareWellConnect is my way of extending care beyond the
                  hospital walls and into the homes where it's needed most."
                </p>
                <div className="mt-4 font-semibold text-gray-900">
                  — Nurse Eunice Tolulope Daramola
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              What CareWellConnect Offers
            </h2>
            <p className="mt-3 text-gray-600">
              Comprehensive digital health solutions for Nigerian families
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <OfferCard
              title="AI Health Assistant"
              description="Get instant answers to health questions, symptom guidance, and know when to seek professional care."
              icon=""
            />
            <OfferCard
              title="Medication & Health Tracker"
              description="Never miss a dose. Track blood pressure, blood sugar, weight, and water intake with reminders."
              icon="💊"
            />
            <OfferCard
              title="Pregnancy Companion"
              description="Week-by-week guidance, nutrition tips, kick counter, and contraction timer for expectant mothers."
              icon="🤰"
            />
            <OfferCard
              title="Professional Consultations"
              description="Book video or chat consultations with a qualified nurse for personalized guidance."
              icon="👩‍️"
            />
            <OfferCard
              title="Trusted Medical Devices"
              description="Shop nurse-recommended, NAFDAC-approved medical devices with nationwide delivery."
              icon="🩺"
            />
            <OfferCard
              title="Health Education"
              description="Access articles, videos, and guides on common health conditions, wellness, and prevention."
              icon="📚"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Experience Trusted Digital Healthcare?
          </h2>
          <p className="mt-4 text-emerald-50">
            Join thousands of Nigerians who trust CareWellConnect for reliable
            health guidance.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/2349167187407"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition"
            >
              Chat with Nurse Eunice
            </a>
            <a
              href="/premium"
              className="px-6 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition border border-white/20"
            >
              Start Premium Membership
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100">
      <Icon className="w-6 h-6 text-emerald-600 mb-2" />
      <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function OfferCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
