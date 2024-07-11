import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News_Body from "./components/News_Body";
import App_Header from "./common/App_Header";
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import AuthProvider from './context/AuthContext';
import SubscriptionPage from './components/SubscriptionPage';

function App() {

  return (
    <>
    <AuthProvider>
      <Router>
          <App_Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/news' element={<News_Body/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/subscribe' element={<SubscriptionPage />} />
          </Routes>
      </Router> 
    </AuthProvider>
       
    </>
  );
}

export default App;
