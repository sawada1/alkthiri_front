
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "10.188rem",
        // "3xl": "10rem",
      },

      // default breakpoints
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      spacing: {
        section: "70px",
      },
      colors: {
        "primary": "#1b395f",
        "tw-primary": "#1b395f",
        "tw-grey": "#6F6F6E",
        "tw-dark": "#222222",
        "tw-secondary-light": "#DFE4EA",
        "tw-accent": "#227DC2",
        "tw-error": "#EF4444",
      },
      boxShadow: {
        shadow1: "0px 5px 44px #0000001A",
        shadow2: "0px 5px 15px #1B395F6E",
      },
    },
  },
  plugins: [],
};
