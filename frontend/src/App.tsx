import './App.css'
import { Chat } from './pages/chat/chat'
import { Home } from './pages/chat/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="w-full h-screen bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App;