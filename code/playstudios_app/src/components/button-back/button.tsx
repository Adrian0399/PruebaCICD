//Component name: ButtonWrapper (button-wrapper.tsx) styled-components-modifiers variant style
import styled, { css } from 'styled-components';

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
            return css`
                transition: all 0.3s ease;
                background: #969696;
                color: #222;
                padding: 0px 0px 0px 10px;
                height: 20px;
                min-width: 45px;
                border-radius: 2px;
                box-shadow: inset 0px 0px 2px 0px #666;
                clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
                display: flex;
                justify-content: center;
                transition: all 0.2s ease;
            
                &:hover {
                    background: #888;
                    cursor: pointer;
                }
            `;
    }
};

//Create typescript component ButtonTag with styled-components-modifiers variant style
const ButtonTag = styled.div<{ variant?: string }>`
    ${({ variant }) => variants(variant)}
`;

export default ButtonTag;