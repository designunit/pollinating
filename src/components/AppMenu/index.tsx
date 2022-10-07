import { Anchor, createStyles } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    navLinks: {
        flexGrow: 1,
        textAlign: 'right',
        display: 'flex',
        gap: theme.spacing.xl,
    },
    vertical: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: theme.spacing.xl,
    },
}))

export type AppMenuProps = {
    vertical?: boolean
}

const items = [
    {
        text: 'About ',
        href: '/about',
    },
    {
        text: 'How we organized ',
        href: '/organized',
    },
    {
        text: 'Calendar  ',
        href: '/calendar',
    },
    {
        text: 'Rules',
        href: '/rules',
    },
    {
        text: 'Communication',
        href: '/communication',
    },
]

export const AppMenu: React.FC<AppMenuProps> = ({ vertical = false }) => {
    const { classes: s, cx } = useStyles()
    return (
        <nav className={cx(s.navLinks, vertical && s.vertical)}>
            {items.map(({ text, href }) => (
                <Link href={href} passHref>
                    <Anchor component="a">
                        {text}
                    </Anchor>
                </Link>
            ))}
        </nav>
    )
}