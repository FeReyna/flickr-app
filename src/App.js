import {useState, useEffect} from 'react'
import Flickrs from './components/Flickrs'


const App = () => {
  const data = require('./Data.json'); 
  const [flickrs, setFlickrs]  = useState(data.items);
  const url = 'http://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?format=json';
  
  
  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch(url);
    }

    //fetchData(); //Since this API has CORS and it won't work with Front End alone
  })

  return (
    <div className="container">
      <Flickrs flickrs = {flickrs} />
    </div>
  );
}

export default App;
