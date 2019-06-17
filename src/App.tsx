import * as React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import DisclaimerBottom from './components/footer/DisclaimerBottom';

class App extends React.Component {
  readonly state = {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
        <DisclaimerBottom />
      </div>
    )
  }

}

export default App;
