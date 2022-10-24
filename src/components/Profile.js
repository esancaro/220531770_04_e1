import { useEffect, useState } from "react";
import { getProfile } from "../service/data-service";
import "./Profile.css";

function Profile() {
  const [profileData, setProfileData] = useState({});
  
  useEffect(() => {
    getProfile("6136944fcd79ba24707e2f82").then((data) => {
      setProfileData(data);
    });
  }, []);

  return (
    <div>
      <img
        // src={`data:image/jpeg;base64,${avatar}`}
        src={profileData.avatar}
        alt={profileData.username}
        className="rounded-circle profile-img"
      />
      <h2 className="ta-center">@{profileData.username}</h2>
      <p className="ta-center">{profileData.bio}</p>
    </div>
  );
}

export default Profile;
