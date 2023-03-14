import { PageIndex } from './components/PageIndex/PageIndex';
import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { SingleItemCard } from './components/SingleItemCard/SingleItemCard';
import { PageMain } from './components/PageMain/PageMain';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageMain />} />
        <Route path="/index" element={<PageIndex />} />
        <Route path="/index/:id" element={<SingleItemCard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
