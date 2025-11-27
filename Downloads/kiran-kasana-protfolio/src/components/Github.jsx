import React from "react";

export default function GitHub() {
  return (
   <section
     id="github"
     className="py-20 flex flex-col items-center text-center space-y-12 bg-[#060b18]"
   >
     <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">
       GitHub Activity
     </h3>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4 sm:px-8">

       {/* GitHub Streak Card */}
       <div className="relative bg-[#0d1628]/50 border border-cyan-400/40 rounded-2xl p-4
           shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]
           transition-all duration-300 backdrop-blur-xl w-full">
         <img
           src="./streaks.png"
           alt="GitHub Streak"
           className="w-full h-auto object-contain rounded-xl"
         />
       </div>

       {/* Top Languages Card */}
       <div className="relative bg-[#0d1628]/50 border border-cyan-400/40 rounded-2xl p-4
           shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]
           transition-all duration-300 backdrop-blur-xl w-full">
         <img
           src="./githubLanguage.png"
           alt="Top Languages"
           className="w-full h-auto object-contain rounded-xl"
         />
       </div>

     </div>
   </section>

  );
}
