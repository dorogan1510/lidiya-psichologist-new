import { Box, Container, Grid, Typography } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import SearchIcon from '@mui/icons-material/Search'
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility'
import { useRouter } from 'next/router'
import de from '../languages/de'
import ru from '../languages/ru'
import { useEffect, useState } from 'react'

const Features2 = () => {
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

    const [lastSectionOnlyGerman, setLastSectionOnlyGerman] =
        useState<boolean>()

    useEffect(() => {
        if (locale === 'de') {
            setLastSectionOnlyGerman(false)
        } else setLastSectionOnlyGerman(true)
    }, [locale])

    return (
        <Container
            id='id3'
            maxWidth='xl'
            sx={{ mb: '3rem', scrollMarginTop: '80px' }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Typography
                    variant='h4'
                    gutterBottom
                    sx={{ fontWeight: '600' }}
                >
                    {t.HowIWork.howIWork}
                </Typography>
            </Box>
            <Grid container spacing={'2rem'} sx={{ justifyContent: 'center' }}>
                <Grid item xs={12} sm={4}>
                    <Box color={'secondary.main'}>
                        <SettingsAccessibilityIcon
                            style={{
                                width: '30px',
                                height: '30px',
                                marginBottom: '1rem',
                            }}
                        />
                    </Box>
                    <Typography variant='h6'>{t.HowIWork.text1}</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box color={'secondary.main'}>
                        <AutoGraphIcon
                            style={{
                                width: '30px',
                                height: '30px',
                                marginBottom: '1rem',
                                color: 'primary.main',
                            }}
                        />
                    </Box>
                    <Typography variant='h6'>{t.HowIWork.text2}</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box color={'secondary.main'}>
                        <SearchIcon
                            style={{
                                width: '30px',
                                height: '30px',
                                marginBottom: '1rem',
                                color: 'primary.main',
                            }}
                        />
                    </Box>
                    <Typography variant='h6'>{t.HowIWork.text3}</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box color={'secondary.main'}>
                        <PersonPinIcon
                            style={{
                                width: '30px',
                                height: '30px',
                                marginBottom: '1rem',
                                color: 'primary.main',
                            }}
                        />
                    </Box>
                    <Typography variant='h6'>{t.HowIWork.text4}</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box color={'secondary.main'}>
                        <AccessTimeIcon
                            style={{
                                width: '30px',
                                height: '30px',
                                marginBottom: '1rem',
                                color: 'primary.main',
                            }}
                        />
                    </Box>
                    <Typography variant='h6'>{t.HowIWork.text5}</Typography>
                </Grid>
                {!lastSectionOnlyGerman && (
                    <Grid item xs={12} sm={4}>
                        <Box color={'secondary.main'}>
                            <PublicIcon
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    marginBottom: '1rem',
                                    color: 'primary.main',
                                }}
                            />
                        </Box>
                        <Typography variant='h6'>{t.HowIWork.text7}</Typography>
                    </Grid>
                )}
                <Grid item xs={12} sm={12}>
                    <Typography
                        variant='h4'
                        gutterBottom
                        sx={{ textAlign: 'center', fontWeight: '600' }}
                    >
                        {t.HowIWork.directionOfPsychotherapy}
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{ maxWidth: '1000px', m: '0 auto' }}
                    >
                        {t.HowIWork.text6}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Features2
