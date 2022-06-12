import React  from 'react';
import './App.css';
import logo from'./pp.png';

function App() {
  return (
    <>
    <section className='home'>
      <div className='header'>
      <div className='left'>
        <img src={logo} className='chanelLogo' alt='chanelLogo'></img>
        <h2 className='chanelName'>eStory</h2>  
      </div>
      <div className='right'>
        <button className='account'>L</button>
      </div>
      </div>
      <div className='aboutWrapper'>
        <h3 className='about'>dlsdklskflaskdsldkflsdkflsdkflsdk</h3>
      </div>
    </section>
    <section className='video'></section>
    </>
  );
}

export default App;
