import Head from 'next/head'
//import styles from '../styles/Home.module.css'

export default function Home() {
    const metrika = process.env.NEXT_PUBLIC_YANDEX_METRIKA

    return (
        <div className={"x"}>
            <Head>
                <title>pollinating</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={"x"}>
                <h1 className={"x"}>
                  pollinating.space
                </h1>
            </main>
        </div>
    )
}
