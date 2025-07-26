"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
  FaCamera,
} from "react-icons/fa";
import CTAButton from "./CTAButton";

interface Media {
  name: string;
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url: string;
}

interface MediaProps {
  mediaPreview: Media[];
}

const MediaPreview = ({ mediaPreview }: MediaProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollAmount = 120;
      slider.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getMediaUrl = (media: Media) =>
    media.resource_type === "image"
      ? media.resource_value
      : media.thumbnail_url;

  const activeMedia = mediaPreview[activeIndex];
  const mainPriceValue = 1000;
  const offerPriceValue = 500;
  const savings = mainPriceValue - offerPriceValue;
  return (
    <section className="w-full">
      {/* Main Preview */}
      <div className="relative w-full aspect-video rounded-md overflow-hidden mb-4">
        <Image
          src={getMediaUrl(activeMedia)}
          alt={activeMedia.name || "Preview"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
        {activeMedia.resource_type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center  bg-opacity-40">
            <button className="bg-white p-4 border-[3px] border-black rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer">
              <FaPlay className="text-red-600 text-xl" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails and Arrows */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scrollSlider("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>

        {/* Thumbnails */}
        <div
          ref={sliderRef}
          className="flex space-x-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 md:px-10"
        >
          {mediaPreview.map((media, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 flex-shrink-0 rounded-md overflow-hidden border-2 cursor-pointer ${
                activeIndex === index
                  ? "border-red-600 ring-2 ring-red-600"
                  : "border-gray-300"
              }`}
            >
              <Image
                src={getMediaUrl(media)}
                alt={media.name}
                fill
                className="object-cover"
                sizes="96px"
              />
              <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white p-1 rounded-full text-xs">
                {media.resource_type === "video" ? (
                  <FaPlay className="text-[10px]" />
                ) : (
                  <FaCamera className="text-[10px]" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollSlider("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="flex items-center space-x-3 mt-4 mb-2">
        <span className="text-xl font-bold text-green-600">
          ৳ {offerPriceValue}
        </span>
        <span className="text-sm line-through text-gray-500">
          ৳ {mainPriceValue}
        </span>
        <span className="text-sm font-semibold text-red-600 bg-red-100 px-2 py-0.5 rounded">
          Save ৳ {savings}
        </span>
      </div>
      <CTAButton Btntext="কোর্সটি কিনুন" />
    </section>
  );
};

export default MediaPreview;
