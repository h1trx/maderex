import "../styles/bot.css"
import { useState } from "react"

export const Acedro = () => {
    const [open, setOpen] = useState(true);

    const handleOverlayClick = () => setOpen(false);

    return (
        <>
            {open && <div className="chatbot-overlay" onClick={handleOverlayClick}></div>}
            {open && (
                <iframe
                    title="Bot"
                    className="robot-ia"
                    src="https://landbot.online/v3/H-3004656-WR56YJX4P3453SFM/index.html"
                    id="bot"
                    frameBorder="0"
                ></iframe>
            )}
        </>
    )
}
