/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image': "url('/bg.png')",
        'imageTwo': "url('/logo.png')",
        'imageThree': "url('/image.png')",
        'imageFour': "url('/imageFour.png')",
        'imageFive': "url('/imageTwo.png')",
        'imageSix': "url('/imageThree.png')",
        
      })
    },
  },
  plugins: [],
}
