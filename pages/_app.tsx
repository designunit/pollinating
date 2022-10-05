import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import '@/style.css'

export default function App(props: AppProps) {
    const { Component, pageProps } = props

    return (
        <>
            <Head>
                <title>pollinating</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    fontFamily: 'Jost, sans-serif',
                    headings: {
                        fontFamily: 'Jost, sans-serif',
                    }
                }}
            >
                <Component {...pageProps} />
            </MantineProvider>
        </>
    )
}