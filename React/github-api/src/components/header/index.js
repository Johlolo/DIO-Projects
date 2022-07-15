import React, { useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUserNameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    }

    return (
        <header>
            <S.Wrapper>
                <input 
                    type="text" 
                    placeholder="Digite o username para pesquisa..."  
                    onChange={(event) => setUserNameForSearch(event.target.value)}
                />
                <button type="submit" onClick={submitGetUser}><span>Buscar</span></button>
            </S.Wrapper>
        </header>
    )
}

export default Header;