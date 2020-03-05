import React, {useState} from 'react';

const Profile = (props) =>{
//hook statement for monitoring state for usertype with initial state being both false
    const [userType, setUserType] = useState({
      renter: false,
      owner: false
    })
    //a handle submit that asks which boxes are checked and chanes the values stored in userType accordingly
    const handleSubmit = (event) => {
          event.preventDefault();
          if(document.getElementById("owner").checked = true && document.getElementById("renter").checked = true){
            setUserType({
              renter:true,
              owner:true
            })
          }
            else if(document.getElementById("owner").checked = true && document.getElementById("renter").checked = false){
            setUserType({
              renter:false,
              owner:true
            }
          }
            else if(document.getElementById("owner").checked = false && document.getElementById("renter").checked = true){
            setUserType({
              renter:true,
              owner:false
            }
          }
    }
    //return statement passing information from props, may just do a axios statement since this is part of mvp for me.
    return(
      <div className = "profile_container">

        <div className = "image_container">
          <img src = {props.user.profile_picture}/>

        </div>
        <div className = "main_information">
          <h2 className = "username">{props.user.user_name}</h2>

          <form onSubmit={handleSubmit}>
            <label for = "renter">Renter:</label>

            <input
              type ="checkbox"
              id="renter"
              name="renter"
              value={props.user.isRenter}
              onChange={handleChanges}
            />

            <label for = "owner">Owner:</label>

            <input
              type ="checkbox"
              id="owner"
              name="owner"
              value={props.user.isOwner}
              onChange={handleChanges}
            />
          </form>
        </div>

      </div>

    )


}
