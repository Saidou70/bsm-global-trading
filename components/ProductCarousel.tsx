"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

interface ProductCarouselProps {
  images: string[];
  alt: string;
  descriptionNode?: ReactNode;
}

export default function ProductCarousel({ images, alt, descriptionNode }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const safeImages = (images || []).filter(Boolean);
  const totalSlides = safeImages.length + (descriptionNode ? 1 : 0);

  // Reset index if it goes out of bounds due to images changing
  useEffect(() => {
    if (currentIndex >= totalSlides && totalSlides > 0) {
      setCurrentIndex(0);
    }
  }, [currentIndex, totalSlides]);

  if (totalSlides === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
      {/* Main Image */}
      <div style={{ 
        position: "relative", 
        width: "100%", 
        height: "clamp(250px, 50vw, 400px)", 
        backgroundColor: "#fff", 
        border: "1px solid var(--line)", 
        borderRadius: "12px",
        overflow: "hidden"
      }}>
        {currentIndex < safeImages.length ? (
          <Image 
            src={safeImages[currentIndex]} 
            alt={`${alt} - vue ${currentIndex + 1}`} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain", padding: "24px" }} 
            unoptimized 
          />
        ) : (
          <div style={{ width: "100%", height: "100%", padding: "24px", overflowY: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {descriptionNode}
          </div>
        )}
        
        {totalSlides > 1 && (
          <>
            <button 
              onClick={handlePrev}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "1.2rem",
                color: "var(--navy)",
                zIndex: 10
              }}
              aria-label="Image précédente"
            >
              ←
            </button>
            <button 
              onClick={handleNext}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "1.2rem",
                color: "var(--navy)",
                zIndex: 10
              }}
              aria-label="Image suivante"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {totalSlides > 1 && (
        <div style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "8px" }}>
          {safeImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                position: "relative",
                width: "80px",
                height: "80px",
                flexShrink: 0,
                borderRadius: "8px",
                border: currentIndex === idx ? "2px solid var(--brand-red)" : "1px solid var(--line)",
                backgroundColor: "#fff",
                overflow: "hidden",
                cursor: "pointer",
                padding: 0
              }}
            >
              <Image 
                src={img} 
                alt={`Miniature ${idx + 1}`} 
                fill 
                sizes="80px"
                style={{ objectFit: "contain", padding: "8px" }} 
                unoptimized 
              />

            </button>
          ))}
          {descriptionNode && (
            <button
              onClick={() => setCurrentIndex(safeImages.length)}
              style={{
                position: "relative",
                width: "80px",
                height: "80px",
                flexShrink: 0,
                borderRadius: "8px",
                border: currentIndex === safeImages.length ? "2px solid var(--brand-red)" : "1px solid var(--line)",
                backgroundColor: "#F3F4F6",
                overflow: "hidden",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--navy)",
                textAlign: "center"
              }}
            >
              Info
            </button>
          )}
        </div>
      )}
    </div>
  );
}
