"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const SameFitnessLogo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = Math.min(window.innerWidth * 0.9, 800);
      const height = width * 0.3;
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const colors = ["#374B25", "#17200C", "#979F15"];

    const createNoisyGradient = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number
    ) => {
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const index = (y * width + x) * 4;
          const color = colors[Math.floor(Math.random() * colors.length)];
          const [r, g, b] = color
            .match(/\w\w/g)!
            .map((hex) => parseInt(hex, 16));
          data[index] = r;
          data[index + 1] = g;
          data[index + 2] = b;
          data[index + 3] = 255;
        }
      }

      return imageData;
    };

    const drawLogo = (progress: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create noisy gradient
      const gradient = createNoisyGradient(ctx, canvas.width, canvas.height);
      ctx.putImageData(gradient, 0, 0);

      // Logo text
      const fontSize = Math.min(dimensions.width * 0.1, 80);
      ctx.font = `bold ${fontSize}px "Orbitron", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Apply gradient to text
      ctx.globalCompositeOperation = "destination-in";
      const text = "SAME FITNESS™";
      const x = canvas.width / 2;
      const y = canvas.height / 2;
      ctx.fillText(text, x, y);

      // Reset composite operation
      ctx.globalCompositeOperation = "source-over";

      // Draw running figure
      const figureSize = fontSize * 0.8;
      const figureX = canvas.width * 0.1;
      const figureY = canvas.height / 2;

      ctx.strokeStyle = "#979F15";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Animate running figure
      const armAngle = Math.cos(progress * Math.PI * 2) * 45;

      ctx.beginPath();
      // Head
      ctx.arc(
        figureX,
        figureY - figureSize * 0.3,
        figureSize * 0.15,
        0,
        Math.PI * 2
      );
      // Body
      ctx.moveTo(figureX, figureY - figureSize * 0.15);
      ctx.lineTo(figureX, figureY + figureSize * 0.2);
      // Legs
      ctx.moveTo(figureX, figureY + figureSize * 0.2);
      ctx.lineTo(figureX - figureSize * 0.2, figureY + figureSize * 0.5);
      ctx.moveTo(figureX, figureY + figureSize * 0.2);
      ctx.lineTo(figureX + figureSize * 0.2, figureY + figureSize * 0.5);
      // Arms
      ctx.moveTo(figureX, figureY);
      ctx.lineTo(
        figureX - Math.cos((armAngle * Math.PI) / 180) * figureSize * 0.25,
        figureY - Math.sin((armAngle * Math.PI) / 180) * figureSize * 0.25
      );
      ctx.moveTo(figureX, figureY);
      ctx.lineTo(
        figureX + Math.cos((armAngle * Math.PI) / 180) * figureSize * 0.25,
        figureY + Math.sin((armAngle * Math.PI) / 180) * figureSize * 0.25
      );
      ctx.stroke();
    };

    let animationFrame: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / 1000;
      drawLogo(progress % 1);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [dimensions]);

  return (
    <div className="w-full min-h-screen bg-[#1a2e1a] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[800px]"
      >
        <canvas
          ref={canvasRef}
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};
