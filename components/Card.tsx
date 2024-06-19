import React from "react";
import Image from "next/image";
import { GoLock } from "react-icons/go";

type CardProps = {
  url: string;
  text: string;
  lock: boolean;
  mediaType: "image" | "video";
};

const Card: React.FC<CardProps> = ({ url, text, lock, mediaType }) => {
  return (
    <div className="flex flex-col gap-2 relative group transition-all">
      {mediaType === "video" ? (
        <video
          autoPlay
          loop
          muted
          width={1000}
          height={600}
          className="rounded-2xl object-cover"
        >
          <source src={url} type="video/mp4" />
        </video>
      ) : (
        <Image
          className="rounded-2xl object-contain"
          src={url}
          alt={text}
          width={1000}
          height={600}
        />
      )}
      {lock && (
        <div className="absolute top-2 right-2">
          <div className="relative flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white"></div>
            <GoLock className="absolute text-xl" />
          </div>
        </div>
      )}
      <div className="lg:hidden flex gap-2">
        <p className="text-sm">{text}</p>
        {lock && (
          <span className="text-sm text-[#7f7f7f] opacity-70">Coming soon</span>
        )}
      </div>
    </div>
  );
};

export default Card;
