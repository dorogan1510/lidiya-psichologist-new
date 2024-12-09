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
                        2024 —
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: '500', flex: '10' }}
                    >
                        Обучение системной терапии. Wispo — центр системной
                        терапии и консультирования. Гамбург.
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
                        2023 —
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: '500', flex: '10' }}
                    >
                        Обучающая программа для психологов и психотерапевтов
                        «Маяк III». Уровни развития и типы организации личности,
                        психиатрия для психологов, суицидальное поведение.
                        Проект Аглаи Датешидзе. Санкт-Петербург.
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
                        2022 —
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: '500', flex: '10' }}
                    >
                        Обучающая программа для психологов и психотерапевтов по
                        работе с травмой «Маяк II». Проект Аглаи Датешидзе.
                        Санкт-Петербург.
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
                        Обучающий проект «Гештальт-подход в работе с детьми и
                        семьёй по модели Вайолет Оклендер». Dialog Shool
                        „Intellegentia“, Stockholm. Information und Consulting
                        Center „Psychometrics“, Санкт-Петербург.
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
                        Санкт-Петербургский Институт Гештальта. Диплом -
                        психолог консультант. Гештальт-терапевт
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
                        Мюнхенский университет Людвига-Максимилиана. Обучение.
                        (Германистика, психология, славистика)
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
                        Санкт-Петербургский государственный университет. Диплом.
                        Филолог-германист, преподаватель немецкого языка и
                        литературы.
                    </Typography>
                </Stack>
            </Container>
        </>
    )
}

export default GermanQualification
