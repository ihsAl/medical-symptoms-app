import { Overview } from "@/components/custom/overview";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


// The Home component serves as the entry point for the chat application
// It allows users to enter their name and navigate to the chat interface
export const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      navigate("/chat", { state: { userName: name.trim() } });
    } else {
      alert("Please enter a valid name.");
    }
  };

  const handlekeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center"> {/* NEW wrapper */}
      <div className="flex flex-col items-center justify-center w-full max-w-md gap-6">
        <Overview />

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={handlekeypress}
            className="border p-3 rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Start Diagnosis
          </button>
        </form>
      </div>
    </div>
  );
};
