import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import img9 from '../public/img/cartoons/(9).jpg'
import img8 from '../public/img/cartoons/(8).jpg'

const Contacts = () => {
    return (
        <Container
            maxWidth='xl'
            id='id6'
            sx={{ mb: '3rem', scrollMarginTop: '80px' }}
        >
            <Typography
                variant='h4'
                gutterBottom
                sx={{ textAlign: 'center', fontWeight: '600' }}
            >
                Контакты
            </Typography>
            <Box
                sx={{
                    m: { xs: '0', md: '0 5rem' },
                }}
            >
                <Stack
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { xs: '1.5rem', md: '3rem' },
                        mb: { xs: '3rem', md: '3rem' },
                    }}
                >
                    <Box sx={{ maxWidth: '300px' }}>
                        <Image
                            src={img9}
                            alt={''}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Box>
                    <Box sx={{ maxWidth: '700px' }}>
                        <Typography variant='h6'>
                            В современном мире, когда у нас часто нет
                            возможности обратиться к психологу лично (плотный
                            график работы, эмиграция, маленькие дети и т.д.), мы
                            можем получить качественную психологическую помощь
                            онлайн. Я консультирую клиентов онлайн с начала 2019
                            года. По моему опыту, это не только очень удобный
                            формат, так как он позволяет экономить время и
                            доступен в любой точке мира, но и не менее
                            эффективный, чем классический.
                        </Typography>
                    </Box>
                </Stack>
                <Stack
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { xs: '1.5rem', md: '3rem' },
                    }}
                >
                    <Box sx={{ maxWidth: '700px', order: { xs: 2, md: 1 } }}>
                        <Typography variant='h6'>
                            Я работаю в Skype, Zoom, WhatsApp и Telegram в
                            видеоформате. Вы сами можете выбрать удобную для Вас
                            онлайн платформу. По договорённости возможен также
                            комбинированный формат (например, каждая 6 встреча
                            очно в Санкт-Петербурге или Гамбурге). <br /> Буду
                            рада Вам помочь!
                        </Typography>
                    </Box>
                    <Box sx={{ maxWidth: '300px', order: { xs: 1, md: 2 } }}>
                        <Image
                            src={img8}
                            alt={''}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Box>
                </Stack>
            </Box>
        </Container>
    )
}

export default Contacts
