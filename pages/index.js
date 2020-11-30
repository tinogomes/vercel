import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Página inicial</h1>

            <a>Home</a>
            <Link href="/contador">
                <a>Contador</a>
            </Link>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
        </div>
    )
}

export default Home
