import MenuIcon from '@mui/icons-material/Menu'
import TelegramIcon from '@mui/icons-material/Telegram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {
    FormControl,
    InputLabel,
    NativeSelect,
    Select,
    SelectChangeEvent,
    Stack,
} from '@mui/material'
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
import { useRouter } from 'next/router'
import ru from '../languages/ru'
import de from '../languages/de'
import { blue } from '@mui/material/colors'

const Header = () => {
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

    const russianPages = [
        {
            id: '#id1',
            link: t.Header.link1,
        },
        {
            id: '#id2',
            link: t.Header.link2,
        },
        {
            id: '#id3',
            link: t.Header.link3,
        },
        {
            id: '#id4',
            link: t.Header.link4,
        },
        {
            id: '#id5',
            link: t.Header.link5,
        },
        {
            id: '#id6',
            link: t.Header.link6,
        },
    ]

    const germanPages = [
        {
            id: '#id1',
            link: t.Header.link1,
        },
        {
            id: '#id2',
            link: t.Header.link2,
        },
        {
            id: '#id3',
            link: t.Header.link3,
        },
        {
            id: '#id5',
            link: t.Header.link5,
        },
        {
            id: '#id6',
            link: t.Header.link6,
        },
    ]

    interface IPages {
        id: string
        link: string
    }

    const [language, setLanguage] = React.useState<string>('')
    const [pages, setPages] = React.useState<IPages[]>([])

    React.useEffect(() => {
        if (locale === 'ru') {
            setPages(russianPages)
        } else {
            setPages(germanPages)
        }
    }, [locale])

    const changeLanguage = (e: any) => {
        const locale = e.target.value
        const path = locale + router.pathname
        router.replace(path, path, { locale })

        setLanguage(e.target.value as string)
    }

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
                        {t.Header.profiru}
                    </Button>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                        }}
                    >
                        {pages.map((page: any) => (
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
                    <Stack
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '1.5rem',
                        }}
                    >
                        {/* <Box>
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
                        </Box> */}
                        <FormControl color='secondary'>
                            <NativeSelect
                                onChange={changeLanguage}
                                defaultValue={locale}
                                inputProps={{
                                    name: 'language',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value='ru'>RU</option>
                                <option value='de'>DE</option>
                            </NativeSelect>
                        </FormControl>
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
                            {pages.map((page: any) => (
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
                        {t.Header.profiru}
                    </Button>
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: { xs: '0.5rem', md: '1.5rem' },
                        }}
                    >
                        <FormControl color='secondary'>
                            <NativeSelect
                                onChange={changeLanguage}
                                defaultValue={locale}
                                inputProps={{
                                    name: 'language',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value='ru'>RU</option>
                                <option value='de'>DE</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>
                    {/* <Stack
                        sx={{
                            flexDirection: 'row',
                            gap: '1rem',
                            alignItems: 'center',
                        }}
                    >


                        <Stack
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: { xs: '0.5rem', md: '1.5rem' },
                            }}
                        >
                            <Box>
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
                            </Box>

                        </Stack>
                    </Stack> */}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
