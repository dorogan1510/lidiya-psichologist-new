import { useRouter } from 'next/router'
import ru from '../languages/ru'
import de from '../languages/de'
import { Box, Container, Stack, Typography } from '@mui/material'
import { text } from 'stream/consumers'

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
                <Stack sx={{ marginBottom: '1.5rem' }}>
                    <Box>
                        <Typography variant='h5' sx={{ fontWeight: '500' }}>
                            2016-2019 Gestaltinstitut Sankt-Petersburg.
                            Gestaltterapeutin.
                        </Typography>
                    </Box>
                </Stack>
                <Stack
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        marginBottom: '1.5rem',
                    }}
                >
                    <Box sx={{ flex: '1' }}>
                        <Typography variant='h5' sx={{ fontWeight: '500' }}>
                            2019-2020 Dialog Schule "Intelligentia",
                            Sankt-Petersburg, Stockholm.
                        </Typography>
                    </Box>
                    <Box sx={{ flex: '1' }}>
                        <Typography variant='h5' sx={{ fontWeight: '500' }}>
                            Fortbildungsprogramm "Gestalttherapie mit den
                            Kindern und Familie nach dem Violet
                            Oaklander-Modell”.
                        </Typography>
                    </Box>
                </Stack>
                <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                    <Box sx={{ flex: '1' }}>
                        <Typography variant='h5' sx={{ fontWeight: '500' }}>
                            2022-2023 Fortbildungsprogramme für Psychologen und
                            Psychotherapeuten.
                        </Typography>
                    </Box>
                    <Box sx={{ flex: '1' }}>
                        <Typography variant='h5' sx={{ fontWeight: '500' }}>
                            "Majak II, III". Projekt von Aglaja Dateshidye.
                            Sankt.Petersburg
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </>
    )
}

export default GermanQualification
