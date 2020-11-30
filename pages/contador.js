import Link from 'next/link';
import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Contador</h1>

            <Link href="/">
                <a>Home</a>
            </Link>
            <a>Contador</a>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
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
