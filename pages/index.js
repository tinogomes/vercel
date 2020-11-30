import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Página inicial</h1>

            <nav>
                <a>Home</a>
                <Link href="/contador">
                    <a>Contador</a>
                </Link>
                <Link href="/sobre">
                    <a>Sobre</a>
                </Link>
            </nav>
        </div>
    )
}

export default Home
