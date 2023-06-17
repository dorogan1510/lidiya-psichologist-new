import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    IconButton,
    Stack,
    Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'

const Price = () => {
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
                    Оплата
                </Typography>
                <Typography variant='h6' mb='1.5rem'>
                    Для клиентов за рубежом есть возможность оплаты на
                    европейский счёт / PayPal
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
                        Онлайн
                    </Typography>
                    <Stack
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: '3rem',
                            alignItems: 'center',
                        }}
                    >
                        <Card
                            sx={{ minWidth: 275, maxWidth: 'fit-content' }}
                            elevation={6}
                        >
                            <CardHeader
                                title='Первая встреча'
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
                                    90 минут
                                </Typography>
                                <Typography variant='h4'>
                                    3500₽ / 40€
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
                                    Запись на сеанс
                                </Button>
                            </CardActions>
                        </Card>
                        <Card
                            sx={{ minWidth: 275, maxWidth: 'fit-content' }}
                            elevation={6}
                        >
                            <CardHeader
                                title='Последующие встречи '
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
                                    60 минут
                                </Typography>
                                <Typography variant='h4'>
                                    3500₽ / 40€
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
                                    Запись на сеанс
                                </Button>
                            </CardActions>
                        </Card>
                    </Stack>
                </Box>
                {/* <Box>
                    <Typography
                        variant='h5'
                        sx={{ textAlign: 'center' }}
                        gutterBottom
                    >
                        Оффлайн
                    </Typography>
                    <Stack
                        sx={{
                            flexDirection: 'row',
                            gap: '3rem',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Card
                            sx={{ minWidth: 275, maxWidth: 'fit-content' }}
                            elevation={6}
                        >
                            <CardHeader
                                title='Санкт-Петербург / Гамбург'
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
                                    55 минут
                                </Typography>
                                <Typography variant='h4'>
                                    3500₽ / 40€
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
                                    href='https://wa.me/79119042677?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BA%20%D0%B2%D0%B0%D0%BC%20%D0%BD%D0%B0%20%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D1%83%D1%8E%20%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8E.'
                                    target='_blank'
                                >
                                    Запись на сеанс
                                </Button>
                            </CardActions>
                        </Card>
                    </Stack>
                </Box> */}
            </Stack>
        </Container>
    )
}

export default Price
