import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundPosition: {
        'center-top': 'center top',
        'center-20': 'center 20%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        primaryGreen: '#286247',
        superGreen: '#123833',
        primaryBlack: '#000000',
        primaryWhite: '#FFFFFF',
        secondaryGreen: '#7CC2A2',
        secondaryYellow: '#F0FF21',
        secondaryBeige: '#F9F5EE',
        gold: '#82764F',
        dark70: '#666666',
        dark50: '#969696',
        grey30: '#CCCCCC',
        grey20: '#E3E3E3',
        grey05: '#F0F0F0',
        customLight: 'rgba(241, 241, 241, 0.9)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontSize: {
        display: ['64px', '1.2'],
        miniDisplay: ['48px', '1.2'],
        h1: ['40px', '1.4'],
        h2: ['32px', '1.4'],
        h3: ['24px', '1.4'],
        h4: ['18px', '1.4'],
        bodyDefault: ['16px', '1.4'],
        bodyMedium: ['14px', '1.4'],
        bodySmall: ['12px', '1.4'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        // Animation for the first line when opening
        line1Open: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '30%': { transform: 'translateY(4px) rotate(0deg)' }, // Translate down
          '100%': { transform: 'translateY(4px) rotate(-45deg)' }, // Rotate
        },
        // Animation for the second line when opening
        line2Open: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '30%': { transform: 'translateY(-4px) rotate(0deg)' }, // Translate up
          '100%': { transform: 'translateY(-4px) rotate(45deg)' }, // Rotate
        },
        // Animation for the first line when closing
        line1Close: {
          '0%': { transform: 'translateY(4px) rotate(-45deg)' },
          '40%': { transform: 'translateY(4px) rotate(0deg)' }, // Rotate back
          '100%': { transform: 'translateY(0) rotate(0deg)' }, // Translate back
        },
        // Animation for the second line when closing
        line2Close: {
          '0%': { transform: 'translateY(-4px) rotate(45deg)' },
          '40%': { transform: 'translateY(-4px) rotate(0deg)' }, // Rotate back
          '100%': { transform: 'translateY(0) rotate(0deg)' }, // Translate back
        },
      },
      animation: {
        line1Open: 'line1Open 0.5s forwards',
        line2Open: 'line2Open 0.5s forwards',
        line1Close: 'line1Close 0.5s forwards',
        line2Close: 'line2Close 0.5s forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
