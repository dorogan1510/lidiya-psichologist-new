import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import img8 from '../public/img/cartoons/(8).jpg'
import img9 from '../public/img/cartoons/(9).jpg'

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
                            года и считаю этот формат не только эффективным, но
                            и очень удобным - он экономит нам время и доступен в
                            любой точке мира.
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
                            Вы сами можете выбрать удобную для Вас онлайн
                            платформу. Я работаю в Skype, Zoom, WhatsApp и
                            Telegram в видеоформате. По договорённости возможен
                            также комбинированный формат (например, каждая 6
                            встреча может проводиться очно).
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
