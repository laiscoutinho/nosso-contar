import React from "react";
import waveImage from "../../assets/decor/wave-text.png";

export default function WaveBackground({
  offset = "-mt-[40px]"
}) {
  return (
    <div
      className={`relative w-full h-14 sm:h-16 md:h-20 overflow-hidden ${offset} pointer-events-none wave-bg`}
      style={{
        backgroundImage: `url(${waveImage})`
      }}
    />
  );
}
