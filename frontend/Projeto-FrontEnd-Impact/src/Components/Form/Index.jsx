import { StyledForm } from "./Style"


export const Form = () => {
    return (
        <StyledForm>
            <form method="post" action="">
                <select name="Gênero">
                <option value="gender">Genero</option>
                <option value="gender">Genero</option>
                </select>
                <select name="Especie">
                    <option value="Especie">Especie1</option>
                    <option value="Especie">Especie1</option> 
                </select>
                <select name="Filmes">
                <option value="filme">Filme1</option>
                <option value="filme">Filme1</option>
                <option value="filme">Filme1</option>
                </select>
                <input type="text" placeholder="Pesquisa por nome do personagem" />
                <input type="submit" value="Enviar" />
                <input type="reset" value="Cancelar" />
                
            </form>
        </StyledForm>

    )
}

