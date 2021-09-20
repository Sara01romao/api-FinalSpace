import styled from 'styled-components'


export const DivHeader = styled.header`
    background:  #000;
    height: 50px;
    width: 100%;
    padding: 50px 0px ;
    
    

    nav{

        max-width: 1220px;
        margin: 0 auto;
        border: 1px solid ;
        padding: 0px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }

    nav svg{
        width: 30px;
        height: 30px;
    }

    nav ul{
        display: flex;
        justify-content: flex-end;
    }

    nav ul li:first-child{
       margin-right: 30px;
       
    }

    nav ul li{
      
       padding: 5px;
    }

    nav a{
        color: #fff;
        text-decoration: none;
        font-weight: 700;
        
    }

    nav a:hover{
        color:#35D1F3;
        transition: 0.8s;
    }

    .favLink{
        border: 1px solid #35D1F3;
       
    }

`