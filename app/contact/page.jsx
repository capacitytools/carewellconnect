"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  CheckCircle2,
  AlertCircle,
  Shield,
  Heart,
  Calendar,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Fastest way to reach us",
      detail: "+234 916 718 7407",
      link: "https://wa.me/2349167187407",
      color: "emerald",
      badge: "Recommended",
    },
    {
      icon: Phone,
      title: "Phone Call",
      description: "Speak directly with us",
      detail: "+234 916 718 7407",
      link: "tel:+2349167187407",
      color: "teal",
      badge: null,
    },
    {
      icon: Mail,
      title: "Email",
      description: "For detailed inquiries",
      detail: "care@carewellconnect.com",
      link: "mailto:care@carewellconnect.com",
      color: "cyan",
      badge: null,
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
    { day: "Public Holidays", hours: "Closed (Emergency only)" },
  ];

  const faqs = [
    {
      q: "How quickly will you respond to my message?",
      a: "We typically respond within 2-4 hours during business hours. WhatsApp messages are answered fastest, often within minutes. Email responses may take up to 24 hours.",
    },
    {
      q: "Can I book a consultation through this page?",
      a: "Yes! You can use the contact form to request a consultation, or click the 'Book a Consultation' button to go directly to our booking page with all available services and pricing.",
    },
    {
      q: "Do you offer emergency consultations?",
      a: "For medical emergencies, please call 112 or go to your nearest hospital immediately. We do not provide emergency medical services through this platform.",
    },
    {
      q: "Can I schedule a call at a specific time?",
      a: "Yes! Use the contact form to request a specific date and time, or book directly through our consultation page where you can see available slots.",
    },
    {
      q: "Are consultations available outside Lagos?",
      a: "Yes! Video and chat consultations are available nationwide. Home nursing visits are currently limited to Lagos and selected areas.",
    },
    {
      q: "Is my information kept confidential?",
      a: "Absolutely. All communications are strictly confidential. We never share your personal or health information without your explicit consent.",
    },
  ];

  const colorMap = {
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200", btn: "bg-emerald-600 hover:bg-emerald-700" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200", btn: "bg-teal-600 hover:bg-teal-700" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200", btn: "bg-cyan-600 hover:bg-cyan-700" },
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4" />
              Get in Touch
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              We're Here to{" "}
              <span className="text-emerald-600">Help You</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our services? Need to book a consultation?
              We're just a message away. Choose your preferred way to connect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-5">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              const colors = colorMap[method.color];
              return (
                <a
                  key={idx}
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : undefined}
                  rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group relative bg-white border-2 ${colors.border} rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1`}
                >
                  {method.badge && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                      {method.badge}
                    </div>
                  )}

                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {method.description}
                  </p>
                  <div className={`text-base font-semibold ${colors.text} mb-4`}>
                    {method.detail}
                  </div>

                  <div
                    className={`flex items-center gap-1 ${colors.text} font-medium text-sm group-hover:gap-2 transition-all`}
                  >
                    Contact Now <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-gray-600">
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="consultation">Book a Consultation</option>
                      <option value="premium">Premium Membership</option>
                      <option value="medical-devices">Medical Devices</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We respect your privacy. Your information is secure and confidential.
                  </p>
                </form>
              )}
            </div>

            {/* Business Info */}
            <div className="space-y-5">
              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {businessHours.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-sm text-gray-700">{item.day}</span>
                      <span className="text-sm font-medium text-gray-900">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  Location
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        CareWellConnect
                      </div>
                      <div className="text-sm text-gray-600">
                        Lagos, Nigeria
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Serving all 36 states nationwide (online)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <SocialLink icon={Facebook} href="#" label="Facebook" />
                  <SocialLink icon={Instagram} href="#" label="Instagram" />
                  <SocialLink icon={Twitter} href="#" label="Twitter" />
                  <SocialLink icon={Youtube} href="#" label="YouTube" />
                  <SocialLink icon={MessageCircle} href="https://wa.me/2349167187407" label="WhatsApp" />
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <Link
                    href="/consult"
                    className="flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-900 font-medium"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Consultation
                  </Link>
                  <Link
                    href="/premium"
                    className="flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-900 font-medium"
                  >
                    <Heart className="w-4 h-4" />
                    Join Premium Membership
                  </Link>
                  <Link
                    href="/medical-devices"
                    className="flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-900 font-medium"
                  >
                    <Shield className="w-4 h-4" />
                    Shop Medical Devices
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-sm transition"
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

      {/* Emergency Notice */}
      <section className="py-8 bg-red-50 border-t border-red-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">
                Medical Emergency?
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                If you are experiencing a medical emergency, please{" "}
                <strong>call 112 immediately</strong> or go to your nearest
                hospital. CareWellConnect does not provide emergency medical
                services. For urgent but non-emergency concerns, use our
                WhatsApp chat for the fastest response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Connect?
          </h2>
          <p className="mt-4 text-emerald-50">
            Whether you need health guidance, want to book a consultation, or
            have questions about our services — we're here to help.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/2349167187407"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <Link
              href="/consult"
              className="px-6 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition border border-white/20 inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SocialLink({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 bg-emerald-100 hover:bg-emerald-600 text-emerald-600 hover:text-white rounded-lg flex items-center justify-center transition"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
