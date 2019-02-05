import React from "react";
import { withStyles, Tooltip } from "@material-ui/core";
import PropTypes from "prop-types";

function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.95em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent ${color} transparent`
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.95em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `${color} transparent transparent transparent`
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.95em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent ${color} transparent transparent`
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.95em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent ${color}`
      }
    }
  };
}

const styles = theme => ({
  bootstrapPopper: arrowGenerator(theme.palette.common.black),
  bootstrapTooltip: {
    backgroundColor: theme.palette.common.black
  },
  bootstrapPlacementLeft: {
    margin: "0 8px"
  },
  bootstrapPlacementRight: {
    margin: "0 8px"
  },
  bootstrapPlacementTop: {
    margin: "8px 0"
  },
  bootstrapPlacementBottom: {
    margin: "8px 0"
  }
});

class ToolTip extends React.Component {

      state = {
        arrowRef: null
      };
  handleArrowRef = node => {
    this.setState({
      arrowRef: node
    });
  };
  render() {
    const { classes, children ,value,open} = this.props;

    return (
      <Tooltip
        title={
          <React.Fragment>
            {value}
            <span className={classes.arrow} ref={this.handleArrowRef} />
          </React.Fragment>
        }
        open={open}
        classes={{
          tooltip: classes.bootstrapTooltip,
          popper: classes.bootstrapPopper,
          tooltipPlacementLeft: classes.bootstrapPlacementLeft,
          tooltipPlacementRight: classes.bootstrapPlacementRight,
          tooltipPlacementTop: classes.bootstrapPlacementTop,
          tooltipPlacementBottom: classes.bootstrapPlacementBottom
        }}
        PopperProps={{
          popperOptions: {
            modifiers: {
              arrow: {
                enabled: Boolean(this.state.arrowRef),
                element: this.state.arrowRef
              }
            }
          }
        }}
      >
        {children}
      </Tooltip>
    );
  }
}
ToolTip.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  open:PropTypes.bool,
  value:PropTypes.number.isRequired
};
ToolTip.defaultProps={
    open:false
}
export default withStyles(styles)(ToolTip);
