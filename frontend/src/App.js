import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import chatPage from './components/chatPage.jsx';
import loginPage from './components/loginPage.jsx';
import notFoundPage from './components/notFoundPage.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={chatPage} />
      <Route path="login" element={loginPage} />
      <Route path="*" element={notFoundPage} />
    </Routes>
  </BrowserRouter>
);

export default App;
