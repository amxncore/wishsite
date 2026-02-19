import { useState } from "react";
import LandingScreen from "@/components/LandingScreen";
import LetterScreen from "@/components/LetterScreen";

type Screen = "landing" | "dissolving" | "letter";

export default function Index() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [opacity, setOpacity] = useState(1);

  const handleOpen = () => {
    // Begin dissolve: fade out landing
    setOpacity(0);
    // After fade out, switch screen
    setTimeout(() => {
      setScreen("letter");
      setOpacity(1);
    }, 1800);
    setScreen("dissolving");
  };

  return (
    <div
      style={{
        transition: "opacity 1.8s ease-in-out",
        opacity,
        minHeight: "100vh",
      }}
    >
      {screen === "landing" || screen === "dissolving" ? (
        <LandingScreen onOpen={handleOpen} />
      ) : (
        <LetterScreen />
      )}
    </div>
  );
}
