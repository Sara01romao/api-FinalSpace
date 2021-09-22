import { Link } from "react-router-dom";
import { NotFound} from "./styles";

import {IoMdRocket} from "react-icons/io"


export default function Erro(){
    return(
        <NotFound>
            <h1>404 :(</h1>
            <h2>Página não encontrada!</h2>

            <Link to="/"><IoMdRocket/>Voltar para Home</Link>
            
        </NotFound>
    )
}