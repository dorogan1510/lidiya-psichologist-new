import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { handwriteFont } from '../styles/theme'
import img1 from '../public/img/certificates/1.webp'
import img2 from '../public/img/certificates/2.webp'
import img3 from '../public/img/certificates/3.webp'
import img4 from '../public/img/certificates/4.webp'
import img5 from '../public/img/certificates/5.webp'
import img6 from '../public/img/certificates/6.webp'
import img7 from '../public/img/certificates/7.webp'
import img8 from '../public/img/certificates/8.webp'
import img9 from '../public/img/certificates/9.webp'
import img10 from '../public/img/certificates/img(1).webp'
import img11 from '../public/img/certificates/img(2).webp'
import img12 from '../public/img/certificates/img(3).webp'
import img13 from '../public/img/certificates/img(4).webp'
import img14 from '../public/img/certificates/img(5).webp'
import img15 from '../public/img/certificates/img(6).webp'
import img16 from '../public/img/certificates/img(7).webp'
import img17 from '../public/img/certificates/img(8).webp'
import img18 from '../public/img/certificates/img(9).webp'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'

const Qualification = () => {
    const certificates = [
        {
            id: 1,
            name: 'Диплом Санкт-Петербургского Института Гештальта, курс «Практический инструментарий и области приложения гештальта».',
            img: img1,
        },
        {
            id: 2,
            name: 'Санкт-Петербургский Институт Гештальта. Дополнительная профессионально-образовательная программа «Теория и методология гештальта»',
            img: img2,
        },
        {
            id: 3,
            name: 'Санкт-Петербургский Институт Гештальта. Дополнительная профессионально-образовательная программа «Теория и методология гештальта»',
            img: img3,
        },
        {
            id: 4,
            name: 'Сертификат по программе «Гештальт-подход по работе с детьми и семьёй по модели Вайолет Оклендер»',
            img: img4,
        },
        {
            id: 5,
            name: 'Сертификат по программе «Гештальт-подход по работе с детьми и семьёй по модели Вайолет Оклендер»',
            img: img5,
        },
        {
            id: 6,
            name: 'Санкт-Петербургский Институт Гештальта. Дидактические семинары',
            img: img6,
        },
        {
            id: 7,
            name: 'Санкт-Петербургский Институт Гештальта. Дидактические семинары',
            img: img7,
        },
        {
            id: 8,
            name: 'Санкт-Петербургский Институт Гештальта. Дидактические семинары',
            img: img8,
        },
        {
            id: 9,
            name: 'Санкт-Петербургский Институт Гештальта. Дидактические семинары',
            img: img9,
        },
        {
            id: 10,
            name: 'Сертификат обучающей программы по психиатрии для психологов и психотерапевтов',
            img: img10,
        },
        {
            id: 11,
            name: 'Сертификат обучающей программы по психиатрии для психологов и психотерапевтов',
            img: img11,
        },
        {
            id: 12,
            name: 'Сертификат обучающей программы по психиатрии для психологов и психотерапевтов',
            img: img12,
        },
        {
            id: 13,
            name: 'Сертификат обучающей программы по психиатрии для психологов и психотерапевтов',
            img: img13,
        },
        {
            id: 14,
            name: 'Сертификат обучающей программы по психиатрии для психологов и психотерапевтов',
            img: img14,
        },
        {
            id: 15,
            name: 'Сертификат обучающей программы по психиатрии для психологов и психотерапевтов',
            img: img15,
        },
        {
            id: 16,
            name: 'Сертификат обучающей программы по психиатрии для психологов и психотерапевтов',
            img: img16,
        },
        {
            id: 17,
            name: 'Сертификат обучающей программы по психиатрии для психологов и психотерапевтов',
            img: img17,
        },
        {
            id: 18,
            name: 'Сертификат обучающей программы по психиатрии для психологов и психотерапевтов',
            img: img18,
        },
    ]

    return (
        <Container id='id3' sx={{ scrollMarginTop: '80px' }} maxWidth='xl'>
            <Typography variant='h4' textAlign='center' gutterBottom>
                Моя квалификация
            </Typography>

            <Box
                sx={{
                    textAlign: 'center',
                    margin: '0 auto 3rem',
                    maxWidth: { xs: 400, md: '50%' },
                    height: 'fit-content',
                }}
            >
                <Carousel autoPlay={false} navButtonsAlwaysVisible>
                    {certificates.map(data => (
                        <>
                            <Image
                                src={data.img}
                                alt={'certificate'}
                                loading='lazy'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    marginBottom: '1rem',
                                }}
                            />

                            <Typography variant='body1'>{data.name}</Typography>
                        </>
                    ))}
                </Carousel>
            </Box>

            {/* 1 раздел */}
            {/* <Stack justifyContent={'center'} alignItems={'center'} mb='3rem'>
                <Typography
                    variant='h5'
                    gutterBottom
                    sx={{ textAlign: 'center' }}
                >
                    Диплом Санкт-Петербургского Института Гештальта, курс
                    «Практический инструментарий и области приложения
                    гештальта».
                </Typography>
                <Box sx={{ maxWidth: '650px' }}>
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
            </Stack> */}

            {/* 2 раздел */}
            {/* <Typography variant='h5' gutterBottom sx={{ textAlign: 'center' }}>
                Санкт-Петербургский Институт Гештальта. Дополнительная
                профессионально-образовательная программа «Теория и методология
                гештальта»
            </Typography>
            <Grid container spacing={'3rem'} mb='3rem'>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Box sx={{ maxWidth: '550px' }}>
                        <Image
                            src={img2}
                            alt={'image1'}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                            }}
                            priority
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Box sx={{ maxWidth: '550px' }}>
                        <Image
                            src={img3}
                            alt={'image1'}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                            }}
                            priority
                        />
                    </Box>
                </Grid>
            </Grid> */}

            {/* 3 раздел */}
            {/* <Typography variant='h5' gutterBottom sx={{ textAlign: 'center' }}>
                Сертификаты по программе «Гештальт-подход по работе с детьми и
                семьёй по модели Вайолет Оклендер»
            </Typography>
            <Grid container spacing={'3rem'} mb='3rem'>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Box sx={{ maxWidth: '550px' }}>
                        <Image
                            src={img4}
                            alt={'image1'}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                            }}
                            priority
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Box sx={{ maxWidth: '550px' }}>
                        <Image
                            src={img5}
                            alt={'image1'}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                            }}
                            priority
                        />
                    </Box>
                </Grid>
            </Grid> */}

            {/* 4 раздел */}
            {/* <Typography variant='h5' gutterBottom sx={{ textAlign: 'center' }}>
                Санкт-Петербургский Институт Гештальта. Дидактические семинары
            </Typography>
            <Grid container spacing={'3rem'} mb='3rem'>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Box sx={{ maxWidth: '550px' }}>
                        <Image
                            src={img6}
                            alt={'image1'}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                            }}
                            priority
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Box sx={{ maxWidth: '550px' }}>
                        <Image
                            src={img7}
                            alt={'image1'}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                            }}
                            priority
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Box sx={{ maxWidth: '550px' }}>
                        <Image
                            src={img8}
                            alt={'image1'}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                            }}
                            priority
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Box sx={{ maxWidth: '550px' }}>
                        <Image
                            src={img9}
                            alt={'image1'}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                            }}
                            priority
                        />
                    </Box>
                </Grid>
            </Grid> */}
        </Container>
    )
}

export default Qualification
