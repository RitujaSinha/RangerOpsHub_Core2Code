import React from "react";
import Rangerimage from "../assets/Rangerimage.png";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-20 h-screen items-center gap-10 overflow-hidden">
      <div>
        <h2 className="text-4xl font-bold text-purple-400 mb-4">
          Zordon's Facility Ops Hub
        </h2>

        <p className="text-gray-300 leading-relaxed mb-4">
          Teleport pads misfire. Lab door sensors glitch. Zord engine coolant
          leaks. The Command Center is aging. Zordon needs a Facility Ops Hub
          to manage:
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Malfunctions</li>
          <li>Ranger complaints</li>
          <li>Engineering fixes</li>
          <li>Status updates</li>
          <li>System analytics</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <img
          src={Rangerimage}
          alt="Ranger"
          className="w-80 md:w-96 drop-shadow-[0_0_10px_rgb(168,85,247)]"
        />
      </div>
    </section>
  );
}
