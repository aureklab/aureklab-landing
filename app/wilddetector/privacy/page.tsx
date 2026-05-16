export default function Privacy() {
  const updated = "May 16, 2026";

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <a href="/" className="text-green-400 font-bold text-xl">🌿 WildDetector</a>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-8 text-gray-300 leading-relaxed">

        <div>
          <h1 className="text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: {updated}</p>
        </div>

        <p>
          WildDetector ("we", "our", or "us") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard information
          when you use the WildDetector Android application.
        </p>

        <Section title="1. Information We Collect">
          <p>We collect the following information only when you are signed in:</p>
          <ul className="list-disc list-inside mt-2 flex flex-col gap-1 text-gray-400">
            <li><strong className="text-white">Account information</strong> — your Google account email and user ID, used to identify your detections.</li>
            <li><strong className="text-white">Detection data</strong> — species detected, probability score, detection source (audio/video), date and time.</li>
            <li><strong className="text-white">Location data</strong> — GPS coordinates at the moment of detection, used to place detections on the map.</li>
          </ul>
          <p className="mt-3">
            If you use the app without signing in, no data is collected or transmitted.
            All AI detection runs entirely on your device — no audio or video is ever sent to our servers.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc list-inside flex flex-col gap-1 text-gray-400">
            <li>To save your detection history and make it accessible across devices.</li>
            <li>To display public detections on the live map (only if you have enabled public sharing).</li>
            <li>To provide and improve the WildDetector service.</li>
          </ul>
          <p className="mt-3">
            We do not sell, rent, or share your personal information with third parties
            for marketing purposes.
          </p>
        </Section>

        <Section title="3. Data Sharing">
          <p>
            Detection data marked as <strong className="text-white">public</strong> by you is visible
            to all users on the live map. Detection data marked as
            <strong className="text-white"> private</strong> (available to Premium subscribers)
            is only accessible to you.
          </p>
          <p className="mt-3">
            We use the following third-party services which have their own privacy policies:
          </p>
          <ul className="list-disc list-inside mt-2 flex flex-col gap-1 text-gray-400">
            <li><strong className="text-white">Google Firebase</strong> — authentication and cloud database.</li>
            <li><strong className="text-white">Google Play Billing</strong> — subscription payments.</li>
            <li><strong className="text-white">Google Sign-In</strong> — account authentication.</li>
          </ul>
        </Section>

        <Section title="4. Location Data">
          <p>
            The app requires location permission to tag detections with GPS coordinates.
            Location is only recorded at the moment a detection occurs — we do not track
            your location continuously. Location data is stored in Firebase and associated
            with your account.
          </p>
        </Section>

        <Section title="5. Data Retention and Deletion">
          <p>
            Your detection data is stored as long as your account is active.
            You can delete individual detections at any time from the
            <strong className="text-white"> My Detections</strong> screen (swipe to delete).
            To delete your account and all associated data, contact us at the email below.
          </p>
        </Section>

        <Section title="6. Children's Privacy">
          <p>
            WildDetector is not directed to children under 13. We do not knowingly collect
            personal information from children under 13.
          </p>
        </Section>

        <Section title="7. Security">
          <p>
            We use industry-standard security measures including Firebase Authentication
            and Firestore security rules to protect your data. No audio or video is ever
            transmitted — all AI processing happens on-device.
          </p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted
            on this page with an updated date. Continued use of the app after changes
            constitutes acceptance of the new policy.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>
            If you have any questions about this Privacy Policy or wish to delete your data,
            please contact us at:
          </p>
          <p className="mt-2 text-green-400 font-mono">aureklab@gmail.com</p>
        </Section>

      </article>

      {/* Footer */}
      <footer className="text-center text-gray-700 text-sm py-8 border-t border-gray-900">
        © {new Date().getFullYear()} Aureklab · WildDetector ·{" "}
        <a href="/" className="hover:text-green-400 transition">Home</a>
      </footer>

    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      {children}
    </section>
  );
}
