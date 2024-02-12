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
import DirectionOfPsychotherapy from '../components/DirectionOfPsychotherapy'

export default function Home() {
    return (
        <Box>
            <HeroSection />
            <SecondBlock />
            <HowIWork />
            <DirectionOfPsychotherapy />
            <WithWhatIWork />
            <AboutMe />
            <Qualification />
            <Reviews />
            <Contacts />
            {/* <Price /> */}
            {/* <CallToAction /> */}
        </Box>
    )
}
