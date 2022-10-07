import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { App } from '@/components/App'
import '@/style.css'

export default function AppPage(props: AppProps) {
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
                    },
                    globalStyles: theme => ({
                        main: {
                            padding: '0 !important',
                        },
                    }),
                }}
            >
                <App>
                    <Component {...pageProps} />
                </App>
            </MantineProvider>
        </>
    )
}