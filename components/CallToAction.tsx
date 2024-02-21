import TelegramIcon from '@mui/icons-material/Telegram'
import FeedIcon from '@mui/icons-material/Feed'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {
    Box,
    Button,
    Container,
    IconButton,
    Stack,
    Typography,
} from '@mui/material'
import Link from '../src/Link'
import { handwriteFont } from '../styles/theme'
import { useRouter } from 'next/router'
import de from '../languages/de'
import ru from '../languages/ru'
import { useState, useEffect } from 'react'

const CallToAction = () => {
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

    return (
        <Box sx={{ bgcolor: '#b8d8f3' }}>
            <Container maxWidth='xl'>
                <Stack
                    sx={{
                        p: { xs: '1.5rem', md: '5rem' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant='h4'
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            marginBottom: '1rem',
                        }}
                        className={handwriteFont.className}
                    >
                        {t.CallToAction.hardTime}
                    </Typography>
                    <Typography
                        variant='h4'
                        textAlign={'center'}
                        marginBottom={'1.5rem'}
                    >
                        {t.CallToAction.signToConsultation}
                    </Typography>
                    {/* <Box>
                        <IconButton
                            sx={{ color: 'secondary.main' }}
                            href='https://t.me/+79119042677'
                            target='_blank'
                        >
                            <TelegramIcon
                                style={{ width: '50px', height: '50px' }}
                            />
                        </IconButton>
                        <IconButton
                            sx={{ color: 'secondary.main' }}
                            target='_blank'
                            href='https://wa.me/79119042677?text='
                        >
                            <WhatsAppIcon
                                style={{ width: '50px', height: '50px' }}
                            />
                        </IconButton>
                    </Box>
                    <Stack
                        flexDirection={'row'}
                        alignItems={'center'}
                        gap='1rem'
                        mb='1.5rem'
                    >
                        <Typography variant='h6'>
                            <Link
                                href={'mailto:serdiuk.l1970@gmail.com'}
                                sx={{
                                    color: 'black',
                                    textDecoration: 'underline',
                                }}
                            >
                                serdiuk.l1970@gmail.com
                            </Link>
                        </Typography>
                    </Stack> */}

                    <Stack
                        sx={{
                            justifyContent: {
                                xs: 'center',
                                md: 'flex-start',
                            },
                            gap: '1rem',
                            flexDirection: { xs: 'column', md: 'row' },
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
                            {t.CallToAction.button1}
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
                </Stack>
            </Container>
        </Box>
    )
}

export default CallToAction
