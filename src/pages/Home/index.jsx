import Modal from '../../components/Modal'

import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api'

export default function Home(){
    const [show, setShow] = useState(false)
    const [data, setData] = useState([]);
    const [modalCharacter, setModalCharacter] = useState('');


    useEffect(()=>{
        async function loadData(){
            const response = await api.get('character?limit=10')
            // console.log(response.data)
            setData(response.data)
        }
        loadData();

    }, [])


    function open(valor){
        setModalCharacter (valor) 
        console.log( "sara", modalCharacter)
    }
    

    return(
        <div>

            {data.map((character)=>{
                return(
                    
                    <div key={character.id} onClick={() => {open(character); setShow(true)}}>
                       
                       <h1>{ character.name}</h1>
                       <img src={character.img_url} alt="" />
                      

                      {/* <button onClick={() => {open(character); setShow(true)}}>Open</button> */}
                     
                    </div>
                   
                )
            })}
        
            <Modal info={modalCharacter} onClose={() => setShow(false)} show={show}/>
        </div>

    );
}