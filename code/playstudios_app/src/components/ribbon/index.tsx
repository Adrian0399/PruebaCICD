import styled from "styled-components";
import { RibbonText } from "./ribbon-text";

export const RibbonContainer = styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    position: absolute;
    top: -3px;
    right: -2px;
    z-index: 2;
`;

//Component Ribbon with props type children
export default function Ribbon({ children }: { children: React.ReactNode }) {
    return (
        <RibbonContainer>
            <RibbonText>{ children }</RibbonText>
        </RibbonContainer>
    );
}