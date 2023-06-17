import { Button, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import img2 from '../public/img/2.webp'
import styles from './HeroSectionImageRight.module.scss'
import { handwriteFont } from '../styles/theme'

const HeroSectionImageRight = () => {
    return (
        <Box
            sx={{
                bgcolor: '#e4e4e4',
            }}
        >
            <Container
                id='id2'
                maxWidth='xl'
                sx={{
                    mb: '3rem',
                    pt: '3rem',
                    scrollMarginTop: '60px',
                }}
            >
                <Typography
                    variant='h4'
                    gutterBottom
                    sx={{ textAlign: 'center' }}
                >
                    Обо мне
                </Typography>
                <Stack
                    flexDirection={{ xs: 'column', lg: 'row' }}
                    justifyContent='center'
                    alignItems='flex-end'
                    gap='1rem'
                >
                    <Box sx={{ maxWidth: '1000px', order: 2 }}>
                        <Typography variant='h6' sx={{ mb: '1.5rem' }}>
                            Мой путь в психологию начался с поисков возможностей
                            улучшить качество собственной жизни. По своей первой
                            специальности я филолог-германист, переводчик и
                            преподаватель немецкого языка и литературы. Интерес
                            к психологии и психотерапии помогли мне преодолеть
                            мои собственные кризисы. Со временем, вдохновившись
                            позитивными изменениями, я начала интересоваться
                            психологией как инструментом, помогающим человеку
                            стать стабильнее, увереннее и счастливее.
                            <br />
                            <br />Я безмерно благодарна всем тем людям на моём
                            пути, которые помогли мне найти себя в новой
                            профессии. Она не престаёт меня вдохновлять,
                            заряжать энергией и давать силы для дальнейшего
                            профессионального роста. Закончив
                            Санкт-Петербургский Институт Гештальта, я начала
                            свою частную психологическую практику, которая
                            насчитывает более 2500 часов. Я продолжаю
                            совершенствовать свои профессиональные навыки и
                            способности - регулярно прохожу индивидуальную и
                            групповую супервизию, участвую в семинарах и
                            долгосрочных образовательных программах для
                            психологов, осваиваю профессиональную литературу, а
                            также нахожусь в регулярной личной терапии.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            order: 1,
                            maxWidth: '400px',
                            margin: '0 auto',
                        }}
                    >
                        <Image
                            src={img2}
                            alt={'image1'}
                            priority
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                            }}
                        />
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default HeroSectionImageRight
