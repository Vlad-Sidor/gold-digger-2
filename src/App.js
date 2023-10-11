import Header from '@components/Header/Header';
import { Route, Routes,Navigate } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Play from '@pages/Play/Play';
import PdfPresentation from '@pages/PdfPresentation/PdfPresentation';
import Loader from "@components/Loader/Loader";


function App() {
  return (
    
    <>
    <div className="App">
      <header className="App-header">
        {/* <PreLoader1 /> */}
        {/* <PreLoader2 /> */}
        <Loader />
      </header>
    </div>
    </>
  );
}

export default App;
