import { toast } from "react-toastify";
import { useEffect, useState } from "react"
import { DivSalvos } from "./styles";
import {FaHeart, FaTrash} from 'react-icons/fa';

export default function Favorites(){
    const [list, setList] = useState([]);

    useEffect(()=>{
        const myList = localStorage.getItem('listFavorites')

        setList(JSON.parse(myList) || [])
    }, []);


    function remove(id){
        let filterItem = list.filter((item) =>{
            return (item.id !== id)
        })

        setList(filterItem);
        localStorage.setItem('listFavorites', JSON.stringify(filterItem))
        toast.info("Removido com sucesso")

    }



    return(
        <DivSalvos>
            <h1>Favoritos <FaHeart/> </h1>
            
            <div className="container">

       
                {list.map((item)=>{
                    return(
                        <div className="card" key={item.id}>
                            <div>
                                <img src={item.img_url} alt="" />
                            </div>
                            <h2>{item.name}</h2>

                        <button onClick={()=> remove(item.id)}><FaTrash/>Excluir</button>
                        </div>
                    )
                })}
            </div>
        </DivSalvos>
    )
}