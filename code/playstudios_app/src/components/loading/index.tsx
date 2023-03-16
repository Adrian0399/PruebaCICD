import { palette, PaletteProps, spacing, SpacingProps } from '@mui/system';
import styled from 'styled-components';

const Wrapper = styled.div<PaletteProps & SpacingProps>`
  ${palette}
  ${spacing}


  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;

`;

const MainLoad = styled.div`
  
`;

const Loader = styled.div`
  position: relative;
  margin: 0px auto;
  width: 250px;
  height:250px;
  display: flex;
  justify-content: center;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const CircularLoader = styled.svg`
  -webkit-animation: rotate 2s linear infinite;
  animation: rotate 2s linear infinite;
  height: 100%;
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
`;

const Circle = styled.circle`
  stroke-dasharray: 150,200;
  stroke-dashoffset: -10;
  -webkit-animation: dash 1.5s ease-in-out infinite, color 3s ease-in-out infinite;
          animation: dash 1.5s ease-in-out infinite, color 3s ease-in-out infinite;
  stroke-linecap: round;


  
  @-webkit-keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  @-webkit-keyframes dash {
    0% {
      stroke-dasharray: 1,200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89,200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89,200;
      stroke-dashoffset: -124;
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1,200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89,200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89,200;
      stroke-dashoffset: -124;
    }
  }
  @-webkit-keyframes color {
    0% {
      stroke: #ff6934;
    }
    40% {
      stroke: #873a85;
    }
    66% {
      stroke: #563694;
    }
    80%, 90% {
      stroke: #359d75;
    }
  }
  @keyframes color {
    0% {
      stroke: #ff6934;
    }
    40% {
      stroke: #873a85;
    }
    66% {
      stroke: #563694;
    }
    80%, 90% {
      stroke: #359d75;
    }
  }
`;

const Logo = styled.img`
  width: 45%;
`;

const WordCarousel = styled.div`
`;

const ContainerTitles = styled.div`
  overflow: hidden;
  position: relative;
  float: right;
  height: 65px;
  padding-top: 10px;
  margin-top: -10px;
`;

const Flips = styled.ul`
  animation: flip2 4s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;

  @keyframes flip2 {
    0% { margin-top: -180px; }
    5% { margin-top: -90px;  }
    50% { margin-top: -90px; }
    55% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -180px; }
  }

  @keyframes flip3 {
      0% { margin-top: -270px; }
      5% { margin-top: -180px; }
      33% { margin-top: -180px; }
      38% { margin-top: -90px; }
      66% { margin-top: -90px; }
      71% { margin-top: 0px; }
      99.99% { margin-top: 0px; }
      100% { margin-top: -270px; }
  }

  @keyframes flip4 {
      0% { margin-top: -360px; }
      5% { margin-top: -270px; }
      25% { margin-top: -270px; }
      30% { margin-top: -180px; }
      50% { margin-top: -180px; }
      55% { margin-top: -90px; }
      75% { margin-top: -90px; }
      80% { margin-top: 0px; }
      99.99% { margin-top: 0px; }
      100% { margin-top: -360px; }
  }

  @keyframes flip5 {
      0% { margin-top: -450px; }
      5% { margin-top: -360px; }
      20% { margin-top: -360px; }
      25% { margin-top: -270px; }
      40% { margin-top: -270px; }
      45% { margin-top: -180px; }
      60% { margin-top: -180px; }
      65% { margin-top: -90px; }
      80% { margin-top: -90px; }
      85% { margin-top: 0px; }
      99.99% { margin-top: 0px; }
      100% { margin-top: -450px; }
  }
`;

const FlipText = styled.li`
  padding: 0 10px;
  height: 45px;
  margin-bottom: 45px;
  text-align: center;
  

  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    width: 60%;
    display: block;
  }

`;


import { Typography } from '@mui/material';
import rewardsLogo from 'assets/main-icon.svg';
import { generateUUID } from 'src/utils/general';

type Props = {
  titles: string[];
};


export default function Loading({ titles }: Props) {
  return (
    <Wrapper>
      <MainLoad>
        <div>
          <Loader>
            <Logo src={rewardsLogo} />
            <CircularLoader viewBox="25 25 50 50" >
              <Circle cx="50" cy="50" r="20" fill="none" stroke="#ff6934" strokeWidth="1" />
            </CircularLoader>
          </Loader>
          <WordCarousel>
            <ContainerTitles >
              <Flips>
                {titles.map((title) => (
                  <FlipText key={generateUUID()}><Typography variant='H2_SBP'>{title}</Typography></FlipText>
                ))}
              </Flips>
            </ContainerTitles>
          </WordCarousel>
        </div>
      </MainLoad>
    </Wrapper>
  );
}