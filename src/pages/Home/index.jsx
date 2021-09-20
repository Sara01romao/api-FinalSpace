import Modal from '../../components/Modal'

import { useEffect, useState } from 'react';


import api from '../../services/api'
import { DivContainerHome, SectionHome} from './styles';

    export default function Home(){
    const [show, setShow] = useState(false)
    const [data, setData] = useState([]);
    const [modalCharacter, setModalCharacter] = useState('');


    useEffect(()=>{
        async function loadData(){
            const response = await api.get('character?limit=10')
           
            setData(response.data)
        }
        loadData();

    }, [])


    function open(valor){
        setModalCharacter (valor) 
        console.log( "sara", modalCharacter)
    }
    

    return(
        <SectionHome>
            <DivContainerHome>
                {data.map((character)=>{
                    return(
                        
                        <div key={character.id} onClick={() => {open(character); setShow(true)}}>
                        
                        <h1>{ character.name}</h1>
                        <img src={character.img_url} alt="" />
                        
                        </div>
                    
                    )
                })}
            
                <Modal info={modalCharacter} onClose={() => setShow(false)} show={show}/>
            </DivContainerHome>
        </SectionHome>

    );
}