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
                            mb: '3rem',
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
                                <Typography variant='h4'>3500₽</Typography>
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
                                <Typography variant='h4'>3500₽</Typography>
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
            </Stack>
            <Typography sx={{ textAlign: 'center' }} variant='h6' mb='1.5rem'>
                Для клиентов за рубежом есть возможность оплаты на европейский
                счёт / PayPal (Стоимость сессии — 35€)
            </Typography>
        </Container>
    )
}

export default Price
