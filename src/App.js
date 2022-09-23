// import Header from './components/Header';
// import Screen from './components/Screen';
import Home from './components/Home';
import PokeDetail from './components/PokeDetail';
import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<PokeDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
