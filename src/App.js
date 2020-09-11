import React from 'react';
import { toast } from 'react-toastify'

import Header from './common/Header';
import Footer from './common/Footer';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

toast.configure()

const App = () => {
  return (
    <div className="App">
      <Header />
        <Home />
      <Footer />
    </div>
  );
}

export default App;
