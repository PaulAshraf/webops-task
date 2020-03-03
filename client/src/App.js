import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header';
import FooterBar from './components/FooterBar';
import PhotoPage from './pages/PhotoPage'
import styled from 'styled-components'
import './App.css';
import HomePage from './pages/HomePage';

const AppWrapper = styled.div`
  display: block';
  box-sizing: border-box;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <br /><br /><br /><br />
        <Switch>
          <Route path='/photos/:id' component={PhotoPage} />
          <Route path='/' component={HomePage} />
        </Switch>
        <Footer />
        <FooterBar />
      </AppWrapper>
    </Router>
  );
}

export default App;
