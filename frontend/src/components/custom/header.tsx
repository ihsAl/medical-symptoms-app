import { useNavigate } from "react-router-dom";

interface HeaderProps {
  userName: string;
}

export const Header = ({ userName }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left side - Greeting */}
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Hello, {userName}!
          </h1>
        </div>

        {/* Right side - Logout button */}
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