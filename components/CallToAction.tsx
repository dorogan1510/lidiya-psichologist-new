import TelegramIcon from '@mui/icons-material/Telegram'
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

                    <Typography
                        variant='h4'
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            marginBottom: '1.5rem',
                        }}
                        className={handwriteFont.className}
                    >
                        {t.CallToAction.hardTime}
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
                </Stack>
            </Container>
        </Box>
    )
}

export default CallToAction
