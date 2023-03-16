//Component name: ButtonWrapper (button-wrapper.tsx) styled-components-modifiers variant style
import styled from 'styled-components';

const variants = (variant: string = "noLogged") => {
    switch (variant) {
        case 'logged':
            return {
                width: 29,
                height: "auto",
                marginLeft: -4,
                transition: 'all 0.3s ease',
            };
        case 'noLogged':
            return {
                transition: 'all 0.3s ease',
                height: 95 + '%'
            };
        default:
            return {
                height: 95 + '%'
            };
    }
};

//Create typescript component ButtonTag with styled-components-modifiers variant style
const GameIcon = styled.img<{ variant?: string }>`
    ${({ variant }) => variants(variant)}
`;

export default GameIcon;