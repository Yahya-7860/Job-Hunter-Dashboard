"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function CompanyMarquee() {
  const images = [
    "https://assets.aceternity.com/animated-modal.png",
    "/images/advantal.png",
    "/images/golden.jpeg",
    "/images/infobeans.png",
    "/images/ksolves.jpeg",
    "/images/canopus.png",
    "/images/cis.jpeg",
    "/images/ksolves.jpeg",
    "/images/advantal.png",
    "/images/advantal.png",
    "/images/ksolves.jpeg",
    "/images/parkhya.png",
    "images/impetus.png",
    "/images/tcs.jpeg",
    "/images/webkorps.jpeg",
    "/images/infobeans.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "/images/ksolves.jpeg",
    "/images/technorizen.jpeg",
    "/images/zhentech.png",
    "/images/hiteshi.jpeg",
    "/images/technorizen.jpeg",
  ];
  return (
    <div>
      <h1 className="flex justify-center font-bold text-xl px-3 dark:text-white text-black">
        Get Hired in IT Companies of Indore
      </h1>
      <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-300 p-2 dark:bg-neutral-800">
        <ThreeDMarquee images={images} />
      </div>
    </div>
  );
}
