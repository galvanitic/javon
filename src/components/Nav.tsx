import * as React from 'react';
import CSS from 'csstype';
import { AddBoxOutlined } from '@material-ui/icons';

export interface INavProps {
}

export default function Nav (props: INavProps) {
  const [winHeight, chWinHeight] = React.useState<number>(0);
  const [op1, chop1] = React.useState<number>(1);
  const [op2, chop2] = React.useState<number>(1);
  const [op3, chop3] = React.useState<number>(1);
  const [op4, chop4] = React.useState<number>(1);
  
  const [ txtColor1, chTxtColor1] = React.useState<string>("white");
  const [ txtColor2, chTxtColor2] = React.useState<string>("white");
  const [ txtColor3, chTxtColor3] = React.useState<string>("white");
  const [ txtColor4, chTxtColor4] = React.useState<string>("white");
  
  const [docHeight, chDocHeight] = React.useState<number>(Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight));
  const [header, chHeader] = React.useState<HTMLElement|null>(null);
  const [about, chAbout] = React.useState<HTMLElement|null>(null);
  const [headerH, chHeaderH] = React.useState<number>(1);
  const [aboutH, chAboutH] = React.useState<number>(1);


  const lightColor:string = "#fcc65170";
  // const darkColor:string = "#7c222e";
  const darkColor:string = "#a8750f";
  // let header:HTMLElement = document.getElementById('header') as HTMLElement;
  // let about:HTMLElement = document.getElementById('about') as HTMLElement;
  // let headerH:number = (header) ? header.offsetHeight : 0;
  // let aboutH:number = ;
 
  // console.log(headerH);
  // let headerHeight:number = document.querySelector('#header')?.offsetHeight;
  React.useEffect(()=>{
    chDocHeight(Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight));
    chHeader(document.getElementById('header'));
    chAbout(document.getElementById('about'));
    chHeaderH((header) ? header.offsetHeight : 1);
    chAboutH((about) ? about.offsetHeight : 1);
    // window.scrollTo({top:1, behavior:'smooth'})
    const scrollChange = () => {
      const y:number = window.scrollY;
      chWinHeight(y);
    }
    window.addEventListener("scroll", scrollChange);
    if(winHeight > headerH/2){
      chTxtColor1(darkColor);
      chTxtColor2(lightColor);
      chTxtColor3(lightColor);
      chTxtColor4(lightColor);

      chop1(1);
      chop2(0.5);
      chop3(0.5);
      chop4(0.5);
    }
    if(winHeight > aboutH+aboutH/2){
      chTxtColor1(lightColor);
      chTxtColor2(darkColor);
      chTxtColor3(lightColor);
      chTxtColor4(lightColor);

      chop1(0.5);
      chop2(1);
      chop3(0.5);
      chop4(0.5);
    }
    if(winHeight > docHeight - (docHeight/3)){
      chTxtColor1(lightColor);
      chTxtColor2(lightColor);
      chTxtColor3(darkColor);
      chTxtColor4(lightColor);

      chop1(0.5);
      chop2(0.5);
      chop3(1);
      chop4(0.5);
    }
    if(winHeight > docHeight-(docHeight/5)){
      chTxtColor1(lightColor);
      chTxtColor2(lightColor);
      chTxtColor3(lightColor);
      chTxtColor4(darkColor);

      chop1(0.5);
      chop2(0.5);
      chop3(0.5);
      chop4(1);
    }
    if(winHeight < headerH/2) {
      chTxtColor1(lightColor);
      chTxtColor2(lightColor);
      chTxtColor3(lightColor);
      chTxtColor4(lightColor);

      chop1(1);
      chop2(1);
      chop3(1);
      chop4(1);
    }
  }, [chTxtColor1, chTxtColor2, chTxtColor3, winHeight, chDocHeight, chHeader, chHeaderH, chAboutH, chAbout])

  const txtStyles1: CSS.Properties = {
    color: txtColor1,
    opacity: op1
  };
  const txtStyles2: CSS.Properties = {
    color: txtColor2,
    opacity: op2
  };
  const txtStyles3: CSS.Properties = {
    color: txtColor3,
    opacity:op3
  };
  const txtStyles4: CSS.Properties = {
    color: txtColor4,
    opacity: op4
  };

  return (
    <nav>
      <p onClick={()=> window.location.href = "#about"} style={txtStyles1}>ABOUT ME</p>
      <p onClick={()=> window.location.href = "#myWork"} style={txtStyles2}>MY WORK</p>
      <p onClick={()=> window.location.href = "#pricing"} style={txtStyles3}>PRICING</p>
      <p onClick={()=> window.location.href = "#contact"}  style={txtStyles4}>CONTACT ME</p>
    </nav>
  );
}