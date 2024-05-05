// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;













import React from 'react'
import Navbar from './Components/Navbar'
import Mainhome from './Components/Mainhome'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/NavbarItems/Home'
import About from './Components/NavbarItems/About'
import Cart from './Components/NavbarItems/Cart'
import Contact from './Components/NavbarItems/Contact'
import Products from './Components/NavbarItems/Products'
import Profile from './Components/NavbarItems/Profile'
import SingleProduct from './Components/SingleProduct'
import Login from './Components/NavbarItems/Login'
import SignUp from './Components/NavbarItems/SignUp'

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Mainhome/>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/product/:id" element={<SingleProduct></SingleProduct>}></Route>

      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      {/* <Route path="/signup" element={<SignUp></SignUp>}></Route> */}



    </Routes>
    <Footer/>
    </>
  )
}

export default App