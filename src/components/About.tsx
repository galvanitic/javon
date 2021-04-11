import * as React from 'react';
import javon from '../img/hi.jpg';
import javonFloater from '../img/hi.png';
import CSS from 'csstype';
export interface IAboutProps {
}
const imgAnimationHidden: CSS.Properties = {
  marginTop: '800px',
  visibility: 'hidden'
};
const imgAnimationVisible: CSS.Properties = {
  marginTop: '0px'
};

export default function About (props: IAboutProps) {
  const [parallax, chParallax] = React.useState<number>(-20);
  // const [queueAnimationState, chQueueAnimationState] = React.useState<boolean>(false);
  const [imgStyle, chImgStyle] = React.useState<CSS.Properties>(imgAnimationHidden);
  React.useEffect(()=>{
    const scrollChange = () => {
      const y:number = window.scrollY;
      chParallax((y)/5);
    }
    window.addEventListener("scroll", scrollChange);
    // if(parallax > 20){
    //   chImgStyle(imgAnimationVisible)
    //   // console.log(parallax)
    // }else if( parallax <= 20){
    //   chImgStyle(imgAnimationHidden)

    // }
  }, [chImgStyle, chParallax, parallax]);

  // const imgAnimation: CSS.Properties = {
  //   marginTop: `-${parallax}px`
  // }

  return (
    <div id="about">
      <div className="imgContainer">
        <img id="floater" src={javonFloater} alt="javon"/>
        <span id="circle"></span>
        <img id="backdrop" src={javon} alt="About Javon"/>
      </div>
      <div className="txtContainer">
        <p>Shoe Designer</p>
        <p>&</p>
        <p>Educator</p>
        <p>Austin, Texas</p>
        <span></span>
      </div>
    </div>
  );
}
