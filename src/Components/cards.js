import React, {useState, useEffect} from 'react'
import './Cards.css'



function Cards() {

  const [personagens, setPersonage] =useState([]);

  useEffect(() =>{
        function loadApi(){
              let url= "https://finalspaceapi.com/api/v0/character/"
          
              fetch(url).then((resposta) => resposta.json()).then((data)=>{
                console.log(data);

                setPersonage(data);
              })
      
        }

         loadApi();
  })
  


  return (
    <div>
      <header>
          <h1>Final Space API</h1>
        </header>

        <div className="cards">
        
          {personagens.map((item)=>{
            return (
              <div className="card" key={item.id} >
                <div className="photo">
                    <img src={item.img_url}/>

                    <div className="name">
                    <h2>{item.name}</h2>
                    </div>
                  
                </div>
                
                <p>{item.species}</p>

                <div className="descricao">
                      
                      <br/>
                        <h4>Abilities</h4>
                        <ul>
                          {item.abilities.map((a)=>{
                            return (
                              <li>{a}</li>
                            )
                          })}
                    </ul>
            </div>
            
          </div>
        )
      })}
    </div>
    </div>
    
  )
}

export default Cards;