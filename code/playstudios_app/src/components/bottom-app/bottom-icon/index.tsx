import styled from 'styled-components';


const Icon = styled.img`
    transition: all 0.2s ease;
`;
type Props = {
  src: any;
  alt: any;
  width?: any;
  height?: any;
  style?: any;
};


export default function BottomIcon({ src, alt, width, height, style }: Props) {
  return (
    <Icon src={src} alt={alt} width={width} height={height} style={style}/>
  );
}