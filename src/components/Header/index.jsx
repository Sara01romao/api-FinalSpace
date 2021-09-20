import { Link } from "react-router-dom";
import { useEffect} from "react";

export default function Header(){
    
    useEffect(()=>{
        const myList = localStorage.getItem('listFavorites')
       

        console.log("sara", myList)

    }, []);


    return(
        <div>
       
            <Link to="/">home</Link>
            <Link to="/favorites">Favoritos </Link>
         
            
        </div>
    )
}