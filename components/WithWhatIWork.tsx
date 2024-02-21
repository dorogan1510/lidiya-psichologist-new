import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import img10 from '../public/img/cartoons/(10).jpg'
import img2 from '../public/img/cartoons/(2).jpg'
import img6 from '../public/img/cartoons/(6).jpg'
import { useRouter } from 'next/router'
import de from '../languages/de'
import ru from '../languages/ru'
import { useEffect, useState } from 'react'
const WithWhatIWork = () => {
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

    const [difficulties, setDifficulties] = useState<string[]>([])
    const [personalDevelopment, setPersonalDevelopment] = useState<string[]>([])
    const [difficultiesWithOthers, setDifficultiesWithOthers] = useState<
        string[]
    >([])

    const russianDifficulties = [
        t.WithWhatIWork.Difficulties.text1,
        t.WithWhatIWork.Difficulties.text2,
        t.WithWhatIWork.Difficulties.text3,
        t.WithWhatIWork.Difficulties.text4,
        t.WithWhatIWork.Difficulties.text5,
        t.WithWhatIWork.Difficulties.text6,
        t.WithWhatIWork.Difficulties.text7,
        t.WithWhatIWork.Difficulties.text8,
    ]

    const germanDifficulties = [
        t.WithWhatIWork.Difficulties.text1,
        t.WithWhatIWork.Difficulties.text2,
        t.WithWhatIWork.Difficulties.text3,
        t.WithWhatIWork.Difficulties.text4,
        t.WithWhatIWork.Difficulties.text5,
        t.WithWhatIWork.Difficulties.text6,
        t.WithWhatIWork.Difficulties.text7,
    ]

    const russianPersonalDevelopment = [
        t.WithWhatIWork.PersonalDevelopment.text1,
        t.WithWhatIWork.PersonalDevelopment.text2,
        t.WithWhatIWork.PersonalDevelopment.text3,
        t.WithWhatIWork.PersonalDevelopment.text4,
        t.WithWhatIWork.PersonalDevelopment.text5,
        t.WithWhatIWork.PersonalDevelopment.text6,
        t.WithWhatIWork.PersonalDevelopment.text7,
        t.WithWhatIWork.PersonalDevelopment.text8,
        t.WithWhatIWork.PersonalDevelopment.text9,
        t.WithWhatIWork.PersonalDevelopment.text10,
    ]

    const germanPersonalDevelopment = [
        t.WithWhatIWork.PersonalDevelopment.text1,
        t.WithWhatIWork.PersonalDevelopment.text2,
        t.WithWhatIWork.PersonalDevelopment.text3,
    ]

    const russianDifficultiesWithOthers = [
        t.WithWhatIWork.DifficultiesWithOthers.text1,
        t.WithWhatIWork.DifficultiesWithOthers.text2,
        t.WithWhatIWork.DifficultiesWithOthers.text3,
        t.WithWhatIWork.DifficultiesWithOthers.text4,
    ]

    const germanDifficultiesWithOthers = [
        t.WithWhatIWork.DifficultiesWithOthers.text1,
        t.WithWhatIWork.DifficultiesWithOthers.text2,
        t.WithWhatIWork.DifficultiesWithOthers.text3,
    ]

    useEffect(() => {
        if (locale === 'ru') {
            setDifficulties(russianDifficulties)
            setPersonalDevelopment(russianPersonalDevelopment)
            setDifficultiesWithOthers(russianDifficultiesWithOthers)
        } else {
            setDifficulties(germanDifficulties)
            setPersonalDevelopment(germanPersonalDevelopment)
            setDifficultiesWithOthers(germanDifficultiesWithOthers)
        }
    }, [locale])

    return (
        <Box>
            <Container
                maxWidth='xl'
                sx={{
                    pl: { xs: '1rem', md: '3rem' },
                    scrollMarginTop: '80px',
                    py: '3rem',
                }}
                id='id2'
            >
                <Typography
                    variant='h4'
                    sx={{
                        textAlign: 'center',
                        mb: '1.5rem',
                        fontWeight: '600',
                    }}
                >
                    {t.WithWhatIWork.withWhatIWork}
                </Typography>
                <Typography
                    variant='h5'
                    sx={{ textAlign: 'center', mb: '2rem', fontWeight: '600' }}
                >
                    {t.WithWhatIWork.Difficulties.difficulties}
                </Typography>
                <Stack
                    sx={{
                        m: '0 auto 3rem',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'left',
                        maxWidth: '1100px',
                        gap: { xs: '1.5rem', md: '3rem' },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: '1',
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: '300px',
                            }}
                        >
                            <Image
                                src={img6}
                                alt={''}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ flex: '1' }}>
                        {difficulties.map((data: string) => (
                            <Typography variant='h6' gutterBottom>
                                &#8226; {data}
                            </Typography>
                        ))}
                    </Box>
                </Stack>

                <Typography
                    variant='h5'
                    sx={{ textAlign: 'center', mb: '2rem', fontWeight: '600' }}
                >
                    {t.WithWhatIWork.PersonalDevelopment.personalDevelopment}
                </Typography>
                <Stack
                    sx={{
                        m: '0 auto 3rem',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'left',
                        maxWidth: '1100px',
                        gap: { xs: '1.5rem', md: '3rem' },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: '1',
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: '300px',
                            }}
                        >
                            <Image
                                src={img10}
                                alt={''}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ flex: '1' }}>
                        {personalDevelopment.map((data: string) => (
                            <Typography variant='h6' gutterBottom>
                                &#8226; {data}
                            </Typography>
                        ))}
                    </Box>
                </Stack>

                <Typography
                    variant='h5'
                    sx={{ textAlign: 'center', mb: '2rem', fontWeight: '600' }}
                >
                    {
                        t.WithWhatIWork.DifficultiesWithOthers
                            .difficultiesWithOthers
                    }
                </Typography>
                <Stack
                    sx={{
                        m: '0 auto',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'left',
                        maxWidth: '1100px',
                        gap: { xs: '1.5rem', md: '3rem' },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: '1',
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: '300px',
                            }}
                        >
                            <Image
                                src={img2}
                                alt={''}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ flex: '1' }}>
                        {difficultiesWithOthers.map(
                            (data: string, id: number) => (
                                <Typography key={id} variant='h6' gutterBottom>
                                    &#8226; {data}
                                </Typography>
                            )
                        )}
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default WithWhatIWork
