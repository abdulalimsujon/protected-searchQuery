
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
// import { Route, Routes } from 'react-router-dom';

import Blogs from './pages/Blogs';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import RequireAuth from './pages/RequireAuth';
import UseSearch from './pages/UseSearch';



function App() {


  return (
    <div>
      {/* <Login></Login> */}

      <Navbar></Navbar>



      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={

          <RequireAuth>

            <Blogs></Blogs>

          </RequireAuth>


        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/usesearch' element={<UseSearch></UseSearch>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
