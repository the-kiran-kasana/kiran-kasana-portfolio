import React, { useState } from 'react'



export default function Contact(){
const [username, setUsername] = useState("");
const [userEmail, setUserEmail] = useState("");
const [message, setMessage] = useState('')
const [sent, setSent] = useState(false)
const email = 'kkasanacoder@gmail.com'
const phone = '+91-7030683304'
const linkedin = 'https://www.linkedin.com/in/kirankasana/'
const github = 'https://github.com/the-kiran-kasana'


function copyEmail(){
    navigator.clipboard?.writeText(email).then(()=>{
        setSent(true)
        setTimeout(()=>setSent(false),2500)
    })
}


function sendMessage(e) {
  e.preventDefault();

  const subject = encodeURIComponent(`Message from ${username}`);

  const body =
    `Name: ${username}%0D%0AEmail: ${userEmail}%0D%0A%0D%0AMessage:%0D%0A${message}`;

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  setSent(true);
}



return (

<section id="contact" className="space-y-6">
<h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">Contact</h3>
<div className="grid md:grid-cols-2 gap-6">

 <div className="p-6 rounded-2xl bg-gradient-to-br from-[#061022]/40 to-[#041020]/30
                 border border-cyan-300/30 shadow-[0_0_20px_rgba(34,211,238,0.15)]
                 backdrop-blur-xl hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]
                 transition-all duration-300">

     <h4 className="font-semibold text-center text-2xl text-cyan-200 tracking-wide">
         Get in Touch
     </h4>

     <div className="mt-6 space-y-3">

         {/* Email */}
         <p className="flex items-center gap-3 text-gray-300">
             <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M4 6h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z"/>
             </svg>
             <a href={`mailto:${email}`} className="text-cyan-300 hover:text-cyan-200 transition">
                 {email}
             </a>
         </p>

         {/* Phone */}
         <p className="flex items-center gap-3 text-gray-300">
             <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round"
                       d="M2 3l4 1 2 5-3 2a14 14 0 007 7l2-3 5 2 1 4c.1.5-.2 1-.7 1A18 18 0 013 3.7C3 3.2 3.5 2.9 4 3z"/>
             </svg>
             <a href={`tel:${phone}`} className="text-cyan-300 hover:text-cyan-200 transition">
                 {phone}
             </a>
         </p>

         {/* LinkedIn */}
         <p className="flex items-center gap-3 text-gray-300">
             <svg className="w-5 h-5 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0V8.5zM7.5 8.5h4.79v2.08h.07c.67-1.28 2.3-2.63 4.74-2.63 5.07 0 6 3.34 6 7.67V24h-5v-6.5c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.49 1.68-2.49 3.42V24h-5V8.5z"/>
             </svg>
             <a href={linkedin} target="_blank" rel="noreferrer"
                className="text-cyan-300 hover:text-cyan-200 transition">
                 LinkedIn Profile
             </a>
         </p>

         {/* GitHub */}
         <p className="flex items-center gap-3 text-gray-300">
             <svg className="w-5 h-5 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.55-3.87-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.7.08-.68.08-.68 1.18.08 1.8 1.23 1.8 1.23 1.04 1.8 2.72 1.28 3.38.98.1-.75.41-1.27.74-1.56-2.55-.3-5.23-1.3-5.23-5.77 0-1.28.46-2.34 1.22-3.16-.12-.3-.53-1.52.11-3.17 0 0 1-.32 3.3 1.21a11.3 11.3 0 016 0c2.3-1.53 3.29-1.21 3.29-1.21.65 1.65.24 2.87.12 3.17.76.82 1.22 1.88 1.22 3.16 0 4.49-2.7 5.46-5.26 5.75.42.36.81 1.1.81 2.23v3.3c0 .3.21.66.8.55A10.97 10.97 0 0023.5 12C23.5 5.74 18.27.5 12 .5z"/>
             </svg>
             <a href={github} target="_blank" rel="noreferrer"
                className="text-cyan-300 hover:text-cyan-200 transition">
                 GitHub Profile
             </a>
         </p>

     </div>
 </div>


<form
  onSubmit={sendMessage}
  className="p-6 rounded-2xl bg-gradient-to-br from-[#061022]/40 to-[#041020]/30  border border-cyan-300/30 shadow-[0_0_20px_rgba(34,211,238,0.15)]  backdrop-blur-xl hover:shadow-[0_0_35px_rgba(34,211,238,0.3)] transition-all duration-300 space-y-5">

  <h3 className="text-xl font-semibold text-cyan-200 tracking-wide flex items-center gap-2">
    <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.128 1.152.488V7.5c5.053.03 9.265 1.588 9.859 7.5-.978-1.636-3.29-2.25-5.203-2.25H12.36v3.966c0 .616-.713.927-1.152.488L2.25 12z" />
    </svg>
    Send a Message
  </h3>

  {/* Name */}
  <div>
    <label className="block text-sm text-gray-300 mb-1">Your Name</label>
    <div className="flex items-center gap-3 bg-[#0b1220] border border-cyan-300/40 rounded-xl px-4 py-3">
      <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.48 0 4.5-2.02 4.5-4.5S14.48 3 12 3 7.5 5.02 7.5 7.5 9.52 12 12 12zM4.5 21c0-3.6 3.36-6 7.5-6s7.5 2.4 7.5 6" />
      </svg>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        type="text"
        placeholder="Enter your name"
        className="bg-transparent text-gray-100 placeholder-gray-400 w-full outline-none"
      />
    </div>
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm text-gray-300 mb-1">Your Email</label>
    <div className="flex items-center gap-3 bg-[#0b1220] border border-cyan-300/40 rounded-xl px-4 py-3">
      <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M4 6h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z"/>
      </svg>
      <input
        value={userEmail}
        onChange={e => setUserEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
        className="bg-transparent text-gray-100 placeholder-gray-400 w-full outline-none"
      />
    </div>
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm text-gray-300">Message</label>
    <textarea
      value={message}
      onChange={e => setMessage(e.target.value)}
      className="w-full mt-2 p-4 rounded-xl bg-[#0b1220]
                 border border-cyan-300/40 placeholder:text-gray-400 text-gray-100
                 focus:border-cyan-300/80 transition"
      rows={6}
      placeholder="Write your message..."
    ></textarea>
  </div>

  {/* Buttons */}
  <div className="flex gap-3">
    <button
      type="submit"
      className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600
                 font-semibold text-gray-900 shadow-lg hover:scale-105
                 transition-all duration-300">
      Send Message
    </button>

    <button
      type="button"
      onClick={copyEmail}
      className="px-5 py-2.5 rounded-xl border border-cyan-300/40 text-cyan-300
                 hover:border-cyan-300 hover:text-cyan-200 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]
                 transition-all duration-300">
      Copy Email
    </button>
  </div>

  {sent && (
    <p className="text-sm text-green-400 mt-2">
      Message prepared — mail client opened / copied! ✅
    </p>
  )}
</form>



</div>
</section>
)
}