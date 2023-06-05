import { Button, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import img2 from '../public/img/2.webp'
import styles from './HeroSectionImageRight.module.scss'
import { handwriteFont } from '../styles/theme'

const HeroSectionImageRight = () => {
    return (
        <Box sx={{ bgcolor: '#e4e4e4' }}>
            <Container
                id='id2'
                maxWidth='xl'
                sx={{ mb: '3rem', pt: '3rem', scrollMarginTop: '60px' }}
            >
                <Typography
                    variant='h4'
                    gutterBottom
                    sx={{ textAlign: 'center' }}
                >
                    Обо мне
                </Typography>
                <Stack
                    flexDirection={{ xs: 'column', lg: 'row' }}
                    justifyContent='center'
                    gap='1rem'
                >
                    <Box sx={{ maxWidth: '1110px', order: 2 }}>
                        <Typography variant='body1' sx={{ mb: '1.5rem' }}>
                            Для меня наиболее ценное в психотерапии то, что она
                            помогает понять и принять самого себя. Я убеждена,
                            что, сталкиваясь с различными испытаниями, мы можем
                            с большим успехом преодолевать их, если опираемся не
                            на советы и мнения других, а на собственные
                            внутренние ресурсы. Поэтому свою задачу как
                            психолога я вижу в том, чтобы помочь человеку
                            увидеть эти ресурсы, а для этого важно научиться
                            осознавать и принимать свои потребности и эмоции,
                            свои ценности и границы. И это важно не только в
                            ситуации кризиса. Опираясь на мой собственный опыт и
                            опыт моих клиентов, могу сказать, что понимание
                            самого себя необходимо нам, чтобы выстраивать и
                            поддерживать гармоничные отношения, сохранять
                            физическое здоровье и успешно самореализовываться.
                            <br />
                            <br />
                            По своей первой специальности я филолог-германист.
                            Мой путь в психологию начался через личный кризис, с
                            поисков возможностей улучшить качество собственной
                            жизни. Со временем, вдохновившись позитивными
                            изменениями, я начала интересоваться психологией как
                            инструментом, помогающим человеку стать стабильнее,
                            увереннее и счастливее. Я безмерно благодарна всем
                            тем людям на моём пути, которые помогли мне найти
                            себя в этой профессии. Она не престаёт меня
                            вдохновлять, заряжать энергией и давать силы для
                            дальнейшего профессионального роста.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            order: 1,
                            maxWidth: '400px',
                            margin: '0 auto',
                        }}
                    >
                        <Image
                            src={img2}
                            alt={'image1'}
                            priority
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                            }}
                        />
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default HeroSectionImageRight
