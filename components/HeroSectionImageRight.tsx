import { Button, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import img1 from '../public/img/3.webp'
import { handwriteFont } from '../styles/theme'
import style from './HeroSectionImageRight.module.scss'

const HeroSectionImageRight = () => {
    return (
        <Box sx={{ bgcolor: '#b8d8f3', mb: '3rem' }}>
            <Container
                maxWidth='xl'
                sx={{
                    pl: { xs: '1rem', md: '3rem' },
                    height: { xs: 'auto', md: '80vh' },
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
                        position: { xs: 'static', md: 'absolute' },
                        bottom: 0,
                    }}
                >
                    <Box sx={{ maxWidth: '1110px' }}>
                        <Typography
                            variant='h3'
                            gutterBottom
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        >
                            Психолог <br className={style.brTag} /> Лидия Сердюк
                        </Typography>
                        <Typography
                            variant='h3'
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
                                href='https://wa.me/79119042677?text='
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
