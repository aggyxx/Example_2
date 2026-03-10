"use client";

export default function StarsBackground() {
  const orbs = [
    { left: "-5%", top: "5%", size: 800, color: "rgba(220,38,38,0.12)", delay: "0s" },
    { left: "20%", top: "50%", size: 700, color: "rgba(220,38,38,0.10)", delay: "4s" },
    { left: "75%", top: "40%", size: 750, color: "rgba(220,38,38,0.09)", delay: "1s" },
    { left: "50%", top: "70%", size: 700, color: "rgba(220,38,38,0.11)", delay: "5s" },
    { left: "10%", top: "28%", size: 600, color: "rgba(220,38,38,0.08)", delay: "6s" },
    { left: "65%", top: "0%", size: 700, color: "rgba(37,99,235,0.08)", delay: "2s" },
    { left: "35%", top: "22%", size: 600, color: "rgba(37,99,235,0.06)", delay: "3s" },
    { left: "85%", top: "65%", size: 550, color: "rgba(37,99,235,0.06)", delay: "7s" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="ambient-orb"
          style={{
            position: "absolute",
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(80px)",
            animationDelay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
