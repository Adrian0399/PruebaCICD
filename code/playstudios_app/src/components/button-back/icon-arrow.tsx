//Component name: ButtonWrapper (button-wrapper.tsx) styled-components-modifiers variant style
import styled, { keyframes } from 'styled-components';

import iconArrowRight from 'assets/icon-arrow-right.svg';


const inWrapperIconBack = keyframes`
    0% { left: 10px; }
    100% { left: 0px; }
`


const variants = (variant: string = "back") => {
    switch (variant) {
        case 'back':
            return {
                width: 11,
                height: 11,
                boxShadow: '0px 0px 17.8px rgba(64, 64, 64, 0.25)'
            };
        case 'alone':
            return {
                width: 16,
                height: 16,
                boxShadow: '0px 0px 6px rgba(64, 64, 64, 0.25)'
            };
    }
};


const variantsIcon = (variant: string = "back") => {
    switch (variant) {
        case 'back':
            return {
                transition: 'all 0.5s ease',
                width: 3,
                margin: 0,
            };
        case 'alone':
            return {
                transition: 'all 0.5s ease',
                width: 5,
                margin: 0,
            };
    }
};

//Create typescript component ButtonTag with styled-components-modifiers variant style
const Wrapper = styled.div<{ variant?: string }>`
    background: linear-gradient( 90deg, #ff7a4a 0%, #ffb16b 100% );
    border-radius: 50%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    animation-name: ${inWrapperIconBack};
    animation-duration: 0.4s;
    ${({ variant }) => variants(variant)}
`;

const Icon = styled.img<{ variant?: string}> `
    ${({ variant }) => variantsIcon(variant)}
`;


//Create typescript component IconArrow with variant and src props and styled-components-modifiers variant style
export default function IconArrow( { variant, onClick } : { variant?: string, onClick?: () => void }) {

    return (
        <Wrapper variant={variant} onClick={onClick}>
            <Icon src={iconArrowRight} variant={variant}/>
        </Wrapper>
    );
}

