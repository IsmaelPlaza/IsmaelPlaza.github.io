/**
 * @module tailwind.config.mjs
 * @description Configuration file for Tailwind CSS.
 * Colours, fonts, animations... for the app.
 * @author Ismael Plaza
 */

import {fontFamily} from 'tailwindcss/defaultTheme';

// Export configuration object.
export default {
    content: ['./scr/**/*.{astro,html,js,jsx,ts,tsx}',], // All Astro components from sources.
    
    darkMode: 'class', // Dark mode toggle. 'dark' class on <html>.
    theme : {
        extend: {
            colors: { // DEFAULT: Light mode. dark: Dark mode. 
                primary: {
                    DEFAULT: '#6366f1',
                    dark: '#818cf8',},
                secondary: {
                    DEFAULT: '#0ea5e9',
                    dark: '#38bdf8',},
                surface: { // Background colour when the container is elevated by the animation.
                    DEFAULT: '#ffffff',
                    dark: '#0f172a',},
                muted: { // Muted text and border color. // Category not seleccted.
                    DEFAULT: '#64748b',
                    dark: '#94a3b8',},},

            fontFamily: {
                sans: ['Inter', ...fontFamily.sans],}, // Inter as primary, fontFamily as fallback.
        
            keyframes: {  // Custom keyframes for smooth UI entrance animations
                'fade-in-up': { // Upward translation and fade-in keyframe
                    '0%': {opacity: '0', transform: 'translateY(24px)'},
                    '100%': {opacity: '1', transform: 'translateY(0)'},},
                'slide-in': { // Left-to-right slide-in keyframe
                    '0%': {opacity: '0', transform: 'translateX(-16px)'},
                    '100%': {opacity: '1', transform: 'translateX(0)'},},
                'pulse-subtle': { // Subtle floating pulse keyframe
                    '0%, 100%': {opacity: '1', transform: 'scale(1)'},
                    '50%': {opacity: '0.85', transform: 'scale(1.03)'},},},

            animation: { // Animation utility bindings
                'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards', // Smooth entrance for cards and hero elements
                'slide-in': 'slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards', // Slide animation for navigation and badges
                'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',},},}, // Ambient background subtle pulse animation
            
    plugins: [], // Tailwind CSS plugins array. Nothing yet.
};
