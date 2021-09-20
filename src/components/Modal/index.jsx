import { toast } from "react-toastify";
import './style.css'

export default function Modal(props){
    if(!props.show){
        return null
    }


    function addFavorite(valor){
    
       const mylist = localStorage.getItem('listFavorites');
       let favoritesSave = JSON.parse(mylist) || [];

       const hasItem =favoritesSave.some((favoriteSave) => favoriteSave.id === valor.id)

       if(hasItem){
        toast.warn("Já está na lista de favoritos")
        return;
       }

       favoritesSave.push(valor);
       localStorage.setItem('listFavorites', JSON.stringify(favoritesSave))
       
       toast.success("Adicionado com sucesso")

        
   
        
    }

    return(
        <div className="modal">
            
            <div className="modal-container">
                <button className="buttonClose" onClick={props.onClose}>X</button>

                <div className="info">
                    <div className="infoImg">
                        <img src={props.info.img_url} alt="" />
                    </div>

                    <div className="infoTxt">
                         <h1>Modal {props.info.name}</h1>
                         <small>{props.info.species}</small>


                         <ul>
                             {props.info.abilities.slice(0, 3).map((abilities) =>{
                                 return(
                                     <li>{abilities}</li>
                                 )
                             })}
                         </ul>

                         <button onClick={() => addFavorite(props.info)}>Add Favoritos</button>
                    </div>
                </div>

            </div>
       
        </div>
    )
}