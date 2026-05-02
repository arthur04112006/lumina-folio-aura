import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'display': ['Outfit', 'sans-serif'],
				'heading': ['Outfit', 'sans-serif'],
				'body': ['Inter', 'sans-serif'],
				'sans': ['Inter', 'sans-serif'],
				'serif': ['Crimson Text', 'serif'],
			},
			fontSize: {
				'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
				'display-sm': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
				'heading-xl': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
				'heading-lg': ['1.75rem', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
				'heading-md': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
				'heading-sm': ['1.25rem', { lineHeight: '1.5' }],
				'body-lg': ['1.125rem', { lineHeight: '1.7' }],
				'body-md': ['1rem', { lineHeight: '1.6' }],
				'body-sm': ['0.875rem', { lineHeight: '1.6' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					secondary: 'hsl(var(--background-secondary))'
				},
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					dark: 'hsl(var(--primary-dark))',
					light: 'hsl(var(--primary-light))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					bronze: 'hsl(var(--accent-bronze))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					secondary: 'hsl(var(--card-secondary))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)'
			},
			backdropBlur: {
				light: '8px',
				heavy: '20px'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'accent-glow': 'var(--shadow-accent-glow)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					from: { opacity: '0', transform: 'translateX(50px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(217 91% 60% / 0.4)' },
					'50%': { boxShadow: '0 0 40px hsl(217 91% 60% / 0.8)' }
				},
				'loading-spin': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'loading-spin': 'loading-spin 2s linear infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
