import styled from 'styled-components'


export const SectionHome = styled.section`

    max-width: 1220px;
    margin: 0 auto;
    



`

export const DivBanner = styled.div`
    background-image: url('/img/bg.jpg');
    height: 400px;
    padding-top: 80px;
    margin-bottom: 50px;

    div{
        max-width: 1220px;
        margin: 0px auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        max-width: 18em;
    }

`


export const DivContainerHome = styled.div`

    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding: 0px 20px;

    


`

export const Card= styled.div`
    background: #100E0E 80%;
    padding: 5px;
    margin: 10px  10px 50px;
    max-width: 350px;
    border-radius: 5px;
    cursor: pointer;

    h1{
        margin-top: 30px;
        color: #fff;
        text-align: center;
    }

    p{
        color: #AD7BFF;
        text-align:center;
        margin-bottom: 20px;
        font-size: 14px;
        max-width: 200px;
        margin: 0px auto 20px;
        cursor: pointer;
       
    }

    &:hover{
        opacity: 0.8 ;
        transform: rotate(5deg);
        box-shadow: 12px 12px 2px 1px rgb(1 19 24 / 20%);
        background: #050385 80%;
        
    }

    @media (max-width: 458px) {
            img{
            max-width: 260px;
            object-fit: contain;
            
        }
    }
   
   

`