import * as React from 'react';
import Header from './Header';
import About from './About';
import MyWork from './MyWork';
import Pricing from './Pricing'
import Contact from './Contact';
export interface ILandingProps {
}

export default function Landing (props: ILandingProps) {
  return (
    <div id="landing">
      <Header />
      <About />
      <MyWork />
      <Pricing />
      <Contact />
    </div>
  );
}
