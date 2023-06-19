import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'
import img1 from '../public/img/reviews/(1).jpg'
import img10 from '../public/img/reviews/(10).jpg'
import img11 from '../public/img/reviews/(11).jpg'
import img12 from '../public/img/reviews/(12).jpg'
import img13 from '../public/img/reviews/(13).jpg'
import img14 from '../public/img/reviews/(14).jpg'
import img15 from '../public/img/reviews/(15).jpg'
import img16 from '../public/img/reviews/(16).jpg'
import img17 from '../public/img/reviews/(17).jpg'
import img18 from '../public/img/reviews/(18).jpg'
import img19 from '../public/img/reviews/(19).jpg'
import img2 from '../public/img/reviews/(2).jpg'
import img20 from '../public/img/reviews/(20).jpg'
import img21 from '../public/img/reviews/(21).jpg'
import img22 from '../public/img/reviews/(22).jpg'
import img23 from '../public/img/reviews/(23).jpg'
import img24 from '../public/img/reviews/(24).jpg'
import img25 from '../public/img/reviews/(25).jpg'
import img26 from '../public/img/reviews/(26).jpg'
import img27 from '../public/img/reviews/(27).jpg'
import img28 from '../public/img/reviews/(28).jpg'
import img29 from '../public/img/reviews/(29).jpg'
import img3 from '../public/img/reviews/(3).jpg'
import img30 from '../public/img/reviews/(30).jpg'
import img31 from '../public/img/reviews/(31).jpg'
import img32 from '../public/img/reviews/(32).jpg'
import img33 from '../public/img/reviews/(33).jpg'
import img34 from '../public/img/reviews/(34).jpg'
import img35 from '../public/img/reviews/(35).jpg'
import img36 from '../public/img/reviews/(36).jpg'
import img4 from '../public/img/reviews/(4).jpg'
import img5 from '../public/img/reviews/(5).jpg'
import img6 from '../public/img/reviews/(6).jpg'
import img7 from '../public/img/reviews/(7).jpg'
import img8 from '../public/img/reviews/(8).jpg'
import img9 from '../public/img/reviews/(9).jpg'

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
    {
        id: 35,
        img: img35,
    },
    {
        id: 36,
        img: img36,
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
                        maxWidth: { xs: 400, md: '28%' },
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
