import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BackgroundDecorations } from "./BackgroundDecorations";

// =============================================
// 🎂 แก้ไขข้อความและรูปภาพที่นี่ได้เลย!
// =============================================
const BIRTHDAY_AGE = "20";
const BIRTHDAY_NAME = "Lilian";
const BIRTHDAY_MESSAGE = `Happy Birthday to my girlfriend ${BIRTHDAY_NAME}. \nLife is so much better with you in it. \nI hope your day is as amazing as you are. \nI love you kub! 🎂`;
const PHOTO_MAIN = "/images/dOg_1.jpg";
const PHOTO_POLAROID = "/images/portrait.jpg";
// =============================================

const stars = [
  { top: "8%", left: "10%", rotate: 20, size: 24, delay: 0.2 },
  { top: "12%", left: "78%", rotate: -15, size: 20, delay: 0.4 },
  { top: "70%", left: "6%", rotate: 10, size: 18, delay: 0.6 },
  { top: "78%", left: "85%", rotate: -30, size: 22, delay: 0.3 },
  { top: "42%", left: "92%", rotate: 25, size: 16, delay: 0.5 },
  { top: "55%", left: "4%", rotate: -10, size: 14, delay: 0.7 },
];

function Star({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#c9a96e">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

export function ScrapbookSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-16 px-4"
      style={{ background: "#0a0a0c" }}
    >
      {/* Background decorations */}
      <BackgroundDecorations />

      {/* Section label - removed */}

      {/* Main scrapbook card — wider & taller */}
      <motion.div
        initial={{ opacity: 0, rotateY: -18, scale: 0.88 }}
        animate={inView ? { opacity: 1, rotateY: 0, scale: 1 } : {}}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full z-10"
        style={{ maxWidth: "min(920px, 96vw)", perspective: "1200px" }}
      >
        {/* Paper card */}
        <div
          className="relative rounded-sm overflow-visible"
          style={{
            background: "linear-gradient(135deg, #f6f1e9 0%, #ede7d9 45%, #e8dfd0 100%)",
            boxShadow:
              "0 28px 80px rgba(0,0,0,0.7), 0 6px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.6)",
            minHeight: "clamp(360px, 50vw, 480px)",
          }}
        >
          {/* Paper texture lines */}
          <div
            className="absolute inset-0 pointer-events-none rounded-sm"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(180,160,120,0.25) 28px)",
            }}
          />

          {/* Spiral binding top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-5 z-20">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-6 rounded-full border-2 border-gray-400"
                style={{ background: "#888", marginTop: "-8px", boxShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
              />
            ))}
          </div>

          {/* Lucky star badge */}
          <motion.div
            className="absolute top-8 left-8 z-20"
            initial={{ rotate: -20, scale: 0 }}
            animate={inView ? { rotate: -15, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <div className="relative" style={{ width: 64, height: 64 }}>
              <svg viewBox="0 0 50 50" width="64" height="64">
                <polygon
                  points="25,5 30,20 46,20 33,30 38,46 25,36 12,46 17,30 4,20 20,20"
                  fill="#b8b8b8"
                  stroke="#999"
                  strokeWidth="1"
                />
              </svg>
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "7px",
                  color: "#555",
                  lineHeight: 1.2,
                  textAlign: "center",
                  paddingTop: "4px",
                }}
              >
                <span>you are</span>
                <span>my lucky</span>
                <span>star ✦</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
            {/* ── Left page ── */}
            <div className="relative p-8 md:p-10 pt-16 flex flex-col items-center">
              {/* Age number with floating photo */}
              <motion.div
                className="relative flex items-center justify-center mb-3"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 140 }}
              >
                <span
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: "clamp(5.5rem, 14vw, 8.5rem)",
                    color: "#3a6db5",
                    lineHeight: 1,
                    fontWeight: 700,
                    textShadow: "4px 4px 0 rgba(58,109,181,0.18)",
                  }}
                >
                  {BIRTHDAY_AGE}
                </span>

                {/* Face circle */}
                <motion.div
                  className="absolute overflow-hidden rounded-full border-2 border-gray-300"
                  style={{
                    width: 72,
                    height: 72,
                    top: "-22px",
                    left: "50%",
                    transform: "translateX(-32%)",
                    background: "#e0d8cc",
                    boxShadow: "0 3px 12px rgba(0,0,0,0.18)",
                  }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ImageWithFallback
                    src={PHOTO_MAIN}
                    alt="Photo"
                    className="w-full h-full object-cover"
                    style={{ filter: "grayscale(20%)" }}
                  />
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2"
                    style={{ fontSize: "1.8rem", marginTop: "-20px" }}
                  >
                    🎉
                  </div>
                </motion.div>
              </motion.div>

              {/* Birthday Cake */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                {/* Top decorative line */}
                <div
                  style={{
                    width: "80px",
                    height: "1px",
                    background: "#999",
                    marginBottom: "8px",
                  }}
                />

                {/* Candles container */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "35px",
                    marginBottom: "-5px",
                    zIndex: 50,
                  }}
                >
                  {/* Center candle */}
                  <motion.div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "0px",
                      transform: "translateX(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {/* Flame */}
                    <motion.div
                      animate={{ y: [-4, -8, -4], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      style={{
                        width: "6px",
                        height: "14px",
                        background: "linear-gradient(to top, #ff4500, #ffd700, #ffff00)",
                        borderRadius: "50% 50% 40% 40%",
                        boxShadow: "0 0 12px rgba(255, 215, 0, 0.9)",
                        marginBottom: "2px",
                      }}
                    />
                    {/* Wick */}
                    <div
                      style={{
                        width: "2px",
                        height: "22px",
                        background: "#f0f0f0",
                        borderRadius: "1px",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Frosting/cream top */}
                <motion.div
                  style={{
                    width: "75px",
                    height: "16px",
                    background: "#ede5d8",
                    borderRadius: "20px 20px 0 0 / 30px 30px 0 0",
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.5), 0 2px 6px rgba(0,0,0,0.2)",
                    position: "relative",
                    zIndex: 40,
                  }}
                />

                {/* Main cake layers */}
                <div
                  style={{
                    width: "75px",
                    background: "linear-gradient(to bottom, #7d4520, #6d3820)",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3), 0 4px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Layer 1 */}
                  <div style={{ height: "18px", borderBottom: "2px solid #ccc", background: "#6d3820" }} />
                  {/* Layer 2 */}
                  <div style={{ height: "18px", borderBottom: "2px solid #ccc", background: "#5a2e1a" }} />
                  {/* Layer 3 */}
                  <div style={{ height: "18px", background: "#6d3820" }} />
                </div>

                {/* Bottom decorative line */}
                <div
                  style={{
                    width: "80px",
                    height: "1px",
                    background: "#999",
                    marginTop: "8px",
                  }}
                />
              </motion.div>

              {/* Birthday message */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-5 text-center"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
                  color: "#4a3f35",
                  lineHeight: 1.8,
                  whiteSpace: "pre-line",
                }}
              >
                {BIRTHDAY_MESSAGE}
              </motion.p>
            </div>

            {/* Divider line */}
            <div
              className="hidden md:block absolute top-10 bottom-10 left-1/2 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(150,130,100,0.3), transparent)",
              }}
            />

            {/* ── Right page ── */}
            <div className="relative p-8 md:p-10 pt-16 flex flex-col items-center justify-center">
              {/* Polaroid photo */}
              <motion.div
                initial={{ opacity: 0, rotate: -12, y: 25 }}
                animate={inView ? { opacity: 1, rotate: 5, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.75, type: "spring" }}
                whileHover={{ rotate: 0, scale: 1.06 }}
                style={{
                  background: "white",
                  padding: "12px 12px 44px 12px",
                  boxShadow: "4px 6px 25px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)",
                  width: "fit-content",
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "clamp(150px, 22vw, 220px)",
                    height: "clamp(150px, 22vw, 210px)",
                  }}
                >
                  <ImageWithFallback
                    src={PHOTO_POLAROID}
                    alt="Us"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(180,140,100,0.07) 19px)",
                    }}
                  />
                </div>
                <div
                  className="absolute bottom-2 right-3"
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: "1.5rem",
                    color: "#c0392b",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    textAlign: "right",
                  }}
                >
                  i love
                  <br />
                  you
                </div>
              </motion.div>

              {/* Stars scattered */}
              {stars.map((s, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{ top: s.top, left: s.left }}
                  initial={{ opacity: 0, scale: 0, rotate: s.rotate - 20 }}
                  animate={inView ? { opacity: 0.85, scale: 1, rotate: s.rotate } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5, type: "spring" }}
                >
                  <Star size={s.size} />
                </motion.div>
              ))}

              {/* Bottom note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="mt-7 text-center"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "0.9rem",
                  color: "#7a6a5a",
                  fontStyle: "italic",
                }}
              >
                More memories, more adventures, more moments...
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}