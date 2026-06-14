import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edfcf7',
          100: '#c9f2e6',
          200: '#94e6d0',
          300: '#56d4b7',
          400: '#2abea1',
          500: '#0D9488',
          600: '#0a7a72',
          700: '#09615b',
          800: '#0a4d48',
          900: '#0b3f3b',
          950: '#042420',
        },
        secondary: {
          50: '#eafff9',
          100: '#caffe9',
          200: '#95ffd6',
          300: '#53ffc2',
          400: '#1af5aa',
          500: '#14B8A6',
          600: '#0d9483',
          700: '#0f766a',
          800: '#115e55',
          900: '#134e47',
          950: '#042f2b',
        },
        accent: {
          50: '#fef8e8',
          100: '#fcecc5',
          200: '#f9d98e',
          300: '#f5bf4d',
          400: '#f1a822',
          500: '#D4AF37',
          600: '#bd912a',
          700: '#9e6f22',
          800: '#835a22',
          900: '#6e4a20',
          950: '#3f270f',
        },
        dark: {
          50: '#f0f3f9',
          100: '#d9dfec',
          200: '#b3bed9',
          300: '#8697c0',
          400: '#5e72a5',
          500: '#46588b',
          600: '#364672',
          700: '#2c385c',
          800: '#1f2741',
          900: '#0F172A',
          950: '#070b14',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        alt: ['Manrope', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #f5bf4d 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1e293b 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'premium': '0 4px 24px rgba(13, 148, 136, 0.15)',
        'premium-lg': '0 8px 40px rgba(13, 148, 136, 0.2)',
        'gold': '0 4px 24px rgba(212, 175, 55, 0.2)',
        'card': '0 2px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config
