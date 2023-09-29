import { useState } from "react"



export default function Formulario() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    function Enviar(event: any) {
        event?.preventDefault()

        console.log(nome,',' ,senha)
    }

    return (
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <form onSubmit={Enviar} style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="nome" style={{ marginBottom: '8px' }}>Nome</label>
                <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                    style={{ padding: '8px', marginBottom: '16px' }}
                />

                <label htmlFor="senha" style={{ marginBottom: '8px' }}>Senha</label>
                <input
                    type="password"
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Digite sua senha"
                    style={{ padding: '8px', marginBottom: '16px' }}
                />

                <button
                    style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        padding: '10px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}