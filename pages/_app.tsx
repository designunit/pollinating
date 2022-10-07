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
                    primaryColor: 'default',
                    colors: {
                        default: ['#22303B', '#22303B', '#22303B', '#22303B', '#22303B', '#22303B', '#22303B', '#22303B', '#22303B', '#22303B'],
                    },
                    headings: {
                        fontFamily: 'Jost, sans-serif',
                    },
                    globalStyles: theme => ({
                        main: {
                            padding: '0 !important',
                        },
                        body: {
                            color: theme.colors.default[0],
                        },
                        Title: {
                            root: {
                                color: theme.colors.default[0],
                            }
                        }
                    }),
                    components: {
                        'Text': {
                            styles: theme => ({
                                root: {
                                    color: theme.colors.default[0],
                                },
                            })
                        },
                        'Title': {
                            styles: theme => ({
                                root: {
                                    color: theme.colors.default[0],
                                },
                            })
                        },
                        'List': {
                            styles: theme => ({
                                root: {
                                    color: theme.colors.default[0],
                                },
                            })
                        },
                        'Timeline': {
                            styles: theme => ({
                                item: {
                                    color: theme.colors.default[0],
                                },
                            })
                        },
                    }
                }}
            >
                <App>
                    <Component {...pageProps} />
                </App>
            </MantineProvider>
        </>
    )
}