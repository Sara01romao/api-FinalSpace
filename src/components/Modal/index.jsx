import { toast } from "react-toastify";
import './styles.js'
import { DivModal, ModalContainer, DivInfo } from "./styles.js";

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
        <DivModal>
            
            <ModalContainer>
                <button className="buttonClose" onClick={props.onClose}>X</button>

                < DivInfo >
                    <div className="infoImg">
                        <img src={props.info.img_url} alt="" />
                    </div>

                    <div className="infoTxt">
                         <h1>Modal {props.info.name}</h1>
                         <p></p>

                        <div className="abilities">
                            
                            <div className="species">
                                <h4>Species: </h4>
                                <p>{props.info.species}</p>
                               
                            </div>
                            <h4>Abilities</h4>
                            <ul>
                                {props.info.abilities.slice(0, 3).map((abilities) =>{
                                    return(
                                        <li>{abilities}</li>
                                    )
                                })}
                            </ul>
                         </div>

                         <button className="favBtn" onClick={() => addFavorite(props.info)}>Add Favoritos</button>
                    </div>
                </DivInfo >

            </ModalContainer>
       
        </DivModal>
    )
}