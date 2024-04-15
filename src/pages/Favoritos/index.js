import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.css'
 
function Favoritos(){
 
    const [filmes, setFilmes] = useState([]);
 
    useEffect(() => {
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])
 
    function deletarFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })
 
        toast.success('Filme deletado com sucesso!')
        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
    };
 
    return(
        <div className='container'>
            <div className='meus-filmes'>
                <h1>Favoritos</h1>
 
                {filmes.length === 0 && <span>Nenhum filme salvo</span>}
 
                <ul>
                    {filmes.map((item) => {
                        return(
                            <div>
                                <li key={item.id}>
                                    <span>{item.nome}</span>
                                </li>
 
                                <div>
                                    <Link to={`/filme/${item.id}`}>
                                        Ver detalhes
                                    </Link>
                                    <button onClick={()=>deletarFilme(item.id)}>
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}
 
export default Favoritos;