import { Box } from '@mui/material'
import AboutMe from '../components/AboutMe'
import CallToAction from '../components/CallToAction'
import Contacts from '../components/Contacts'
import HeroSection from '../components/HeroSection'
import HowIWork from '../components/HowIWork'
import Price from '../components/Price'
import Qualification from '../components/Qualification'
import Reviews from '../components/Reviews'
import SecondBlock from '../components/SecondBlock'
import WithWhatIWork from '../components/WithWhatIWork'

export default function Home() {
    return (
        <Box>
            <HeroSection />
            <SecondBlock />
            <WithWhatIWork />
            <HowIWork />
            <AboutMe />
            <Reviews />
            <Qualification />
            <Contacts />
            {/* <Price /> */}
            {/* <CallToAction /> */}
        </Box>
    )
}
