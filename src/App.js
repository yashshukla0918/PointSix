import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import './App.css'
import { Helmet, HelmetProvider } from "react-helmet-async";
import ShareButton from "./Components/ShareButton";

function App() {

  const [src, setSrc] = useState()
  
  function getRandomImage() {
    let random = Math.floor(Math.random() * 300) + 1;
    // setRandom(getRandomInt());
    let x = `https://picsum.photos/id/${random}/200/300`
    axios.get(x)
      .then((res) => {
        if (res.status === 200) {
          setSrc(x)
        }
      })
      .catch((err) => {
        getRandomImage()
        console.error(err);
      })
  }


  useEffect(() => {
    getRandomImage()
  }, [])


  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>

        <link rel="icon" href={src} />
        {/* For Microsoft App */}
        <meta name="msapplication-TileImage" content={src} />

        {/* For Facebook ,Whatsapp */}
        {/* Site Name,Title,Description to be display */}
        <meta property="og:site_name" content="Random Image Share" />
        <meta property="og:title" content="Random Image" />
        <meta property="og:description" content="Random image share assignment. " />

        {/* Imageto display  */}
        <meta property="og:image" itemProp="image" content={src} />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="250" />
        <meta property="og:image:height" content="300" />

        {/* website to visit when url is clicked */}
        <meta property="og:url" content={src} />

      </Helmet>
      <Navbar />
      <div className="container-fluid ">
        <div className="row text-center my-3">
          <div className="col-sm-4"></div>
          <div className="col-sm-5 text-center">
            <center>
              <div className="emboss text-center">
                <img src={src} alt="Loading..." /><br />
                <div className="row ">
                  <center>
                    <div className="col-sm-2 p-0">
                      <button className="btn btn-outline-dark my-2" onClick={getRandomImage}>
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="col-sm-10 p-0">
                      <ShareButton
                        url={src}
                        title={'Random Image'}
                        description={'Random Image Assignment'}
                      />
                    </div>
                  </center>
                </div>
              </div>
            </center>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </HelmetProvider>

  );
}

export default App;
