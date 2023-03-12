import { PageIndex } from './components/PageIndex/PageIndex';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingleItemCard } from './components/SingleItemCard/SingleItemCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageIndex />} />
        <Route path="/:id" element={<SingleItemCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
