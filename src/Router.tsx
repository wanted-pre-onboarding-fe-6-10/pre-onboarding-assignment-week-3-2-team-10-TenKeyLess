import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const Router = () => {
  // fetch('http://localhost:4000/comments/1')
  //   .then(res => res.json())
  //   .then(result => console.log(result));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
