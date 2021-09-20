import Routes from './routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';


export default function App() {
  return (
    <div>
      <Routes/>

       <ToastContainer autoClose={3000}/> 
    </div>
    
  );
}
 
