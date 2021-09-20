import { Link } from "react-router-dom";
import { useEffect} from "react";
import { DivHeader } from "./styles";

export default function Header(){
    
    useEffect(()=>{
        const myList = localStorage.getItem('listFavorites')
       

        console.log("sara", myList)

    }, []);


    return(
        <DivHeader>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favorites">Favoritos </Link></li>
                </ul>
            </nav>
        </DivHeader>
    )
}