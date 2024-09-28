import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageController from './page/PageController';
import { Toaster } from 'react-hot-toast';




const App = () => {
  return (
    <BrowserRouter>
      <Toaster position='top-center' toastOptions={{duration: 2000}} />
      <Routes>
        
        <Route path='/' element={<PageController />}/>
        
        

      </Routes>
    </BrowserRouter>
  );
};

export default App;