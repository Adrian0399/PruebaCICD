import styled from "styled-components";

export const RibbonText = styled.span`
    --triangle-size: 3px;
    --band-w: 100px;

    position: absolute;
    top: 3px;
    right: 2px;
    width: var(--band-w);
    min-width: var(--band-w);
    background: linear-gradient(115.48deg, #9698f6 18.37%, #4f5190 78.86%);
    margin: 0;
    padding: 5px 20px calc(var(--triangle-size) + 5px);
    transform-origin: bottom left;
    transform: translate(29.29%, -100%) rotate(45deg);
    background-clip: padding-box;
    clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    calc(100% - var(--triangle-size)) calc(100% - var(--triangle-size)),
    var(--triangle-size) calc(100% - var(--triangle-size)),
    0 100%
    );
    -webkit-mask: linear-gradient(
        135deg,
        transparent calc(50% - var(--triangle-size) * 0.707),
        #fff 0
        )
        bottom left,
    linear-gradient(
        -135deg,
        transparent calc(50% - var(--triangle-size) * 0.707),
        #fff 0
        )
        bottom right;
    -webkit-mask-size: 300vmax 300vmax;
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;

    color: #fff;
    font-style: normal;
    font-weight: 400;
    font-size: 7px;

    text-align: center;
    text-shadow: 2px 1px 2px rgb(41, 41, 41);
`;