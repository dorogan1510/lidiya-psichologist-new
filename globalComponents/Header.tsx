import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import * as React from 'react'
import styles from './Header.module.scss'
import { Stack, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
const pages = [
    {
        id: '#id1',
        link: 'С чем я работаю',
    },
    {
        id: '#id2',
        link: 'Обо мне',
    },
    {
        id: '#id3',
        link: 'Как я работаю',
    },
    {
        id: '#id4',
        link: 'Отзывы',
    },
    {
        id: '#id5',
        link: 'Квалификация',
    },
    {
        id: '#id6',
        link: 'Контакты',
    },
    {
        id: '#id7',
        link: 'Оплата',
    },
]

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar
            position='fixed'
            sx={{ padding: { xs: '0 0.5rem', md: '0 1rem' } }}
            className={styles.header}
        >
            <Container maxWidth='xl'>
                <Toolbar
                    disableGutters
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Button
                        variant='contained'
                        color='secondary'
                        href='https://spb.profi.ru/profile/SerdyukLA'
                        target='_blank'
                        sx={{
                            color: 'white',
                            display: { xs: 'none', md: 'block' },
                        }}
                    >
                        Я на профи ру
                    </Button>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                        }}
                    >
                        {pages.map(page => (
                            <Button
                                key={page.id}
                                onClick={handleCloseNavMenu}
                                href={page.id}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    fontSize: '18px',
                                    display: 'block',
                                    textTransform: 'none',
                                }}
                                className='animate-hero-links'
                            >
                                {page.link}
                            </Button>
                        ))}
                    </Box>
                    {/* <Button
                        variant='contained'
                        color='secondary'
                        href='https://wa.me/79119042677?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BA%20%D0%B2%D0%B0%D0%BC%20%D0%BD%D0%B0%20%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D1%83%D1%8E%20%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8E.'
                        target='_blank'
                        sx={{
                            color: 'white',
                            display: { xs: 'none', md: 'block' },
                        }}
                    >
                        Запись
                    </Button> */}
                    <Stack
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            flexDirection: 'row',
                        }}
                    >
                        <IconButton
                            href='https://t.me/+79119042677'
                            target='_blank'
                        >
                            <TelegramIcon
                                sx={{ width: '30px', height: '30px' }}
                                color='secondary'
                            />
                        </IconButton>
                        <IconButton
                            target='_blank'
                            href='https://wa.me/79119042677?text='
                        >
                            <WhatsAppIcon
                                sx={{ width: '30px', height: '30px' }}
                                color='secondary'
                            />
                        </IconButton>
                    </Stack>

                    <Box
                        sx={{
                            flexGrow: 0,
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'space-between',
                        }}
                        className='animate-hero-right'
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            sx={{ color: 'black' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {
                                    xs: 'block',
                                    md: 'none',
                                },
                            }}
                        >
                            {pages.map(page => (
                                <MenuItem
                                    key={page.id}
                                    onClick={handleCloseNavMenu}
                                    color='white'
                                >
                                    <Button
                                        href={page.id}
                                        sx={{
                                            textTransform: 'none',
                                            color: 'black',
                                            fontSize: '16px',
                                        }}
                                    >
                                        {page.link}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Stack
                        sx={{
                            flexDirection: 'row',
                            gap: '1rem',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            variant='contained'
                            color='secondary'
                            size='small'
                            href='https://spb.profi.ru/profile/SerdyukLA'
                            target='_blank'
                            sx={{
                                color: 'white',
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            Я на профи ру
                        </Button>
                        {/* <Button
                            variant='contained'
                            color='secondary'
                            size='small'
                            href='https://wa.me/79119042677?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BA%20%D0%B2%D0%B0%D0%BC%20%D0%BD%D0%B0%20%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D1%83%D1%8E%20%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8E.'
                            target='_blank'
                            sx={{
                                color: 'white',
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            Запись
                        </Button> */}
                        <Stack
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexDirection: 'row',
                            }}
                        >
                            <IconButton
                                href='https://t.me/+79119042677'
                                target='_blank'
                            >
                                <TelegramIcon color='secondary' />
                            </IconButton>
                            <IconButton
                                target='_blank'
                                href='https://wa.me/79119042677?text='
                            >
                                <WhatsAppIcon color='secondary' />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
