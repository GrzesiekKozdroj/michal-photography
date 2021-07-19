import logo from './logo.svg';
import './styles/_resetter.css';
import './styles/_header.min.css'
import './styles/_boody.min.css'
import Navbar from './modules/Navbar'
import Boody from './modules/Boody'
import { useState, useEffect } from 'react'
import thingsImg from './images/o4.jpeg'
import artImg from    './images/o3.jpg'
import kidsImg from   './images/o2.jpg'
import peopleImg from './images/o5.jpg'


const slides = [
    {
      strater:true
    },
    {
        header:'PEOPLE',
        text:'one on one photoshooting outdoors or indoors , open to ideas, loves creative projects and creative people',
        image: peopleImg
    },
    {
        header:'KIDS',
        text:'a little child himself, sometimes has more fun than the little ones. very creative person which young models admire.',
        image: kidsImg
    },
    {
        header:'ART',
        text:'He knows stuff, he thinks stuff, and then make incredebily projects happen that you oculd easily see in commercials ',
        image: artImg
    },
    {
        header:'THINGS',
        text:'wild nature, cars, stuff, photoshooting outdoors or indoors , open to ideas, loves creative projects and creative people.',
        image: thingsImg
    },
]
function App() {
  const [tiktok, setTikTok] = useState(0)
  useEffect(()=>{
      const int = setInterval( ()=> {
        setTikTok(tiktok+1)
        if(tiktok === 3 ) setTikTok(0)
        console.log(tiktok)
      } ,2000)
      return ()=>clearInterval(int)
  })
  return (
    <div className="App">
      <Navbar />
      <Boody sliderIndex={tiktok} slides={slides}/>
    </div>
  );
}

export default App;
