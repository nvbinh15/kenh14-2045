/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        // Kenh14 2045 — brand identity matches the live kenh14.vn: the
        // category menu bar and primary accent are a deep crimson-red
        // (#a70e1a, sampled from the real site), NOT bright magenta.
        // Token kept named "pink" to avoid churn; value is the brand red.
        k14: {
          pink: '#a70e1a',        // primary brand red (menu bar, accents)
          'pink-dark': '#8a0b15', // hover / pressed
          'pink-soft': '#fbe7e8', // tint backgrounds (comment box, ribbons)
          red: '#a70e1a',         // deep brand red
          gold: '#ffd400',        // HOT badge / highlights
          ink: '#15171a',         // body text (darker than VnE for punch)
          mute: '#6b7280',        // secondary gray
          line: '#ececec',        // hairline borders
          bg: '#f4f5f7',          // page background (light gray, not pure white)
          chip: '#f1f1f4',
        },
      },
      fontFamily: {
        // kenh14.vn uses Arial/Helvetica throughout; headlines are heavy
        // Arial bold (its custom "SFD-Bold"). Match with a system Arial stack.
        body: ['Arial', 'Helvetica', 'sans-serif'],
        head: ['Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
      },
      maxWidth: {
        k14: '1200px',
      },
      borderRadius: {
        card: '10px',
      },
    },
  },
  plugins: [],
}
