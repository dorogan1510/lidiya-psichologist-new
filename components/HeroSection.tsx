import {
    Button,
    Container,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
} from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'
import FeedIcon from '@mui/icons-material/Feed'

import { Box } from '@mui/system'
import Image from 'next/image'
import img1 from '../public/img/hero_img.png'
import { handwriteFont } from '../styles/theme'
import style from './HeroSection.module.scss'
import { useRouter } from 'next/router'
import de from '../languages/de'
import ru from '../languages/ru'
import { useEffect, useState } from 'react'

const HeroSection = () => {
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

    const [german, setGerman] = useState<boolean>()

    useEffect(() => {
        if (locale === 'de') {
            setGerman(false)
        } else setGerman(true)
    }, [locale])

    const matches = useMediaQuery('(min-width:600px)')

    return (
        // <Box sx={{ bgcolor: '#b8d8f3', mb: '3rem' }}>
        <Box sx={{ bgcolor: '#cbd5de', mb: '3rem' }}>
            <Container
                id='id1'
                maxWidth='xl'
                sx={{
                    pl: { xs: '1rem', md: '3rem' },
                    height: { xs: 'auto', md: '600px' },
                    position: 'relative',
                }}
            >
                <Stack
                    flexDirection={{ xs: 'column', md: 'row' }}
                    justifyContent='center'
                    alignItems='center'
                    gap='1rem'
                    sx={{
                        pt: { xs: '3rem', md: '0' },
                        px: { xs: 0, md: '3rem' },
                        position: { xs: 'static', md: 'absolute' },
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                >
                    <Box sx={{ maxWidth: '1110px' }}>
                        {!matches ? (
                            <>
                                <Typography
                                    variant='h3'
                                    gutterBottom
                                    sx={{
                                        textAlign: { xs: 'center', md: 'left' },
                                    }}
                                >
                                    {t.HeroSection.psychologist}
                                </Typography>
                                <Typography
                                    variant='h3'
                                    gutterBottom
                                    sx={{
                                        textAlign: { xs: 'center', md: 'left' },
                                    }}
                                >
                                    {t.HeroSection.psychologistName}
                                </Typography>
                            </>
                        ) : (
                            <Typography
                                variant='h3'
                                gutterBottom
                                sx={{ textAlign: { xs: 'center', md: 'left' } }}
                            >
                                {t.HeroSection.psychologistNameFull}
                            </Typography>
                        )}
                        {/* <Typography
                            variant='h3'
                            gutterBottom
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        >
                            Психолог <br className={style.brTag} /> Лидия Сердюк
                        </Typography> */}
                        <Typography
                            variant='h4'
                            sx={{
                                mb: '3rem',
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                            className={handwriteFont.className}
                        >
                            {t.HeroSection.importantMeeting}
                        </Typography>
                        <Stack
                            sx={{
                                justifyContent: {
                                    xs: 'center',
                                    md: 'flex-start',
                                },
                                alignItems: 'center',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: '1rem',
                            }}
                        >
                            <Button
                                href={
                                    german
                                        ? 'https://forms.gle/gyasfALuF6EBBprKA'
                                        : 'https://forms.gle/6JA4JWXsHne115REA'
                                }
                                variant='contained'
                                target='_blank'
                                color='secondary'
                                startIcon={<FeedIcon />}
                            >
                                {t.HeroSection.signToSession}
                            </Button>
                            <Button
                                href={'https://t.me/MTSLA2010'}
                                variant='contained'
                                target='_blank'
                                color='secondary'
                                startIcon={<TelegramIcon />}
                            >
                                {t.CallToAction.button2}
                            </Button>
                        </Stack>
                    </Box>
                    <Box sx={{ maxWidth: '500px' }}>
                        <Image
                            src={img1}
                            alt={'image1'}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                            }}
                            priority
                        />
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default HeroSection
