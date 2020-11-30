import Link from 'next/link';

function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString()

    return (
        <div>
            <h1>Tempo</h1>

            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/contador">
                    <a>Contador</a>
                </Link>
                <a>Tempo</a>
                <Link href="/sobre">
                    <a>Sobre</a>
                </Link>
            </nav>

            <div>
                <div>{dynamicDateString} (dinâmico)</div>
                <div>{props.staticDateString} (estático)</div>
            </div>

        </div>
    )
}

// Carregado em tempo de build
export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString()

    return {
        props: {
            staticDateString
        },
        revalidate: 2
    }
}

export default Tempo
