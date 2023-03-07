import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Página inicial</h1>

            <nav>
                <a>Home</a>
                <Link href="/contador">
                    Contador
                </Link>
                <Link href="/tempo">
                    Tempo
                </Link>
                <Link href="/sobre">
                    Sobre
                </Link>
            </nav>
        </div>
    )
}

export default Home
