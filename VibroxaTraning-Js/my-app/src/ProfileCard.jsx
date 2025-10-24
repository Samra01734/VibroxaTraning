function ProfileCard(props) {
  return (
    <div className="profile-card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
      <p>Roll No: {props.rollNo}</p>
    </div>
  );
}

export default ProfileCard;
