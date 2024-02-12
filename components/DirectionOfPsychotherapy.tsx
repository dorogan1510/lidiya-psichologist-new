import { Box, Container, Grid, Typography } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import SearchIcon from '@mui/icons-material/Search'
import PeopleIcon from '@mui/icons-material/People'
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility'
import { useRouter } from 'next/router'
import de from '../languages/de'
import ru from '../languages/ru'
import { useEffect, useState } from 'react'

const DirectionOfPsychotherapy = () => {
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
        <Box sx={{ bgcolor: '#e4e4e4' }}>
            <Container
                id='id2'
                maxWidth='xl'
                sx={{ scrollMarginTop: '80px', py: '3rem' }}
            >
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
                    gutterBottom
                >
                    {t.HowIWork.text6}
                </Typography>
                <Typography
                    variant='h6'
                    sx={{ maxWidth: '1000px', m: '0 auto' }}
                >
                    {t.HowIWork.text8}
                </Typography>
            </Container>
        </Box>
    )
}

export default DirectionOfPsychotherapy
