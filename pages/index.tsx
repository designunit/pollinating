import { createStyles, List, Stack, Title, Text, Timeline, Image, Group, BackgroundImage } from '@mantine/core'
import { useI18n } from 'next-localization'


const useStyles = createStyles((theme) => ({
    section: {
        width: '100%',
        maxWidth: 1520,
        padding: theme.spacing.xs,
    },
    hero: {
        position: 'relative',
        minHeight: 'min(800px, 100vh)',
        ['& > div']: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%',
        },
    },
}))

const timelineItems = [
    {
        content: (
            <Image
                src='https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F852%2F171%2F895'
                width={200}
                height={200}
            />
        )
    },
    {},
    {},
    {},

]

const ideasItems = [
    {
        title: 'WELCOME ENVIRONMENT',
        text: 'we provide safe and welcome environment for future collaboration of the activist, communities and civil society actors',
    },
    {
        title: 'FOCUSED COLLAB',
        text: 'we support community leaders and provide them assistance with professional tools and knowledge in facilitating online discussions',
    },
    {
        title: 'TRACKABLE PROGRESS',
        text: 'we set our community goals and measure our progress in order to be sure that we create a meaningful process for the community.',
    },
    {
        title: 'TRANSPARENT ACTIVITY',
        text: 'we act public and share our results for free We wish to encourage others to to the same.',
    },
    {
        title: 'ACCESSIBLE KNOWLEDGE',
        text: 'we do efforts to break the language barriers between our members in order to accumulate the collective intelligence of our community.',
    },
]

export default function Home() {
    const metrika = process.env.NEXT_PUBLIC_YANDEX_METRIKA
    const i18n = useI18n()
    const { classes: s, cx } = useStyles()
    return (
        <Stack
            spacing={'4rem' as any}
            align='center'
        >
            <BackgroundImage
                className={cx(s.hero)}
                src='/hero.png'
            >
                <Stack
                    justify='center'
                    align='center'
                    px='xs'
                    sx={{
                        textShadow: '0px 4px 4px #FFFFFF',
                    }}
                >
                    <Title
                        sx={{
                            fontSize: 'min(96px, 8vw)',
                            textTransform: 'uppercase',
                        }}
                    >
                        pollinating.space
                    </Title>
                    <Text>
                        {i18n.t('index.hero')}
                    </Text>
                </Stack>
            </BackgroundImage>
            <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.ecosystemList.title')}
                </Title>
                <List
                    icon='·'
                >
                    <List.Item>
                    {i18n.t('index.ecosystemList.0')}
                    </List.Item>
                    <List.Item>
                    {i18n.t('index.ecosystemList.1')}
                    </List.Item>
                    <List.Item>
                    {i18n.t('index.ecosystemList.2')}
                    </List.Item>
                    <List.Item>
                        <Stack
                            spacing={0}
                        >
                            {i18n.t('index.ecosystemList.3.title')}
                            <List
                                icon='·'
                                withPadding
                            >
                                <List.Item>
                                {i18n.t('index.ecosystemList.3.item0')}
                                </List.Item>
                                <List.Item>
                                {i18n.t('index.ecosystemList.3.item1')}
                                </List.Item>
                            </List>
                        </Stack>
                    </List.Item>
                    <List.Item>
                        <Stack
                            spacing={0}
                        >
                            {i18n.t('index.ecosystemList.4.title')}
                            <List
                                icon='·'
                                withPadding
                            >
                                <List.Item>
                                {i18n.t('index.ecosystemList.4.item0')}
                                </List.Item>
                                <List.Item>
                                {i18n.t('index.ecosystemList.4.item1')}
                                </List.Item>
                            </List>
                        </Stack>
                    </List.Item>
                </List>
            </Stack>
            <Stack
                className={s.section}
            >
                <Text
                    size='xl'
                    weight='bold'
                >
                    {i18n.t('index.feedback')}
                </Text>
            </Stack>
            <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.timeline.title')}
                </Title>
                <Timeline
                    lineWidth={2}
                    radius='xl'
                    bulletSize={20}
                    active={1}
                    color={'gray'}
                    styles={{
                        itemTitle: {
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                        }
                    }}
                >
                    {false && timelineItems.map(({ title, content }) => (
                        <Timeline.Item
                            title={title}
                        >
                            {content}
                        </Timeline.Item>
                    ))}
                </Timeline>
            </Stack>
            <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    WE FOCUS ON 5 IDEAS:
                </Title>
                <Stack>
                    {ideasItems.map(({ title, text }) => (
                        <Group
                            spacing={6}
                        >
                            <Text
                                size='xl'
                                sx={{
                                    textTransform: 'uppercase',
                                }}
                            >
                                {title}
                            </Text>
                            <span>
                                {' - '}
                            </span>
                            <Text>
                                {text}
                            </Text>
                        </Group>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}

export async function getStaticProps({ locale }) {
    const { default: lngDict = {} } = await import(`../locales/${locale}.json`)
    return {
        props: { lngDict }
    }
}