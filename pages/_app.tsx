import "@/style.css"

import { AppProps } from "next/app"
import Head from "next/head"
import { MantineProvider } from "@mantine/core"
import { App } from "@/components/App"
import { useRouter } from "next/router"
import { I18nProvider } from "next-localization"

type Props = AppProps<{
    lngDict: Record<string, string>
}>

export default function MyApp(props: Props) {
    const { Component, pageProps } = props
    const router = useRouter()
    const { lngDict } = pageProps

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    fontFamily: "Jost, sans-serif",
                    primaryColor: "default",
                    colors: {
                        default: ["#22303B", "#539376", "#22303B", "#22303B", "#22303B", "#22303B", "#22303B", "#22303B", "#22303B", "#22303B"],
                        timeline: ["#539376", "#539376", "#539376", "#539376", "#539376", "#539376", "#539376", "#539376", "#539376", "#539376"],
                    },
                    headings: {
                        fontFamily: "Jost, sans-serif",
                    },
                    globalStyles: theme => ({
                        main: {
                            padding: "0 !important",
                        },
                        body: {
                            color: theme.colors.default[0],
                        },
                        Title: {
                            root: {
                                color: theme.colors.default[0],
                            },
                        },
                    }),
                    components: {
                        "Text": {
                            styles: theme => ({
                                root: {
                                    color: theme.colors.default[0],
                                    whiteSpace: "pre-line",
                                },
                            }),
                        },
                        "Title": {
                            styles: theme => ({
                                root: {
                                    color: theme.colors.default[0],
                                },
                            }),
                        },
                        "List": {
                            styles: theme => ({
                                root: {
                                    color: theme.colors.default[0],
                                },
                            }),
                        },
                        "Timeline": {
                            styles: theme => ({
                                item: {
                                    color: theme.colors.default[0],
                                },
                            }),
                        },
                    },
                }}
            >
                <I18nProvider lngDict={lngDict} locale={router.locale!}>
                    <App>
                        <Component {...pageProps} />
                    </App>
                </I18nProvider>
            </MantineProvider>
        </>
    )
}
