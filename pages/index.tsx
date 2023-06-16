import { Box, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import HeroSectionImageRight from '../components/HeroSectionImageRight'
import HeroSectionImageBackground from '../components/HeroSectionImageBackground'
import Features1 from '../components/Features1'
import Features2 from '../components/Features2'
import HeroSectionImageCenter from '../components/HeroSectionImageCenter'
import WithWhatIWork from '../components/WithWhatIWork'
import AboutMe from '../components/AboutMe'
import Qualification from '../components/Qualification'
import Reviews from '../components/Reviews'
import HowIWork from '../components/HowIWork'
import Price from '../components/Price'
import CallToAction from '../components/CallToAction'
import Footer1 from '../globalComponents/Footer1'
import SecondBlock from '../components/SecondBlock'

export default function Home() {
    return (
        <Box>
            <HeroSectionImageRight />
            <SecondBlock />
            <WithWhatIWork />
            <AboutMe />
            <HowIWork />
            <Reviews />
            <Qualification />
            <Price />
            <CallToAction />

            {/* <Typography variant='h1'>h1h1h1</Typography>
            <Typography variant='h2'>h2h2h2</Typography>
            <Typography variant='h3'>h3h3h3</Typography>
            <Typography variant='h4'>h4h4h4</Typography>
            <Typography variant='h5'>h5h5h5</Typography>
            <Typography variant='h6'>h6h6h6</Typography>
            <Typography variant='subtitle1'>subtitle1subtitle1</Typography>
            <Typography variant='subtitle2'>subtitle2subtitle2</Typography>
            <Typography variant='body1'>body1body1</Typography>
            <Typography variant='body2'>body2body2</Typography> */}
        </Box>
    )
}
