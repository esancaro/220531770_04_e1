import "./Profile.css";
function Profile({ avatar, username, bio }) {
  return (
    <div>
      <img
        // src={`data:image/jpeg;base64,${avatar}`}
        src={avatar}
        alt={username}
        className="rounded-circle profile-img"
      />
      <h2 className="ta-center">@{username}</h2>
      <p className="ta-center">{bio}</p>
    </div>
  );
}

export default Profile;
