import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import img2 from '../public/img/aboutme_img.png'
import { useRouter } from 'next/router'
import de from '../languages/de'
import ru from '../languages/ru'

const HeroSectionImageRight = () => {
    const router = useRouter()
    const { locale } = router

    const t: any = (() => {
        switch (locale) {
            case 'ru':
                return ru
            case 'de':
                return de
        }
    })()

    return (
        <Box
            sx={{
                bgcolor: '#cbd5de',
            }}
        >
            <Container
                id='id2'
                maxWidth='xl'
                sx={{
                    mb: '3rem',
                    pt: '3rem',
                    scrollMarginTop: '60px',
                }}
            >
                <Typography
                    variant='h4'
                    gutterBottom
                    sx={{ textAlign: 'center', fontWeight: '600' }}
                >
                    {t.AboutMe.aboutMe}
                </Typography>
                <Stack
                    flexDirection={{ xs: 'column', lg: 'row' }}
                    justifyContent='center'
                    sx={{
                        alignItems: { xs: 'center', lg: 'flex-end' },
                        margin: { xs: '0', lg: '0 5rem' },
                    }}
                    gap='2rem'
                >
                    <Box sx={{ maxWidth: '1000px', order: 2 }}>
                        <Typography variant='h6' gutterBottom>
                            {t.AboutMe.aboutMeText1}
                        </Typography>
                        <Typography variant='h6' sx={{ mb: '1.5rem' }}>
                            {t.AboutMe.aboutMeText2}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            order: 1,
                            maxWidth: '400px',
                            margin: '0 auto',
                        }}
                    >
                        <Image
                            src={img2}
                            alt={'image1'}
                            priority
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                            }}
                        />
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default HeroSectionImageRight
