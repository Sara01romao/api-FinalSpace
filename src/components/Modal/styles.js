import styled from 'styled-components'



export const DivModal = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
`

export const ModalContainer= styled.div`
    position: fixed;
    max-width: 800px;
   
    max-height: 350px;
    background: #050385 80%;
    padding: 40px 10px 10px;
    margin: auto;
    inset: 0;
    border-radius: 5px;
    
    

    .buttonClose{
        border: none;
        margin: 5px 10px 0px 0px;
        position: absolute;
        right: 0;
        top: 0px;
        font-size: 24px;
        font-weight: bold;
        background:  transparent;
        cursor: pointer;
        color: #fff;
        
        }

    .buttonClose:hover{
        color: #35D1F3;
    }

    @media (max-width: 567px){
            
           
        max-height: 520px;
        
    }
   
   
`





export const DivInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0px 10px;
    
    background-color: #EDFCFF;



    .infoImg{
        flex: 1;
        display: flex;
        justify-content: center;
        
    

    }

    .infoImg img{
        width: 300px;
        height: 210px;
        object-fit: contain;
       
        
    }

    .infoTxt{
        flex: 1;
        display: flex;
        flex-direction: column;
        
        padding: 0px 50px;
        
    }

    .abilities{
            
            margin: 10px 0;
            border: 1px solid #35D1F3;
            padding: 0px 30px 10px;
            
        }

    .favBtn{
        height: 35px;
        margin-top: 30px;
        background-color: #00BFEF;
        border:none;
        color: #000;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        
        
    }

    .favBtn:hover{
        background-color:#3BD5FC;
    }

    .species{
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        margin-top: 10px;
    }

    .species p{
       
        margin-left: 5px;
        color: #2F03E2;
        overflow: hidden;
        height: 20px;
       
    }

    ul{
                
        margin-left: 20px;
        list-style: square;
        color: #2F03E2;
        
    }

    


    

    @media (max-width: 567px){
            
        flex-direction: column;
        
       
        .infoTxt{
        
            padding: 0px 0px;
        }

            
        h1{
            text-align: center;
        }

        .abilities{
            width: 250px;
            margin: 15px auto 10px;
            padding: 0px 30px 5px;
            
        }

        ul{
            
            margin-left: 20px;
            list-style: square;
        
            
        }

        .favBtn{
            width: 250px;
            margin: 0px auto;

        
        }
    }

`
