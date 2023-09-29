
import style from './Menu.module.scss'
import { Link } from "react-router-dom";


export default function Menu() {
    const rotas = [{
        label: 'Inicio',
        to: '/'
    }, {
        label: 'Produtos',
        to: '/produtos'
    }, {
        label: 'Administrativo',
        to: '/administrativo'
    }, {
        label: 'Sore nós',
        to: '/sobre'
    },{
        label:'Cadastro',
        to:'/cadastro'
    }
    ]
    return (
        <nav>
            <div className={style.menu}>
                {rotas.map((rota, index) => (
                  
                        <ul key={index}>
                            <Link to={rota.to}> {rota.label} </Link>
                        </ul>
                

                ))}
            </div>


        </nav>
    )
}