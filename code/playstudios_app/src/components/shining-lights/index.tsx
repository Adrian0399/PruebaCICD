//React for shining lights component

import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';

//define props type
type Props = {
    title: string;
    description: string;
}

// Function ShiningLights with props type 
export default function ShiningLights({ children }: { children: React.ReactNode }) {

    const theme = useTheme();

    return (
        <Container>

            <Anim>
                <Circle/>
                <Light>
                    <ShiningLightLeft />
                    <ShiningLightRight />
                </Light>
                <Light style={{
                    transform: 'rotate(90deg) translate(0px,0px)',
                }}>
                    <ShiningLightLeft />
                    <ShiningLightRight />
                </Light>

                <Light style={{
                    transform: 'rotate(135deg) translate(0px,0px)',
                    width: '80%',
                }}>
                    <ShiningLightLeft />
                    <ShiningLightRight />
                </Light>

                <Light style={{
                    transform: 'rotate(45deg) translate(0px,0px)',
                    width: '80%',
                }}>
                    <ShiningLightLeft />
                    <ShiningLightRight />
                </Light>
            </Anim>



            {children}
        </Container>
    );
}

const Circle = styled.div`

    height: 100%;
    width: 100%;
    border-radius: 50%; 
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 100%);
    opacity: 0.7;
    position: absolute;
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background: linear-gradient(90deg,#ffffff 0%,#ffffff 100%);
    opacity: 0.7;
    position: absolute;
    box-shadow: 0px 0px 50px 45px #ffffff;
`;

const Anim = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    animation: rotate-animation 50s infinite ease-in-out;


    @keyframes rotate-animation {
        0% {
            transform: rotate(0deg);
      }
      50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
const Light = styled.div`
    height: 46px;
    width: 90%;
    position: absolute;
`;

const Container = styled.div`
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    position: relative;
`;

const ShiningLightLeft = styled.div`

    position: absolute;
    height: 30px;
    width: 100%;
    background-size: 100%;
    background-image: linear-gradient(to right, #ffffff70 0%, rgba(249, 245, 159, 0) 100%);
    opacity: 0.7;
    left: -40px;
    transform: perspective(529px) rotateX(0deg) rotateY(-120deg) rotate(0deg);
    
`;


const ShiningLightRight = styled.div`

    position: absolute;
    height: 30px;
    width: 100%;
    background-size: 100%;
    background-image: linear-gradient(to left, #ffffff70 0%, rgba(249, 245, 159, 0) 100%);
    transform: perspective(529px) rotateX(180deg) rotateY(-120deg) rotate(0deg) skew(1deg);
    right: -45px;
`;