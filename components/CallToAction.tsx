import {
    Box,
    Button,
    Container,
    IconButton,
    Stack,
    Typography,
} from '@mui/material'
import React from 'react'
import Image from 'next/image'
import TelegramIcon from '@mui/icons-material/Telegram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import { handwriteFont } from '../styles/theme'
import img1 from '../public/img/4.jpg'
import Link from '../src/Link'

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
                    >
                        <Typography variant='h6'>
                            <Link
                                href={'mailto:mrsla2010@gmail.com'}
                                sx={{
                                    color: 'black',
                                    textDecoration: 'underline',
                                }}
                            >
                                mrsla2010@gmail.com
                            </Link>
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default CallToAction
