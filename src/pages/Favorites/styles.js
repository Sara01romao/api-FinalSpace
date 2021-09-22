import styled from "styled-components";

export const DivSalvos = styled.div`
    height: 100vmax;

    h1{
        text-align: center;
        color:#fff;
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
        border: 3px solid #000;
        border-radius: 5px;
        background: linear-gradient( #fff 16%, #35D1F3);
        margin-bottom: 20px;
        padding:10px;
       
    
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
        border: 3px solid #000;
        cursor: pointer;
        font-weight: bold;
        margin-top: 10px;
    }

    .card button:hover{
        
        color: #fff;
        background-color: #000;
       
    }
    .card button svg{
        margin-right: 10px;
    }

    @media (max-width:768px){
            .card{
           
            flex-direction: column;
           
            width: 80%;
            margin: 0px auto 20px;
            
            
            border: 1px solid red;
        }
    }

`


