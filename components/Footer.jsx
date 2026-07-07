import Link from "next/link";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <div className="font-bold text-white leading-none">CareWell</div>
                <div className="text-xs text-emerald-400 leading-none mt-0.5">Connect</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Nigeria's trusted digital health companion. Reliable health
              education, practical tools, and professional nursing guidance —
              all from your phone.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition" aria-label="Facebook">
                <span className="text-xs font-bold">f</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition" aria-label="Instagram">
                <span className="text-xs font-bold">IG</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition" aria-label="Twitter">
                <span className="text-xs font-bold">X</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition" aria-label="YouTube">
                <span className="text-xs font-bold">YT</span>
              </a>
              <a href="https://wa.me/2349167187407" className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */} <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Platform
            </h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/tools/ai-assistant">AI Health Assistant</FooterLink>
              <FooterLink href="/tools/medication-tracker">Medication Tracker</FooterLink>
              <FooterLink href="/tools/pregnancy-companion">Pregnancy Companion</FooterLink>
              <FooterLink href="/tools/health-tracker">Health Tracker</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/consult">Book Consultation</FooterLink>
              <FooterLink href="/premium">Premium Membership</FooterLink>
              <FooterLink href="/medical-devices">Medical Devices</FooterLink>
              <FooterLink href="/blog">Health Blog</FooterLink>
              <FooterLink href="/about">About Nurse Eunice</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+2349167187407" className="hover:text-emerald-400 transition">
                  +234 916 718 7407
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/2349167187407" className="hover:text-emerald-400 transition">
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:care@carewellconnect.com" className="hover:text-emerald-400 transition break-all">
                  care@carewellconnect.com
                </a>
              </li> <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-10 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-400">Affiliate Disclosure:</strong>{" "}
            CareWellConnect participates in affiliate programs with verified
            sellers including Jumia and Konga. When you purchase through our
            links, we may earn a small commission at no extra cost to you. We
            only recommend products that meet our professional standards.
          </p>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-800">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-yellow-400">⚠️ Medical Disclaimer:</strong>{" "}
            The content on CareWellConnect is for educational purposes only and
            is not a substitute for professional medical advice, diagnosis, or
            treatment. Always seek the advice of a qualified healthcare provider
            with any questions about your medical condition. In an emergency,
            call <strong>112</strong> or go to the nearest hospital immediately.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} CareWellConnect. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Founded by{" "}
            <span className="text-emerald-400 font-medium">
              Nurse Eunice Tolulope Daramola
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return ( <li>
      <Link href={href} className="hover:text-emerald-400 transition inline-block">
        {children}
      </Link>
    </li>
  );
}