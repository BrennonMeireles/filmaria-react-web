import { useState, useEffect, useHistory }   from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify"; // teste
import api       from "../../services/api";
import "./style.css";

 export default function Filme() {
        const { id } = useParams()
        const history = useHistory()
        
        const [ filme, setFilme ] = useState([])

        useEffect(() => {
            async function loadFilme(){
                const res = await api.get(`e-api/?api=filmes/id/${id}`)

                if(res.data.length === 0) {
                    history.replace("/")
                }
                setFilme(res.data)
            }
            loadFilme()
        }, [history, id])

        function salvarFilme(){
            const minhaLista = localStorage.getItem("filmes")
            let filmesSalvos = JSON.parse(minhaLista) || []

            // se houver algum filme salvo com esse id precisa ignora-lo
            const hasFilme = filmesSalvos.some((filmesSalvos => filmesSalvos.id === filme.id))

            if(hasFilme) {
                toast.error("Este filme já está na sua lista de favoritos")
                return
            }
            filmesSalvos.push(filme)
            localStorage.setItem("filmes", JSON.stringify(filmesSalvos))
            toast.success("O filme foi adicionado a sua lista de favoritos")
        }

        return (
            <div className="container">
                <div className="filme-info">
                    <article key={filme.id}>
                        <h2>{filme.nome}</h2>
                        <img src={filme.foto} alt={filme.foto} />
                        <h3>Sinopse</h3>
                        <p>{filme.sinopse}</p>

                        <div className="botoes">
                            <button onClick={salvarFilme}>Salvar</button>
                            <button>
                                <a href={`https://www.youtube.com/results?search_query=${filme.nome}+trailer`}
                                target="blank">
                                    Trailer
                                </a>
                            </button>
                        </div>
                    </article>
                </div>
            </div>
        )
}