const config = {
 
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          myfont: ["MyFont", "sans-serif"],
          new : ["var(--font-"] // Custom font
        },
      },
    },
  plugins: ["@tailwindcss/postcss"],

  
};

export default config;
