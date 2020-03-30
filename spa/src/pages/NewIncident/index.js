import React from 'react'

// componente de redirecionamento de rota
import { Link } from 'react-router-dom'

// importar componente icon
import { FiArrowLeft } from 'react-icons/fi'

// importar styles
import './styles.css'

// importar imagens do assets
import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar Novo Caso</h1>

                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="E02041" />
                        Voltar para Home
                    </Link>
                </section>

                <form>
                    <input placeholder="Titulo do Caso" />
                    <textarea placeholder="Descricao" />
                    <input placeholder="Valor em Reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}