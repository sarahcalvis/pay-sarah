// https://stripe.com/docs/recipes/elements-react

import React from 'react';
import Typography from '@material-ui/core/Typography';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      type: this.props.type
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.text !== prevProps.text) this.setState({ text: this.props.text });
  }

  render() {
    return (
      <div>
        {this.state.type === "heading" &&
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom>
            {this.state.text}
          </Typography>
        }
        {this.state.type === "subheading" &&
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph>
            {this.state.text}
          </Typography>
        }
        {this.state.type === "card-heading" &&
          <Typography
            variant="h6"
            align="left"
            gutterBottom>
            {this.state.text}
          </Typography>
        }
        {this.state.type === "card-labels" &&
          <Typography 
            color="textSecondary"
            variant="caption">
            {this.state.text}
          </Typography>
        }
        {this.state.type === "small-heading" &&
          <Typography
            variant="h6"
            align="center"
            gutterBottom>
            {this.state.text}
          </Typography>
        }
        {this.state.type === "small-subheading" &&
          <Typography 
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p">
            {this.state.text}
          </Typography>
        }
      </div>
    );
  }
}

export default Text;