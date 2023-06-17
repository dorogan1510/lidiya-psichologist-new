import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { Box, Container, Grid, Typography } from '@mui/material'

import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import AltRouteIcon from '@mui/icons-material/AltRoute'
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility'
import PublicIcon from '@mui/icons-material/Public'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import SearchIcon from '@mui/icons-material/Search'

const Features2 = () => {
    return (
        <Container
            id='id3'
            maxWidth='xl'
            sx={{ mb: '3rem', scrollMarginTop: '80px' }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h4' gutterBottom>
                    Как я работаю
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
                    <Typography variant='body1'>
                        Я уважаю Вашу индивидуальность и, какими бы ни были Ваши
                        предпочтения и ценности, я не буду подвергать их
                        сомнению или навязывать свои собственные.
                    </Typography>
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
                    <Typography variant='body1'>
                        Считаю недопустимым подталкивать Вас к «нужным», с моей
                        точки зрения, изменениям. Вы сами решаете, как, куда и в
                        каком темпе Вам двигаться, что менять в своей жизни, а
                        что оставлять как есть.
                    </Typography>
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
                    <Typography variant='body1'>
                        Я помогу Вам исследовать то, что препятствует Вашему
                        развитию и гармоничному существованию, а также буду
                        способствовать обнаружению новых ресурсов и способов
                        изменения ситуации в нужную для Вас сторону.
                    </Typography>
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
                    <Typography variant='body1'>
                        В терапии мы работаем с эмоциональной сферой, поэтому на
                        наших встречах Вы можете проявлять и проживать любые
                        чувства и эмоции, не боясь осуждения и не переживая за
                        мою устойчивость. Я постараюсь создать для Вас
                        поддерживающую и безопасную обстановку и гарантирую Вам{' '}
                        <b>полную конфиденциальность</b> наших встреч.
                    </Typography>
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
                    <Typography variant='body1'>
                        Продолжительность психологической работы зависит от
                        целей, которые Вы перед собой ставите и сложности вашего
                        запроса. Это обсуждается с Вами на первой встрече. Я
                        работаю как в краткосрочном консультировании, так и в
                        долгосрочной терапии.
                    </Typography>
                </Grid>
                {/* <Grid item xs={12} sm={4}>
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
                    <Typography variant='body1'>
                        Вы можете выбрать удобную для Вас платформу для онлайн
                        консультаций. Я работаю в Skype, Zoom, WhatsApp и
                        Telegram в видеоформате.
                    </Typography>
                </Grid> */}
                <Grid item xs={12} sm={12}>
                    <Typography
                        variant='h4'
                        gutterBottom
                        sx={{ textAlign: 'center' }}
                    >
                        В каком направлении психотерапии я работаю
                    </Typography>
                    <Typography variant='h6'>
                        В современной психотерапии существуют несколько базовых
                        направлений, каждое из которых имеет свою историю,
                        научное обоснование и методологические разработки. В
                        своей работе я опираюсь, прежде всего, на
                        гештальт-терапию. Это направление привлекает меня своей
                        эффективностью, многообразием техник, целостным подходом
                        к запросу клиента, позволяющим учитывать его
                        психологические, телесные и духовные аспекты. В
                        гештальт-подходе признаётся уникальность каждого
                        человека, а следовательно терапевт не интерпретирует и
                        не переучивает, а исследует, помогая таким образом
                        клиенту найти его собственный уникальный «ключ» к
                        решению поставленных вопросов. Я ценю Гештальт-терапию
                        также за то, что она позволяет включать в работу техники
                        из других направлений психотерапии. Так, в зависимости
                        от запроса клиента, я могу использовать техники
                        экзистенциального подхода, арт-терапии и
                        эмоционально-образной терапии.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Features2
