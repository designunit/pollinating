import { Anchor, createStyles, Select } from "@mantine/core"
import { useI18n } from "next-localization"
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

export const AppMenu: React.FC<AppMenuProps> = ({ vertical = false, onClick }) => {
    const { classes: s, cx } = useStyles()
    const router = useRouter()
    const { t } = useI18n()

    return (
        <nav className={cx(s.navLinks, vertical && s.vertical)}>
            <Link href={"/#how"} passHref>
                <Anchor component="a"
                    onClick={onClick}
                >
                    {t("menu_how")}
                </Anchor>
            </Link>
            <Link href={"/#about"} passHref>
                <Anchor component="a"
                    onClick={onClick}
                >
                    {t("menu_about")}
                </Anchor>
            </Link>
            <Link href={"/#calendar"} passHref>
                <Anchor component="a"
                    onClick={onClick}
                >
                    {t("menu_calendar")}
                </Anchor>
            </Link>
            <Link href={"/#rules"} passHref>
                <Anchor component="a"
                    onClick={onClick}
                >
                    {t("menu_rules")}
                </Anchor>
            </Link>
            <Link href={t("join_href")} passHref>
                <a>
                    {t("menu_join")}
                </a>
            </Link>
            <Select
                sx={{
                    maxWidth: "4rem",
                }}
                variant='unstyled'
                defaultValue={router.locale}
                onChange={value => router.push("/", "/", { locale: value })}
                data={[
                    { value: "ru", label: "RU" },
                    { value: "en", label: "EN" },
                    // { value: "ar", label: "AR" },
                ]}
            />
        </nav>
    )
}
