import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './pages/inicio'
import Produtos from './pages/produtos'
import Administrativo from './pages/administrativo'
import Menu from './componentes/Menu'
import Sobre from './pages/Sobre'
import Cadastro from './pages/cadastro'


export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/produtos' element={<Produtos />} />
                    <Route path='/administrativo' element={<Administrativo />} />
                    <Route path='/sobre' element={<Sobre />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                </Routes>
            </Router>
        </main>

    )
}