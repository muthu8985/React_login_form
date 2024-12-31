import { useState } from "react";

export default function Users() {
  const [userData, setUserdata] = useState([]);
  const [error, setError] = useState(null);

  const getUserdata = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUserdata(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <button onClick={getUserdata}>Fetch User Data</button>
      {error && <p className="text-danger">{error}</p>}
      {userData.map((user) => (
        <p key={user.id}>
          {user.name}
          <br />
          {user.email}
        </p>
      ))}
    </div>
  );
}
