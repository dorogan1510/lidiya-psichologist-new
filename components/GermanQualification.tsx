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
                id='id6'
                sx={{
                    scrollMarginTop: '80px',
                    margin: '0 auto 3rem',
                    pt: '3rem',
                }}
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
                <Stack
                    sx={{
                        marginBottom: '1.5rem',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: '0.5rem', md: '1rem' },
                        alignItems: { xs: 'flex-start', md: 'left' },
                    }}
                >
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: '500', flex: '1' }}
                    >
                        2022-2023
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: '500', flex: '10' }}
                    >
                        Fortbildungkurs für Psychologen und Psychotherapeuten.
                        „Majak II, III“. Projekt von Aglaja Dateshidye.
                        Sankt-Petersburg
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                        marginBottom: '1.5rem',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: '0.5rem', md: '1rem' },
                        alignItems: { xs: 'flex-start', md: 'left' },
                    }}
                >
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: '500', flex: '1' }}
                    >
                        2019-2021
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: '500', flex: '10' }}
                    >
                        Fortbildung für Psychotherapeuten „Gestalttherapie für
                        die Kinder und Familie nach dem Violet
                        Oaklander-Modell”.Dialog Shool „Intellegentia“,
                        Stockholm. Information und Consulting Center
                        „Psychometrics“, Sankt-Petersburg.
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                        marginBottom: '1.5rem',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: '0.5rem', md: '1rem' },
                        alignItems: { xs: 'flex-start', md: 'left' },
                    }}
                >
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: '500', flex: '1' }}
                    >
                        2016-2019
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: '500', flex: '10' }}
                    >
                        Gestaltinstitut Sankt-Petersburg. Abschluß: Diplom-
                        Psychologin, Gestalttherapeutin.
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                        marginBottom: '1.5rem',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: '0.5rem', md: '1rem' },
                        alignItems: { xs: 'flex-start', md: 'left' },
                    }}
                >
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: '500', flex: '1' }}
                    >
                        1992-1993
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: '500', flex: '10' }}
                    >
                        Gaststudium an der Ludwig-Maximilians-Universität
                        München. (Germanistik, Psychologie, Slavistik)
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                        marginBottom: '1.5rem',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: '0.5rem', md: '1rem' },
                        alignItems: { xs: 'flex-start', md: 'left' },
                    }}
                >
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: '500', flex: '1' }}
                    >
                        1989-1996
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: '500', flex: '10' }}
                    >
                        Germanistikstudium an der Staatlichen Universität
                        Sankt-Petersburg. Abschluß: Diplim — Germanistin,
                        Literaturwissenschaftlerin, Deutschlererin.
                    </Typography>
                </Stack>
            </Container>
        </>
    )
}

export default GermanQualification
