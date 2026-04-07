import { motion } from "motion/react";

const ITEMS = [
  { id: 0, x: 8, y: 12, size: 10, opacity: 0.055, duration: 6.2, delay: 0, symbol: "♥" },
  { id: 1, x: 22, y: 5, size: 8, opacity: 0.04, duration: 7.8, delay: 1.2, symbol: "✦" },
  { id: 2, x: 40, y: 18, size: 7, opacity: 0.035, duration: 5.5, delay: 2.3, symbol: "♥" },
  { id: 3, x: 60, y: 8, size: 9, opacity: 0.05, duration: 8.1, delay: 0.8, symbol: "✦" },
  { id: 4, x: 78, y: 15, size: 11, opacity: 0.045, duration: 6.8, delay: 3.1, symbol: "♥" },
  { id: 5, x: 92, y: 7, size: 7, opacity: 0.038, duration: 7.2, delay: 1.5, symbol: "✦" },
  { id: 6, x: 5, y: 38, size: 8, opacity: 0.042, duration: 9.0, delay: 4.0, symbol: "✦" },
  { id: 7, x: 18, y: 52, size: 12, opacity: 0.05, duration: 6.5, delay: 0.5, symbol: "♥" },
  { id: 8, x: 35, y: 42, size: 7, opacity: 0.033, duration: 7.5, delay: 2.8, symbol: "✦" },
  { id: 9, x: 52, y: 58, size: 9, opacity: 0.048, duration: 5.8, delay: 1.9, symbol: "♥" },
  { id: 10, x: 70, y: 45, size: 8, opacity: 0.036, duration: 8.4, delay: 3.6, symbol: "✦" },
  { id: 11, x: 88, y: 55, size: 10, opacity: 0.05, duration: 6.1, delay: 0.3, symbol: "♥" },
  { id: 12, x: 95, y: 38, size: 7, opacity: 0.04, duration: 7.0, delay: 2.1, symbol: "✦" },
  { id: 13, x: 12, y: 72, size: 11, opacity: 0.045, duration: 5.3, delay: 4.5, symbol: "♥" },
  { id: 14, x: 28, y: 82, size: 8, opacity: 0.038, duration: 8.8, delay: 1.0, symbol: "✦" },
  { id: 15, x: 46, y: 75, size: 9, opacity: 0.052, duration: 6.6, delay: 3.3, symbol: "♥" },
  { id: 16, x: 64, y: 88, size: 7, opacity: 0.035, duration: 7.4, delay: 2.6, symbol: "✦" },
  { id: 17, x: 80, y: 78, size: 10, opacity: 0.042, duration: 5.9, delay: 0.7, symbol: "♥" },
  { id: 18, x: 94, y: 72, size: 8, opacity: 0.04, duration: 8.2, delay: 1.8, symbol: "✦" },
  { id: 19, x: 55, y: 30, size: 7, opacity: 0.032, duration: 9.5, delay: 5.0, symbol: "♥" },
  { id: 20, x: 3, y: 60, size: 9, opacity: 0.046, duration: 6.3, delay: 3.8, symbol: "✦" },
  { id: 21, x: 73, y: 25, size: 8, opacity: 0.038, duration: 7.7, delay: 2.4, symbol: "♥" },
  { id: 22, x: 85, y: 92, size: 10, opacity: 0.044, duration: 6.0, delay: 1.3, symbol: "✦" },
  { id: 23, x: 32, y: 95, size: 7, opacity: 0.036, duration: 8.6, delay: 4.2, symbol: "♥" },
  { id: 24, x: 48, y: 92, size: 9, opacity: 0.05, duration: 5.7, delay: 0.9, symbol: "✦" },
];

export function BackgroundDecorations() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {ITEMS.map((item) => (
        <motion.div
          key={item.id}
          style={{
            position: "absolute",
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: item.size,
            color:
              item.symbol === "♥"
                ? "rgba(230,150,150,1)"
                : "rgba(201,169,110,1)",
            opacity: item.opacity,
            userSelect: "none",
            lineHeight: 1,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [item.opacity, item.opacity * 0.35, item.opacity],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  );
}
