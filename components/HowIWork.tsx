import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { Box, Container, Grid, Typography } from '@mui/material'

import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import AltRouteIcon from '@mui/icons-material/AltRoute'
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility'

const Features2 = () => {
    return (
        <Container
            id='id5'
            maxWidth='xl'
            sx={{ mb: '3rem', scrollMarginTop: '80px' }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h4' gutterBottom>
                    Как я работаю
                </Typography>
            </Box>
            <Grid container spacing={'2rem'} sx={{ justifyContent: 'center' }}>
                <Grid item xs={12} sm={6}>
                    <Box color={'secondary.main'}>
                        <SettingsAccessibilityIcon
                            style={{
                                width: '30px',
                                height: '30px',
                                marginBottom: '1rem',
                            }}
                        />
                    </Box>
                    <Typography variant='h6' gutterBottom>
                        Моя профессиональная позиция
                    </Typography>
                    <Typography variant='body1'>
                        Я практикующий психолог, но это не означает, что я знаю
                        как, куда и в каком темпе двигаться моим клиентам, что
                        им менять в своей жизни, а что оставлять как есть. Я
                        лишь сопровождаю их в поисках ответов на эти и другие
                        вопросы. Я уважаю индивидуальность каждого клиента и,
                        какими бы ни были его предпочтения и ценности, я не
                        намерена подвергать их сомнению или навязывать свои
                        собственные. Я также считаю недопустимым подталкивать
                        клиента к «нужным», с моей точки зрения, изменениям.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
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
                    <Typography variant='h6' gutterBottom>
                        Профессиональное развитие
                    </Typography>
                    <Typography variant='body1'>
                        Закончив Санкт-Петербургский Институт Гештальта, я
                        продолжаю совершенствовать свои профессиональные навыки
                        и способности. Я регулярно прохожу индивидуальную и
                        групповую супервизию, участвую в долгосрочных
                        образовательных программах для психологов, осваиваю
                        профессиональную литературу, а также нахожусь в
                        регулярной личной терапии.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box color={'secondary.main'}>
                        <AltRouteIcon
                            style={{
                                width: '30px',
                                height: '30px',
                                marginBottom: '1rem',
                                color: 'primary.main',
                            }}
                        />
                    </Box>

                    <Typography variant='h6' gutterBottom>
                        В каком направлении психотерапии я работаю
                    </Typography>
                    <Typography variant='body1'>
                        В современной психотерапии существуют несколько базовых
                        направлений, каждое из которых имеет свою историю,
                        научное обоснование и методологические разработки. В
                        своей работе я опираюсь, прежде всего, на
                        гештальт-терапию, однако, в зависимости от запроса
                        клиента, я также использую техники экзистенциального
                        подхода, арт-терапии и эмоционально-образной терапии.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Features2
