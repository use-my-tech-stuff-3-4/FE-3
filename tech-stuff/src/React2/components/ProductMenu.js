import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { deepOrange } from '@material-ui/core/colors';


const useStyles = makeStyles({
  menu: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "center",
    background: "#EAEAEA",
    padding: 20,
    position: "sticky",
    top: 70,
  },
  leftCont: {
    display: "flex",
    width: "50%",
  },
  mainTitle: {
    color: "white",
    marginLeft: "5%"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: 700,
    display: "flex",
    justifyContent: "center",
  }
});

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    '&:hover': {
      backgroundColor: deepOrange[700],
    },
  },
}))(Button);

const ProductMenu = (props) => {

  const classes = useStyles();

    return(
        <div className={classes.menu}>            
          <Link to='/productform' className={classes.link}>
          <ColorButton variant="contained" color="primary">
            Add item 
          </ColorButton>
          </Link>
        </div>
    )
}

export default ProductMenu
