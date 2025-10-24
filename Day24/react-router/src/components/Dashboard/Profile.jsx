import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Profile Section</h3>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Profile;
