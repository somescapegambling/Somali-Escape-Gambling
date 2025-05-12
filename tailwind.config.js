/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          'red-player': '#ef4444',
          'green-player': '#22c55e',
          'blue-player': '#3b82f6',
          'yellow-player': '#eab308',
        },
        boxShadow: {
          'game-board': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          'player-area': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'dice': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        animation: {
          'dice-roll': 'dice-roll 0.5s ease-in-out',
          'piece-move': 'piece-move 0.3s ease-in-out',
          'winner': 'winner 1s infinite alternate',
        },
        keyframes: {
          'dice-roll': {
            '0%': { transform: 'rotateZ(0deg)' },
            '25%': { transform: 'rotateZ(-30deg)' },
            '50%': { transform: 'rotateZ(0deg)' },
            '75%': { transform: 'rotateZ(30deg)' },
            '100%': { transform: 'rotateZ(0deg)' },
          },
          'piece-move': {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
            '100%': { transform: 'translateY(0)' },
          },
          'winner': {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(1.05)' },
          },
        },
      },
    },
    plugins: [],
  }