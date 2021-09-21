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
    max-height: 500px;
    height: 400px;
    background-color: #6332B4;
    padding: 40px 10px 10px;
    margin: auto;
    inset: 0;
    border: 1px solid red;


    .buttonClose{
        border: none;
       
        margin: 5px 10px 0px 0px;
        position: absolute;
        right: 0;
        top: 0px;

        font-size: 24px;
        font-weight: bold;

        background:  #7600D2;
        cursor: pointer;
        color: #fff;
        
        }

    .buttonClose:hover{
        color: #000;
    }

    @media (max-width: 567px){
            
           
            height: auto;
        
    }
   
   
`





export const DivInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0px 10px;
    border: 1px solid red;
    background-color: #fff;



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
    }

    .favBtn{
        height: 30px;
    }
   
    

    @media (max-width: 567px){
            
            flex-direction: column;
         

            
            h1{
                text-align: center;
            }

            p{
                text-align: center;
                font-size: 14px;
                color: #7600D2;
            }

            .abilities{
                width: 300px;
                margin: 20px auto;
                border: 1px solid red;
                padding: 0px 30px;
                
            }

            ul{
                
                margin-left: 20px;
                list-style: square;
                color: #7600D2;
                
            }

            ul li{
                
            }

            .favBtn{
                width: 200px;
                margin: 0px auto;

            
            }
    }

`
