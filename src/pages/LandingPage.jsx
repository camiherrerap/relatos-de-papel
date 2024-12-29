import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timeout;

        const actividadUsuario = () => {
            setIsActive(true);
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                navigate("/inicio");
            }, 5000);
        };

        window.addEventListener("mousemove", actividadUsuario);
        window.addEventListener("keydown", actividadUsuario);

        timeout = setTimeout(() => {
            navigate("/inicio");
        }, 5000);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("mousemove", actividadUsuario);
            window.removeEventListener("keydown", actividadUsuario);
        };
    }, [navigate]);

    return (
        <div className="landing">
            <h1>Relatos de papel</h1>
            <div className="landig__logo">
                <img src="/img/logo.png" alt="Relatos de papel" className="logo__image"/>
            </div>
            <h2>"Encuentra un libro para cada momento"</h2>
            <div className="landig__nota">
                Serás redirigido a la página principal en 5 segundos si no realizas ninguna acción.
            </div>
        </div>
    );
};

export default LandingPage;

