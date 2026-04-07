import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { BackgroundDecorations } from "./BackgroundDecorations";

const BIRTHDAY_DATE = "07/04/2026"; // วันเกิด

export function HeroSection() {
  const [inputDate, setInputDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // Auto-scroll down when candle is blown out
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        window.scrollBy({
          top: 800,
          behavior: "smooth",
        });
      }, 1500);
    }
  }, [isOpen]);

  const validateDate = (date: string) => {
    const userDate = date.trim();
    const normalizeDate = (d: string) => d.replace(/\s+/g, "");
    return normalizeDate(userDate) === normalizeDate(BIRTHDAY_DATE);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttempts(attempts + 1);

    if (validateDate(inputDate)) {
      setIsCorrect(true);
    }
  };

  const handleOpen = () => {
    if (isCorrect) {
      setIsOpen(true);
    }
  };

  const handleReset = () => {
    setIsOpen(false);
    setInputDate("");
    setIsCorrect(false);
    setAttempts(0);
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d1117 0%, #1a0f1f 50%, #0d1117 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <BackgroundDecorations />

      {/* Input section - ก่อนเปิดจดหมาย */}
      {!isCorrect && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          style={{
            position: "relative",
            zIndex: 100,
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: "20px" }}>
            When is your birthday?
          </h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <input
              type="text"
              placeholder="MM/DD/YYYY"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
              style={{
                padding: "12px 20px",
                fontSize: "1rem",
                border: "2px solid transparent",
                borderImage: "linear-gradient(135deg, #ff6b9d 0%, #ffa500 100%) 1",
                borderRadius: "8px",
                width: "180px",
                fontWeight: 600,
                backgroundColor: "rgba(28, 31, 38, 0.8)",
                color: "#fff",
                transition: "all 0.3s ease",
                boxShadow: "0 0 10px rgba(255, 107, 157, 0.2)",
              }}
              onFocus={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow = "0 0 20px rgba(255, 107, 157, 0.5)";
                el.style.backgroundColor = "rgba(28, 31, 38, 0.95)";
              }}
              onBlur={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow = "0 0 10px rgba(255, 107, 157, 0.2)";
                el.style.backgroundColor = "rgba(28, 31, 38, 0.8)";
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px 28px",
                fontSize: "1rem",
                fontWeight: 800,
                background: "linear-gradient(135deg, #ff6b9d 0%, #ffa500 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(255, 107, 157, 0.4)",
                letterSpacing: "1px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 6px 25px rgba(255, 107, 157, 0.6)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 15px rgba(255, 107, 157, 0.4)";
              }}
            >
              Check
            </button>
          </form>

          {/* Error message */}
          {attempts > 0 && !isCorrect && (
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ color: "#ff6b6b", marginTop: "10px", fontWeight: 600 }}
            >
              ❌ Wrong date. Try again!
            </motion.p>
          )}

          {/* Success message */}
          {isCorrect && (
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ color: "#51cf66", marginTop: "10px", fontWeight: 600 }}
            >
              ✅ Correct! Opening your letter...
            </motion.p>
          )}
        </motion.div>
      )}

      {/* Birthday Cake Section - Shows after date validation */}
      {isCorrect && !isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          {/* Cake Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              color: "#c9a96e",
              fontSize: "1.8rem",
              marginBottom: "60px",
              textAlign: "center",
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "1px",
            }}
          >
            Make a wish and Blow the Candle! 🎂
          </motion.h2>

          {/* Cake Component */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{
              position: "relative",
              width: "250px",
              height: "200px",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsOpen(true);
              setTimeout(() => {
                window.scrollBy({ top: 800, behavior: "smooth" });
              }, 1500);
            }}
          >
            {/* Plate */}
            <div
              style={{
                position: "absolute",
                width: "270px",
                height: "110px",
                bottom: "-10px",
                left: "-10px",
                backgroundColor: "#ccc",
                borderRadius: "50%",
                boxShadow:
                  "0 2px 0 rgba(0,0,0,0.1), 0 4px 0 rgba(0,0,0,0.1), 0 5px 40px rgba(0,0,0,0.5)",
              }}
            />

            {/* Cake Layers */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "100px",
                  borderRadius: "50%",
                  top: `${i * 33}px`,
                  backgroundColor: "#553c13",
                  boxShadow: `0 2px 0px ${`rgba(85, 60, 19, 0.95)`}, 0 4px 0px rgba(85, 60, 19, 0.92), 0 6px 0px rgba(85, 60, 19, 0.92), 0 8px 0px rgba(85, 60, 19, 0.92)`,
                }}
              />
            ))}

            {/* Icing/Cream */}
            <div
              style={{
                position: "absolute",
                top: "2px",
                left: "5px",
                width: "240px",
                height: "90px",
                borderRadius: "50%",
                backgroundColor: "#f0e4d0",
                boxShadow:
                  "inset 0 2px 4px rgba(255,255,255,0.5), 0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "4px",
                  right: "5px",
                  bottom: "6px",
                  left: "5px",
                  backgroundColor: "#f5ead8",
                  borderRadius: "50%",
                  boxShadow:
                    "0 0 4px rgba(245,234,216,0.8), 0 0 4px rgba(245,234,216,0.8), 0 0 4px rgba(245,234,216,0.8)",
                }}
              />
            </div>

            {/* Drips */}
            {[
              { top: "53px", left: "5px", width: "40px", height: "48px", skew: "15deg" },
              { top: "69px", left: "181px", width: "50px", height: "60px", skew: "-15deg" },
              { top: "54px", left: "90px", width: "80px", height: "60px", skew: "0deg" },
            ].map((drip, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: drip.top,
                  left: drip.left,
                  width: drip.width,
                  height: drip.height,
                  borderBottomLeftRadius: "25px",
                  borderBottomRightRadius: "25px",
                  backgroundColor: "#f0e4d0",
                  transform: `skewY(${drip.skew})`,
                }}
              />
            ))}

            {/* Candle */}
            <motion.div
              style={{
                position: "absolute",
                backgroundColor: "#7B020B",
                width: "16px",
                height: "50px",
                borderRadius: "8px 8px 4px 4px",
                top: "-20px",
                left: "50%",
                marginLeft: "-8px",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "16px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#a40216",
                }}
              />

              {/* Flame */}
              <motion.div
                id="flame"
                animate={!isOpen ? { skewX: [5, -5, 10, -10, 5] } : { opacity: 0 }}
                transition={
                  !isOpen ? { duration: 1, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }
                }
                style={{
                  position: "absolute",
                  backgroundColor: "orange",
                  width: "15px",
                  height: "35px",
                  borderRadius: "10px 10px 10px 10px / 25px 25px 10px 10px",
                  top: "-34px",
                  left: "50%",
                  marginLeft: "-7.5px",
                  zIndex: 10,
                  boxShadow:
                    "0 0 10px rgba(255, 165, 0, 0.5), 0 0 20px rgba(255, 165, 0, 0.5), 0 0 60px rgba(255, 165, 0, 0.5), 0 0 80px rgba(255, 165, 0, 0.5)",
                  transformOrigin: "50% 90%",
                }}
              />

              {/* Smoke */}
              {isOpen && (
                <motion.div
                  id="smoke"
                  initial={{ opacity: 0.8, y: 0, scale: 0.5 }}
                  animate={{ opacity: 0, y: -40, scale: 1.5 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "gray",
                    borderRadius: "50%",
                    top: "-30px",
                    left: "50%",
                    marginLeft: "-7px",
                    zIndex: 5,
                  }}
                />
              )}
            </motion.div>
          </motion.div>

          {/* Instructions */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{
              color: "#c9a96e",
              marginTop: "40px",
              fontSize: "0.95rem",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Click the cake to blow out the candle! 💨
          </motion.p>
        </motion.div>
      )}

      {/* Page 2 - Birthday Card with Photo */}
      {isOpen && (
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            marginTop: "60px",
          }}
        >
          {/* Title */}

        </motion.section>
      )}
    </section>
  );
}

// Floating heart component with animation
function FloatingHeart({ index }: { index: number }) {
  const positions = [
    { left: "20%", scale: 0.6, delay: 0.7, duration: 4, sway: 2 },
    { left: "55%", scale: 1, delay: 0.7, duration: 5, sway: 4 },
    { left: "10%", scale: 0.8, delay: 0.7, duration: 7, sway: 2 },
  ];

  const pos = positions[index - 1];

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "0",
        left: pos.left,
        zIndex: 2,
        scale: pos.scale,
      }}
      initial={{ top: 0, opacity: 1 }}
      animate={{
        top: -600,
        opacity: 0,
      }}
      transition={{
        duration: pos.duration,
        ease: "linear",
        delay: pos.delay,
      }}
    >
      <motion.div
        animate={{
          x: [0, 50, 0],
        }}
        transition={{
          duration: pos.sway,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            color: "#D00000",
            fontSize: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ❤️
        </div>
      </motion.div>
    </motion.div>
  );
}
