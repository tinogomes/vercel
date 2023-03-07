import Link from 'next/link';

function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>

            <Link href="/">
                Home
            </Link>
            <Link href="/contador">
                Contador
            </Link>
            <Link href="/tempo">
                    Tempo
                </Link>
            <a>Sobre</a>
        </div>
    )
}

export default Sobre
