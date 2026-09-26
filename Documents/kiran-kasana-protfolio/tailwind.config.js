module.exports = {
content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
darkMode: 'class',
theme: {
extend: {
colors: {
cyanGlow: '#14b8a6',
purpleGlow: '#7c3aed',
},
boxShadow: {
glow: '0 10px 40px rgba(20,184,166,0.18), 0 6px 18px rgba(124,58,237,0.08)'
},
keyframes: {
float: { '0%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' }, '100%': { transform: 'translateY(0)' } }
},
animation: { float: 'float 4s ease-in-out infinite' }
}
},
plugins: []
}