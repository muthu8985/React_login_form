import React, { useState } from "react";
import LoginForm from "./components/loginform";
import UserDetails from "./pages/userdetails";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user); // Set the logged-in user
  };

  return (
    <div>
      {loggedInUser ? (
        <UserDetails user={loggedInUser} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
