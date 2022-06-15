import React , {useEffect, useState }  from 'react';
import './App.css';

const App = () => {
  
  const [videos , setVideos] = useState([])
  const [chanelDiscription , setChanelDiscription] = useState([])
  const [chanellogo , setChanellogo] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const apikey = "AIzaSyAYjn6lsRnlUcQl4TO9Zi52nHlpqodA_sU"
  const chanelId = "UCJA-NQ4MtcRIog66wziD8fA"

  async function getData() {

    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${chanelId}&maxResults=250&order=date&key=${apikey}`, {
        "method": "GET",});
        const data = await response.json(); 
        setVideos(data.items);

        const response1 = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${chanelId}&key=${apikey}`, {
          "method": "GET",});
          const data1 = await response1.json(); 
         setChanellogo(data1.items[0].snippet.thumbnails.medium.url);
         setChanelDiscription(data1.items[0].snippet);
  }
  return (
    <>
    <section className='home'>
      <div className='header'>
      <div className='left'>
        <img src={chanellogo} className='chanelLogo' alt='chanelLogo'></img>
        <h2 className='chanelName'>{`${chanelDiscription.title}`}</h2>  
      </div>
      <div className='right'></div>
      </div>
      <div className='aboutWrapper'>
        <h3 className='about'>{`${chanelDiscription.description}`}</h3>
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
