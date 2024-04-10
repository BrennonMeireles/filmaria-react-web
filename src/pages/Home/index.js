import React from "react"
import api from "../../services"
import { useState, useEffect } from "react-router-dom"
import { Link } from "react-router-dom"
import "./style.css"

function Home() {
    // declarar uma variavel de estado para a lsita de filmes
    const [filmes, setFilmes] = useState([])

    // Antes da renderização da pagina é executado o hook useEffect()
    useEffect(() => {
        async  function lerFilmes() {
            const resposta = await api.get('r-api/?api=filmes')
            setFilmes(resposta.data)
        }

        lerFilmes()
    })

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key = {filme.id}>
                            <strong>   {filme.nome}</strong>
                            <p>        {filme.sinopse}</p>
                            <img src = {filme.foto} alt = {filme.foto} />
                            <Link to = {`/filme/${filme.id}`}>Leia mais</Link>
                        </article>
                    )
                })}
            </div> 
        </div>
    )
}
export default Home