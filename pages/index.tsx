import { Title } from '@mantine/core'

export default function Home() {
    const metrika = process.env.NEXT_PUBLIC_YANDEX_METRIKA

    return (
        <div>
            <Title>
                pollinating.space
            </Title>
        </div>
    )
}
