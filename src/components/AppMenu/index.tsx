import { Anchor, createStyles, Select } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/router"

const useStyles = createStyles((theme) => ({
    navLinks: {
        flexGrow: 1,
        textAlign: "right",
        display: "flex",
        alignItems: "center",
        gap: theme.spacing.xl,
    },
    vertical: {
        flexDirection: "column",
        alignItems: "flex-end",
        padding: theme.spacing.xl,
    },
}))

export type AppMenuProps = {
    vertical?: boolean
    onClick?: () => void
}

const items = [
    {
        ru: "О платформе",
        en: "About",
        de: "de-About",
        href: "/#about",
    },
    {
        ru: "Как все работает",
        en: "How it works",
        de: "de-Как все работает",
        text: "",
        href: "/#how",
    },
    {
        ru: "Календарь",
        en: "Calendar",
        de: "de-Calendar",
        href: "/#calendar",
    },
    {
        ru: "Правила",
        en: "Rules",
        de: "de-Rules",
        href: "/#rules",
    },
    {
        ru: "Присоединяйтесь",
        en: "Join",
        de: "de-Join",
        href: "https://forms.gle/Ew5ZbehUT4z7TAno7",
    },
]

export const AppMenu: React.FC<AppMenuProps> = ({ vertical = false, onClick }) => {
    const { classes: s, cx } = useStyles()
    const router = useRouter()
    return (
        <nav className={cx(s.navLinks, vertical && s.vertical)}>
            {items.map(({ href, ...x }) => (
                <Link href={href} passHref key={href}>
                    <Anchor component="a"
                        onClick={onClick}
                    >
                        {x[router.locale]}
                    </Anchor>
                </Link>
            ))}
            <Select
                sx={{
                    maxWidth: "4rem",
                }}
                variant='unstyled'
                defaultValue={router.locale}
                onChange={value => router.push("/", "/", { locale: value })}
                data={[
                    { value: "ru", label: "РУС" },
                    { value: "en", label: "ENG" },
                    { value: "de", label: "DE" },
                ]}
            />
        </nav>
    )
}
