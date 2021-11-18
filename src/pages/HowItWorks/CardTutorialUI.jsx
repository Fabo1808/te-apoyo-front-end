import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./styles.css"

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    height:500
  },
});

export default function CardTutorialUI({img, d,d2, i1,i2,i3}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {d}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {d2}
          </Typography>
           <div className="row">
              <div className="col-auto">
                 <div className="numberCircle">1</div>
              </div>
              <div className="col-10 text-start">
                <Typography gutterBottom variant="h6" component="h2">
                {i1}
                </Typography>
              </div>
           </div>

           <div className="row">
              <div className="col-auto">
                 <div className="numberCircle">2</div>
              </div>
              <div className="col-10 text-start">
                <Typography gutterBottom variant="h6" component="h2">
                {i2}
                </Typography>
              </div>
           </div>

           <div className="row">
              <div className="col-auto">
                 <div className="numberCircle">3</div>
              </div>
              <div className="col-10 text-start">
                <Typography gutterBottom variant="h6" component="h2">
                {i3}
                </Typography>
              </div>
           </div>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          
        </Button>
        <Button size="small" color="primary">
          
        </Button>
      </CardActions>
    </Card>
  );
}
