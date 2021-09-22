import * as React from 'react';
import hlIMG from '../img/highlight.jpeg';
import Paper from '@material-ui/core/Paper';
export interface IHighlightProps {
}

export default function Highlight (props: IHighlightProps) {
  return (
    <div id="highlight">
      <div className="context">
        <h1>HIGHLIGHT</h1>
        <p>"THE JAVON"</p>
      </div>
      <Paper id="paperHighlight">
        <img src={hlIMG} alt="The Javon"/>
      </Paper>
    </div>
  );
}
