import { createStyles, List, Stack, Title, Text, Timeline, Image, Group, BackgroundImage } from '@mantine/core'


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
        title: '30 SEPT - 6 OCTOBER START OF THE PLATFORM',
        content: (
            <Image
                src='https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F852%2F171%2F895'
                width={200}
                height={200}
            />
        )
    },
    {
        title: '1 OCT - 30 NOV - WORKING WEEKS ',
        content: (
            null
        )
    },
    {
        title: '1-5 DEC - votation for the proposals',
        content: (
            null
        )
    },
    {
        title: '6 DEC confirmed community projects supported ',
        content: (
            null
        )
    },

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
                            fontSize: 'min(96px, 5vw)',
                            textTransform: 'uppercase',
                        }}
                    >
                        pollinating.space
                    </Title>
                    <Text>
                        pollinating.space - the ecosystem for pollinating green communities that include several resources to help<br />
                        greening and ecological activist and communities to cooperate online in safe and productive environment
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
                    What pollinating.space ecosystem include:
                </Title>
                <List
                    icon='·'
                >
                    <List.Item>
                        website pollinating.space - give a overall view about the project
                    </List.Item>
                    <List.Item>
                        tool communication (Element with local server)
                    </List.Item>
                    <List.Item>
                        space for storage info (Google space or other spaces to organize info?)
                    </List.Item>
                    <List.Item>
                        <Stack
                            spacing={0}
                        >
                            tool for facilitation and collab online
                            <List
                                icon='·'
                                withPadding
                            >
                                <List.Item>
                                    prepaid account at SessionLab
                                </List.Item>
                                <List.Item>
                                    prepaid account at Padlet
                                </List.Item>
                            </List>
                        </Stack>
                    </List.Item>
                    <List.Item>
                        <Stack
                            spacing={0}
                        >
                            IT tools for greening communities:
                            <List
                                icon='·'
                                withPadding
                            >
                                <List.Item>
                                    mesto.io help communities to count trees they care about
                                </List.Item>
                                <List.Item>
                                    croudforse help communities to systemize their efforts in caring the garden
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
                    We share free access for communities that wish to promote online collaboration to save the greening Infrastructure in their Cities.
                </Text>
                <Text
                    size='xl'
                    weight='bold'
                >
                    if you want to join and get access for the pollinating IT tool ecosystem  - fill the google form (create a questionnaire)
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
                    Time line
                </Title>
                <Timeline
                    lineWidth={2}
                    radius='xl'
                    bulletSize={20}
                    active={1}
                    color={'default'}
                    styles={{
                        itemTitle: {
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                        }
                    }}
                >
                    {timelineItems.map(({ title, content }) => (
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
