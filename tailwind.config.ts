import type { Config } from 'tailwindcss'
import { designTokens } from '@/lib/design-tokens'

export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: designTokens.colors,
            fontFamily: designTokens.typography.fontFamily,
            fontSize: designTokens.typography.fontsize,
            fontWeight: designTokens.typography.fontWeight,
            boxShadow: designTokens.shadows,
        },
    },
    plugins: [],
} satisfies Config