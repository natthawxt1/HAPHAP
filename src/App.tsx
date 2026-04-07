import "./Styles/fonts.css";
import { HeroSection } from "./App/Components/HeroSection";
import { ScrapbookSection } from "./App/Components/ScrapbookSection";
import { MemoryWallSection } from "./App/Components/MemoryWallSection";
import { BackgroundDecorations } from "./App/Components/BackgroundDecorations";

export default function App() {
  return (
    <div
      className="w-full min-h-screen"
      style={{ background: "#0a0a0c", overflowX: "hidden" }}
    >
      <BackgroundDecorations />

      {/* Section 1: Hero - "pov: it's your birthday" */}
      <HeroSection />

      {/* Section 2: Scrapbook journal style */}
      <ScrapbookSection />

      {/* Transition divider */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)",
        }}
      />

      {/* Section 3: Memory Wall */}
      <MemoryWallSection />
    </div>
  );
}
