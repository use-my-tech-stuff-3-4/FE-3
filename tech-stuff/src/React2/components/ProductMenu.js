import React, { useContext } from 'react';
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  menu: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#CBCBCB",
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


const ProductMenu = (props) => {

  const classes = useStyles();

    return(
        <div className={classes.menu}>            
                <button>Add item </button>
        </div>
    )
}

export default ProductMenu
