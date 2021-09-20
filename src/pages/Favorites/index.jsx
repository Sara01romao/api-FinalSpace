import { toast } from "react-toastify";
import { useEffect, useState } from "react"




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
        <div>
            salvos

            {list.map((item)=>{
                return(
                    <div key={item.id}>
                    {item.name}

                    <button onClick={()=> remove(item.id)}>Excluir</button>
                    </div>
                )
            })}
        </div>
    )
}