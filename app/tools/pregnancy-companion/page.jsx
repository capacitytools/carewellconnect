"use client";

import { useState, useEffect } from "react";
import {
  Baby,
  Calendar,
  Heart,
  Apple,
  Dumbbell,
  CheckCircle2,
  AlertCircle,
  Clock,
  TrendingUp,
  BookOpen,
  MessageCircle,
  Shield,
  Sparkles,
  Activity,
} from "lucide-react";

export default function PregnancyCompanionPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [week, setWeek] = useState(20);
  const [dueDate, setDueDate] = useState("");
  const [kickCount, setKickCount] = useState(0);
  const [contractionTimer, setContractionTimer] = useState(null);
  const [contractions, setContractions] = useState([]);

  // Calculate weeks from due date
  useEffect(() => {
    if (dueDate) {
      const due = new Date(dueDate);
      const today = new Date();
      const conceptionDate = new Date(due);
      conceptionDate.setDate(conceptionDate.getDate() - 280);
      const weeksPregnant = Math.floor(
        (today - conceptionDate) / (1000 * 60 * 60 * 24 * 7)
      );
      if (weeksPregnant > 0 && weeksPregnant <= 42) {
        setWeek(weeksPregnant);
      }
    }
  }, [dueDate]);

  // Kick counter
  const recordKick = () => {
    setKickCount(kickCount + 1);
  };

  const resetKickCount = () => {
    setKickCount(0);
  };

  // Contraction timer
  const startContraction = () => {
    setContractionTimer(Date.now());
  };

  const endContraction = () => {
    if (contractionTimer) {
      const duration = Math.round((Date.now() - contractionTimer) / 1000);
      setContractions([
        { id: Date.now(), duration, time: new Date().toLocaleTimeString() },
        ...contractions,
      ]);
      setContractionTimer(null);
    }
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Baby },
    { id: "nutrition", label: "Nutrition", icon: Apple },
    { id: "exercise", label: "Exercise", icon: Dumbbell },
    { id: "kick-counter", label: "Kick Counter", icon: Heart },
    { id: "contractions", label: "Contractions", icon: Activity },
    { id: "checklist", label: "Hospital Bag", icon: CheckCircle2 },
  ];

  // Week-by-week content
  const weekContent = {
    first: {
      title: "First Trimester (Weeks 1-12)",
      description: "The beginning of your pregnancy journey",
      tips: [
        "Start taking prenatal vitamins with folic acid",
        "Schedule your first prenatal visit",
        "Avoid alcohol, smoking, and raw foods",
        "Rest when you feel tired — fatigue is normal",
        "Stay hydrated and eat small, frequent meals",
      ],
    },
    second: {
      title: "Second Trimester (Weeks 13-26)",
      description: "The 'honeymoon period' of pregnancy",
      tips: [
        "You may start feeling baby movements (quickening)",
        "Continue prenatal vitamins and balanced diet",
        "Start gentle exercise like walking or prenatal yoga",
        "Attend all scheduled prenatal appointments",
        "Begin thinking about your birth plan",
      ],
    },
    third: {
      title: "Third Trimester (Weeks 27-40)",
      description: "Preparing for your baby's arrival",
      tips: [
        "Pack your hospital bag by week 36",
        "Attend childbirth education classes",
        "Practice breathing and relaxation techniques",
        "Monitor baby's movements daily",
        "Know the signs of labor and when to call your doctor",
      ],
    },
  };

  const currentTrimester =
    week <= 12 ? "first" : week <= 26 ? "second" : "third";

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
              <Baby className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Pregnancy Companion</h1>
              <p className="text-sm text-white/90">
                Your complete pregnancy guide
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Week Selector */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700">
              Current Week:
            </label>
            <input
              type="number"
              min="1"
              max="42"
              value={week}
              onChange={(e) => setWeek(Number(e.target.value))}
              className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <span className="text-sm text-gray-600">
              {week <= 40 ? `of 40 weeks` : "Post-due date"}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition ${
                    activeTab === tab.id
                      ? "bg-pink-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-4">
            {/* Current Week Info */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Week {week} of Pregnancy
                  </h2>
                  <p className="text-sm text-gray-600">
                    {weekContent[currentTrimester].title}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {weekContent[currentTrimester].description}
              </p>
              <div className="space-y-2">
                {weekContent[currentTrimester].tips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    {tip}
                  </div>
                ))}
              </div>
            </div>

            {/* Baby Size */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-pink-600" />
                Baby's Size This Week
              </h3>
              <div className="bg-pink-50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">
                  {week <= 8 ? "🫐" : week <= 12 ? "🍋" : week <= 20 ? "🍌" : week <= 30 ? "🥥" : "🍉"}
                </div>
                <p className="text-sm text-gray-700">
                  {week <= 8
                    ? "Size of a blueberry"
                    : week <= 12
                    ? "Size of a lime"
                    : week <= 20
                    ? "Size of a banana"
                    : week <= 30
                    ? "Size of a coconut"
                    : "Size of a watermelon"}
                </p>
              </div>
            </div>

            {/* Due Date Calculator */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-pink-600" />
                Due Date Calculator
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Enter your due date to track your pregnancy week automatically
              </p>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
              />
            </div>

            {/* Important Reminders */}
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                Important Reminders
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  Attend all prenatal appointments
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  Take prenatal vitamins daily
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  Stay hydrated (8-10 glasses of water daily)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  Call your doctor if you experience bleeding, severe pain, or reduced baby movements
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Nutrition Tab */}
        {activeTab === "nutrition" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Apple className="w-5 h-5 text-green-600" />
                Pregnancy Nutrition Guide
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Proper nutrition is essential for your baby's development and your health.
              </p>

              <div className="space-y-4">
                <NutrientCard
                  title="Folic Acid"
                  description="Prevents birth defects of the brain and spine"
                  foods={["Leafy greens", "Citrus fruits", "Beans", "Fortified cereals"]}
                  color="green"
                />
                <NutrientCard
                  title="Iron"
                  description="Helps make blood for you and your baby"
                  foods={["Red meat", "Spinach", "Lentils", "Fortified cereals"]}
                  color="red"
                />
                <NutrientCard
                  title="Calcium"
                  description="Builds strong bones and teeth"
                  foods={["Milk", "Yogurt", "Cheese", "Broccoli"]}
                  color="blue"
                />
                <NutrientCard
                  title="Protein"
                  description="Essential for baby's growth"
                  foods={["Chicken", "Fish", "Eggs", "Beans", "Nuts"]}
                  color="purple"
                />
                <NutrientCard
                  title="Omega-3"
                  description="Supports brain and eye development"
                  foods={["Salmon", "Walnuts", "Chia seeds", "Flaxseed"]}
                  color="orange"
                />
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold text-gray-900 mb-3">
                Foods to Avoid
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  Raw or undercooked meat and fish
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  Unpasteurized milk and cheese
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  High-mercury fish (shark, swordfish, king mackerel)
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  Alcohol and excessive caffeine
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  Raw eggs and foods containing raw eggs
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Exercise Tab */}
        {activeTab === "exercise" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-blue-600" />
                Safe Exercises During Pregnancy
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Regular exercise helps you stay healthy and prepare for labor. Always consult your doctor before starting any exercise program.
              </p>

              <div className="space-y-3">
                <ExerciseCard
                  title="Walking"
                  description="Low-impact, easy to do anywhere"
                  duration="30 minutes daily"
                  benefit="Improves circulation and mood"
                />
                <ExerciseCard
                  title="Prenatal Yoga"
                  description="Gentle stretching and breathing"
                  duration="20-30 minutes, 2-3x/week"
                  benefit="Reduces stress, improves flexibility"
                />
                <ExerciseCard
                  title="Swimming"
                  description="Full-body workout, no joint stress"
                  duration="20-30 minutes, 2-3x/week"
                  benefit="Relieves back pain, supports weight"
                />
                <ExerciseCard
                  title="Pelvic Floor Exercises"
                  description="Kegel exercises"
                  duration="10-15 reps, 3x/day"
                  benefit="Prepares for labor, prevents incontinence"
                />
                <ExerciseCard
                  title="Stationary Cycling"
                  description="Safe cardio option"
                  duration="20-30 minutes, 2-3x/week"
                  benefit="Improves cardiovascular health"
                />
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                When to Stop Exercising
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  Vaginal bleeding
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  Dizziness or feeling faint
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  Shortness of breath before starting
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  Chest pain or headache
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  Muscle weakness affecting balance
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  Contractions or fluid leakage
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Kick Counter Tab */}
        {activeTab === "kick-counter" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-600" />
                Kick Counter
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Monitor your baby's movements. You should feel at least 10 movements in 2 hours.
              </p>

              <div className="text-center py-8">
                <div className="text-6xl font-bold text-rose-600 mb-2">
                  {kickCount}
                </div>
                <p className="text-sm text-gray-600 mb-6">kicks counted</p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={recordKick}
                    className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-medium transition flex items-center gap-2"
                  >
                    <Heart className="w-5 h-5" />
                    Record Kick
                  </button>
                  <button
                    onClick={resetKickCount}
                    className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition"
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="mt-6 bg-rose-50 rounded-lg p-4 border border-rose-200">
                <p className="text-sm text-gray-700">
                  <strong>Tip:</strong> Count kicks after a meal when baby is most active. 
                  If you notice significantly reduced movements, contact your healthcare provider.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Contractions Tab */}
        {activeTab === "contractions" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-600" />
                Contraction Timer
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Time your contractions to track labor progress.
              </p>

              <div className="text-center py-8">
                {contractionTimer ? (
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Contraction in progress...</p>
                    <button
                      onClick={endContraction}
                      className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition text-lg"
                    >
                      Stop Timer
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={startContraction}
                      className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold transition text-lg"
                    >
                      Start Timing Contraction
                    </button>
                  </div>
                )}
              </div>

              {contractions.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-bold text-gray-900 mb-3">
                    Recent Contractions ({contractions.length})
                  </h3>
                  <div className="space-y-2">
                    {contractions.slice(0, 5).map((c) => (
                      <div
                        key={c.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Activity className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">
                              {c.duration} seconds
                            </div>
                            <div className="text-xs text-gray-600">{c.time}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-gray-700">
                  <strong>When to go to the hospital:</strong> If contractions are 
                  5 minutes apart, lasting 1 minute each, for 1 hour (5-1-1 rule).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Hospital Bag Checklist Tab */}
        {activeTab === "checklist" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                Hospital Bag Checklist
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Pack your bag by week 36. Here's what you'll need:
              </p>

              <div className="space-y-4">
                <ChecklistSection
                  title="For Mom"
                  items={[
                    "Hospital gown or comfortable clothes",
                    "Slippers and socks",
                    "Toiletries (toothbrush, shampoo, etc.)",
                    "Nursing bra",
                    "Maternity pads",
                    "Phone and charger",
                    "Insurance documents and ID",
                    "Birth plan (if you have one)",
                    "Snacks and drinks",
                    "Hair ties and lip balm",
                  ]}
                />
                <ChecklistSection
                  title="For Baby"
                  items={[
                    "Newborn clothes (onesies, socks, hat)",
                    "Receiving blankets",
                    "Car seat (installed in car)",
                    "Diapers and wipes",
                    "Baby blanket",
                    "Pacifier (if using)",
                  ]}
                />
                <ChecklistSection
                  title="For Partner"
                  items={[
                    "Comfortable clothes and shoes",
                    "Toiletries",
                    "Phone and charger",
                    "Camera",
                    "Snacks and drinks",
                    "Change of clothes",
                    "Pillow and blanket",
                  ]}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function NutrientCard({ title, description, foods, color }) {
  const colorMap = {
    green: "bg-green-100 text-green-600 border-green-200",
    red: "bg-red-100 text-red-600 border-red-200",
    blue: "bg-blue-100 text-blue-600 border-blue-200",
    purple: "bg-purple-100 text-purple-600 border-purple-200",
    orange: "bg-orange-100 text-orange-600 border-orange-200",
  };

  return (
    <div className={`rounded-lg p-4 border ${colorMap[color]}`}>
      <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <div className="flex flex-wrap gap-1">
        {foods.map((food) => (
          <span
            key={food}
            className="text-xs bg-white px-2 py-1 rounded-full border border-gray-200"
          >
            {food}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExerciseCard({ title, description, duration, benefit }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="flex items-center gap-4 text-xs text-gray-700">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {duration}
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          {benefit}
        </div>
      </div>
    </div>
  );
}

function ChecklistSection({ title, items }) {
  return (
    <div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <div className="space-y-1">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
