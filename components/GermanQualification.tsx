import { useRouter } from 'next/router'
import ru from '../languages/ru'
import de from '../languages/de'
import { Box, Container, Typography } from '@mui/material'

const GermanQualification = () => {
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
    return (
        <>
            <Container
                id='id5'
                sx={{ scrollMarginTop: '80px', margin: '0 auto 3rem' }}
                maxWidth='xl'
            >
                <Typography
                    variant='h4'
                    textAlign='center'
                    gutterBottom
                    sx={{ fontWeight: '600' }}
                >
                    {t.Qualification.myQualification}
                </Typography>
                <Typography
                    variant='h5'
                    gutterBottom
                    sx={{ textAlign: 'center', fontWeight: '600' }}
                >
                    2016-2019 Gestaltinstitut Sankt-Petersburg.
                    Gestaltterapeutin.
                </Typography>
                <Typography
                    variant='h5'
                    gutterBottom
                    sx={{ textAlign: 'center', fontWeight: '600' }}
                >
                    2019-2020 Dialog Schule “Intellegentia”, Stockholm -
                    Lernprojekt ”Gestaltterapie mit den Kindern und Familie nach
                    dem Violet Oaklander-Modell”.
                </Typography>
            </Container>
        </>
    )
}

export default GermanQualification
