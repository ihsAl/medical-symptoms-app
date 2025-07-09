import ChatbotIcon from './components/ChatbotIcon';
import './App.css';


const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-200 via-indigo-100 to-white p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden relative">

        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-5">
          <div className="flex items-center gap-3">
            <ChatbotIcon className="w-9 h-9 p-1.5 bg-white text-purple-600 rounded-full shadow-sm" />
            <h2 className="text-xl font-semibold">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded text-3xl hover:opacity-80 transition">keyboard_arrow_down</button>
        </div>

        {/* Chat Body */}
        <div className="flex flex-col gap-5 h-[460px] overflow-y-auto px-6 py-6 pb-28 bg-white">
          {/* Bot Message */}
          <div className="flex items-start gap-3">
            <ChatbotIcon className="w-[36px] h-[36px] p-[6px] bg-purple-600 text-white rounded-full shadow" />
            <p className="bg-purple-100 text-gray-800 text-sm px-4 py-2 rounded-xl shadow-sm max-w-[75%]">
              Hey there! 👋<br />
              Please tell me your symptoms
            </p>
          </div>

          {/* User Message */}
          <div className="flex justify-end">
            <p className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white text-sm px-4 py-2 rounded-xl shadow-md max-w-[75%]">
              Ich bin ein Baller wie Dembele
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full px-6 py-4 bg-white border-t border-gray-200">
          <form action="#" className="w-full">
            <input
              type="text"
              placeholder="Type your message..."
              required
              className="w-full border border-gray-300 rounded-full px-5 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
