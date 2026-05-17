export default function Docs() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800 sticky top-0 bg-[#0a0a0a] z-10">
        <a href="/" className="text-green-400 font-bold text-xl">🌿 WildDetector</a>
        <a href="/#download" className="bg-green-700 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full transition">
          Download
        </a>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16 flex gap-12">

        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col gap-2 min-w-48 sticky top-24 self-start text-sm">
          {[
            ["#overview",   "Overview"],
            ["#species",    "Species"],
            ["#detection",  "How Detection Works"],
            ["#pipeline",   "Detection Pipeline"],
            ["#settings",   "Settings"],
            ["#account",    "Account & Premium"],
            ["#history",    "My Detections"],
            ["#presets",    "Community Presets"],
            ["#tips",       "Tips & Tricks"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-gray-500 hover:text-green-400 transition py-0.5">
              {label}
            </a>
          ))}
        </aside>

        {/* Content */}
        <article className="flex-1 flex flex-col gap-16">

          {/* Overview */}
          <section id="overview">
            <h1 className="text-4xl font-extrabold mb-4">📖 WildDetector Guide</h1>
            <p className="text-gray-400 leading-relaxed">
              WildDetector is an Android app that uses on-device AI to detect wildlife — by sound and by sight —
              in real time. It works completely offline: no data is sent to any server during detection.
              When you are signed in, your detections can optionally be saved to the cloud and shown on a shared map.
            </p>
          </section>

          {/* Species */}
          <section id="species">
            <h2 className="text-2xl font-bold mb-6 text-green-400">🐾 Species</h2>
            <p className="text-gray-400 mb-6">
              When you open the app you choose which species to monitor. Each species has its own
              AI models and tuned settings.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { emoji: "🐝", name: "Pollinators (binary)",     models: "Audio CNN + Motion detector",  detail: "Detects pollinator presence by wing-beat frequency (~200–300 Hz). Binary: present or not. Works best 0.5–2 m from the hive or flowers." },
                { emoji: "🐸", name: "Amphibians (multiclass)", models: "Audio CNN",                    detail: "Identifies calls from multiple amphibian species. Multiclass: identifies the specific species detected. Works best at night near water sources." },
                { emoji: "🦜", name: "Avian (binary)",           models: "Audio CNN + AI visual",        detail: "Detects bird presence by song and visual. Binary: present or not. Can detect presence even without a visual." },
                { emoji: "🦎", name: "Reptiles (binary)",        models: "AI visual",                    detail: "Visual detection of reptiles at 10–15 FPS. Binary: present or not. Point the camera at the subject." },
                { emoji: "🔍", name: "General",               models: "Anomaly + Motion only",          detail: "No species-specific model. Uses anomaly detection and motion tracking to catch any unusual activity. Ideal for unknown species or custom field setups." },
              ].map(s => (
                <div key={s.name} className="bg-[#141414] border border-gray-800 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{s.emoji}</span>
                    <div>
                      <h3 className="font-bold">{s.name}</h3>
                      <span className="text-xs text-green-600">{s.models}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">{s.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How Detection Works */}
          <section id="detection">
            <h2 className="text-2xl font-bold mb-6 text-green-400">🔬 How Detection Works</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              WildDetector fuses three independent detection sources. Each can trigger independently
              or be chained in a pipeline.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: "🎙️",
                  title: "Audio Classification",
                  desc: "The microphone continuously captures audio. Every ~1 second, a CNN model classifies the sound and produces a probability score. When the score exceeds the threshold for several consecutive windows, a detection is fired.",
                },
                {
                  icon: "📷",
                  title: "AI Visual Detection",
                  desc: "The camera runs an on-device AI visual model on every frame. When the target species appears in multiple consecutive frames (configurable), a detection is triggered. Bounding boxes are drawn live on screen.",
                },
                {
                  icon: "⚡",
                  title: "Anomaly Detection",
                  desc: "An autoencoder model learns what 'normal' sounds and images look like during a calibration phase (~2 minutes). Once calibrated, anything outside the normal distribution triggers an anomaly alert — useful for catching rare events.",
                },
                {
                  icon: "🟡",
                  title: "Motion Detection",
                  desc: "A lightweight frame-differencing algorithm detects moving objects in the camera view. Motion is a trigger-only source — it wakes up other detectors but does not generate a standalone detection by itself.",
                },
              ].map(item => (
                <div key={item.title} className="bg-[#141414] border border-gray-800 rounded-xl p-5 flex gap-4">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pipeline */}
          <section id="pipeline">
            <h2 className="text-2xl font-bold mb-6 text-green-400">🔗 Detection Pipeline</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              By default every source fires independently. The pipeline lets you chain sources so that
              a detection is only recorded when multiple sources confirm the event in sequence.
              This dramatically reduces false positives.
            </p>
            <div className="bg-[#141414] border border-gray-800 rounded-xl p-5 font-mono text-sm text-gray-400 mb-4">
              <p className="text-green-400 mb-2"># Example: require motion then audio</p>
              <p>Stage 1 → Motion detected</p>
              <p>Stage 2 → Audio confirms within 10 s</p>
              <p className="text-yellow-500 mt-2">→ Detection recorded ✓</p>
            </div>
            <p className="text-gray-500 text-sm">
              You can configure the pipeline in <strong className="text-white">Settings → Pipeline Editor</strong>.
              Each stage has a 10-second timeout — if the next stage does not fire in time, the pipeline resets.
            </p>
          </section>

          {/* Settings */}
          <section id="settings">
            <h2 className="text-2xl font-bold mb-6 text-green-400">⚙️ Settings</h2>
            <div className="flex flex-col gap-6">

              <SettingGroup title="🎙️ Audio">
                <Setting name="Enable audio detection" desc="Turns the audio CNN classifier on or off. Disable if you only need visual detection to save battery." />
                <Setting name="Audio device" desc="Select the microphone to use. Useful if you connect an external USB microphone for better range." />
                <Setting name="Audio channel" desc="Left, Right, or Mixed. Use Left or Right when using a stereo directional microphone." />
                <Setting name="Consecutive windows" desc="How many consecutive high-probability windows are required before firing. Higher = fewer false positives. Default: 3." />
              </SettingGroup>

              <SettingGroup title="📷 Camera / YOLO">
                <Setting name="Enable AI visual detection" desc="Turns on the on-device AI visual model. Uses more CPU/GPU and battery." />
                <Setting name="Confidence threshold" desc="Minimum confidence (0–1) for the AI visual model to consider a detection valid. Default: 0.4." />
                <Setting name="Consecutive frames" desc="How many consecutive frames must contain the target before firing. Default: 3." />
                <Setting name="Burn bounding boxes" desc="Saves an annotated JPEG snapshot with boxes drawn on it to your gallery each time the AI visual detector fires." />
              </SettingGroup>

              <SettingGroup title="⚡ Anomaly Detection">
                <Setting name="Enable audio anomaly" desc="Trains an autoencoder on ambient sound during the first ~2 minutes, then alerts on anything unusual." />
                <Setting name="Enable video anomaly" desc="Same as audio anomaly but for the camera feed. Useful in fixed-camera setups." />
                <Setting name="Thresholds" desc="Automatically adapts based on your feedback (thumbs up / thumbs down on each anomaly card)." />
              </SettingGroup>

              <SettingGroup title="🟡 Motion">
                <Setting name="Sensitivity (1–10)" desc="How easily motion is detected. High sensitivity picks up insects; low sensitivity ignores leaves and camera shake." />
                <Setting name="Max blob size (px)" desc="Maximum size of a detected moving object. Set small to detect insects; large to detect mammals." />
                <Setting name="Min speed (px/frame)" desc="Minimum speed a blob must travel to count as motion. Filters out slow camera drift." />
                <Setting name="Show trail" desc="Draws the path of each moving object on screen for visual feedback." />
              </SettingGroup>

              <SettingGroup title="🎬 Video Recording">
                <Setting name="Save video clips" desc="Automatically records a video clip around each detection event." />
                <Setting name="Pre-roll (seconds)" desc="How many seconds before the detection to include in the clip. Default: 5 s." />
                <Setting name="Post-roll (seconds)" desc="How many seconds after the detection to continue recording. Default: 5 s." />
              </SettingGroup>

              <SettingGroup title="🔋 Battery & Screen">
                <Setting name="Keep screen on" desc="Prevents the screen from turning off during a detection session. Recommended for field use." />
                <Setting name="Samsung: Never sleeping apps" desc="On Samsung devices, add WildDetector to Settings → Battery → Never sleeping apps to ensure background detection keeps running with the screen off." />
              </SettingGroup>

              <SettingGroup title="💾 Presets">
                <Setting name="Save preset" desc="Saves all current settings under a name so you can switch between configurations quickly." />
                <Setting name="Load preset" desc="Restores a previously saved configuration." />
              </SettingGroup>

            </div>
          </section>

          {/* Account & Premium */}
          <section id="account">
            <h2 className="text-2xl font-bold mb-6 text-green-400">👤 Account & Premium</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              WildDetector works fully offline without an account. Signing in unlocks cloud features.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { tier: "Guest",   color: "border-gray-700", features: ["3-min sessions", "All detectors", "Local session log", "Nothing saved to cloud"] },
                { tier: "Signed In (Free)", color: "border-blue-700", features: ["3-min sessions", "Detections saved to cloud", "GPS coordinates logged", "Public on live map", "My Detections history"] },
                { tier: "Premium", color: "border-green-500", features: ["Unlimited sessions", "Everything in Free", "Private detections option", "$10 / month or $80 / year"] },
              ].map(t => (
                <div key={t.tier} className={`bg-[#141414] border-2 ${t.color} rounded-xl p-4`}>
                  <h3 className="font-bold mb-3">{t.tier}</h3>
                  <ul className="flex flex-col gap-1.5 text-sm text-gray-400">
                    {t.features.map(f => <li key={f}>✓ {f}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Sign in with Google from the <strong className="text-white">species selector screen</strong> (tap the account button at the bottom).
              Subscriptions are managed through Google Play and can be cancelled at any time.
              Premium status is cached for up to 35 days offline (monthly) or 370 days (annual).
            </p>
          </section>

          {/* My Detections */}
          <section id="history">
            <h2 className="text-2xl font-bold mb-6 text-green-400">📋 My Detections</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Every detection made while signed in is saved to your personal history, organized by session.
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <div className="bg-[#141414] border border-gray-800 rounded-xl p-4">
                <strong className="text-white block mb-1">Sessions</strong>
                Each time you press Start, a new session is created. All detections from that run are grouped under one session header showing the date, time, and count.
              </div>
              <div className="bg-[#141414] border border-gray-800 rounded-xl p-4">
                <strong className="text-white block mb-1">Deleting detections</strong>
                Swipe any detection left or right to delete it. It is removed from both the app and the cloud immediately.
              </div>
              <div className="bg-[#141414] border border-gray-800 rounded-xl p-4">
                <strong className="text-white block mb-1">Public vs Private</strong>
                Free users always share data publicly. Premium users can toggle sharing per-account in Settings → Account → Share detections publicly.
              </div>
            </div>
          </section>

          {/* Community Presets */}
          <section id="presets">
            <h2 className="text-2xl font-bold mb-6 text-green-400">🌐 Community Presets</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Presets let you save your current detection settings under a name and share them with other users.
              Free users can browse and apply public presets from the community.
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <div className="bg-[#141414] border border-gray-800 rounded-xl p-4">
                <strong className="text-white block mb-1">Saving a preset</strong>
                In Settings → Presets, tap <em>Save preset</em>, give it a name, and choose whether to make it public or keep it private.
              </div>
              <div className="bg-[#141414] border border-gray-800 rounded-xl p-4">
                <strong className="text-white block mb-1">Browsing community presets</strong>
                Tap <em>Community presets</em> in Settings → Presets to see public presets from other users for the current species. Tap any preset to apply it instantly.
              </div>
              <div className="bg-[#141414] border border-gray-800 rounded-xl p-4">
                <strong className="text-white block mb-1">Deleting your preset</strong>
                Long-press any of your own public presets in the community list to delete it.
              </div>
            </div>
          </section>

          {/* Tips */}
          <section id="tips">
            <h2 className="text-2xl font-bold mb-6 text-green-400">💡 Tips & Tricks</h2>
            <div className="flex flex-col gap-3">
              {[
                { tip: "Use an external USB microphone", detail: "A directional or parabolic microphone connected via USB OTG dramatically increases detection range. Select it in Settings → Audio device." },
                { tip: "Set pipeline for fewer false positives", detail: "Chain Motion → Audio or Motion → AI visual so the app only records confirmed events, not background noise." },
                { tip: "Calibrate anomaly detection first", detail: "Start a session and wait 2 minutes without the target species present. The anomaly detector learns the background and becomes much more accurate." },
                { tip: "Use pre-roll to never miss the moment", detail: "Set a 10-second pre-roll so that when a detection fires, the video clip includes the approach, not just the aftermath." },
                { tip: "Samsung users: add to Never Sleeping Apps", detail: "Without this, Samsung's aggressive battery manager kills the background service within minutes of the screen turning off." },
                { tip: "GPS must be enabled", detail: "The app requires location access to tag detections with coordinates. Make sure GPS is on before starting a session." },
              ].map(item => (
                <div key={item.tip} className="bg-[#141414] border border-gray-800 rounded-xl p-4">
                  <h3 className="font-semibold text-white mb-1">→ {item.tip}</h3>
                  <p className="text-gray-500 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

        </article>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-700 text-sm py-8 border-t border-gray-900 mt-8">
        © {new Date().getFullYear()} WildDetector · <a href="/" className="hover:text-green-400 transition">Back to home</a>
      </footer>

    </main>
  );
}

function SettingGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-3">{title}</h3>
      <div className="flex flex-col gap-2 pl-2 border-l-2 border-gray-800">
        {children}
      </div>
    </div>
  );
}

function Setting({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="py-2">
      <span className="text-white text-sm font-medium">{name}</span>
      <p className="text-gray-500 text-sm mt-0.5">{desc}</p>
    </div>
  );
}
