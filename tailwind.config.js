module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      theme: {
        colors: {
          'darkGreen': '#4F6F52',
          'mainGreen': "#739072",
          'lightGreen': "#86A789",
          'light': "#D2E3C8"
        }
      }
    },
  },
  plugins: [],
}