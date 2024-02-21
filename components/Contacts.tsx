import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import img8 from '../public/img/cartoons/(8).jpg'
import img9 from '../public/img/cartoons/(9).jpg'
import { useRouter } from 'next/router'
import ru from '../languages/ru'
import de from '../languages/de'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Contacts = () => {
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

    const [german, setGerman] = useState<boolean>(true)

    useEffect(() => {
        if (locale === 'de') {
            setGerman(false)
        } else {
            setGerman(true)
        }
    }, [locale])

    return (
        <Container
            maxWidth='xl'
            id='id7'
            sx={{ pb: '3rem', scrollMarginTop: '80px' }}
        >
            <Typography
                variant='h4'
                gutterBottom
                sx={{ textAlign: 'center', fontWeight: '600' }}
            >
                {t.Contacts.contacts}
            </Typography>
            <Box
                sx={{
                    m: { xs: '0', md: '0 5rem' },
                }}
            >
                <Stack
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { xs: '1.5rem', md: '3rem' },
                        mb: { xs: '3rem', md: '3rem' },
                    }}
                >
                    <Box sx={{ maxWidth: '300px' }}>
                        <Image src={img9} alt={''} style={{ width: '100%' }} />
                    </Box>
                    <Box
                        sx={{
                            maxWidth: '700px',
                            textAlign: german
                                ? 'left'
                                : { xs: 'center', md: 'left' },
                        }}
                    >
                        <Typography variant='h5' gutterBottom>
                            {t.Contacts.text1}
                        </Typography>
                        <Typography variant='h5'>
                            {t.Contacts.text2}
                            <br /> {t.Contacts.text3}
                        </Typography>
                        <Link
                            href={'https://www.wery-well.de/'}
                            target='_blank'
                        >
                            <Typography variant='h5' sx={{ color: 'black' }}>
                                https://www.wery-well.de/
                            </Typography>
                        </Link>
                    </Box>
                </Stack>

                {/* {german && (
                    <Stack
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: { xs: '1.5rem', md: '3rem' },
                        }}
                    >
                        <Box
                            sx={{ maxWidth: '700px', order: { xs: 2, md: 1 } }}
                        >
                            <Typography
                                variant='h6'
                                sx={{
                                    textAlign: german
                                        ? 'left'
                                        : { xs: 'center', md: 'left' },
                                }}
                            >
                                {t.Contacts.text2}
                            </Typography>
                        </Box>
                        <Box
                            sx={{ maxWidth: '300px', order: { xs: 1, md: 2 } }}
                        >
                            <Image
                                src={img8}
                                alt={''}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Stack>
                )} */}
            </Box>
        </Container>
    )
}

export default Contacts
