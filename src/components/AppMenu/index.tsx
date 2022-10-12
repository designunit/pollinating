import { Anchor, createStyles, Input, Select } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
    navLinks: {
        flexGrow: 1,
        textAlign: 'right',
        display: 'flex',
        alignItems: 'baseline',
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
    const router = useRouter()
    return (
        <nav className={cx(s.navLinks, vertical && s.vertical)}>
            {items.map(({ text, href }) => (
                <Link href={href} passHref>
                    <Anchor component="a">
                        {text}
                    </Anchor>
                </Link>
            ))}
            <Select
            sx={{
                maxWidth: '4rem',
            }}
                variant='unstyled'
                defaultValue={router.locale}
                onChange={value => router.push('/', '/', { locale: value })}
                data={[
                    { value: 'ru', label: 'РУС' },
                    { value: 'en', label: 'ENG' },
                    { value: 'de', label: 'DE' },
                ]}
            />
        </nav>
    )
}