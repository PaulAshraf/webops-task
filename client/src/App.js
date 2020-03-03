import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header';
import FooterBar from './components/FooterBar';
import PhotoPage from './pages/PhotoPage'
import './App.css';


function App() {
  return (
    <div style={{display: 'block',boxSizing: 'border-box'}}>
      <Header />
      <br /><br /><br /><br />
      <PhotoPage id={0} />
      <Footer />
      <FooterBar />
    </div>
  );
}

export default App;
