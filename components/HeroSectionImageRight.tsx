import { Button, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import img1 from '../public/img/3.webp'
import { handwriteFont } from '../styles/theme'

const HeroSectionImageRight = () => {
    return (
        <Box sx={{ bgcolor: '#b8d8f3' }}>
            <Container maxWidth='xl' sx={{ pl: { xs: '1rem', md: '3rem' } }}>
                <Stack
                    flexDirection={{ xs: 'column', md: 'row' }}
                    justifyContent='center'
                    alignItems='center'
                    gap='1rem'
                    sx={{ pt: { xs: '3rem', md: '0' } }}
                >
                    <Box sx={{ maxWidth: '1110px' }}>
                        <Typography
                            variant='h3'
                            gutterBottom
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        >
                            Психолог Лидия Сердюк
                        </Typography>
                        <Typography
                            variant='h4'
                            sx={{
                                mb: '3rem',
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                            className={handwriteFont.className}
                        >
                            Cамая важная встреча — это встреча с самим с собой
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
                                href='https://wa.me/79119042677?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BA%20%D0%B2%D0%B0%D0%BC%20%D0%BD%D0%B0%20%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D1%83%D1%8E%20%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8E.'
                                variant='contained'
                                sx={{ display: 'block' }}
                                target='_blank'
                                color='secondary'
                            >
                                Записаться на сессию
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

export default HeroSectionImageRight
