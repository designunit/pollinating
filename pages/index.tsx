import Head from 'next/head'
import { YMetrika } from '@/components/YMetrika'
import styles from '../styles/Home.module.css'

export default function Home() {
    const metrika = process.env.NEXT_PUBLIC_YANDEX_METRIKA

    return (
        <div className={styles.container}>
            <Head>
                <title>мойдербент.рф</title>
                <link rel="icon" href="/favicon.ico" />

                {!metrika ? null : (
                    <YMetrika
                        number={metrika}
                        mode={'script'}
                    />
                )}
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    мойдербент.рф
                </h1>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://unit4.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    design::unit
                </a>
            </footer>
        </div>
    )
}
