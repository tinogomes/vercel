import Link from 'next/link';
import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Contador</h1>

            <nav>
                <Link href="/">
                    Home
                </Link>
                <a>Contador</a>
                <Link href="/tempo">
                    Tempo
                </Link>
                <Link href="/sobre">
                    Sobre
                </Link>
            </nav>

            <Contador/>
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home
