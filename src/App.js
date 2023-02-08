import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import { Home, Artists, Artwork, Exhibition, PageNotFound, Layout} from'./components';
import { Kupoayo, Akachi, JamesObonyo, Mchechu, Mary, Kamyoso} from'./pages';
import { KupoayoSlide, JamesObonyoSlide, MchechuSlide, KamyosoSlide} from'./pages/Slides';

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/artists" element={<Artists />} />

          <Route path ="/artists/kupoayo" element={<Kupoayo />}/>
            <Route path ="/artists/kupoayo/kupoayoslide" element={<KupoayoSlide />} />

          <Route path ="akachi" element={<Akachi />} />
          <Route path ="/artists/jamesobonyo" element={<JamesObonyo />} />
           <Route path ="/artists/jamesobonyo/jamesobonyoslide" element={<JamesObonyoSlide />} />
          <Route path ="/artists/mchechu" element={<Mchechu />} />
            <Route path ="/artists/mchechu/mchechuslide" element={<MchechuSlide />} />
          <Route path ="mary" element={<Mary />} />
          <Route path ="/artist/kamyoso" element={<Kamyoso />} />
          <Route path ="/artists/kamyoso/kamyososlide" element={<KamyosoSlide />} />
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
