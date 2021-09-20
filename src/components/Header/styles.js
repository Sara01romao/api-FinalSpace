import styled from 'styled-components'


export const DivHeader = styled.header`
    background: #000;
    height: 50px;
    width: 100%;
    padding: 50px 0px;
    
    

    nav{

        max-width: 1220px;
        margin: 0 auto;
        border: 1px solid ;
        padding: 0px 20px;
        
    }

    nav ul{
        display: flex;
        justify-content: flex-end;
    }

    nav ul li:first-child{
       margin-right: 30px;
    }

   nav a{
        color: #fff;
        text-decoration: none;
        font-weight: 700;
    }

`