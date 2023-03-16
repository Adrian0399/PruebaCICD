//Create component Section for container
import styled from 'styled-components';

//define SectionProps

export interface SectionProps {
    variant?: 'default' | 'full';
}

//Create typescript component Section with props type SectionProps
export default function Section({ variant, children }: SectionProps & { children: React.ReactNode }) {
    return (
        <Container variant={variant}>
            {children}
        </Container>
    );
}

//Create styled component Container with props type SectionProps
const Container = styled.div<SectionProps>`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 18px;
    box-sizing: border-box;
    ${({ variant }) => variant === 'full' && `
        max-width: 100%;
    `}
`;



