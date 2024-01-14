import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import de from '../languages/de'
import ru from '../languages/ru'

const SecondBlock = () => {
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
        <Container maxWidth='xl' sx={{ mb: '3rem' }}>
            <Typography
                variant='h4'
                gutterBottom
                sx={{ textAlign: 'center', fontWeight: '600' }}
            >
                {t.SecondBlock.whatIsPsychology}
            </Typography>

            <Box
                sx={{
                    borderLeft: '2px solid black',
                    pl: '1rem',
                    maxWidth: '1000px',
                    m: ' 0 auto',
                }}
            >
                <Typography variant='h6' gutterBottom>
                    {t.SecondBlock.text1}
                </Typography>
                <Typography variant='h6'>
                    <i>{t.SecondBlock.knowYourself}</i>&nbsp;
                    {t.SecondBlock.text2}
                </Typography>
            </Box>
        </Container>
    )
}

export default SecondBlock
