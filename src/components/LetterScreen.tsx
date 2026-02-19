import sunflowerBg from "@/assets/sunflower-bg.jpg";

export default function LetterScreen() {
  return (
    <div
      className="relative min-h-screen w-full grain-overlay vignette overflow-x-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* Background — slightly dimmed for readability */}
      <div
        className="fixed sunflower-sway"
        style={{
          inset: "-8%",
          backgroundImage: `url(${sunflowerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.42) saturate(0.5) sepia(0.35)",
          zIndex: -1,
        }}
      />

      {/* Warm dark overlay for legibility */}
      <div
        className="fixed inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18,12,5,0.65) 0%, rgba(18,12,5,0.52) 60%, rgba(18,12,5,0.7) 100%)",
          zIndex: -1,
        }}
      />

      {/* Letter content */}
      <div className="relative z-10 max-w-2xl mx-auto px-7 py-20 md:py-28 dissolve-in">
        {/* Date-like marker */}
        <p
          className="mb-14 tracking-widest text-xs uppercase text-center"
          style={{ color: "hsl(38, 30%, 62%)", opacity: 0.7 }}
        >
          — a letter, unscheduled —
        </p>

        {/* Salutation Header */}
        <p
          className="letter-paragraph mb-10 italic text-3xl font-light"
          style={{
            color: "hsl(38, 38%, 88%)",
            lineHeight: 1.55,
          }}
        >
          hon,
        </p>

        <div
          style={{
            color: "hsl(36, 22%, 80%)",
            fontSize: "1.175rem",
            lineHeight: 1.92,
            fontWeight: 300,
          }}
        >
          <p className="letter-paragraph mb-8">
            Some connections do not arrive with noise. They settle in quietly. One
            day you realize they have become part of your everyday, and you cannot
            remember when that shift happened.
          </p>

          <p className="letter-paragraph mb-8">
            The 14th was ordinary on paper. Yet since then, our words have found
            each other every single day. Not out of obligation. Not out of
            planning. Just naturally. And there is something very beautiful about
            that.
          </p>

          <p className="letter-paragraph mb-8">
            Thank you for the way you show up in conversations. For listening
            beyond words. For understanding without making someone explain
            themselves into exhaustion. When you once said,{" "}
            <em
              style={{
                color: "hsl(42, 35%, 76%)",
                fontStyle: "italic",
              }}
            >
              “You don’t need to overexplain. I understand,”
            </em>{" "}
            it carried more weight than you probably intended. Being understood
            without defense is a rare form of safety. You offer it gently, as if it
            costs you nothing.
          </p>

          <p className="letter-paragraph mb-8">
            I admire that about you.
          </p>

          <p className="letter-paragraph mb-8">
            There is a steadiness in you. A pause before you speak. A calm even
            when your thoughts are racing ahead. You write poetry, but more than
            that, you embody it. In your softness. In your quiet strength. In the
            way you reassure without making it theatrical.
          </p>

          <p className="letter-paragraph mb-8">
            You love sunflowers. They do not chase light anxiously. They simply
            turn toward it when it is there. Grounded. Certain of their nature.
            There is something in that which feels familiar when I think of you.
          </p>

          <p className="letter-paragraph mb-8">
            If this message could be anything this morning, I hope it feels like a
            gentle presence beside you. Not loud. Not demanding. Just warm. Like
            something that quietly reminds you that you are valued exactly as you
            are.
          </p>

          <p className="letter-paragraph mb-8">
            On your birthday, I hope this year gives you clarity. I hope it gives
            you gentleness. I hope it meets you with the same steadiness you carry
            within yourself without even trying.
          </p>

          <p className="letter-paragraph mb-8">
            Thank you for being part of my everyday in a way that feels simple and
            real.
          </p>

          <p
            className="letter-paragraph mt-16 italic text-xl leading-relaxed"
            style={{
              color: "hsl(42, 35%, 78%)",
              fontSize: "1.25rem",
              lineHeight: 1.65,
            }}
          >
            Happy Birthday, sunflower. 🌻
          </p>
        </div>

        {/* Footer flourish */}
        <div className="mt-20 mb-8 text-center letter-paragraph">
          <span
            style={{
              color: "hsl(38, 28%, 52%)",
              fontSize: "1.3rem",
              letterSpacing: "0.6em",
            }}
          >
            ✦ ✦ ✦
          </span>
        </div>
      </div>
    </div>
  );
}
