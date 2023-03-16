//Create react componente por empty sections EmptyPage with props icon, title, description


import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

//define props type
type Props = {
    image: any;
    title: any;
    description: string;
}

// Function EmptyPage with props type
export default function EmptyPage({ image, title, description }: Props) {

    return (
        <Container>
            <img src={image} width="112" height="112" />
            <br/>
            <Typography variant="H2_SBP" component="div">
                {title}
            </Typography>
            <Typography variant="H3_R" color="secondary" component="div">
                {description}
            </Typography>
        </Container>
    );
}

const Container = styled(Box)(({ theme }) => ({
    height: 'calc(100vh - 230px)',
    marginLeft: '64px',
    marginRight: '64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '& > *': {
        marginTop: '12px',
    },
}));
