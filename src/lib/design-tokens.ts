export const designTokens = {
    colors: {
        warning: {
            950: "#161205",
            900: "#2B230B",
            800: "#574616",
            700: "#826A20",
            600: "#AE8D2B",
            500: "#D9B036",
            400: "#E1C05E",
            300: "#EBD086",
            200: "#F0DFAF",
            100: "#F7F2D7",
            50: "#FBF7EB"
        },
        error: {
            950: "#150707",
            900: "#2A0D0D",
            800: "#541B1B",
            700: "#7D2828",
            600: "#A73636",
            500: "#D14343",
            400: "#DA6969",
            300: "#E38E8E",
            200: "#EDB4B4",
            100: "#F6D9D9",
            50: "#FAEDED"
        },
        success: {
            950: "#06130B",
            900: "#0B2615",
            800: "#174C2A",
            700: "#227340",
            600: "#2E9955",
            500: "#39BF6A",
            400: "#61CC88",
            300: "#88D9A6",
            200: "#B0E5C3",
            100: "#D7F2E1",
            50: "#EBF9F0"
        },
        secondary: {
            950: "#0F020E",
            900: "#1E051C",
            800: "#3D0A39",
            700: "#5B0F55",
            600: "#7A1472",
            500: "#98198E",
            400: "#AD47A5",
            300: "#C175B8",
            200: "#D6A3D2",
            100: "#EA91E8",
            50: "#F5E8F4"
        },
        tertiary: {
            950: "#14040E",
            900: "#29091C",
            800: "#521138",
            700: "#7A1A53",
            600: "#A3226F",
            500: "#CC2B88",
            400: "#D655A2",
            300: "#E080B9",
            200: "#EBAAD1",
            100: "#F5D5E8",
            50: "#FAEAF3"
        },
        primary: {
            950: "#081117",
            900: "#10232E",
            800: "#20455C",
            700: "#316889",
            600: "#418AB7",
            500: "#51ADEC",
            400: "#74BDEA",
            300: "#97CEEF",
            200: "#B9DFE5",
            100: "#DCEFFA",
            50: "#EEF7FC"
        },
        gray: {
            950: "#0F1011",
            900: "#1D2021",
            800: "#3A3F42",
            700: "#5B5F64",
            600: "#757E85",
            500: "#929EAE",
            400: "#A8B1B8",
            300: "#BEC5CA",
            200: "#D3D8DB",
            100: "#E6ECED",
            50: "#F4F5F6",
            white: "#FBFDFE",
            black: "#0B1C26"
        }
    },
    typography: {
        fontFamily: {
            sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
            display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
            body: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        },
        fontsize: {
            xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '-0.01em' }],
            sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.01em' }],
            base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.01em' }],
            lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
            xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
            '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em' }],
            '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em' }],
            '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.01em' }],
            '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
            '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
            '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        },
        fontWeight: {
            thin: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
        },
    },
    shadows: {
        // Drop shadows using Gray 800
        sm: '0 1px 2px 0 rgba(58, 63, 66, 0.05)',
        default: '0 1px 3px 0 rgba(58, 63, 66, 0.1), 0 1px 2px 0 rgba(58, 63, 66, 0.06)',
        md: '0 4px 6px -1px rgba(58, 63, 66, 0.1), 0 2px 4px -1px rgba(58, 63, 66, 0.06)',
        lg: '0 10px 15px -3px rgba(58, 63, 66, 0.1), 0 4px 6px -2px rgba(58, 63, 66, 0.05)',
        xl: '0 20px 25px -5px rgba(58, 63, 66, 0.1), 0 10px 10px -5px rgba(58, 63, 66, 0.04)',
        '2xl': '0 25px 50px -12px rgba(58, 63, 66, 0.20)',

        // Inner shadows using Gray 800
        'inner-sm': 'inset 0 2px 4px 0 rgba(58, 63, 66, 0.06)',
        'inner-md': 'inset 0 2px 4px 0 rgba(58, 63, 66, 0.1)',
        'inner-lg': 'inset 0 4px 6px 0 rgba(58, 63, 66, 0.15)',

        // No shadow utility
        none: '0 0 #0000',
    }

}