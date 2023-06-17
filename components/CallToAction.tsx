import TelegramIcon from '@mui/icons-material/Telegram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import Link from '../src/Link'
import { handwriteFont } from '../styles/theme'

const CallToAction = () => {
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
                    <Typography variant='h4' textAlign={'center'}>
                        Запишитесь на консультацию или задайте вопрос
                    </Typography>
                    <Box>
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
                    </Stack>

                    <Typography
                        variant='h4'
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                        className={handwriteFont.className}
                    >
                        Не оставайтесь одни в трудные времена!
                    </Typography>
                </Stack>
            </Container>
        </Box>
    )
}

export default CallToAction
