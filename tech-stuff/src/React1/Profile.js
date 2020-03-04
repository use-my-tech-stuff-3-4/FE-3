import React from 'react';

const Profile = (props) =>{


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
