"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface ParticlesBackgroundProps {
    className?: string;
    quantity?: number;
    staticity?: number;
    ease?: number;
    color?: string;
}

export default function ParticlesBackground({
    className = "",
    quantity = 150, // Increased for "stars"
    staticity = 50,
    ease = 50,
    color = "#00AEEF",
}: ParticlesBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const context = useRef<CanvasRenderingContext2D | null>(null);
    const circles = useRef<any[]>([]);
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
    const { theme } = useTheme();

    const COLORS = ["#00AEEF", "#F58221", "#000000"];

    useEffect(() => {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d");
        }
        initCanvas();
        animate();
        window.addEventListener("resize", initCanvas);
        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("resize", initCanvas);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [theme]);

    const initCanvas = () => {
        resizeCanvas();
        drawParticles();
    };

    const onMouseMove = (event: MouseEvent) => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            const { w, h } = canvasSize.current;
            const x = event.clientX - rect.left - w / 2;
            const y = event.clientY - rect.top - h / 2;
            const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
            if (inside) {
                mouse.current.x = x;
                mouse.current.y = y;
            }
        }
    };

    const resizeCanvas = () => {
        if (canvasContainerRef.current && canvasRef.current && context.current) {
            circles.current.length = 0;
            canvasSize.current.w = canvasContainerRef.current.offsetWidth;
            canvasSize.current.h = canvasContainerRef.current.offsetHeight;
            canvasRef.current.width = canvasSize.current.w * dpr;
            canvasRef.current.height = canvasSize.current.h * dpr;
            canvasRef.current.style.width = `${canvasSize.current.w}px`;
            canvasRef.current.style.height = `${canvasSize.current.h}px`;
            context.current.scale(dpr, dpr);
        }
    };

    const circleParams = () => {
        const x = Math.floor(Math.random() * canvasSize.current.w);
        const y = Math.floor(Math.random() * canvasSize.current.h);
        const translateX = 0;
        const translateY = 0;
        const size = Math.floor(Math.random() * 1.5) + 0.5;
        const alpha = 0;
        const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
        const dx = (Math.random() - 0.5) * 0.2;
        const dy = (Math.random() - 0.5) * 0.2;
        const magnetism = 0.1 + Math.random() * 4;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        return {
            x,
            y,
            translateX,
            translateY,
            size,
            alpha,
            targetAlpha,
            dx,
            dy,
            magnetism,
            color,
        };
    };

    const drawParticles = () => {
        resizeCanvas();
        drawCircle();
    };

    const drawCircle = () => {
        if (context.current) {
            context.current.clearRect(
                0,
                0,
                canvasSize.current.w,
                canvasSize.current.h
            );
            for (let i = 0; i < quantity; i++) {
                const circle = circleParams();
                circles.current.push(circle);
            }
        }
    };

    const animate = () => {
        draw();
        requestAnimationFrame(animate);
    };

    const draw = () => {
        if (context.current) {
            context.current.clearRect(
                0,
                0,
                canvasSize.current.w,
                canvasSize.current.h
            );

            circles.current.forEach((circle, i) => {
                // Determine mouse distance for disturbance
                const mouseAbsX = mouse.current.x + canvasSize.current.w / 2;
                const mouseAbsY = mouse.current.y + canvasSize.current.h / 2;

                const dx = mouseAbsX - (circle.x + circle.translateX);
                const dy = mouseAbsY - (circle.y + circle.translateY);
                const distance = Math.sqrt(dx * dx + dy * dy);
                const repulsionRadius = 150;

                if (distance < repulsionRadius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (repulsionRadius - distance) / repulsionRadius;

                    const repulsionStrength = 5;
                    circle.translateX -= forceDirectionX * force * repulsionStrength;
                    circle.translateY -= forceDirectionY * force * repulsionStrength;
                } else {
                    circle.translateX += (0 - circle.translateX) / staticity;
                    circle.translateY += (0 - circle.translateY) / staticity;
                }

                // Standard drift
                circle.x += circle.dx;
                circle.y += circle.dy;

                // Border check - wrap around
                if (circle.x < -circle.size) circle.x = canvasSize.current.w + circle.size;
                else if (circle.x > canvasSize.current.w + circle.size) circle.x = -circle.size;
                if (circle.y < -circle.size) circle.y = canvasSize.current.h + circle.size;
                else if (circle.y > canvasSize.current.h + circle.size) circle.y = -circle.size;

                // Draw Circle
                context.current!.beginPath();
                context.current!.arc(
                    circle.x + circle.translateX,
                    circle.y + circle.translateY,
                    circle.size,
                    0,
                    2 * Math.PI
                );
                context.current!.fillStyle = hexToRgba(circle.color, circle.targetAlpha);
                context.current!.fill();

                // Draw Connections only for close particles
                for (let j = i; j < circles.current.length; j++) {
                    const circle2 = circles.current[j];
                    const dx = (circle.x + circle.translateX) - (circle2.x + circle2.translateX);
                    const dy = (circle.y + circle.translateY) - (circle2.y + circle2.translateY);
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        context.current!.beginPath();
                        context.current!.strokeStyle = hexToRgba(circle.color, 0.15 * (1 - distance / 100));
                        context.current!.lineWidth = 0.5;
                        context.current!.moveTo(
                            circle.x + circle.translateX,
                            circle.y + circle.translateY
                        );
                        context.current!.lineTo(
                            circle2.x + circle2.translateX,
                            circle2.y + circle2.translateY
                        );
                        context.current!.stroke();
                    }
                }
            });
        }
    };

    const hexToRgba = (hex: string, alpha: number) => {
        var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return (
        <div
            className={className}
            ref={canvasContainerRef}
            aria-hidden="true"
        >
            <canvas ref={canvasRef} />
        </div>
    );
}
