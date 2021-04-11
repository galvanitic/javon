import * as React from 'react';
import {ReactComponent as ImportedComponent} from '../img/javon-signature.svg';
import styled from 'styled-components';
import CSS from 'csstype';
export interface IHeaderProps {
}
const StyledSVG = styled(ImportedComponent)`
  display: block;
  margin: auto;
  width: 40em;
  height: 25em;
  top: 50%;
`;

export default function Header (props: IHeaderProps) {
  const [parallax, chParallax] = React.useState<number>(0);

  React.useEffect(()=>{
    const scrollChange = () => {
      const y:number = window.scrollY;
      chParallax(- (y)/12);
    }
  
    window.addEventListener("scroll", scrollChange);
  });

  const bckgrndStyles: CSS.Properties = {
    backgroundPositionY: `${parallax}vh`,
    display: 'flex',
  };
  return (
    <div id="header" style={bckgrndStyles}>
      <StyledSVG />
    </div>
  );
}
