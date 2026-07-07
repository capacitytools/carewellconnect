import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  Heart,
  Baby,
  Pill,
  Apple,
  Brain,
  Activity,
  TrendingUp,
  Share2,
  Bookmark,
  Sparkles,
} from "lucide-react";

export default function BlogPage() {
  const categories = [
    { name: "All Posts", icon: Sparkles, count: 48, active: true },
    { name: "Pregnancy", icon: Baby, count: 12 },
    { name: "Heart Health", icon: Heart, count: 8 },
    { name: "Nutrition", icon: Apple, count: 10 },
    { name: "Medications", icon: Pill, count: 6 },
    { name: "Mental Wellness", icon: Brain, count: 5 },
    { name: "Fitness", icon: Activity, count: 7 },
  ];

  const featuredPost = {
    title: "10 Warning Signs of High Blood Pressure Every Nigerian Should Know",
    excerpt:
      "Hypertension affects over 30% of Nigerian adults, yet many don't recognize the warning signs until it's too late. Learn the symptoms that could save your life.",
    category: "Heart Health",
    author: "Nurse Eunice Daramola",
    date: "July 1, 2026",
    readTime: "8 min read",
    image: "🫀",
    color: "rose",
  };

  const posts = [
    {
      title: "How to Monitor Blood Sugar at Home: A Complete Guide",
      excerpt:
        "Managing diabetes starts with accurate monitoring. Here's everything you need to know about checking your blood sugar correctly.",
      category: "Medications",
      author: "Nurse Eunice Daramola",
      date: "June 28, 2026",
      readTime: "6 min read",
      icon: "💉",
      color: "purple",
    },
    {
      title: "Pregnancy Week 20: What's Happening With Your Baby",
      excerpt:
        "You're halfway through your pregnancy! Discover your baby's development this week and what changes you might be experiencing.",
      category: "Pregnancy",
      author: "Nurse Eunice Daramola",
      date: "June 25, 2026",
      readTime: "5 min read",
      icon: "🤰",
      color: "pink",
    },
    {
      title: "5 Nigerian Foods That Boost Your Immune System",
      excerpt:
        "From ugu to bitter leaf, discover local Nigerian foods that naturally strengthen your immune system and keep you healthy.",
      category: "Nutrition",
      author: "Nurse Eunice Daramola",
      date: "June 22, 2026",
      readTime: "4 min read",
      icon: "🥗",
      color: "green",
    },
    {
      title: "Understanding Anxiety: When to Seek Help",
      excerpt:
        "Anxiety is more than just worry. Learn the difference between normal stress and anxiety disorders that need professional attention.",
      category: "Mental Wellness",
      author: "Nurse Eunice Daramola",
      date: "June 18, 2026",
      readTime: "7 min read",
      icon: "",
      color: "indigo",
    },
    {
      title: "The Truth About Herbal Medicines in Nigeria",
      excerpt:
        "Herbal remedies are part of our culture, but not all are safe. A nurse's guide to using traditional medicine responsibly.",
      category: "Medications",
      author: "Nurse Eunice Daramola",
      date: "June 15, 2026",
      readTime: "6 min read",
      icon: "🌿",
      color: "emerald",
    },
    {
      title: "Simple Exercises for Busy Nigerian Moms",
      excerpt:
        "You don't need a gym to stay fit. These 15-minute exercises can be done at home while caring for your family.",
      category: "Fitness",
      author: "Nurse Eunice Daramola",
      date: "June 12, 2026",
      readTime: "5 min read",
      icon: "🏃‍♀️",
      color: "blue",
    },
  ];

  const colorMap = {
    rose: { bg: "bg-rose-100", text: "text-rose-600", border: "border-rose-200" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
    pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200" },
    green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
    indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200" },
    blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Health Education Blog
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Trusted Health{" "}
              <span className="text-emerald-600">Articles & Guides</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Evidence-based health education written in simple language for
              Nigerian families. Updated weekly by Nurse Eunice.
            </p>

            {/* Search Bar */}
            <div className="mt-6 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search health articles..."
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-gray-100 bg-white sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-3 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.name}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                    cat.active
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      cat.active ? "bg-white/20" : "bg-gray-200"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold mb-3">
              <Sparkles className="w-3 h-3" />
              FEATURED ARTICLE
            </div>
          </div>

          <Link
            href="/blog/high-blood-pressure-warning-signs"
            className="group block bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-square md:aspect-auto bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center p-8">
                <div className="text-9xl">{featuredPost.image}</div>
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-rose-600 text-white text-xs font-semibold rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-rose-600 font-semibold group-hover:gap-3 transition-all">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Latest Articles
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Fresh health education every week
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, idx) => {
              const colors = colorMap[post.color];
              return (
                <Link
                  key={idx}
                  href="#"
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {/* Post Image Placeholder */}
                  <div
                    className={`aspect-video ${colors.bg} flex items-center justify-center relative`}
                  >
                    <div className="text-6xl">{post.icon}</div>
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2 py-1 ${colors.bg} ${colors.text} text-xs font-semibold rounded-full border ${colors.border}`}
                      >
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-1">
                      <button className="p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition">
                        <Bookmark className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                      <button className="p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white transition">
                        <Share2 className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2 leading-tight group-hover:text-emerald-600 transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-white hover:bg-gray-50 text-emerald-700 border border-emerald-200 rounded-lg font-medium transition inline-flex items-center gap-2">
              Load More Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium mb-4">
            <Tag className="w-4 h-4" />
            Weekly Health Newsletter
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Get Health Tips in Your Inbox
          </h2>
          <p className="mt-3 text-emerald-50">
            Join 5,000+ Nigerians receiving weekly health education, tips, and
            exclusive content from Nurse Eunice.
          </p>

          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition text-sm whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>

          <p className="mt-3 text-xs text-emerald-100">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Popular Topics
            </h2>
            <p className="mt-3 text-gray-600">
              Explore articles by health topic
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Hypertension", count: 12, icon: "🫀" },
              { name: "Diabetes", count: 9, icon: "💉" },
              { name: "Pregnancy", count: 15, icon: "🤰" },
              { name: "Nutrition", count: 18, icon: "🥗" },
              { name: "Mental Health", count: 7, icon: "🧠" },
              { name: "Child Care", count: 11, icon: "" },
              { name: "Fitness", count: 8, icon: "🏃♀️" },
              { name: "First Aid", count: 6, icon: "" },
            ].map((topic) => (
              <Link
                key={topic.name}
                href="#"
                className="group p-4 bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-xl transition text-center"
              >
                <div className="text-3xl mb-2">{topic.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">
                  {topic.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {topic.count} articles
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
