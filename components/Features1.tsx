import {
    Card,
    Container,
    List,
    ListItem,
    ListSubheader,
    Stack,
    Typography,
} from '@mui/material'

const Features1 = () => {
    return (
        <Container maxWidth='xl' sx={{ mb: '3rem' }}>
            <Typography variant='h4' gutterBottom sx={{ textAlign: 'center' }}>
                Кого мы обучаем?
            </Typography>
            <Stack
                sx={{
                    flexDirection: { xs: 'column', sm: 'row' },
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                }}
            >
                <Card elevation={3} sx={{ maxWidth: '500px' }}>
                    <List
                        sx={{
                            listStyleType: 'disc',
                            '& .MuiListItem-root': {
                                display: 'list-item',
                            },
                        }}
                    >
                        <ListSubheader
                            sx={{
                                fontWeight: 700,
                                lineHeight: '24px',
                                fontSize: '16px',
                                color: 'black',
                            }}
                        >
                            SubHeader
                        </ListSubheader>
                        <ListItem sx={{ listStyle: 'inside' }}>
                            Lorem ipsum dolor sit amet
                        </ListItem>
                        <ListItem sx={{ listStyle: 'inside' }}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                            amet
                        </ListItem>
                    </List>
                </Card>
                <Card elevation={3} sx={{ maxWidth: '500px' }}>
                    <List
                        sx={{
                            listStyleType: 'disc',
                            '& .MuiListItem-root': {
                                display: 'list-item',
                            },
                        }}
                    >
                        <ListSubheader
                            sx={{
                                fontWeight: 700,
                                lineHeight: '24px',
                                fontSize: '16px',
                                color: 'black',
                            }}
                        >
                            SubHeader
                        </ListSubheader>
                        <ListItem sx={{ listStyle: 'inside' }}>
                            Lorem ipsum dolor sit amet
                        </ListItem>
                        <ListItem sx={{ listStyle: 'inside' }}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                            amet
                        </ListItem>
                        <ListItem sx={{ listStyle: 'inside' }}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                            amet
                        </ListItem>
                    </List>
                </Card>
                <Card elevation={3} sx={{ maxWidth: '500px' }}>
                    <List
                        sx={{
                            listStyleType: 'disc',
                            '& .MuiListItem-root': {
                                display: 'list-item',
                            },
                        }}
                    >
                        <ListSubheader
                            sx={{
                                fontWeight: 700,
                                lineHeight: '24px',
                                fontSize: '16px',
                                color: 'black',
                            }}
                        >
                            SubHeader
                        </ListSubheader>
                        <ListItem sx={{ listStyle: 'inside' }}>
                            Lorem ipsum dolor sit amet
                        </ListItem>
                        <ListItem sx={{ listStyle: 'inside' }}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                            amet
                        </ListItem>
                        <ListItem sx={{ listStyle: 'inside' }}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                            amet
                        </ListItem>
                    </List>
                </Card>
            </Stack>
        </Container>
    )
}

export default Features1
