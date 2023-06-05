import { Container, Stack, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import Image from 'next/image'
import Link from 'next/link'
import style from './Footer1.module.scss'

const Footer1 = () => {
    return (
        <Container maxWidth='xl'>
            <Stack
                justifyContent={'space-between'}
                alignItems={'center'}
                gap={2}
                flexDirection={{ xs: 'column', sm: 'row' }}
            >
                <Grid2 textAlign={{ xs: 'center', sm: 'left' }}>
                    <Typography variant='h5' gutterBottom>
                        Главный тренер:
                    </Typography>
                    <Typography variant='body1'>
                        Задорожный Вячеслав Александрович
                    </Typography>
                    <Stack justifyContent='space-between' sx={{ mb: '1rem' }}>
                        <Link className={style.link} href='tel:+79370658133'>
                            +7 937 065 81 33
                        </Link>
                        <Link
                            className={style.link}
                            href='mailto:dfk.bezenchuk@yandex.ru'
                        >
                            dfk.bezenchuk@yandex.ru
                        </Link>
                    </Stack>
                    <Stack>
                        <Typography variant='h5' gutterBottom>
                            Наша группа Вконтакте:
                        </Typography>
                        <Link
                            className={style.link}
                            target='_blank'
                            href='https://vk.com/public204787561'
                        >
                            https://vk.com/public204787561
                        </Link>
                    </Stack>
                </Grid2>

                <Grid2 textAlign={{ xs: 'center', sm: 'left' }}>
                    <Typography variant='h5' gutterBottom>
                        Родительский комитет:
                    </Typography>
                    <Typography variant='body1'>
                        Курышов Михаил Николаевич
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                        <Link className={style.link} href='tel:+79608149759'>
                            +7 960 814 97 59
                        </Link>
                    </Typography>
                    <Typography variant='body1'>
                        Бондаренко Владимир Иванович
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                        <Link className={style.link} href='tel:+79170389442'>
                            +7 917 038 94 42
                        </Link>
                    </Typography>
                    <Typography variant='body1'>
                        Глазунов Александр Николаевич
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                        <Link className={style.link} href='tel:+79277000223'>
                            +7 927 700 02 23
                        </Link>
                    </Typography>
                </Grid2>
            </Stack>
        </Container>
    )
}

export default Footer1
