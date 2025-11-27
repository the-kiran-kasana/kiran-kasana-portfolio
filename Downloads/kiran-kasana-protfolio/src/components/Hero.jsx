import React from 'react'



export default function Hero(){

const linkedin = 'https://www.linkedin.com/in/kirankasana/'
const github = 'https://github.com/the-kiran-kasana'
const email = 'kkasanacoder@gmail.com'


return (

    <section id="hero" className="relative grid gap-50 md:grid-cols-2 items-center">
    <div className="space-y-6">

       <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">Kiran Kasana</span></h2>
       <h2 className=" text-3xl text-cyan-300 font-extrabold leading-tight">Full Stack Developer</h2>
       <p className="text-gray-300 max-w-2xl">I am a passionate <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-cyan-100">Full Stack Developer</span> committed to building high-quality, scalable web applications using modern technologies. I focus on crafting solutions that are efficient, user-friendly, and performance-driven. With a strong grasp of <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">data structures, algorithms, and problem-solving ,reliable APIs, cloud‑ready services, and interactive client apps</span> — always aiming for clean architecture and performance.</p>


<div className="flex flex-wrap gap-3">


  <a href="https://www.linkedin.com/in/kirankasana/" target="_blank" rel="noreferrer" className=" inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-transparent border border-cyan-400/40 text-cyan-300 hover:border-cyan-300 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 ">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0V8.5z  M7.5 8.5h4.79v2.08h.07c.67-1.28 2.3-2.63 4.74-2.63  5.07 0 6 3.34 6 7.67V24h-5v-6.5c0-1.55-.03-3.55-2.16-3.55 -2.16 0-2.49 1.68-2.49 3.42V24h-5V8.5z"/>
    </svg>
    <span>LinkedIn</span>
  </a>


  <a  href="https://github.com/the-kiran-kasana" target="_blank" rel="noreferrer"
    className=" inline-flex items-center gap-2 px-5 py-2.5 rounded-lg  bg-transparent border border-cyan-400/40 text-cyan-300  hover:border-cyan-300 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]  transition-all duration-300 " >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39
              7.86 10.91.58.1.79-.25.79-.56
              0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54
              -.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72
              1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97
              .1-.75.41-1.27.75-1.57-2.55-.29-5.23-1.28-5.23-5.7
              0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0
              .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0
              1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63
              1.59.23 2.76.11 3.05.75.81 1.19 1.84 1.19 3.1
              0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.07.8 2.18
              0 1.57-.02 2.83-.02 3.21 0 .31.21.67.8.56A10.99
              10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
    <span>GitHub</span>
  </a>


  <a href="mailto:kkasanacoder@gmail.com" className=" inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
      bg-transparent border border-cyan-400/40 text-cyan-300 hover:border-cyan-300 hover:text-cyan-200
      hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 " >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2 4h20v16H2V4zm10 7L4 6v2l8 5 8-5V6l-8 5z" />
    </svg>
    <span>Email</span>
  </a>



<a
//   href="/KIRAN-KASANA-RESUME.pdf"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    // Trigger file download
    const link = document.createElement("a");
    link.href = "/KIRAN-KASANA-RESUME.pdf";
    link.download = "KIRAN-KASANA-RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
    bg-transparent border border-cyan-400/40 text-cyan-300 hover:border-cyan-300 hover:text-cyan-200
    hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinejoin="round"
      d="M12 16l4-4m0 0l-4-4m4 4H4m8 4v1a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-3"
    />
  </svg>

  <span>Resume</span>
</a>




</div>

</div>




<div className="order-first md:order-last relative">


        <div className="w-100 h-100 overflow-hidden rounded-full  hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300">

              <img src="https://avatars.githubusercontent.com/u/142073141?v=4" alt="Profile" className="w-full h-full object-cover" />

        </div>




    <div className="pointer-events-none absolute -right-16 -top-10 w-56 h-56 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-600/30 blur-3xl opacity-60"></div>
    <div className="pointer-events-none absolute -left-24 bottom-6 w-40 h-40 rounded-full bg-gradient-to-br from-magenta-400/20 to-purple-500/20 blur-2xl opacity-50"></div>


</div>
</section>
)
}