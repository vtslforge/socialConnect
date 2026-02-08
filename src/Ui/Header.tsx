import { getAuth } from "firebase/auth";

const Header = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div className="p-4 border-b">
      {/* 1. Use user.displayName to get the Full Name 
         2. Use a fallback like 'Guest' in case the data hasn't loaded yet
      */}
      <p>Hello, {user?.displayName || "Guest"}</p>
    </div>
  );
};

export default Header;