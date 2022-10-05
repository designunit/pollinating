
import { createStyles, Group, Header, MediaQuery } from '@mantine/core'
import { AppMenu } from '@/components/AppMenu'

type AppHeaderProps = {
    burger: React.ReactNode
}

const useStyles = createStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        position: 'sticky',
        top: 0,
    },
    root: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1520,
    },
}))

export const AppHeader: React.FC<AppHeaderProps> = ({ burger }) => {
    const { classes: s } = useStyles()
    return (
        <Header
            withBorder={false}
            height={60}
            p={'sm'}
            className={s.header}
        >
            <div className={s.root}>
                <div>
                    LOGO
                </div>

                <MediaQuery smallerThan='xs' styles={{ display: 'none' }}>
                    <Group
                        noWrap
                    >
                        <AppMenu />
                    </Group>
                </MediaQuery>

                <MediaQuery largerThan='xs' styles={{ display: 'none' }}>
                    {burger}
                </MediaQuery>
            </div>
        </Header>
    )

}