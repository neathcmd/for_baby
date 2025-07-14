"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import HomeGif from "@/assets/hello-hello-baby.gif";
import { useState, useEffect } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const onSubmit = () => {
    setShowModal(true);
    setTimeout(() => setIsAnimating(true), 10); // Trigger animation after render
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setShowModal(false);
    }, 400); // Increased timeout to match animation duration
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="group cursor-pointer">
            <Image
              src={HomeGif}
              alt="Description of image"
              className="transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:shadow-2xl rounded-lg"
            />
          </div>
          <Button
            type="submit"
            onClick={onSubmit}
            className="px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xl shadow-lg transition-all duration-300 ease-out hover:from-blue-700 hover:to-blue-800 hover:scale-110 hover:shadow-xl active:scale-95 transform"
          >
            Click Me
          </Button>
        </div>
      </div>

      {/* Modal with ultra-smooth animations */}
      {showModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-400 ease-out ${
            isAnimating
              ? "backdrop-blur-sm bg-black/50"
              : "backdrop-blur-none bg-black/0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-white/95 backdrop-blur-md rounded-2xl p-8 w-full max-w-md shadow-2xl border border-white/20 transition-all duration-400 ease-out ${
              isAnimating
                ? "scale-100 opacity-100 translate-y-0 rotate-0"
                : "scale-75 opacity-0 translate-y-8 rotate-1"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`transition-all duration-500 ease-out delay-150 ${
                isAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-500">
                O sml hah🥺🤍
              </h2>
            </div>

            <div
              className={`transition-all duration-500 ease-out delay-300 ${
                isAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="mb-8 text-gray-600 text-lg leading-relaxed">
                I miss you more than words can say. I miss you everyday
                everytime I miss every moment we were together. I love you🤍🥺
              </p>
            </div>

            <div
              className={`transition-all duration-500 ease-out delay-450 ${
                isAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                onClick={closeModal}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 ease-out hover:from-red-600 hover:to-red-700 hover:scale-105 hover:shadow-xl active:scale-95 transform"
              >
                Return
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
