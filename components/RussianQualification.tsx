import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'
import img1 from '../public/img/certificates/1.webp'
import img2 from '../public/img/certificates/2.webp'
import img3 from '../public/img/certificates/3.webp'
import img4 from '../public/img/certificates/4.webp'
import img5 from '../public/img/certificates/5.webp'
import img6 from '../public/img/certificates/6.webp'
import img7 from '../public/img/certificates/7.webp'
import img8 from '../public/img/certificates/8.webp'
import img9 from '../public/img/certificates/9.webp'
import img10 from '../public/img/certificates/additional/(1).webp'
import img11 from '../public/img/certificates/additional/(2).webp'
import img12 from '../public/img/certificates/additional/(3).webp'
import img13 from '../public/img/certificates/additional/(4).webp'
import img14 from '../public/img/certificates/additional/(5).webp'
import img15 from '../public/img/certificates/additional/(6).webp'
import img16 from '../public/img/certificates/additional/(7).webp'
import img17 from '../public/img/certificates/additional/(8).webp'
import { useRouter } from 'next/router'
import de from '../languages/de'
import ru from '../languages/ru'

const RussianQualification = () => {
    const router = useRouter()
    const { locale } = router

    const t: any = (() => {
        switch (locale) {
            case 'ru':
                return ru
            case 'de':
                return de
        }
    })()
    const certificates = [
        {
            id: 1,
            name: t.Qualification.certificate1,
            img: img1,
        },
        {
            id: 2,
            name: t.Qualification.certificate2,
            img: img2,
        },
        {
            id: 3,
            name: t.Qualification.certificate3,
            img: img3,
        },
        {
            id: 4,
            name: t.Qualification.certificate4,
            img: img4,
        },
        {
            id: 5,
            name: t.Qualification.certificate5,
            img: img5,
        },
        {
            id: 6,
            name: t.Qualification.certificate6,
            img: img6,
        },
        {
            id: 7,
            name: t.Qualification.certificate7,
            img: img7,
        },
        {
            id: 8,
            name: t.Qualification.certificate8,
            img: img8,
        },
        {
            id: 9,
            name: t.Qualification.certificate9,
            img: img9,
        },
        {
            id: 10,
            name: t.Qualification.certificate10,
            img: img10,
        },
        {
            id: 11,
            name: t.Qualification.certificate11,
            img: img11,
        },
        {
            id: 12,
            name: t.Qualification.certificate12,
            img: img12,
        },
        {
            id: 13,
            name: t.Qualification.certificate13,
            img: img13,
        },
        {
            id: 14,
            name: t.Qualification.certificate14,
            img: img14,
        },
        {
            id: 15,
            name: t.Qualification.certificate15,
            img: img15,
        },
        {
            id: 16,
            name: t.Qualification.certificate16,
            img: img16,
        },
        {
            id: 17,
            name: t.Qualification.certificate17,
            img: img17,
        },
    ]

    return (
        <>
            <Container id='id5' sx={{ scrollMarginTop: '80px' }} maxWidth='xl'>
                <Typography
                    variant='h4'
                    textAlign='center'
                    gutterBottom
                    sx={{ fontWeight: '600' }}
                >
                    {t.Qualification.myQualification}
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
                            <Box key={data.id}>
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

                                <Typography variant='body1'>
                                    {data.name}
                                </Typography>
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Container>
        </>
    )
}

export default RussianQualification
