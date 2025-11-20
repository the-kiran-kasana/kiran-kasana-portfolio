import React from "react";

export default function GitHub() {
  return (
    <section
      id="github"
      className="py-24 flex flex-col items-center text-center space-y-12 bg-[#060b18]"
    >
      {/* Heading */}
      <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">
        GitHub Activity
      </h3>

      {/* Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl px-4">

        {/* Card 1 */}
        <div className="relative bg-[#0d1628]/50 border border-cyan-400/40 rounded-2xl p-4 shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all duration-300 backdrop-blur-xl">
          <img
            src="https://camo.githubusercontent.com/4081f24e7c34293e0b4da009944b083171dd00cc3586d1b24413ec2d18c4d018/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d7468652d6b6972616e2d6b6173616e612673686f775f69636f6e733d74727565267468656d653d746f6b796f6e69676874"
            alt="GitHub Stats"
            className="w-full rounded-xl"
          />
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#0d1628]/50 border border-cyan-400/40 rounded-2xl p-4 shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all duration-300 backdrop-blur-xl">
          <img
            src="https://camo.githubusercontent.com/bf4f317ac21c9988e4dac3c1779dfe20ad463dd94e1c77099bb8440a6063d150/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d7468652d6b6972616e2d6b6173616e61266c61796f75743d636f6d70616374267468656d653d746f6b796f6e69676874"
            alt="Top Languages"
            className="w-full rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}
