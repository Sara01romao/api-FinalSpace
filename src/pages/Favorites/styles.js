import styled from "styled-components";

export const DivSalvos = styled.div`
    height: 100Vh;
    background: linear-gradient(#cd98f7 5%,#8572ec 26%, #35D1F3);


    

    .container{
        max-width: 1220px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        border: 1px solid red;
        margin: 0 auto;

    }

    .card{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        width: 90%;
        border: 1px solid red;
        background: #fff;
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
        width: 200px
    }

    @media (max-width:768px){
            .card{
           
            flex-direction: column;
           
            width: 80%;
            margin: 0px auto;
            
            
            border: 1px solid red;
        }
    }

`


