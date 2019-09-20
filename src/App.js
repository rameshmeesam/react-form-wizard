import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wizard from './component/register/Wizard';
import Login from './component/Login';

function App() {
  return (    
      <Router>
        <Route path='/' exact= { true } strict component = { Home }   />
        <Route path = '/login' exact strict component = { Login } />
        <Route path = '/register' exact strict component = { Wizard } />  
        <Route path = '/about' exact strict render = { () => { return (<h1>About Us</h1>); } } />
        <Route path = '/contact' exact strict component = { Contact } />
      </Router> 
  );
}

const Home = (props) => {
  return (
  <>  
  <Header />
  <Nav />
  <Banner />
  <Showcase />
  <Article />
  <SideBarLeft />
  <div class="clear"></div>
  <Footer />
  </>  
  );
};

const Contact = (props) => {
  return <div> Contact Us</div>;
};

const Header = (props) => {
  return <header> 
           <div className = "container"> 
            <h1>My Portal</h1>
           </div>
         </header>;
};


const Nav = (props) => {
  return <nav> 
           <div className = "container"> 
             <ul>
               <li><a href="/">Home</a></li>
               <li><a href="#">Products</a></li>
               <li><a href="#">Services</a></li>
               <li><a href="/login">Login </a></li>
               <li><a href="/register">Register</a></li>
             </ul>
           </div>
         </nav>;
};


const Banner = (props) => {
  return <section id="banner"> 
          <div className="container">
           <div className = "banner-box">
            <h1>About Our Products</h1>
            
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna non convallis semper. Nulla neque orci, tristique at erat in, commodo molestie eros. Sed eu facilisis est. Morbi non nunc dictum, dapibus enim ut, dictum eros. Pellentesque maximus convallis tellus ac luctus. Suspendisse ultricies non elit sed blandit. Pellentesque eget mauris lacinia, malesuada eros id, eleifend enim. Maecenas gravida odio ut consequat condimentum. Nullam vehicula ex et leo porta, luctus convallis sem euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
           </div>
          </div> 
         </section>;
};

const Showcase = (props) => {
  return(
    <section id="showcase">
      <div class="showcase-box-1">
        <h3>Title</h3>
        <p>box1</p>
      </div>
      <div class="showcase-box-2">
        <h3>Title</h3>
        <p>box1</p>
      </div>
      <div class="showcase-box-3">
        <h3>Title</h3>
        <p>box1</p>
      </div>
      <div class="showcase-box-4">
        <h3>Title</h3>
        <p>box1</p>
      </div>
    </section>
  )};

const Article = (props) => {
  return <article>
    <div className="container">
      <h1>Welcome to Our Website</h1>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </p>

    </div>
  </article>;
};

const SideBarLeft = (props) => {
  return <aside> 
           <div className = "container"> 
          {/*  <ul>
               <li>FlipKart</li>
               <li>Amazon</li>
               <li>eBay</li>
            </ul>
          */}
           <img src={'/images/img1.jpg'} alt="boohoo" className="about-img" />
           </div>
         </aside>;
};

const Footer = (props) => {
  return <footer> 
           <div className = "container"> 
           <p>&copy; 2019 ThemeSmart.com</p>
           </div>
         </footer>;
};

export default App;
