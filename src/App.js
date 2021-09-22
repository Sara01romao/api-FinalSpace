import Routes from './routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';


export default function App() {
  return (
    <div className="app">
      <Routes/>

       <ToastContainer autoClose={2000}/> 
    </div>
    
  );
}
 
