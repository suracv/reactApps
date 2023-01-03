import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout";
import Entg from "./routes/Entg";
import IpEslestirme from "./routes/IpEslestirme";
import Log from "./routes/Log";
import ServisRaporu from "./routes/ServisRaporu";
import SistemRaporu from "./routes/SistemRaporu";
import SlaRaporu from "./routes/SlaRaporu";
import SunucuGuncelleme from "./routes/SunucuGuncelleme";
import SunucuGuncellemeLog from "./routes/SunucuGuncellemeLog";
import Home from "./routes/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="entg" element={<Entg />} />
          <Route path="ip-eslestirme" element={<IpEslestirme />} />
          <Route path="log" element={<Log />} />
          <Route path="servis-raporu" element={<ServisRaporu />} />
          <Route path="sistem-raporu" element={<SistemRaporu />} />
          <Route path="sla-raporu" element={<SlaRaporu />} />
          <Route path="sunucu-guncelleme" element={<SunucuGuncelleme />} />
          <Route path="sunucu-guncelleme-log" element={<SunucuGuncellemeLog />} />
    
          <Route path="*" element={<p>BÖYLE BİR SAYFA YOK</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
