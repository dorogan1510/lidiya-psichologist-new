import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import de from '../languages/de'
import ru from '../languages/ru'
import { useEffect, useState } from 'react'

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

    const [german, setGerman] = useState<boolean>()

    useEffect(() => {
        if (locale === 'de') {
            setGerman(true)
        } else setGerman(false)
    }, [locale])

    return (
        <Container maxWidth='xl' sx={{ mb: '3rem' }}>
            {/* <Typography
                variant='h4'
                gutterBottom
                sx={{
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: { xs: '1.3rem', md: '2.27rem' },
                }}
            >
                {t.SecondBlock.whatIsPsychology}
            </Typography> */}

            <Box
                sx={{
                    borderLeft: '2px solid black',
                    pl: '1rem',
                    maxWidth: '1000px',
                    m: ' 0 auto',
                }}
            >
                <Typography variant='h6'>{t.SecondBlock.text1}</Typography>
                <Typography variant='h6'>
                    {t.SecondBlock.text4} <i>{t.SecondBlock.text5}</i>
                </Typography>
                {german && (
                    <>
                        <Typography
                            variant='h6'
                            sx={{ display: 'inline-block' }}
                        >
                            {t.SecondBlock.text2}
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{ display: 'inline-block' }}
                        >
                            {t.SecondBlock.text3} <i>{t.SecondBlock.text6}</i>
                        </Typography>
                    </>
                )}
            </Box>
        </Container>
    )
}

export default SecondBlock
