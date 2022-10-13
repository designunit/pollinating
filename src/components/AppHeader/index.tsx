
import { createStyles, Group, Header, Image, MediaQuery } from "@mantine/core"
import { AppMenu } from "@/components/AppMenu"

type AppHeaderProps = {
    burger: React.ReactNode
    opened: boolean
}

const useStyles = createStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        top: 0,
        backgroundColor: "transparent",
    },
    opened: {
        backgroundColor: "white",
    },
    root: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1520,
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 1.57%, rgba(255, 255, 255, 0) 1.58%, rgba(255, 255, 255, 0.5) 32.29%, rgba(255, 255, 255, 0.5) 75%, rgba(255, 255, 255, 0) 100%)",
    },
    logo: {
        [theme.fn.smallerThan("md")]: {
            width: 60,
            height: 60,
        },
    },
}))

export const AppHeader: React.FC<AppHeaderProps> = ({ burger, opened }) => {
    const { classes: s, cx } = useStyles()
    return (
        <Header
            withBorder={false}
            height={60}
            p={"sm"}
            className={cx(s.header, opened && s.opened)}
            fixed
        >
            <div className={s.root}>
                <div
                    className={s.logo}
                >
                    <Image
                        src='/logo.png'
                        width={60}
                        height={60}
                        alt={"pollinating"}
                    />
                </div>

                <MediaQuery smallerThan='xs' styles={{ display: "none" }}>
                    <Group
                        noWrap
                    >
                        <AppMenu />
                    </Group>
                </MediaQuery>

                <MediaQuery largerThan='xs' styles={{ display: "none" }}>
                    {burger}
                </MediaQuery>
            </div>
        </Header>
    )

}
