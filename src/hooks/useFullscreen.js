import { useState, useEffect, useCallback } from 'react'

export function useFullscreen() {
    const [is_fullscreen, set_is_fullscreen] = useState(false)

    const toggle_fullscreen = useCallback(async () => {
        try {
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen()
            } else {
                await document.exitFullscreen()
            }
        } catch (error) {
            console.warn('Fullscreen no disponible:', error)
        }
    }, [])

    useEffect(() => {
        const handle_fullscreen_change = () => {
            set_is_fullscreen(!!document.fullscreenElement)
        }

        document.addEventListener('fullscreenchange', handle_fullscreen_change)
        return () => document.removeEventListener('fullscreenchange', handle_fullscreen_change)
    }, [])

    useEffect(() => {
        const handle_keydown = (event) => {
            if (event.key === 'f' || event.key === 'F') {
                event.preventDefault()
                toggle_fullscreen()
            }
        }

        window.addEventListener('keydown', handle_keydown)
        return () => window.removeEventListener('keydown', handle_keydown)
    }, [toggle_fullscreen])

    return {
        is_fullscreen,
        toggle_fullscreen
    }
}
