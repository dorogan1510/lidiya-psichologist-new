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
                sx={{
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: { xs: '1.3rem', md: '2.27rem' },
                }}
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
                <Box>
                    <Typography variant='h6' sx={{ display: 'inline-block' }}>
                        <i>{t.SecondBlock.knowYourself}</i>&nbsp;
                        {t.SecondBlock.text2} <i>{t.SecondBlock.text3}</i>{' '}
                        {t.SecondBlock.text4} {t.SecondBlock.text5}
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default SecondBlock
