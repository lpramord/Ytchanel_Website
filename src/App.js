import React , {useEffect, useState }  from 'react';
import ustube from "usetube"
import './App.css';

const App = () => {
  
  const [videos , setVideos] = useState([])
  const [chanelDiscription , setChanelDiscription] = useState([])
  const [chanelName , setChaneName] = useState([])
  const [chanelLogo , setChanelLogo] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const apikey = "AIzaSyAYjn6lsRnlUcQl4TO9Zi52nHlpqodA_sU"
  const chanelId = "UCJA-NQ4MtcRIog66wziD8fA"

  async function getData() {
    const data = await ustube.getChannelVideos(chanelId)
    console.log(data)
  }

  return (
    <>
    <section className='home'>
      <div className='header'>
      <div className='left'>
        <img src={chanelLogo} className='chanelLogo' alt='chanelLogo'></img>
        <h2 className='chanelName'>{`${chanelName}`}</h2>  
      </div>
      <div className='right'>
        <button className='account'>L</button>
      </div>
      </div>
      <div className='aboutWrapper'>
        <h3 className='about'>{`${chanelDiscription}`}</h3>
      </div>
    </section>
    <section className='video'>
      {videos.map((item)=>(
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.id.videoId}`} key={`${item.id.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      ))}
    </section>
    </>
  );
}

export default App;
