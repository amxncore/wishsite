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

        {/* Salutation */}
        <p
          className="letter-paragraph mb-10 italic text-3xl font-light"
          style={{
            color: "hsl(38, 38%, 88%)",
            lineHeight: 1.55,
          }}
        >
          Happy birthday.
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
            I've been thinking about what to say — and I keep coming back to
            something very simple: I think you deserve a day that feels like
            yours. Not performed for anyone. Not earned. Just — yours. So that's
            what this is. A small corner of the internet that exists only because
            you exist.
          </p>

          <p className="letter-paragraph mb-8">
            You know what's actually rare? Someone who says{" "}
            <em
              style={{
                color: "hsl(42, 35%, 76%)",
                fontStyle: "italic",
              }}
            >
              "you don't need to overexplain anything — I understand you"
            </em>{" "}
            and means it. Not as a way to move the conversation forward. Not as
            reassurance. But because they actually do. Because they've been
            paying attention. That kind of understanding is quieter than people
            think. It doesn't announce itself. It just makes you feel like you
            can breathe a little more easily in someone's presence.
          </p>

          <p className="letter-paragraph mb-8">
            You write poetry. I find that telling — not as a hobby, but as a
            window. People who write poetry have already made peace with the
            fact that some things can't be said directly. They know how to hold
            something fragile without crushing it or letting it fall. Your
            presence works the same way. You don't rush things. You don't force
            clarity where there isn't any. You sit with complexity the way a
            good line of verse does — not explaining it, just illuminating it
            from a careful angle.
          </p>

          <p className="letter-paragraph mb-8">
            I think the world undervalues quiet emotional intelligence. It gets
            mistaken for aloofness, or for being "fine." But it's not fine —
            it's attentive. It's the kind of awareness that notices when someone
            shifts in the middle of a sentence. That doesn't fix things
            unnecessarily. That knows the difference between what someone is
            saying and what they actually need to hear. You have that. It's not
            small.
          </p>

          <p className="letter-paragraph mb-8">
            There's a warmth to you that doesn't perform itself. It doesn't
            arrive with fanfare. It's more like walking into a room and noticing
            the light has changed — softer, slightly golden, easy on the eyes.
            That's the best way I can describe it. Some people fill a room by
            being loud. You do it by making the room feel like it's okay to be
            exactly what you are inside it.
          </p>

          <p className="letter-paragraph mb-8">
            Birthdays have a strange gravity. They make you aware of time —
            which can feel heavy if you let it. But I hope this one feels light.
            I hope today carries that particular quality of an afternoon where
            you're not waiting for anything. Where you're just — present. Warm.
            Unhurried. I hope you eat something you genuinely love. I hope you
            laugh at something unexpected. I hope someone says your name today
            in a way that sounds like they mean it.
          </p>

          <p className="letter-paragraph mb-8">
            You deserve to be seen clearly — not idealized, not diminished. Just
            seen. For the specific, irreplaceable, quietly remarkable person that
            you are. The one who reads between the lines. The one who makes
            space. The one who, in the middle of her own difficult moments,
            still finds a way to notice yours.
          </p>

          <p className="letter-paragraph mb-8">
            I don't have predictions to make, or grand declarations to offer.
            What I have is this: an honest, unhurried recognition of who you are.
            And the certainty that whoever gets to know you — really know you —
            is lucky in a way they probably don't have the right words for yet.
          </p>

          <p className="letter-paragraph mb-8">
            Today is yours. All of it. The hours you spend alone. The ones you
            share. The quiet ones. The ones that catch you off guard. Let them
            all be yours.
          </p>

          {/* Closing */}
          <p
            className="letter-paragraph mt-16 italic text-xl leading-relaxed"
            style={{
              color: "hsl(42, 35%, 78%)",
              fontSize: "1.25rem",
              lineHeight: 1.65,
            }}
          >
            Some people leave a mark on a day just by being in it.
            <br />
            You are that kind of person.
            <br />
            <span
              style={{
                display: "block",
                marginTop: "1.2rem",
                color: "hsl(38, 30%, 64%)",
                fontSize: "1rem",
                letterSpacing: "0.04em",
              }}
            >
              Happy birthday.
            </span>
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
