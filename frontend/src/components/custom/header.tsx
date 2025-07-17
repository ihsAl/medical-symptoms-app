import { useNavigate } from "react-router-dom";

interface HeaderProps {
  userName: string;
}

// This components purpose is to create a header specifically for the chat page.
// It displays the user's name and provides a logout button that navigates back to the home page
// When logging out, the process is bascially reset
export const Header = ({ userName }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Hello, {userName}!
          </h1>
        </div>

        <div className="flex items-center">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};