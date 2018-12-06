import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
    import Hidden from '@material-ui/core/Hidden';
    import List from '@material-ui/core/List';
    import ListItem from '@material-ui/core/ListItem';
    import ListItemText from '@material-ui/core/ListItemText';



function Sunset(props) {
  const { classes, theme } = props;

  return (
    <Card className="styleList">
        <CardContent className="sunsetCard">


        <div className="sunsetList">

        <div>
          <Typography variant="subtitle1" color="textSecondary">
            Sunrise: 5:30am
          </Typography>
          </div>


          <div   >
            <Typography variant="subtitle1" color="textSecondary">
              Sunset: 6:00pm
            </Typography>
            </div>

            </div>

        </CardContent>


    </Card>
  );
}



export default Sunset;
