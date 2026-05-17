import MapSection from "./components/MapSection";
import YouTubeEmbed from "./components/YouTubeEmbed";

const SPECIES = [
  { emoji: "🐝", name: "Pollinators",           desc: "Detects pollinator presence by wing-beat frequency and audio patterns." },
  { emoji: "🐸", name: "Amphibians (multiclass)", desc: "Identifies amphibian calls at night or near water sources." },
  { emoji: "🦜", name: "Avian",                 desc: "Recognizes bird songs across hundreds of species." },
  { emoji: "🦎", name: "Reptiles",              desc: "Visual detection of reptiles using on-device AI visual model." },
  { emoji: "🔍", name: "General",               desc: "No species model. Uses anomaly and motion detection to catch any unusual activity." },
];

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    color: "border-gray-700",
    badge: "",
    features: [
      "5-minute detection sessions",
      "All species detectors",
      "Session log",
      "Public detections on map",
    ],
    cta: "Download",
    ctaStyle: "bg-gray-700 hover:bg-gray-600 text-white",
  },
  {
    name: "Monthly",
    price: "$10",
    period: "/ month",
    color: "border-green-600",
    badge: "",
    features: [
      "Unlimited detection sessions",
      "Save detections with GPS",
      "My Detections history",
      "Public or private data toggle",
    ],
    cta: "Get Monthly",
    ctaStyle: "bg-green-700 hover:bg-green-600 text-white",
  },
  {
    name: "Annual",
    price: "$80",
    period: "/ year",
    color: "border-green-400",
    badge: "✦ Best value",
    features: [
      "Everything in Monthly",
      "Save ~33% vs monthly",
      "Priority support",
      "Early access to new species",
    ],
    cta: "Get Annual",
    ctaStyle: "bg-green-500 hover:bg-green-400 text-black font-bold",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <span className="text-green-400 font-bold text-xl">🌿 WildDetector</span>
        <div className="flex items-center gap-3">
          <a href="/docs" className="text-gray-400 hover:text-green-400 text-sm transition">
            📖 Guide
          </a>
          <a
            href="#download"
            className="bg-green-700 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full transition"
          >
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 py-24 gap-6" id="download">
        <span className="text-7xl">🌿</span>
        <h1 className="text-5xl font-extrabold leading-tight">
          Detect Wildlife<br />
          <span className="text-green-400">With Your Phone</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl">
          WildDetector uses on-device AI to identify pollinators, amphibians, birds, and reptiles
          in real time — by sound and by sight. No internet required.
        </p>
        <a
          href="#"
          className="bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition mt-2"
        >
          📲 Get on Google Play
        </a>
        <p className="text-gray-600 text-sm">Android 8.0+ · Free to start</p>
      </section>

      {/* Tutorial Video */}
      <section className="px-6 py-16 max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-center">See it in action</h2>
        <p className="text-gray-500 text-center">Full walkthrough of every feature in under 10 minutes.</p>
        <YouTubeEmbed videoId="DGuiXhhd5Fk" />
      </section>

      {/* Species */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">What can it detect?</h2>
        <p className="text-gray-500 text-center mb-10">Four ecosystems, one app.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SPECIES.map(s => (
            <div
              key={s.name}
              className="bg-[#141414] border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-green-700 transition"
            >
              <span className="text-5xl">{s.emoji}</span>
              <h3 className="text-lg font-bold">{s.name}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 bg-[#0d0d0d]">
        <h2 className="text-3xl font-bold text-center mb-2">Simple pricing</h2>
        <p className="text-gray-500 text-center mb-10">Unlock unlimited sessions and your detection history.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PLANS.map(p => (
            <div
              key={p.name}
              className={`bg-[#141414] border-2 ${p.color} rounded-2xl p-6 flex flex-col gap-4`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{p.name}</h3>
                {p.badge && <span className="text-xs text-green-400 font-semibold">{p.badge}</span>}
              </div>
              <div>
                <span className="text-3xl font-extrabold">{p.price}</span>
                <span className="text-gray-500 text-sm ml-1">{p.period}</span>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-gray-400">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={`mt-auto text-center py-2 rounded-full text-sm transition ${p.ctaStyle}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Live Map */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Live detection map</h2>
        <p className="text-gray-500 text-center mb-8">
          Public detections from all users, updated in real time.
        </p>
        <MapSection />
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-700 text-sm py-8 border-t border-gray-900 flex flex-col gap-1">
        <div>© {new Date().getFullYear()} <span className="text-gray-500">Aureklab</span> · WildDetector</div>
        <div>
          <a href="/privacy" className="hover:text-green-400 transition">Privacy Policy</a>
          {" · "}
          <a href="/docs" className="hover:text-green-400 transition">Guide</a>
          {" · "}
          <a href="mailto:aureklab@gmail.com" className="hover:text-green-400 transition">Contact</a>
        </div>
      </footer>

    </main>
  );
}
