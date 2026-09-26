import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import ProjectModal from '../components/ProjectModal'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import GitHub from '../components/Github'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const projectsData = [
{ title: 'FitnessBuddy App', short: 'FitnessBuddy is a web app that helps you connect with fitness buddies who share similar goals, track your workouts, and stay motivated together.', long: 'Web app using Firebase for auth and realtime syncing. Matches based on goals and location, challenges, and workout logging.', tech: ['JavaScript','Firebase','HTML/CSS' ,"Axios" , "Realtime Database"], image: "/fitnessBuddy.png", link: 'https://github.com/the-kiran-kasana/fitnessbuddy' , deploy: "https://fitnessbuddy-app.netlify.app/"},
{ title: 'Dynamic Travel Recommendation Engine', short: 'A user-friendly platform that provides personalized destination recommendations based on user preferences, travel styles, and past experiences.', long: 'React + Firebase project with itineraries, reviews, and Mapbox-powered interactive maps.', tech: ['React','Firebase','Mapbox' ,"Axios"], image: "/destination.png" , link: 'https://github.com/the-kiran-kasana/destination-travel' , deploy: "https://destinationfinder-application.netlify.app/"},
// { title: 'Chess Game Solver (C++)', short: 'Console app that finds shortest path to checkmate.', long: 'C++ program implementing backtracking and dynamic programming to analyze move sequences and find optimal solutions.', tech: ['C++'], link: 'https://github.com/the-kiran-kasana' },
{ title: "Patient-Doctor Scheduling System", short: "A scalable backend for managing healthcare appointments, reminders, analytics, and provider tools.",long: "A complete appointment scheduling system designed for hospitals and telemedicine platforms. Includes patient flow, doctor allocation, calendar sync, role-based access, analytics, and notifications.", tech: ["JavaScript", "Node.js", "Express", "MongoDB", "React","JWT" ,"Googleapis" , "Bcrypt" ,"Nodemailer" ], image: "/appoinment.png", link: "https://github.com/the-kiran-kasana/Patient-Doctor-Scheduling-System-Clean", deploy: "https://jade-starship-f253c6.netlify.app/"},
{ title: "TTFixon – On-Demand Service Booking Platform", short: "A full-stack service booking platform, similar to Urban Company, where users can browse services, find nearby providers, and book appointments.", long: "A full-stack service booking platform where users can browse services, find nearby service providers, book appointments, and make online payments. Includes booking management and an admin dashboard.", tech: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Axios", "Razorpay"], image: "/ttfixon.png", link: "https://github.com/the-kiran-kasana/TTFIXON", deploy: "https://www.ttfixon.com/en"}
]


const skillsData = ['Data Structures','Algorithms','C','C++','HTML','CSS','JavaScript','REST APIs','MySQL','Spring']
const toolsData = ['IntelliJ','VSCode','MySQL Server','MongoDB','Git']


export default function Portfolio(){
const [activeProject, setActiveProject] = useState(null)

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })

  document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}, [])


return (
<div className="min-h-screen text-gray-100 antialiased">
<Header />
<main className="max-w-[1200px] mx-auto px-6 pt-16 pb-4 space-y-12">
<Hero />
<About />
<Education />
<Experience />
<Projects projects={projectsData} onOpen={setActiveProject} />
<Skills skills={skillsData} tools={toolsData} />
<GitHub />
<Contact />
<Footer />
</main>


{activeProject !== null && (
<ProjectModal project={projectsData[activeProject]} onClose={() => setActiveProject(null)} />
)}
</div>
)
}