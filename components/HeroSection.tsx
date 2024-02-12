import { Button, Container, Stack, Typography } from '@mui/material'
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

    const [psychologistFullName, setpsychologistFullName] = useState<boolean>()

    useEffect(() => {
        if (locale === 'de') {
            setpsychologistFullName(false)
        } else setpsychologistFullName(true)
    }, [locale])

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
                        <Typography
                            variant='h3'
                            gutterBottom
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        >
                            {t.HeroSection.psychologistNameFull}
                        </Typography>

                        {/* {!psychologistFullName && (
                            <>
                                <Typography
                                    variant='h3'
                                    gutterBottom
                                    sx={{
                                        textAlign: { xs: 'center', md: 'left' },
                                    }}
                                >
                                    {t.HeroSection.psychologistName}
                                </Typography>
                                <Typography
                                    variant='h3'
                                    gutterBottom
                                    sx={{
                                        textAlign: { xs: 'center', md: 'left' },
                                    }}
                                >
                                    {t.HeroSection.psychologist}
                                </Typography>
                            </>
                        )} */}
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
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: {
                                    xs: 'center',
                                    md: 'flex-start',
                                },
                            }}
                        >
                            <Button
                                href='mailto:mrsla2010@gmail.com'
                                variant='contained'
                                sx={{ display: 'block' }}
                                target='_blank'
                                color='secondary'
                            >
                                {t.HeroSection.signToSession}
                            </Button>
                        </Box>
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
