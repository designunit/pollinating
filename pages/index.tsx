import rehypeImgSize from "rehype-img-size"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { GetServerSideProps, NextPage } from "next"
import { getPageBySlug } from "@/server/lib"
import { BackgroundImage, Button, createStyles, Stack, Text, Timeline, Title } from "@mantine/core"
import { useI18n } from "next-localization"
import Image from "next/future/image"
import { NextSeo } from "next-seo"
import Head from "next/head"

const components = {
    img: (props) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
            {...props}
        />
    ),
    p: (props) => (
        <p {...props} style={{ maxWidth: 900 }} />
    ),
    iframe: (props) => (
        <iframe {...props} style={{ padding: "40 0" }} />
    ),
    li: (props) => (
        <li {...props} style={{ maxWidth: 900 }} />
    ),
    ol: (props) => (
        <ol {...props} style={{ marginLeft: -16 }} />
    ),
    ul: (props) => (
        <ul {...props} style={{ marginLeft: -16 }} />
    ),
    h2: (props) => (
        <Title
            {...props}
            order={2}
            sx={{
                textTransform: "uppercase",
                marginTop: 16,
                marginBottom: 8,
            }}
        />
    ),
    Timeline: (props) => (
        <Timeline
            {...props}
            lineWidth={2}
            radius='xl'
            bulletSize={20}
            color={"timeline"}
            style={{
                paddingTop: 40,
                paddingBottom: 40,
            }}
            styles={{
                itemTitle: {
                    textTransform: "uppercase",
                    fontWeight: "bold",
                },
                itemBullet: {
                    ["& > *"]: {
                        fontSize: ".8em",
                    },
                },
            }}
        />
    ),
    TimelineItem: (props) => (
        <Timeline.Item
            {...props}
        />
    ),
}

const useStyle = createStyles(theme => ({
    content: {
        padding: theme.spacing.xl,
    },
    title: {
        textShadow: "0px 4px 0px #FFFFFF",
        fontSize: "min(96px, 12vw)",
        textTransform: "uppercase",
    },
    caption: {
        fontSize: "min(24px, 12vw)",
        textShadow: "0px 2px 0px #FFFFFF",
    },
    hero: {
        position: "relative",
        minHeight: "min(800px, 100vh)",
        ["& > div"]: {
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "100%",
        },
    },
    section: {
        width: "100%",
        maxWidth: 1520,
        padding: theme.spacing.xs,
    },
}))

type Props = {
    source: MDXRemoteSerializeResult
    lngDict: Record<string, string>
}

const Index: NextPage<Props> = ({ source }) => {
    const { classes: s, cx } = useStyle()
    // const metrika = process.env.NEXT_PUBLIC_YANDEX_METRIKA
    const { t } = useI18n()

    return (
        <>
            <NextSeo
                title={t("og_title")}
                description={t("og_description")}
                canonical="https://www.pollinating.space/"
                openGraph={{
                    url: "https://www.pollinating.space/",
                    title: t("og_title"),
                    description: t("og_description"),
                    images: [
                        {
                            url: "/og.jpg",
                            width: 2227,
                            height: 1188,
                            alt: "www.pollinating.space",
                            type: "image/jpeg",
                        },
                    ],
                    site_name: t("og_site_name"),
                }}
            />
            <Head>
                <title>{t("og_title")}</title>
            </Head>
            <BackgroundImage
                className={cx(s.hero)}
                src='/hero.png'
            >
                <Stack
                    justify='center'
                    align='center'
                    px='xs'
                >
                    <Stack
                        align="start"
                        className={s.section}
                        sx={{
                            gap: "4rem",
                        }}
                    >
                        <Title className={s.title} >
                            pollinating<br />
                            space
                        </Title>
                        <Text className={s.caption}>
                            {t("hero_caption")}
                        </Text>

                        <Button
                            component="a"
                            href={t("join_href")}
                            size="xl"
                            color={"green"}
                        >
                            {t("btn_join")}
                        </Button>
                    </Stack>
                </Stack>
            </BackgroundImage>
            <div className={s.content}>
                <MDXRemote {...source} components={components} />
            </div>
        </>
    )
}

export const getStaticProps: GetServerSideProps<Props> = async ({ locale }) => {
    const source = await getPageBySlug(locale, "pollinating")
    const mdxSource = await serialize(source, {
        mdxOptions: {
            rehypePlugins: [
                [rehypeImgSize, { dir: "public" }],
            ],
        },
    })
    const { default: lngDict = {} } = await import(`../locales/${locale}.json`)

    return {
        props: {
            source: mdxSource,
            lngDict,
        },
    }
}

export default Index
