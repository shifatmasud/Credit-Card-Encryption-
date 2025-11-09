
import type React from 'react';

// Base values
const BASE_GRID = 4;
const BASE_DURATION = 100;

// --- COLOR SYSTEM ---
const colors = {
    white: '#f5f5f5',
    offWhite: '#EAEAEA',
    grey: '#A0A0A0',
    darkGrey: '#222222',
    black: '#010101',
    blue: '#007BFF',
    lightBlue: '#E6F2FF',
    green: '#28a745',
    orange: '#fd7e14',
    red: '#dc3545',
};

export const theme = {
    color: {
        Base: {
            Surface: { 1: colors.offWhite, 2: colors.white, 3: colors.grey },
            Content: { 1: colors.darkGrey, 2: colors.grey, 3: colors.black }
        },
        Primary: {
            Surface: { 1: colors.blue },
            Content: { 1: colors.white }
        },
        Secondary: { // Used for the encrypted card state
            Surface: { 1: colors.darkGrey },
            Content: { 1: colors.white }
        },
        Focus: {
            Surface: { 1: colors.blue },
            Content: { 1: colors.white }
        },
        Success: {
            Surface: { 1: colors.green },
            Content: { 1: colors.white }
        },
        Warning: {
            Surface: { 1: colors.orange },
            Content: { 1: colors.black }
        },
        Error: {
            Surface: { 1: colors.red },
            Content: { 1: colors.white }
        },
    },
    // --- TYPOGRAPHY SYSTEM ---
    type: {
        Expressive: {
            Display: {
                L: { fontFamily: '"Bebas Neue", sans-serif', fontSize: `${BASE_GRID * 14}px`, lineHeight: 1.1, fontWeight: 400, letterSpacing: '1.5px' }, // 56px
                M: { fontFamily: '"Bebas Neue", sans-serif', fontSize: `${BASE_GRID * 10}px`, lineHeight: 1.1, fontWeight: 400, letterSpacing: '1px' }, // 40px
            },
            Quote: {
                 M: { fontFamily: '"Comic Neue", cursive', fontSize: `${BASE_GRID * 5}px`, lineHeight: 1.4, fontWeight: 700 }, // 20px
            }
        },
        Readable: {
            Body: {
                M: { fontFamily: '"Inter", sans-serif', fontSize: `${BASE_GRID * 4}px`, lineHeight: 1.6, fontWeight: 400 }, // 16px
            },
            Label: {
                S: { fontFamily: '"Inter", sans-serif', fontSize: `${BASE_GRID * 3.5}px`, lineHeight: 1.5, fontWeight: 500, letterSpacing: '0.5px' }, // 14px
            },
        },
    },
    // --- SPACING & SIZING ---
    space: {
        'XS': `${BASE_GRID * 1}px`,   // 4px
        'S': `${BASE_GRID * 2}px`,    // 8px
        'M': `${BASE_GRID * 4}px`,    // 16px
        'L': `${BASE_GRID * 6}px`,    // 24px
        'XL': `${BASE_GRID * 12}px`,  // 48px
        'XXL': `${BASE_GRID * 24}px`, // 96px
    },
    // --- RADIUS SYSTEM ---
    radius: {
        'S': `${BASE_GRID * 1}px`,   // 4px
        'M': `${BASE_GRID * 2}px`,   // 8px
        'L': `${BASE_GRID * 3}px`,   // 12px
        'full': '9999px',
        'card': `${BASE_GRID * 4}px` // 16px
    },
    // --- MOTION SYSTEM ---
    time: {
        'S': `${BASE_DURATION}ms`,
        'M': `${BASE_DURATION * 2}ms`,
        'L': `${BASE_DURATION * 3}ms`, // Standard duration
        'XL': `${BASE_DURATION * 5}ms`
    },
    // --- EFFECT SYSTEM ---
    effect: {
        shadow: {
            Drop: { 1: `0 4px 12px rgba(0, 0, 0, 0.08)` },
            Glow: { 
              1: `0 0 8px ${colors.blue}`,
            }
        }
    }
};

export type Theme = typeof theme;
export type CSS = React.CSSProperties;
