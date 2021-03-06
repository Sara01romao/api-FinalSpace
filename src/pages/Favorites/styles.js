import styled from "styled-components";

export const DivSalvos = styled.div`
    

    h1{
        text-align: center;
        color:#000;
        margin: 50px 0px;
    }

    h1 svg{
        color: #E7030E;
    }
    

    .container{
        max-width: 1220px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
        

    }

    .card{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        width: 90%;
        color: #000;
        border-radius: 5px;
        background: #97c0ff;
        margin-bottom: 20px;
        padding:10px;
        box-shadow: 7px 9px 15px -7px #1a5258;
       
    
    }

    .card img{
        width: 200px;
        height: 200px;
        object-fit: contain;
    }

    .card h2{
        width: 150px;
        text-align: center;
        
    }

    .card button{
        height: 40px;
        width: 200px;
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 5px solid #000;
        color: #000;
        cursor: pointer;
        font-weight: bold;
        margin-top: 10px;
    }

    .card button:hover{
        background-color: #000;
        color: #fff;
    }
    .card button svg{
        margin-right: 10px;
    }

    @media (max-width:768px){
            .card{
           
            flex-direction: column;
           
            width: 80%;
            margin: 0px auto 20px;
            
            
        
        }
    }

`


