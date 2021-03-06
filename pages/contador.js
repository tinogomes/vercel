import Link from 'next/link';
import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Contador</h1>

            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <a>Contador</a>
                <Link href="/tempo">
                    <a>Tempo</a>
                </Link>
                <Link href="/sobre">
                    <a>Sobre</a>
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
