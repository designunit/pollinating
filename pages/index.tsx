import rehypeImgSize from "rehype-img-size"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { GetServerSideProps, NextPage } from "next"
import { getPageBySlug } from "@/server/lib"
import { BackgroundImage, createStyles, Stack, Text, Timeline, Title } from "@mantine/core"
import { useI18n } from "next-localization"
import Image from "next/future/image"

const components = {
    Test: () => (
        <div
            style={{
                width: 100,
                height: 100,
                backgroundColor: "lime",
            }}
        />
    ),
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
    h2: (props) => (
        <Title
            {...props}
            order={2}
            sx={{
                textTransform: "uppercase",
            }}
        />
    ),
    Timeline: (props) => (
        <Timeline
            {...props}
            lineWidth={2}
            radius='xl'
            bulletSize={20}
            // active={i18n.t("index.timeline.items").length}
            color={"timeline"}
            // style={theme => ({
            //     paddingTop: theme.spacing.md,
            //     paddingBottom: theme.spacing.md,
            // })}
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
                        className={s.section}
                        sx={{
                            textShadow: "0px 4px 4px #FFFFFF",
                            gap: "4rem",
                        }}
                    >
                        <Title
                            sx={{
                                fontSize: "min(96px, 12vw)",
                                textTransform: "uppercase",
                            }}
                        >
                            pollinating<br />
                            space
                        </Title>
                        <Text>
                            {t("index.hero")}
                        </Text>
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
