import { Button, Container, Stack, Typography } from '@mui/material'
import style from './HeroSectionImageBackground.module.scss'

const HeroSectionImageBackground = () => {
    return (
        <Container
            maxWidth='xl'
            sx={{ mb: '3rem', p: { xs: '3rem 1rem 0', sm: '5rem 3rem 0' } }}
            className={style.heroSection}
        >
            <Typography variant='h3' gutterBottom>
                Lorem, ipsum dolor sit amet consectetur
            </Typography>
            <Typography variant='h6' sx={{ mb: '1.5rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum incidunt, reiciendis commodi reprehenderit minima
                eligendi mollitia adipisci
            </Typography>
            <Stack
                sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: '1rem' }}
            >
                <Button variant='contained'>Lorem ipsum dolor sit amet</Button>
                <Button variant='contained'>Lorem ipsum dolor sit amet</Button>
            </Stack>
        </Container>
    )
}

export default HeroSectionImageBackground
