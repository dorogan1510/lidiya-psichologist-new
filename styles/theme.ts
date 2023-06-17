import { red } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Bad_Script, Source_Sans_Pro } from '@next/font/google'

export const roboto = Source_Sans_Pro({
    weight: ['300', '400', '600', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const handwriteFont = Bad_Script({
    weight: ['400'],
    subsets: ['cyrillic'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

let theme = createTheme({
    palette: {
        primary: {
            main: '#D4CCD7',
        },
        secondary: {
            main: '#6A4678',
        },
        error: {
            main: red.A400,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 800,
            md: 1024,
            lg: 1200,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        fontSize: 16,
    },
})

theme = responsiveFontSizes(theme)

export default theme
