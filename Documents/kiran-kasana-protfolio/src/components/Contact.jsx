import React, { useState } from 'react'
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, User, ArrowUpRight, MessageSquare } from 'lucide-react'



export default function Contact(){
const [username, setUsername] = useState("");
const [userEmail, setUserEmail] = useState("");
const [message, setMessage] = useState('')
const [sent, setSent] = useState(false)
const [copied, setCopied] = useState(false)
const email = 'kkasanacoder@gmail.com'
const phone = '+91-7030683304'
const linkedin = 'https://www.linkedin.com/in/kirankasana/'
const github = 'https://github.com/the-kiran-kasana'


function copyEmail(){
    navigator.clipboard?.writeText(email).then(()=>{
        setCopied(true)
        setTimeout(()=>setCopied(false),2500)
    })
}


function sendMessage(e) {
  e.preventDefault();

  const subject = encodeURIComponent(`Message from ${username}`);
  const body = encodeURIComponent(`Name: ${username}\r\nEmail: ${userEmail}\r\n\r\nMessage:\r\n${message}`);

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  setSent(true);
}


const channels = [
  { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
  { icon: Phone, label: "Phone", value: phone, href: `tel:${phone}` },
  { icon: Linkedin, label: "LinkedIn", value: "in/kirankasana", href: linkedin, external: true },
  { icon: Github, label: "GitHub", value: "the-kiran-kasana", href: github, external: true },
]

const inputWrap = "flex items-center gap-3 rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 transition-all duration-300 focus-within:border-cyan-300/70 focus-within:shadow-[0_0_20px_rgba(34,211,238,0.2)]"


return (

<section id="contact" className="relative space-y-14 pt-20 pb-4">

  {/* Decorative glow */}
  <div className="pointer-events-none absolute left-1/2 -top-10 -z-10 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

  <div data-reveal className="text-center space-y-3">
    <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-cyan-300/70 font-semibold">
      <span className="h-px w-6 bg-cyan-300/50" /> Let's Connect <span className="h-px w-6 bg-cyan-300/50" />
    </span>
    <h3 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">
      Contact
    </h3>
    <p className="text-sm text-gray-400">Have a project, role, or idea in mind? I'd love to hear from you.</p>
    <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
  </div>

  <div data-reveal-stagger className="grid gap-6 lg:grid-cols-5">

    {/* Left: contact channels */}
    <div className="lg:col-span-2 rounded-[1.5rem] p-[1.5px] bg-gradient-to-br from-cyan-400/30 via-white/10 to-purple-500/30">
      <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-[#070b16]/95 p-7 backdrop-blur-xl shadow-xl">
        <div className="pointer-events-none absolute -left-12 -bottom-12 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

        <span className="relative inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
          </span>
          Let's work together
        </span>

        <h4 className="relative mt-5 text-2xl font-bold text-white">Get in Touch</h4>
        <p className="relative mt-2 text-sm leading-relaxed text-gray-400">
          Reach out through any of these channels.
        </p>

        <div className="relative mt-7 space-y-3">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/5 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-gray-500">{c.label}</p>
                  <p className="truncate text-sm font-medium text-gray-200 group-hover:text-cyan-200">{c.value}</p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-gray-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300" />
              </a>
            )
          })}
        </div>
      </div>
    </div>


    {/* Right: form */}
    <div className="lg:col-span-3 rounded-[1.5rem] p-[1.5px] bg-gradient-to-br from-cyan-400/30 via-white/10 to-purple-500/30">
      <form
        onSubmit={sendMessage}
        className="relative h-full overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-[#070b16]/95 p-7 backdrop-blur-xl shadow-xl space-y-5">

        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-purple-500/10 blur-3xl" />

        <h4 className="relative text-2xl font-bold text-white flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-[#0b1628] shadow-lg shadow-cyan-500/20">
            <Send className="h-5 w-5 text-cyan-300" />
          </span>
          Send a Message
        </h4>

        <div className="relative grid gap-5 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">Your Name</label>
            <div className={inputWrap}>
              <User className="h-5 w-5 text-cyan-300" />
              <input
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="text"
                placeholder="Enter your name"
                className="bg-transparent text-gray-100 placeholder-gray-500 w-full outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">Your Email</label>
            <div className={inputWrap}>
              <Mail className="h-5 w-5 text-cyan-300" />
              <input
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-gray-100 placeholder-gray-500 w-full outline-none"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <label className="block text-sm text-gray-300 mb-2">Message</label>
          <div className={`${inputWrap} items-start`}>
            <MessageSquare className="mt-0.5 h-5 w-5 text-cyan-300" />
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full resize-none bg-transparent text-gray-100 placeholder-gray-500 outline-none"
              rows={6}
              placeholder="Write your message..."
            ></textarea>
          </div>
        </div>

        {/* Buttons */}
        <div className="relative flex flex-wrap gap-3">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600
                       font-semibold text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.03] hover:shadow-cyan-400/40 active:scale-95
                       transition-all duration-300">
            <Send className="h-4 w-4" /> Send Message
          </button>

          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-gray-200
                       hover:border-cyan-300/50 hover:text-cyan-200 hover:bg-white/5
                       transition-all duration-300">
            {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>

        {sent && (
          <p className="relative text-sm text-emerald-400">
            Your mail app should open with the message ready to send. ✅
          </p>
        )}
      </form>
    </div>

  </div>
</section>
)
}
