import './App.css';
import {BrowserRouter,Routes, Route, Outlet} from "react-router-dom";
import { Nav, Home, Artists, Artwork, Exhibition, Footer, PageNotFound, Layout} from'./components';
import { Daudi, Akachi, Akothee, Juma, Mary, Suzie, SuzieSlide} from'./pages';

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="artists" element={<Artists />}/>
          <Route path ="daudi" element={<Daudi />} />
          <Route path ="akachi" element={<Akachi />} />
          <Route path ="akothee" element={<Akothee />} />
          <Route path ="juma" element={<Juma />} />
          <Route path ="mary" element={<Mary />} />
          <Route path ="suzie" element={<Suzie />} />
          <Route path ="suzieslide" element={<SuzieSlide />} />
        <Route path="artwork" element={<Artwork />} />
        <Route path="exhibition" element={<Exhibition />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
