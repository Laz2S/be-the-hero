import React from 'react'

// componente de redirecionamento de rota
import { Link } from 'react-router-dom'

// importar componente icon
import { FiPower, FiTrash2 } from 'react-icons/fi'

// importar imagens do assets
import logoImg from '../../assets/logo.svg'

import './styles.css'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem Vindo, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Descricao:</strong>
                    <p>Descricao Teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}