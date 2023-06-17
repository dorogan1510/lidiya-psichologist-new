import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { handwriteFont } from '../styles/theme'
import Image from 'next/image'
import img6 from '../public/img/cartoons/(6).jpg'
import img7 from '../public/img/cartoons/(7).jpg'
import img10 from '../public/img/cartoons/(10).jpg'
import img1 from '../public/img/cartoons/(1).jpg'
import img2 from '../public/img/cartoons/(2).jpg'
import img4 from '../public/img/cartoons/(4).jpg'
const WithWhatIWork = () => (
    <Container
        maxWidth='xl'
        sx={{ pl: { xs: '1rem', md: '3rem' }, scrollMarginTop: '80px' }}
        id='id1'
    >
        <Typography variant='h4' sx={{ textAlign: 'center', mb: '1.5rem' }}>
            С чем я работаю
        </Typography>
        <Typography variant='h5' gutterBottom sx={{ textAlign: 'center' }}>
            Сложности в отношениях с самим собой
        </Typography>
        <Stack
            sx={{
                m: '0 auto 3rem',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'left',
                maxWidth: '1100px',
                gap: { xs: '1.5rem', md: '3rem' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: '1',
                }}
            >
                <Box
                    sx={{
                        maxWidth: '300px',
                    }}
                >
                    <Image
                        src={img6}
                        alt={''}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
            </Box>
            <Box sx={{ flex: '1' }}>
                <Typography variant='h6' gutterBottom>
                    &#8226; Недовольство собой, своими поступками и выборами;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Непринятие своей внешности;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Переживания сложных чувств — стыда, вины, обиды,
                    гнева;
                </Typography>

                <Typography variant='h6' gutterBottom>
                    &#8226; Эмоциональные проблемы — тревога, апатия, перепады
                    настроения, подавленность, психосоматика, страхи, панические
                    атаки;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Переживания, связанные с травматичными событиями в
                    прошлом;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Навязчивые мысли;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Адаптация к резко изменившимся условиям жизни:
                    переезд, эмиграция;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Переживание и страх одиночества;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Проживание горя, утрата близких
                </Typography>
            </Box>
        </Stack>
        <hr />
        <Typography
            variant='h5'
            gutterBottom
            sx={{ textAlign: 'center', mt: '3rem' }}
        >
            Личностное развитие и самооценка
        </Typography>
        <Stack
            sx={{
                m: '0 auto 3rem',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'left',
                maxWidth: '1100px',
                gap: { xs: '1.5rem', md: '3rem' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: '1',
                }}
            >
                <Box
                    sx={{
                        maxWidth: '300px',
                    }}
                >
                    <Image
                        src={img10}
                        alt={''}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
            </Box>
            <Box sx={{ flex: '1' }}>
                <Typography variant='h6' gutterBottom>
                    &#8226; Боязнь проявить себя;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Сложности с пониманием своих талантов и
                    способностей;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Неудовлетворённость работой;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Желание поменять сферу деятельности;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Профессиональное выгорание;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Определение своих целей и путей их достижения;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Ощущение потери смысла жизни;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Обесценивание себя;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Прокрастинация;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Возрастные кризисы
                </Typography>
            </Box>
        </Stack>
        <hr />
        <Typography
            variant='h5'
            gutterBottom
            sx={{ textAlign: 'center', mt: '3rem' }}
        >
            Трудности в отношениях с другими
        </Typography>
        <Stack
            sx={{
                m: '0 auto 3rem',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'left',
                maxWidth: '1100px',
                gap: { xs: '1.5rem', md: '3rem' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: '1',
                }}
            >
                <Box
                    sx={{
                        maxWidth: '300px',
                    }}
                >
                    <Image
                        src={img2}
                        alt={''}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
            </Box>
            <Box sx={{ flex: '1' }}>
                <Typography variant='h6' gutterBottom>
                    &#8226; С партнёром: взаимные претензии, недовольства,
                    измены, развод, ревность, утрата партнёра, эмоциональная
                    зависимость;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Между родителями и детьми: отсутствие
                    взаимопонимания, проблемы сепарации, трудности подросткового
                    возраста, синдром «опустевшего гнезда».
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; С друзьями, подчинёнными, коллегами, начальством:
                    неуверенность в себе, неумение отстаивать свою позицию,
                    страх осуждения или неодобрения в свой адрес, неумение
                    сказать «нет»;
                </Typography>
                <Typography variant='h6' gutterBottom>
                    &#8226; Невозможность построить отношения: низкая
                    самооценка, потеря уважения и доверия к противоположному
                    полу, безответные отношения.
                </Typography>
            </Box>
        </Stack>
    </Container>
)

export default WithWhatIWork
