const PRODUCTS = [
  {
    emoji: "🌿",
    name: "WildDetector",
    desc: "On-device AI that detects wildlife by sound and sight. Pollinators, amphibians, birds, reptiles — in real time.",
    url: "/wilddetector",
    color: "border-green-700 hover:border-green-500",
    badge: "Available on Android",
    badgeColor: "bg-green-900 text-green-400",
  },
  {
    emoji: "⛽",
    name: "FuelGuard",
    desc: "OBD-II Bluetooth anti-theft system for vehicles. Monitors fuel levels and detects siphoning in real time.",
    url: "#",
    color: "border-orange-700 hover:border-orange-500",
    badge: "Coming soon",
    badgeColor: "bg-orange-900 text-orange-400",
  },
  {
    emoji: "🛡️",
    name: "SafeRoute",
    desc: "Fleet safety platform for mountain routes. Detects brake risk and dangerous driving patterns in real time.",
    url: "#",
    color: "border-blue-700 hover:border-blue-500",
    badge: "Coming soon",
    badgeColor: "bg-blue-900 text-blue-400",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <span className="text-white font-bold text-xl tracking-tight">⚡ Aureklab</span>
        <a href="mailto:aureklab@gmail.com" className="text-gray-400 hover:text-white text-sm transition">
          Contact
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 py-28 gap-6">
        <span className="text-7xl">⚡</span>
        <h1 className="text-5xl font-extrabold leading-tight max-w-2xl">
          AI Detection<br />
          <span className="text-gray-400">for the Real World</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl">
          Aureklab builds on-device AI tools that detect what matters —
          wildlife, fuel theft, road risk — without the cloud.
        </p>
        <a
          href="mailto:aureklab@gmail.com"
          className="border border-gray-700 hover:border-white text-white px-8 py-3 rounded-full text-sm font-semibold transition mt-2"
        >
          Get in touch
        </a>
      </section>

      {/* Products */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Our products</h2>
        <p className="text-gray-500 text-center mb-12">Real-time AI detection across industries.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              className={`bg-[#111111] border-2 ${p.color} rounded-2xl p-6 flex flex-col gap-4 transition`}
            >
              <span className="text-5xl">{p.emoji}</span>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-16 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: "📵", title: "No cloud required", desc: "All AI runs on-device. Your data stays with you." },
            { icon: "⚡", title: "Real-time detection", desc: "Millisecond response — no server round-trips." },
            { icon: "🌍", title: "Built for the field", desc: "Designed for environments without reliable internet." },
          ].map((v) => (
            <div key={v.title} className="flex flex-col items-center gap-3">
              <span className="text-4xl">{v.icon}</span>
              <h3 className="font-bold text-lg">{v.title}</h3>
              <p className="text-gray-500 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20 flex flex-col items-center text-center gap-4">
        <h2 className="text-3xl font-bold">Want to work with us?</h2>
        <p className="text-gray-500 max-w-md">
          We are open to partnerships, custom detection solutions, and pilot programs.
        </p>
        <a
          href="mailto:aureklab@gmail.com"
          className="bg-white text-black px-8 py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition mt-2"
        >
          aureklab@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-700 text-sm py-8 border-t border-gray-900">
        © {new Date().getFullYear()} Aureklab · All rights reserved
      </footer>

    </main>
  );
}
