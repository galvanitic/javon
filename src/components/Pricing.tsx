import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import kids from '../img/kid-shoe.jpeg';
import adult from '../img/adult-shoes.jpeg';
import cleats from '../img/cleats.jpeg'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '50%',
    width:'25%'
  },
  media: {
    height: 400,
  },
});
interface IPricingProps {
}

const Pricing: React.FunctionComponent<IPricingProps> = (props) => {
  const classes = useStyles();

  return (
    <div id="pricing">
      <div className="card-container">
        <img src={kids} alt=""/>
        <h1>Kids</h1>
        <p>$120+</p>
      </div>
      <div className="card-container">
        <img src={adult} alt=""/>
        <h1>Adult Sneakers</h1>
        <p>$200+</p>
      </div>
      <div className="card-container">
        <img src={cleats} alt=""/>
        <h1>All Cleats</h1>
        <p>$250+</p>
      </div>
    </div>
  );
};

export default Pricing;
