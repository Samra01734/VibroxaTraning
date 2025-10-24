import { useParams, useNavigate } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const userData = {
    1: { name: "Alice", age: 25, email: "alice@example.com" },
    2: { name: "Bob", age: 30, email: "bob@example.com" },
    3: { name: "Charlie", age: 22, email: "charlie@example.com" },
  };

  const user = userData[id];

  if (!user) return <p>User not found!</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default UserDetail;
