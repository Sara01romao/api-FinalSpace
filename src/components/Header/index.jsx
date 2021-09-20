import { Link } from "react-router-dom";
import { useEffect} from "react";
import { DivHeader } from "./styles";
import { FaBeer, FaRocket} from 'react-icons/fa';

export default function Header(){
    
    useEffect(()=>{
        const myList = localStorage.getItem('listFavorites')
       

        console.log("sara", myList)

    }, []);


    return(
        <DivHeader>
            <nav>
            <Link to="/"> < FaRocket /></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="favLink"><Link to="/favorites">Favoritos </Link></li>
                </ul>
            </nav>
        </DivHeader>
    )
}