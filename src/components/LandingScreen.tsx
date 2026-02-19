import sunflowerBg from "@/assets/sunflower-bg.jpg";

interface LandingScreenProps {
  onOpen: () => void;
}

export default function LandingScreen({ onOpen }: LandingScreenProps) {
  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center grain-overlay vignette overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* Background */}
      <div className="absolute inset-[-8%] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center sunflower-sway"
          style={{
            backgroundImage: `url(${sunflowerBg})`,
            filter: "brightness(0.72) saturate(0.65) sepia(0.28)",
          }}
        />
      </div>

      {/* Warm overlay wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(38,28,14,0.35) 0%, rgba(28,20,10,0.18) 50%, rgba(38,28,14,0.42) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-2xl mx-auto fade-in-slow">
        <p
          className="mb-3 tracking-[0.35em] uppercase text-xs"
          style={{
            color: "hsl(38, 35%, 72%)",
            opacity: 0.75,
            letterSpacing: "0.3em",
          }}
        >
          — for you —
        </p>

        <h1
          className="mb-12 leading-tight font-light italic"
          style={{
            color: "hsl(38, 40%, 90%)",
            fontSize: "clamp(1.9rem, 5vw, 3.2rem)",
            lineHeight: 1.38,
            textShadow: "0 2px 18px rgba(20,12,4,0.45)",
            fontWeight: 300,
          }}
        >
          A Page That Exists
          <br />
          Just For You Today.
        </h1>

        <button
          onClick={onOpen}
          style={{
            background: "transparent",
            border: "1px solid hsl(38, 35%, 72%)",
            color: "hsl(38, 40%, 88%)",
            padding: "0.65rem 2.6rem",
            fontSize: "0.78rem",
            letterSpacing: "0.28em",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 400,
            cursor: "pointer",
            transition: "all 1.4s ease",
            textTransform: "uppercase",
            backdropFilter: "blur(2px)",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background =
              "rgba(200,178,130,0.12)";
            (e.target as HTMLButtonElement).style.borderColor =
              "hsl(38, 42%, 82%)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = "transparent";
            (e.target as HTMLButtonElement).style.borderColor =
              "hsl(38, 35%, 72%)";
          }}
        >
          Open
        </button>
      </div>
    </div>
  );
}
