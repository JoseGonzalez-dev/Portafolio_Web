import { useEffect, useState } from "react"

export const MaintenancePage = () => {
    const [dots, setDots] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => (prev.length >= 3 ? "" : prev + "."))
        }, 500)
        return () => clearInterval(interval)
    }, [])

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
            fontFamily: "'Segoe UI', system-ui, sans-serif",
            color: "#fff",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Animated background circles */}
            <div style={{
                position: "absolute", top: "-150px", left: "-150px",
                width: "400px", height: "400px", borderRadius: "50%",
                background: "rgba(99, 102, 241, 0.15)",
                filter: "blur(80px)", animation: "pulse 6s ease-in-out infinite"
            }} />
            <div style={{
                position: "absolute", bottom: "-100px", right: "-100px",
                width: "350px", height: "350px", borderRadius: "50%",
                background: "rgba(168, 85, 247, 0.15)",
                filter: "blur(80px)", animation: "pulse 8s ease-in-out infinite reverse"
            }} />
            <div style={{
                position: "absolute", top: "50%", left: "60%",
                width: "250px", height: "250px", borderRadius: "50%",
                background: "rgba(59, 130, 246, 0.1)",
                filter: "blur(60px)", animation: "pulse 7s ease-in-out infinite 2s"
            }} />

            <style>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.6; }
                    50% { transform: scale(1.2); opacity: 1; }
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>

            {/* Main content */}
            <main style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "2rem",
                position: "relative",
                zIndex: 1,
                animation: "fadeInUp 0.8s ease-out"
            }}>
                {/* Gear icon animated */}
                <div style={{
                    fontSize: "5rem",
                    marginBottom: "1.5rem",
                    animation: "float 3s ease-in-out infinite",
                    filter: "drop-shadow(0 0 20px rgba(99,102,241,0.6))"
                }}>
                    ⚙️
                </div>

                {/* Spinner */}
                <div style={{
                    width: "60px", height: "60px",
                    border: "3px solid rgba(255,255,255,0.1)",
                    borderTop: "3px solid #818cf8",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                    marginBottom: "2rem"
                }} />

                {/* Title */}
                <h1 style={{
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    fontWeight: 800,
                    marginBottom: "1rem",
                    background: "linear-gradient(90deg, #818cf8, #c084fc, #818cf8)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "shimmer 3s linear infinite"
                }}>
                    Sitio en Mantenimiento
                </h1>

                {/* Subtitle */}
                <p style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                    color: "rgba(255,255,255,0.7)",
                    maxWidth: "520px",
                    lineHeight: 1.7,
                    marginBottom: "0.5rem"
                }}>
                    Estoy trabajando duro para traerte algo increíble.
                </p>
                <p style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                    color: "rgba(255,255,255,0.5)",
                    maxWidth: "520px",
                    lineHeight: 1.7,
                    marginBottom: "2.5rem"
                }}>
                    Vuelve pronto{dots}
                </p>

                {/* Status badge */}
                <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(99,102,241,0.15)",
                    border: "1px solid rgba(99,102,241,0.3)",
                    borderRadius: "50px",
                    padding: "0.5rem 1.25rem",
                    fontSize: "0.875rem",
                    color: "#a5b4fc",
                    backdropFilter: "blur(10px)"
                }}>
                    <span style={{
                        width: "8px", height: "8px", borderRadius: "50%",
                        background: "#a5b4fc",
                        boxShadow: "0 0 8px #818cf8",
                        animation: "pulse 1.5s ease-in-out infinite"
                    }} />
                    En construcción
                </div>
            </main>

            {/* Footer */}
            <footer style={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                padding: "1.25rem 2rem",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(0,0,0,0.2)",
                backdropFilter: "blur(10px)"
            }}>
                <p style={{
                    margin: 0,
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.03em"
                }}>
                    © {new Date().getFullYear()}{" "}
                    <span style={{
                        fontWeight: 600,
                        background: "linear-gradient(90deg, #818cf8, #c084fc)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                    }}>
                        José González — dev
                    </span>
                </p>
            </footer>
        </div>
    )
}
