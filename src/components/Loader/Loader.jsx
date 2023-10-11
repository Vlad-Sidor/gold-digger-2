import React, { useEffect, useState } from "react";
import "./Loader.scss";
import Header from '@components/Header/Header';
import { Route, Routes,Navigate } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Play from '@pages/Play/Play';
import minerGif from '@assets/images/play-page/minergif.gif'
import PdfPresentation from '@pages/PdfPresentation/PdfPresentation';


function PreLoader3() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner">
              <img src={minerGif} alt="" />
            </div>
          ) : (
            <>
           <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/play" element={<Play/>}/>
                <Route path="/pdf" element={<PdfPresentation/>}/>
                <Route
                path="/gold-digger"
                element={<Navigate to="/" replace />}
                />
          </Routes>
        </>
          )}
        </>
      ) : (
        <>
           <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/play" element={<Play/>}/>
                <Route path="/pdf" element={<PdfPresentation/>}/>
                <Route
                path="/gold-digger"
                element={<Navigate to="/" replace />}
                />
          </Routes>
        </>
      )}
    </>
  );
}

export default PreLoader3;
