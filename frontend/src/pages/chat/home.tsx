import { Overview } from "@/components/custom/overview";

export const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center"> {/* NEW wrapper */}
      <div className="flex flex-col items-center justify-center w-full max-w-md gap-6">
        <Overview />

        <form className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
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
