import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Stack,
    Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import de from '../languages/de'
import ru from '../languages/ru'

const Price = () => {
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
        <Container
            id='id7'
            maxWidth='xl'
            sx={{ mb: '3rem', scrollMarginTop: '80px' }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Typography
                    variant='h4'
                    gutterBottom
                    sx={{ fontWeight: '600' }}
                >
                    {t.Price.price}
                </Typography>
            </Box>
            <Stack
                sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: '5rem',
                    justifyContent: 'center',
                }}
            >
                <Box>
                    <Typography
                        variant='h5'
                        sx={{ textAlign: 'center' }}
                        gutterBottom
                    >
                        {t.Price.online}
                    </Typography>
                    <Stack
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: '3rem',
                            alignItems: 'center',
                            mb: '3rem',
                        }}
                    >
                        <Card
                            sx={{ minWidth: 275, maxWidth: 'fit-content' }}
                            elevation={6}
                        >
                            <CardHeader
                                title={t.Price.firstMeet}
                                sx={{
                                    backgroundColor: 'primary.main',
                                    textAlign: 'center',
                                }}
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography
                                    sx={{ mb: 1.5 }}
                                    variant='h6'
                                    color='text.secondary'
                                >
                                    {t.Price.firstMeetDuration}
                                </Typography>
                                <Typography variant='h4'>
                                    {t.Price.firstMeetPrice}
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button
                                    variant='contained'
                                    href='https://wa.me/79119042677?text='
                                    target='_blank'
                                >
                                    {t.Price.signButton}
                                </Button>
                            </CardActions>
                        </Card>
                        <Card
                            sx={{ minWidth: 275, maxWidth: 'fit-content' }}
                            elevation={6}
                        >
                            <CardHeader
                                title={t.Price.otherMeets}
                                sx={{
                                    backgroundColor: 'primary.main',
                                    textAlign: 'center',
                                }}
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography
                                    sx={{ mb: 1.5 }}
                                    variant='h6'
                                    color='text.secondary'
                                >
                                    {t.Price.otherMeetsDuration}
                                </Typography>
                                <Typography variant='h4'>
                                    {t.Price.otherMeetsPrice}
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button
                                    variant='contained'
                                    href='https://wa.me/79119042677?text='
                                    target='_blank'
                                >
                                    {t.Price.signButton}
                                </Button>
                            </CardActions>
                        </Card>
                    </Stack>
                </Box>
            </Stack>
            <Typography sx={{ textAlign: 'center' }} variant='h6' mb='1.5rem'>
                {t.Price.text}
            </Typography>
        </Container>
    )
}

export default Price
