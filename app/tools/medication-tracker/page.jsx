"use client";

import { useState, useEffect } from "react";
import {
  Pill,
  Plus,
  Trash2,
  Clock,
  Activity,
  Droplet,
  Heart,
  TrendingUp,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Bell,
} from "lucide-react";

export default function MedicationTrackerPage() {
  const [activeTab, setActiveTab] = useState("medications");
  const [medications, setMedications] = useState([]);
  const [bpLogs, setBpLogs] = useState([]);
  const [sugarLogs, setSugarLogs] = useState([]);
  const [weightLogs, setWeightLogs] = useState([]);
  const [waterLogs, setWaterLogs] = useState([]);

  // Form states
  const [medForm, setMedForm] = useState({ name: "", dose: "", time: "" });
  const [bpForm, setBpForm] = useState({ systolic: "", diastolic: "", pulse: "" });
  const [sugarForm, setSugarForm] = useState({ level: "", time: "" });
  const [weightForm, setWeightForm] = useState({ weight: "" });
  const [waterForm, setWaterForm] = useState({ glasses: "" });

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("carewellconnect_tracker");
    if (saved) {
      const data = JSON.parse(saved);
      setMedications(data.medications || []);
      setBpLogs(data.bpLogs || []);
      setSugarLogs(data.sugarLogs || []);
      setWeightLogs(data.weightLogs || []);
      setWaterLogs(data.waterLogs || []);
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    const data = { medications, bpLogs, sugarLogs, weightLogs, waterLogs };
    localStorage.setItem("carewellconnect_tracker", JSON.stringify(data));
  }, [medications, bpLogs, sugarLogs, weightLogs, waterLogs]);

  // Medication handlers
  const addMedication = () => {
    if (!medForm.name || !medForm.dose) return;
    setMedications([...medications, { ...medForm, id: Date.now() }]);
    setMedForm({ name: "", dose: "", time: "" });
  };

  const removeMedication = (id) => {
    setMedications(medications.filter((m) => m.id !== id));
  };

  // BP handlers
  const addBpLog = () => {
    if (!bpForm.systolic || !bpForm.diastolic) return;
    setBpLogs([{ ...bpForm, id: Date.now(), date: new Date().toLocaleDateString() }, ...bpLogs]);
    setBpForm({ systolic: "", diastolic: "", pulse: "" });
  };

  // Sugar handlers
  const addSugarLog = () => {
    if (!sugarForm.level) return;
    setSugarLogs([{ ...sugarForm, id: Date.now(), date: new Date().toLocaleDateString() }, ...sugarLogs]);
    setSugarForm({ level: "", time: "" });
  };

  // Weight handlers
  const addWeightLog = () => {
    if (!weightForm.weight) return;
    setWeightLogs([{ ...weightForm, id: Date.now(), date: new Date().toLocaleDateString() }, ...weightLogs]);
    setWeightForm({ weight: "" });
  };

  // Water handlers
  const addWaterLog = () => {
    if (!waterForm.glasses) return;
    setWaterLogs([{ ...waterForm, id: Date.now(), date: new Date().toLocaleDateString() }, ...waterLogs]);
    setWaterForm({ glasses: "" });
  };

  const tabs = [
    { id: "medications", label: "Medications", icon: Pill },
    { id: "bp", label: "Blood Pressure", icon: Heart },
    { id: "sugar", label: "Blood Sugar", icon: Droplet },
    { id: "weight", label: "Weight", icon: TrendingUp },
    { id: "water", label: "Water", icon: Droplet },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Pill className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Medication & Health Tracker
              </h1>
              <p className="text-xs text-gray-500">
                Track your medications and health metrics
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-10">
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
                      ? "bg-teal-600 text-white"
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
        {/* Medications Tab */}
        {activeTab === "medications" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Pill className="w-5 h-5 text-teal-600" />
                Add Medication
              </h2>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Medication name (e.g., Metformin)"
                  value={medForm.name}
                  onChange={(e) => setMedForm({ ...medForm, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                />
                <input
                  type="text"
                  placeholder="Dose (e.g., 500mg)"
                  value={medForm.dose}
                  onChange={(e) => setMedForm({ ...medForm, dose: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                />
                <input
                  type="time"
                  value={medForm.time}
                  onChange={(e) => setMedForm({ ...medForm, time: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                />
                <button
                  onClick={addMedication}
                  className="w-full px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Medication
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Your Medications ({medications.length})
              </h2>
              {medications.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Pill className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                  <p className="text-sm">No medications added yet</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {medications.map((med) => (
                    <div
                      key={med.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                          <Pill className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            {med.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {med.dose} {med.time && `• ${med.time}`}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeMedication(med.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Blood Pressure Tab */}
        {activeTab === "bp" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-600" />
                Log Blood Pressure
              </h2>
              <div className="space-y-3">
                <input
                  type="number"
                  placeholder="Systolic (e.g., 120)"
                  value={bpForm.systolic}
                  onChange={(e) => setBpForm({ ...bpForm, systolic: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                />
                <input
                  type="number"
                  placeholder="Diastolic (e.g., 80)"
                  value={bpForm.diastolic}
                  onChange={(e) => setBpForm({ ...bpForm, diastolic: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                />
                <input
                  type="number"
                  placeholder="Pulse (optional)"
                  value={bpForm.pulse}
                  onChange={(e) => setBpForm({ ...bpForm, pulse: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                />
                <button
                  onClick={addBpLog}
                  className="w-full px-4 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Log Reading
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Recent Readings ({bpLogs.length})
              </h2>
              {bpLogs.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Heart className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                  <p className="text-sm">No readings logged yet</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {bpLogs.slice(0, 10).map((log) => (
                    <div
                      key={log.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                          <Heart className="w-5 h-5 text-rose-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            {log.systolic}/{log.diastolic} mmHg
                          </div>
                          <div className="text-xs text-gray-600">
                            {log.date} {log.pulse && `• Pulse: ${log.pulse}`}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Blood Sugar Tab */}
        {activeTab === "sugar" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Droplet className="w-5 h-5 text-purple-600" />
                Log Blood Sugar
              </h2>
              <div className="space-y-3">
                <input
                  type="number"
                  step="0.1"
                  placeholder="Blood sugar level (mg/dL)"
                  value={sugarForm.level}
                  onChange={(e) => setSugarForm({ ...sugarForm, level: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
                <select
                  value={sugarForm.time}
                  onChange={(e) => setSugarForm({ ...sugarForm, time: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                >
                  <option value="">Select time</option>
                  <option value="Fasting">Fasting</option>
                  <option value="Before meal">Before meal</option>
                  <option value="After meal">After meal (2hrs)</option>
                  <option value="Bedtime">Bedtime</option>
                </select>
                <button
                  onClick={addSugarLog}
                  className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Log Reading
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Recent Readings ({sugarLogs.length})
              </h2>
              {sugarLogs.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Droplet className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                  <p className="text-sm">No readings logged yet</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {sugarLogs.slice(0, 10).map((log) => (
                    <div
                      key={log.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Droplet className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            {log.level} mg/dL
                          </div>
                          <div className="text-xs text-gray-600">
                            {log.date} • {log.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Weight Tab */}
        {activeTab === "weight" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Log Weight
              </h2>
              <div className="space-y-3">
                <input
                  type="number"
                  step="0.1"
                  placeholder="Weight (kg)"
                  value={weightForm.weight}
                  onChange={(e) => setWeightForm({ ...weightForm, weight: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  onClick={addWeightLog}
                  className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Log Weight
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Weight History ({weightLogs.length})
              </h2>
              {weightLogs.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <TrendingUp className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                  <p className="text-sm">No weight logged yet</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {weightLogs.slice(0, 10).map((log) => (
                    <div
                      key={log.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            {log.weight} kg
                          </div>
                          <div className="text-xs text-gray-600">{log.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Water Tab */}
        {activeTab === "water" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Droplet className="w-5 h-5 text-cyan-600" />
                Log Water Intake
              </h2>
              <div className="space-y-3">
                <input
                  type="number"
                  placeholder="Number of glasses"
                  value={waterForm.glasses}
                  onChange={(e) => setWaterForm({ ...waterForm, glasses: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                />
                <button
                  onClick={addWaterLog}
                  className="w-full px-4 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Log Water
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Today's Intake ({waterLogs.length} logs)
              </h2>
              {waterLogs.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Droplet className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                  <p className="text-sm">No water logged today</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {waterLogs.slice(0, 10).map((log) => (
                    <div
                      key={log.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                          <Droplet className="w-5 h-5 text-cyan-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            {log.glasses} glasses
                          </div>
                          <div className="text-xs text-gray-600">{log.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-teal-600" />
            Health Tracking Tips
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
              Track consistently at the same time each day for accurate trends
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
              Share your logs with your healthcare provider during consultations
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
              Set medication reminders to improve adherence
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
              Drink at least 8 glasses of water daily for optimal health
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
