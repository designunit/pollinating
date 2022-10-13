
import { AppHeader } from '@/components/AppHeader'
import { AppShell, Burger, MediaQuery, Navbar } from '@mantine/core'
import { useState } from 'react'
import { AppMenu } from '@/components/AppMenu'

export type AppProps = {
    children?: React.ReactNode
}

export const App: React.FC<AppProps> = ({ children }) => {
    const [opened, setOpened] = useState(false)

    return (
        <AppShell
            fixed={false}
            styles={theme => ({
                main: {
                    overflow: 'hidden',
                },
                body: {
                    minHeight: 'calc(100vh - 60px)', // fullscreen - header
                },
            })}
            header={(
                <AppHeader
                    opened={opened}
                    burger={(
                        <Burger
                            opened={opened}
                            onClick={() => setOpened(!opened)}
                        />
                    )}
                />
            )}
            navbar={(
                <MediaQuery largerThan='xs' styles={{ display: 'none' }}>
                    <Navbar
                        hidden={!opened}
                        fixed
                        sx={{
                            zIndex: 101,
                        }}
                    >
                        <AppMenu
                            vertical
                            onClick={() => setOpened(false)}
                        />
                    </Navbar>
                </MediaQuery>
            )}
            footer={(
                <div style={{
                    height: '4rem',
                }} />
            )}
        >
            {children}
        </AppShell>
    )
}
