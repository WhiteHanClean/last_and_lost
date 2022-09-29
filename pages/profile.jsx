import React, {useState} from "react";
import Header from "../src/components/Header/Header";
import s from "../src/style/profile.module.scss";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Han Okaski",
    contacts: [
      {
        name: "Contact number",
        description: "0709849789",
      },
      {
        name: "Alternative number",
        description: "0709849789",
      },
      {
        name: "Alternative email",
        description: "0709849789",
      },
    ],
  });
  const [editUser, setEditUser] = useState(true)

  console.log(user.contacts[0].description)
  return (
    <div>
      <Header />

      <div className="profile">
        <div className={s.profile_flex}>
          <div className={s.profile_info}>
            <label className={s.profile_img}>
              <input type="file" hidden />
            </label>
            <h2>{user.name}</h2>
          </div>

          <div className={s.profile_contacts}>
            {user.contacts.map((item, i) => {
              return (
                <div className={s.items}>
                  <h2>{item.name}</h2>
                  {editUser !== true ? <p>{item.decription}</p> : <input placeholder='asdas' 
                  onChange={(e) => {setUser({...user, contacts: [contacts, {...user.contacts[i], description: e.target.value} ]})}}/>}
                </div>
              );
            })}
            <button className={s.profile_btn} onClick={()=> setEditUser(!editUser)}>Редактировать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
