import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BackgroundDecorations } from "./BackgroundDecorations";

// =============================================
// 📸 แก้ไข captions และ URL รูปภาพที่นี่ได้เลย!
// =============================================
const LEFT_TEXT = `Happy birthday,Lilian! Life is always more fun with you. Thank you for filling my days with laughter and love.`;

const HEADER = "More memories, more adventures, more moments with you, my love";

const PHOTOS = {
  p1: "/images/IMG_3768.mov",
  p2: "/images/3_pic.jpg",
  p3: "/images/copy.mov",
  p4: "/images/5_pic.jpg",
  p5: "/images/6_pic.jpg",
  p6: "/images/second_1.jpg",
  p7: "/images/2_pic.jpg",
  p8: "/images/IMG_4569.mov",
  p9: "/images/4_pic.jpg",
};

const CAPTIONS = {
  c1: "Every moment with you feels like a beautiful sunset. Happy birthday to the one who makes my world brighter na kub .",
  c2: "Your arms will always be my favorite place. Happy birthday to the one who holds my heart na kub.",
  c3: "No matter where we are, as long as I'm with you,",
  c4: "My favorite road trips are the ones with you. Happy birthday to my partner in everything kub.",
  c5: "I'm so proud of the amazing person you are. Happy birthday. I'll always be cheering for you kub. ♥",
  c6: "Forever grateful for every single day with you. Happy birthday,Lilian. ♥",
  c7: "You are my greatest gift. Happy birthday, forever yours. ♥",
};
// =============================================

/* Stamp border component */
function StampFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative"
      style={{
        background: "white",
        padding: "6px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
      }}
    >
      {/* Inner dashed perforated border */}
      <div
        style={{
          position: "absolute",
          inset: "3px",
          border: "1.5px dashed rgba(0,0,0,0.25)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      {children}
    </div>
  );
}

/* Polaroid style frame */
function PolaroidFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "white",
        padding: "8px 8px 24px 8px",
        boxShadow: "4px 6px 20px rgba(0,0,0,0.6)",
      }}
    >
      {children}
      <div
        style={{
          marginTop: "6px",
          height: "3px",
          background: "repeating-linear-gradient(90deg, #ff6b9d 0px, #ff6b9d 2px, transparent 2px, transparent 4px)",
        }}
      />
    </div>
  );
}

/* Colored border frame */
function ColoredFrame({ children, color = "#ff6b9d" }: { children: React.ReactNode; color?: string }) {
  return (
    <div
      style={{
        background: color,
        padding: "4px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ background: "white", padding: "6px" }}>
        {children}
      </div>
    </div>
  );
}

/* Dotted frame */
function DottedFrame({ children, color = "#c9a96e" }: { children: React.ReactNode; color?: string }) {
  return (
    <div
      style={{
        padding: "6px",
        border: `2px dotted ${color}`,
        background: "transparent",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      {children}
    </div>
  );
}

/* Plain frame (white border) */
function PlainFrame({ children, bw = false }: { children: React.ReactNode; bw?: boolean }) {
  return (
    <div
      style={{
        background: "transparent",
        filter: bw ? "grayscale(100%) contrast(1.1)" : undefined,
      }}
    >
      {children}
    </div>
  );
}

type FrameType = "stamp" | "plain" | "polaroid" | "pink" | "yellow" | "cyan" | "dotted";

function Photo({
  src,
  alt,
  width,
  height,
  frame = "plain",
  rotate = 0,
  delay = 0,
  inView,
}: {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  frame?: FrameType;
  rotate?: number;
  delay?: number;
  inView: boolean;
}) {
  // Detect if it's a video or image
  const isVideo = /\.(mov|mp4|webm|avi|mkv)$/i.test(src);

  const content = isVideo ? (
    <video
      src={src}
      autoPlay
      loop
      muted
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        objectFit: "cover",
        display: "block",
        filter: (frame === "bw" || frame === "bw-stamp") ? "grayscale(100%) contrast(1.1)" : undefined,
      }}
    />
  ) : (
    <ImageWithFallback
      src={src}
      alt={alt}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        objectFit: "cover",
        display: "block",
        filter: (frame === "bw" || frame === "bw-stamp") ? "grayscale(100%) contrast(1.1)" : undefined,
      }}
    />
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotate - 4 }}
      animate={inView ? { opacity: 1, y: 0, rotate } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 50 }}
      style={{ flexShrink: 0 }}
    >
      {frame === "stamp" && <StampFrame>{content}</StampFrame>}
      {frame === "polaroid" && <PolaroidFrame>{content}</PolaroidFrame>}
      {frame === "pink" && <ColoredFrame color="#ff6b9d">{content}</ColoredFrame>}
      {frame === "yellow" && <ColoredFrame color="#ffd700">{content}</ColoredFrame>}
      {frame === "cyan" && <ColoredFrame color="#00d9ff">{content}</ColoredFrame>}
      {frame === "dotted" && <DottedFrame>{content}</DottedFrame>}
      {frame === "plain" && <PlainFrame>{content}</PlainFrame>}
    </motion.div>
  );
}

function Caption({
  text,
  delay,
  inView,
  align = "left",
}: {
  text: string;
  delay: number;
  inView: boolean;
  align?: "left" | "right";
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        fontFamily: "'Caveat', cursive",
        fontSize: "clamp(0.7rem, 1.3vw, 0.85rem)",
        color: "rgba(255,255,255,0.85)",
        lineHeight: 1.55,
        textAlign: align,
        maxWidth: "200px",
      }}
    >
      {text}
    </motion.p>
  );
}

export function MemoryWallSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-12 px-3 md:px-6 overflow-hidden"
      style={{ background: "#0a0a0c", minHeight: "100vh" }}
    >
      {/* Background decorations */}
      <BackgroundDecorations />

      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 mx-auto"
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: "clamp(0.8rem, 1.8vw, 1rem)",
          color: "rgba(255,255,255,0.75)",
          letterSpacing: "0.03em",
          maxWidth: "480px",
        }}
      >
        {HEADER}
      </motion.p>

      {/* Main layout: left text + collage */}
      <div className="flex items-start gap-3 md:gap-5 max-w-6xl mx-auto">

        {/* ── Left vertical birthday text ── */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            flexShrink: 0,
            width: "clamp(60px, 7vw, 88px)",
            fontFamily: "'Caveat', cursive",
            fontSize: "clamp(0.65rem, 1.2vw, 0.78rem)",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.65,
            paddingTop: "4px",
          }}
        >
          {LEFT_TEXT}
        </motion.div>

        {/* ── Collage area ── */}
        <div className="flex-1 flex flex-col gap-5">

          {/* ── ROW 1 ── */}
          <div className="flex flex-wrap items-end gap-3 md:gap-4">

            {/* Photo 1: Large, no frame */}
            <Photo
              src={PHOTOS.p1}
              alt="memory 1"
              width="clamp(160px, 25vw, 280px)"
              height="clamp(150px, 23vw, 260px)"
              frame="plain"
              rotate={-1}
              delay={0.15}
              inView={inView}
            />

            {/* Photo 2 + caption below */}
            <div className="flex flex-col gap-2">
              <Photo
                src={PHOTOS.p2}
                alt="memory 2"
                width="clamp(130px, 19vw, 210px)"
                height="clamp(120px, 17vw, 185px)"
                frame="pink"
                rotate={2}
                delay={0.25}
                inView={inView}
              />
              <Caption text={CAPTIONS.c1} delay={0.6} inView={inView} />
            </div>

            {/* Photo 3: Large */}
            <Photo
              src={PHOTOS.p3}
              alt="memory 3"
              width="clamp(170px, 27vw, 320px)"
              height="clamp(150px, 23vw, 270px)"
              frame="polaroid"
              rotate={-0.5}
              delay={0.2}
              inView={inView}
            />
          </div>

          {/* ── ROW 2 ── */}
          <div className="flex flex-wrap items-start gap-3 md:gap-4 mt-8">

            {/* Photo 4 + caption below */}
            <div className="flex flex-col gap-2">
              <Photo
                src={PHOTOS.p4}
                alt="memory 4"
                width="clamp(140px, 20vw, 240px)"
                height="clamp(140px, 20vw, 240px)"
                frame="yellow"
                rotate={-2}
                delay={0.3}
                inView={inView}
              />
              <Caption text={CAPTIONS.c2} delay={0.7} inView={inView} />
            </div>

            {/* Caption left + Photo 5 B&W stamp */}
            <div className="flex flex-col justify-start gap-2 pt-2">
              <Caption text={CAPTIONS.c3} delay={0.65} inView={inView} />
              <Photo
                src={PHOTOS.p5}
                alt="memory 5"
                width="clamp(120px, 18vw, 200px)"
                height="clamp(110px, 16vw, 175px)"
                frame="cyan"
                rotate={3}
                delay={0.35}
                inView={inView}
              />
            </div>

            {/* Photo 6 color + caption below */}
            <div className="flex flex-col gap-2">
              <Photo
                src={PHOTOS.p6}
                alt="memory 6"
                width="clamp(140px, 20vw, 240px)"
                height="clamp(130px, 19vw, 220px)"
                frame="dotted"
                rotate={-1.5}
                delay={0.25}
                inView={inView}
              />
              <Caption text={CAPTIONS.c4} delay={0.75} inView={inView} />
            </div>

            {/* Photo 7 small stamp + caption */}
            <div className="flex flex-col gap-2 pt-3">
              <Photo
                src={PHOTOS.p7}
                alt="memory 7"
                width="clamp(110px, 16vw, 175px)"
                height="clamp(110px, 15vw, 165px)"
                frame="stamp"
                rotate={2.5}
                delay={0.4}
                inView={inView}
              />
              <Caption text={CAPTIONS.c5} delay={0.8} inView={inView} />
            </div>

            {/* Photo 8 + caption below */}
            <div className="flex flex-col gap-2">
              <Photo
                src={PHOTOS.p8}
                alt="memory 8"
                width="clamp(130px, 19vw, 210px)"
                height="clamp(120px, 17vw, 185px)"
                frame="polaroid"
                rotate={-1}
                delay={0.45}
                inView={inView}
              />
              <Caption text={CAPTIONS.c6} delay={0.85} inView={inView} />
            </div>

            {/* Photo 9 tall portrait + caption below */}
            <div className="flex flex-col gap-2">
              <Photo
                src={PHOTOS.p9}
                alt="memory 9"
                width="clamp(140px, 18vw, 200px)"
                height="clamp(260px, 40vw, 380px)"
                frame="pink"
                rotate={3.5}
                delay={0.5}
                inView={inView}
              />
              <Caption text={CAPTIONS.c7} delay={0.9} inView={inView} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}