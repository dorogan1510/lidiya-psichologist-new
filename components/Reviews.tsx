import {
    Backdrop,
    Box,
    Button,
    Container,
    Fade,
    Modal,
    Typography,
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import Image from 'next/image'
import { useState } from 'react'
import img1 from '../public/img/reviews/(1).webp'
import img2 from '../public/img/reviews/(2).webp'
import img3 from '../public/img/reviews/(3).webp'
import img4 from '../public/img/reviews/(4).webp'
import img5 from '../public/img/reviews/(5).webp'
import img6 from '../public/img/reviews/(6).webp'
import img7 from '../public/img/reviews/(7).webp'
import img8 from '../public/img/reviews/(8).webp'
import img9 from '../public/img/reviews/(9).webp'
import img10 from '../public/img/reviews/(10).webp'
import img11 from '../public/img/reviews/(11).webp'
import img12 from '../public/img/reviews/(12).webp'
import img13 from '../public/img/reviews/(13).webp'
import img14 from '../public/img/reviews/(14).webp'
import img15 from '../public/img/reviews/(15).webp'
import img16 from '../public/img/reviews/(16).webp'
import img17 from '../public/img/reviews/(17).webp'
import img18 from '../public/img/reviews/(18).webp'
import img19 from '../public/img/reviews/(19).webp'
import img20 from '../public/img/reviews/(20).webp'
import img21 from '../public/img/reviews/(21).webp'
import img22 from '../public/img/reviews/(22).webp'
import img23 from '../public/img/reviews/(23).webp'
import img24 from '../public/img/reviews/(24).webp'
import img25 from '../public/img/reviews/(25).webp'
import img26 from '../public/img/reviews/(26).webp'
import img27 from '../public/img/reviews/(27).webp'
import img28 from '../public/img/reviews/(28).webp'
import img29 from '../public/img/reviews/(29).webp'
import img30 from '../public/img/reviews/(30).webp'
import img31 from '../public/img/reviews/(31).webp'
import img32 from '../public/img/reviews/(32).webp'
import img33 from '../public/img/reviews/(33).webp'
import img34 from '../public/img/reviews/(34).webp'
import Carousel from 'react-material-ui-carousel'

const reviwes = [
    {
        id: 1,
        img: img1,
    },
    {
        id: 2,
        img: img2,
    },
    {
        id: 3,
        img: img3,
    },
    {
        id: 4,
        img: img4,
    },
    {
        id: 5,
        img: img5,
    },
    {
        id: 6,
        img: img6,
    },
    {
        id: 7,
        img: img7,
    },
    {
        id: 8,
        img: img8,
    },
    {
        id: 9,
        img: img9,
    },
    {
        id: 10,
        img: img10,
    },
    {
        id: 11,
        img: img11,
    },
    {
        id: 12,
        img: img12,
    },
    {
        id: 13,
        img: img13,
    },
    {
        id: 14,
        img: img14,
    },
    {
        id: 15,
        img: img15,
    },
    {
        id: 16,
        img: img16,
    },
    {
        id: 17,
        img: img17,
    },
    {
        id: 18,
        img: img18,
    },
    {
        id: 19,
        img: img19,
    },
    {
        id: 20,
        img: img20,
    },
    {
        id: 21,
        img: img21,
    },
    {
        id: 22,
        img: img22,
    },
    {
        id: 23,
        img: img23,
    },
    {
        id: 24,
        img: img24,
    },
    {
        id: 25,
        img: img25,
    },
    {
        id: 26,
        img: img26,
    },
    {
        id: 27,
        img: img27,
    },
    {
        id: 28,
        img: img28,
    },
    {
        id: 29,
        img: img29,
    },
    {
        id: 30,
        img: img30,
    },
    {
        id: 31,
        img: img31,
    },
    {
        id: 32,
        img: img32,
    },
    {
        id: 33,
        img: img33,
    },
    {
        id: 34,
        img: img34,
    },
]

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '55%',
    borderRadius: '5px',
}

const Reviews = () => {
    return (
        <Box sx={{ bgcolor: '#e4e4e4' }}>
            <Container
                id='id4'
                maxWidth='xl'
                sx={{
                    mb: '3rem',
                    p: '1rem',
                    scrollMarginTop: '80px',
                }}
            >
                <Typography
                    variant='h4'
                    sx={{ textAlign: 'center', fontWeight: '600' }}
                >
                    Мои отзывы
                </Typography>
                <Typography
                    variant='h6'
                    sx={{ textAlign: 'center', mb: '1.5rem' }}
                >
                    Все отзывы публикуются анонимно с согласия клиентов
                </Typography>

                <Box
                    sx={{
                        margin: '0 auto 1rem',
                        maxWidth: { xs: 400, md: '50%' },
                        height: 'fit-content',
                    }}
                >
                    <Carousel autoPlay={false}>
                        {reviwes.map(data => (
                            <Image
                                key={data.id}
                                src={data.img}
                                alt={'certificate'}
                                loading='lazy'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    marginBottom: '1rem',
                                }}
                            />
                        ))}
                    </Carousel>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: '1.5rem',
                    }}
                >
                    <Button
                        variant='contained'
                        color='secondary'
                        href='https://spb.profi.ru/profile/SerdyukLA/#reviews-tab'
                        target='_blank'
                    >
                        Больше отзывов на профи.ру
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Reviews
