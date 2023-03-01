import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import chatPage from './components/chatPage.jsx';
import signUpPage from './components/signUpPage.jsx';
import notFoundPage from './components/notFoundPage.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={chatPage} />
      <Route path="login" element={signUpPage} />
      <Route path="*" element={notFoundPage} />
    </Routes>
  </BrowserRouter>
);

export default App;
