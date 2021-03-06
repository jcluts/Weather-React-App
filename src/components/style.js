import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

class Style extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: "Long Sleeve",
      pants: "Thick Pants",
      outer: "Coat",
      shoes: "Boots",
      currentTemp: this.props.currentTemp,
      error: "error"
    };
    this.setStyle = this.setStyle.bind(this);

  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentTemp !== prevProps.currentTemp) {
      this.setStyle();
    }
    console.log("style updated");
  }

  setStyle() {
    let x = this.props.currentTemp;

    function between(x, min, max) {
      return x >= min && x <= max;
    }

    if (x >= 75) {
      this.setState({outer: "Lightweight Jacket ", top: "T-shirt", pants: "Shorts", shoes: "Sandals"});
    } else if (between(x, 60, 75)) {
      this.setState({outer: "Light Jacket or Hoodie", top: "T-shirt", pants: "Shorts or Pants", shoes: "Shoes "});
    } else if (between(x, 50, 60)) {
      this.setState({outer: "Jacket", top: "T-shirt or Long sleeve", pants: "Pants", shoes: "Shoes"});
    } else if (between(x, 40, 50)) {
      this.setState({outer: "Jacket or Fleece ", top: " Long Sleeve", pants: "Pants", shoes: "Shoes or Boots"});
    } else {
      this.setState({outer: "Coat", top: "Long Sleeve", pants: "Thick Pants, Layers", shoes: "Boots"});
    }
  }

  render() {

    const {outer, top, pants, shoes} = this.state;

    return (<React.Fragment>

      <List component="nav" subheader={<Hidden xsDown > <ListSubheader component="div">
          <Typography variant="h4" gutterBottom="gutterBottom">
            Today is a Great Day to Wear A...
          </Typography>
        </ListSubheader>
      </Hidden>} className="styleList mfDiv">

        {
          (<ListItem >
            <ListItemText secondary={outer} className="style-div"/>
          </ListItem>)
        }
        {
          (<ListItem >
            <ListItemText secondary={top} className="style-div"/>
          </ListItem>)
        }
        {
          (<ListItem>
            <ListItemText secondary={pants} className="style-div"/>
          </ListItem>)
        }
        {
          (<ListItem >
            <ListItemText secondary={shoes} className="style-div"/>
          </ListItem>)
        }
      </List>
    </React.Fragment>);
  }
}

export default Style;
