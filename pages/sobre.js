import Link from 'next/link';

function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>

            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/contador">
                <a>Contador</a>
            </Link>
            <a>Sobre</a>
        </div>
    )
}

export default Sobre
