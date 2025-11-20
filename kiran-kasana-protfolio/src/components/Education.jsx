import React from "react";

export default function Education() {
  return (
    <section id="education" className="space-y-8 py-20">
      <h3 className="text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-100">
        Education
      </h3>

      <div className="grid md:grid-cols-1 gap-6">


       <div className="p-6 rounded-2xl bg-gradient-to-br  from-[#061022]/40 to-[#041020]/30    border border-cyan-300/30    shadow-[0_0_20px_rgba(34,211,238,0.15)]   hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]   transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-7 h-7 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.5"  viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"    d="M12 3v18m9-9H3" />
                  </svg>
                  <h4 className="font-semibold text-lg text-cyan-200">  Full-Stack Development — Masai School
                  </h4>
                </div>
                <p className="text-sm text-gray-400">Completed — 2025</p>
       </div>


        {/* BTech */}
               <div className="p-6 rounded-2xl bg-gradient-to-br     from-[#061022]/40 to-[#041020]/30  border border-cyan-300/30  shadow-[0_0_20px_rgba(34,211,238,0.15)]   hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]    transition-all duration-300">
                 <div className="flex items-center gap-3 mb-3">
                   <svg className="w-7 h-7 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.5"  viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round"    d="M12 14l9-5-9-5-9 5 9 5zm0 0v7" />
                   </svg>
                   <h4 className="font-semibold text-lg text-cyan-200">  B.Tech — Shree Digamber Institute of Technology (RTU)
                   </h4>
                 </div>
                 <p className="text-sm text-gray-400">2021 - 2025</p>
               </div>



        {/* SSC */}
        <div className="p-6 rounded-2xl bg-gradient-to-br  from-[#061022]/40 to-[#041020]/30   border border-cyan-300/30 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]  transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <svg className="w-7 h-7 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.5"  viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"  d="M12 6v12m6-6H6" />
            </svg>
            <h4 className="font-semibold text-lg text-cyan-200">SSC — 2021</h4>
          </div>
          <p className="text-sm text-gray-400">RBSE Board — Percentage: 92.5%</p>
        </div>





      </div>
    </section>
  );
}
