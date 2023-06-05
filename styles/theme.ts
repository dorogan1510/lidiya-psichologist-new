import { Raleway, Roboto, Bad_Script, Source_Sans_Pro } from '@next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const roboto = Source_Sans_Pro({
    weight: ['300', '400', '700'],
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
