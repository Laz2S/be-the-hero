import React from 'react'

// componente de redirecionamento de rota
import { Link } from 'react-router-dom'

// importar componente icon
import { FiLogIn } from 'react-icons/fi'

// importar styles
import './styles.css'

// importar imagens do assets
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form>
                    <h1>Faca seu logon</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="E02041" />
                        Nao tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="heroes" />
        </div>
    )
}