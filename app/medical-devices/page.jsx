import Link from "next/link";
import {
  ShoppingBag,
  Heart,
  Activity,
  Pill,
  Baby,
  Thermometer,
  Stethoscope,
  Shield,
  CheckCircle2,
  Truck,
  Award,
  ArrowRight,
  Star,
  AlertCircle,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function MedicalDevicesPage() {
  const categories = [
    {
      id: "bp-monitors",
      name: "Blood Pressure Monitors",
      description: "Monitor your blood pressure at home with nurse-recommended devices",
      icon: Heart,
      productCount: 12,
      priceRange: "₦8,000 – ₦35,000",
      color: "rose",
      popular: true,
    },
    {
      id: "glucose-meters",
      name: "Glucose Meters & Strips",
      description: "Accurate blood sugar monitoring for diabetes management",
      icon: Pill,
      productCount: 8,
      priceRange: "₦5,000 – ₦28,000",
      color: "purple",
      popular: true,
    },
    {
      id: "thermometers",
      name: "Thermometers",
      description: "Digital, infrared, and ear thermometers for the whole family",
      icon: Thermometer,
      productCount: 6,
      priceRange: "₦2,500 – ₦18,000",
      color: "blue",
      popular: false,
    },
    {
      id: "pulse-oximeters",
      name: "Pulse Oximeters",
      description: "Monitor oxygen saturation and pulse rate",
      icon: Activity,
      productCount: 5,
      priceRange: "5,000 – ₦25,000",
      color: "cyan",
      popular: false,
    },
    {
      id: "nebulizers",
      name: "Nebulizers",
      description: "Portable and home nebulizers for asthma and respiratory care",
      icon: Stethoscope,
      productCount: 5,
      priceRange: "₦25,000 – ₦55,000",
      color: "teal",
      popular: false,
    },
    {
      id: "first-aid",
      name: "First Aid Kits",
      description: "Complete first aid kits for home, car, and office",
      icon: Shield,
      productCount: 9,
      priceRange: "₦5,000 – ₦30,000",
      color: "red",
      popular: false,
    },
    {
      id: "pregnancy-baby",
      name: "Pregnancy & Baby Care",
      description: "Pregnancy tests, ovulation kits, and newborn care essentials",
      icon: Baby,
      productCount: 15,
      priceRange: "₦3,000 – ₦50,000",
      color: "pink",
      popular: true,
    },
    {
      id: "wellness",
      name: "Wellness Devices",
      description: "Weighing scales, body fat analyzers, and wellness trackers",
      icon: TrendingUp,
      productCount: 10,
      priceRange: "₦8,000 – ₦30,000",
      color: "emerald",
      popular: false,
    },
  ];

  const colorMap = {
    rose: { bg: "bg-rose-100", text: "text-rose-600", border: "border-rose-200", hover: "hover:border-rose-400" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200", hover: "hover:border-purple-400" },
    blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", hover: "hover:border-blue-400" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200", hover: "hover:border-cyan-400" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200", hover: "hover:border-teal-400" },
    red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200", hover: "hover:border-red-400" },
    pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200", hover: "hover:border-pink-400" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200", hover: "hover:border-emerald-400" },
  };

  const featuredProducts = [
    {
      name: "Omron HEM-7120 BP Monitor",
      category: "Blood Pressure Monitors",
      price: "₦28,500",
      rating: 4.8,
      reviews: 234,
      badge: "Best Seller",
      color: "rose",
    },
    {
      name: "Accu-Chek Active Glucose Meter",
      category: "Glucose Meters",
      price: "₦15,000",
      rating: 4.7,
      reviews: 189,
      badge: "Top Rated",
      color: "purple",
    },
    {
      name: "Infrared Forehead Thermometer",
      category: "Thermometers",
      price: "12,000",
      rating: 4.6,
      reviews: 156,
      badge: "Popular",
      color: "blue",
    },
    {
      name: "Fingertip Pulse Oximeter",
      category: "Pulse Oximeters",
      price: "₦8,500",
      rating: 4.5,
      reviews: 98,
      badge: "New",
      color: "cyan",
    },
  ];

  const trustFeatures = [
    {
      icon: Shield,
      title: "Nurse-Verified",
      description: "Every device is reviewed and recommended by Nurse Eunice",
    },
    {
      icon: Award,
      title: "Genuine Products",
      description: "Only NAFDAC-approved and authentic medical devices",
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description: "Fast, secure delivery to all 36 states in Nigeria",
    },
    {
      icon: Star,
      title: "Trusted Brands",
      description: "Omron, Accu-Chek, Beurer, and other top brands",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
              <ShoppingBag className="w-4 h-4" />
              Trusted Medical Devices
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Shop{" "}
              <span className="text-teal-600">Nurse-Recommended</span>{" "}
              Medical Devices
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Get genuine, high-quality medical devices delivered to your
              doorstep. Every product is professionally vetted and recommended
              by Nurse Eunice.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition text-sm md:text-base"
              >
                Browse Categories
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#featured"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-gray-50 text-teal-700 border border-teal-200 rounded-lg font-medium transition text-sm md:text-base"
              >
                View Best Sellers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100"
                >
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {feature.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {feature.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-4 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-yellow-800 leading-relaxed">
              <strong>Transparency Notice:</strong> CareWellConnect participates
              in affiliate programs with verified sellers including Jumia and
              Konga. When you purchase through our links, we earn a small
              commission at <strong>no extra cost to you</strong>. This supports
              our mission to provide free health education. We only recommend
              products that meet our professional standards.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Shop by Category
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Browse our carefully selected medical devices organized by category
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((category) => {
              const Icon = category.icon;
              const colors = colorMap[category.color];
              return (
                <Link
                  key={category.id}
                  href={`/medical-devices/${category.id}`}
                  className={`group relative bg-white border-2 ${colors.border} ${colors.hover} rounded-2xl p-5 hover:shadow-xl transition-all hover:-translate-y-1`}
                >
                  {category.popular && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                      Popular
                    </div>
                  )}

                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-3`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {category.name}
                  </h3>

                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <span>{category.productCount} products</span>
                    <span className="font-medium">{category.priceRange}</span>
                  </div>

                  <div
                    className={`mt-3 flex items-center gap-1 ${colors.text} font-medium text-xs group-hover:gap-2 transition-all`}
                  >
                    Shop Now <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-3">
              <Sparkles className="w-4 h-4" />
              Best Sellers
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Featured Products
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Our most popular nurse-recommended medical devices
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product, idx) => {
              const colors = colorMap[product.color];
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
                >
                  {/* Product Image Placeholder */}
                  <div
                    className={`aspect-square ${colors.bg} flex items-center justify-center relative`}
                  >
                    {product.badge && (
                      <div className="absolute top-3 left-3 px-2 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                        {product.badge}
                      </div>
                    )}
                    <ShoppingBag className={`w-16 h-16 ${colors.text}`} />
                  </div>

                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">
                      {product.category}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-2 leading-tight">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium text-gray-900">
                        {product.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-teal-600">
                        {product.price}
                      </div>
                      <a
                        href="https://jumia.com.ng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-medium rounded-lg transition"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Shop With CareWellConnect?
            </h2>
            <p className="mt-3 text-gray-600">
              We make it easy to find trustworthy medical devices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <WhyCard
              number="1"
              title="Professional Recommendations"
              description="Every device is reviewed and recommended by Nurse Eunice based on clinical experience and patient feedback."
            />
            <WhyCard
              number="2"
              title="Genuine Products Only"
              description="We partner with verified sellers to ensure you receive authentic, NAFDAC-approved medical devices."
            />
            <WhyCard
              number="3"
              title="Save Time & Money"
              description="Skip the research. We've done the work to find the best devices at competitive prices with reliable delivery."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              How to Order
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <StepCard
              number="1"
              title="Browse"
              description="Explore our categories and find the device you need"
            />
            <StepCard
              number="2"
              title="Click Buy"
              description="Click 'Buy Now' to visit our trusted partner's store"
            />
            <StepCard
              number="3"
              title="Secure Payment"
              description="Pay securely via Paystack, card, or bank transfer"
            />
            <StepCard
              number="4"
              title="Fast Delivery"
              description="Receive your device at your doorstep nationwide"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Need Help Choosing?
          </h2>
          <p className="mt-4 text-teal-50">
            Chat with Nurse Eunice for personalized recommendations based on
            your health needs.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/2349167187407?text=Hello%20Nurse%20Eunice%2C%20I%20need%20help%20choosing%20a%20medical%20device"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-teal-700 rounded-lg font-medium hover:bg-teal-50 transition"
            >
              Get Recommendation
            </a>
            <a
              href="#categories"
              className="px-6 py-3 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-800 transition border border-white/20"
            >
              Browse All Devices
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function WhyCard({ number, title, description }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
      <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 mx-auto bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-3">
        {number}
      </div>
      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
