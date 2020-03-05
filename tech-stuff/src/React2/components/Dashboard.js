import React, { useEffect } from 'react'; 
import { makeStyles} from "@material-ui/core/styles";
import ProductList from '../../React1/ProductListSkeleton'
import UserProfile from './UserProfile'
import UploadImage from './UploadImage'
import { UserContext } from '../context/UserContext';
import ProductMenu from './ProductMenu'; 

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-start",
  },
  leftCont: {
    display: "flex",
    width: "30%",
  },
  fixed: {
    position: "fixed",
    width: "26.9%"
  },
  rightCont: {
    display: "flex",
    flexFlow: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    width: "70%",
    // border: "2px solid red"
  },
  mainTitle: {
    color: "white",
    marginLeft: "10%"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: 700,
    display: "flex",
    alignItems: "center"
  }
});

const Dashboard = () => {

  const classes = useStyles();


  return (
    <div className={classes.main}>
      <div className={classes.leftCont}>
        <div className={classes.fixed}>
        <UploadImage/>
        <UserProfile />
        </div>
      </div>
      <div className={classes.rightCont}>
        <ProductMenu />
        <ProductList />
      </div>
    </div>
  )

}

export default Dashboard; 