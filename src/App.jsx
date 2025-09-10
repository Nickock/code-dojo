import './css/App.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/homePage';
import { ExcercisePage } from './pages/ExcercisesPage';
import { CodePage } from './pages/CodePage';
import { TutorialPage } from './pages/TutorialPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect , useState} from 'react';
import { NotFound } from './components/NotFound';


function App() {


    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const mouseTrackerSize = 0;
    useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
    });



  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/desafios" element={<ExcercisePage/>}/>
        <Route path="/code/:id" element={<CodePage/>}/>
        <Route path="/tutorial/:id" element={<TutorialPage/>}/>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <div className="mouseTracker" style={{top:mousePosition.y-mouseTrackerSize/2, left:mousePosition.x-mouseTrackerSize/2,height:mouseTrackerSize,width:mouseTrackerSize}}/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
