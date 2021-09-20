import Modal from '../../components/Modal'

import { useEffect, useState } from 'react';


import api from '../../services/api'
import { Card, DivBanner, DivContainerHome, SectionHome} from './styles';

    export default function Home(){
    const [show, setShow] = useState(false)
    const [data, setData] = useState([]);
    const [modalCharacter, setModalCharacter] = useState('');


    useEffect(()=>{
        async function loadData(){
            const response = await api.get('character?limit=12')
           
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
            <DivBanner>
                <div>
                    <img src="/img/logo.png" alt="Final Space logo" />
                </div>
            </DivBanner>
        
            <SectionHome>

                
                <DivContainerHome>
                
                    {data.map((character)=>{
                        return(
                            
                            <Card key={character.id} onClick={() => {open(character); setShow(true)}}>
                            
                                <img src={character.img_url} alt="" />

                                <h1>{ character.name}</h1>
                                <p>{character.species}</p>
                            
                            </Card>
                        
                        )
                    })}
                    
                    <Modal info={modalCharacter} onClose={() => setShow(false)} show={show}/>
                </DivContainerHome>
            </SectionHome>
        </div>
    );
}