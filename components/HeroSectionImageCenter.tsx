import { Button, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import img1 from '../public/img/1.jpg'
import styles from './HeroSectionImageCenter.module.scss'

const HeroSectionImageRight = () => {
    return (
        <Container maxWidth='xl' sx={{ mb: '3rem' }}>
            <Stack alignItems='center'>
                <Image
                    src={img1}
                    alt={'image1'}
                    className={styles.image}
                    priority
                />
            </Stack>
            <Stack
                flexDirection={{ xs: 'column', md: 'row' }}
                justifyContent='space-between'
                alignItems={{ xs: 'flex-start', md: 'center' }}
                gap='1rem'
            >
                <Stack sx={{ maxWidth: '1110px' }} alignItems={'center'}>
                    <Typography variant='h3' gutterBottom textAlign={'center'}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ut accusanti
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{ mb: '1rem' }}
                        textAlign={'center'}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolore, asperiores voluptate voluptatem sequi,
                        nihil facilis numquam repudiandae cupiditate doloremque
                        eligendi fugit. Iure quibusdam fugit, numquam
                        exercitationem magni optio libero consectetur.
                    </Typography>
                    <Button
                        href=''
                        variant='contained'
                        sx={{ textAlign: 'center' }}
                        target='_blank'
                    >
                        Lorem ipsum dolor sit amet
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}

export default HeroSectionImageRight
