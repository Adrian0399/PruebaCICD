//Component name: ButtonWrapper (button-wrapper.tsx) styled-components-modifiers variant style
import styled from 'styled-components';

const variants = (variant: string = "noLogged") => {
    switch (variant) {
        case 'logged':
            return {
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: 0
            };
        case 'noLogged':
            return {
                filter: 'drop-shadow(-1px 0px 1px #666) drop-shadow(1px 0px 1px #666);',
            };
    }
};

//Create typescript component ButtonWrapper with styled-components-modifiers variant style
const ButtonWrapper = styled.div<{ variant?: string }>`
    ${({ variant }) => variants(variant)}
`;

export default ButtonWrapper;