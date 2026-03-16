import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

export default async () => {
  // Obtenemos el hostname limpio (ej: midominio.com)
  const hostname = new URL(SITE.website).hostname;

  return satori(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a", // Fondo oscuro (Slate 900)
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)", // Patrón sutil de puntos (opcional, si no te gusta bórralo)
          backgroundSize: "100px 100px",
          color: "white",
          position: "relative",
        },
        children: [
          // 1. Gradiente Decorativo Superior Derecho (Púrpura)
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "-150px",
                right: "-50px",
                width: "600px",
                height: "600px",
                background: "linear-gradient(140deg, #a855f7, #ec4899)", // Purple a Pink
                filter: "blur(120px)",
                opacity: 0.3,
                borderRadius: "100%",
              },
            },
          },
          // 2. Gradiente Decorativo Inferior Izquierdo (Indigo)
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "-150px",
                left: "-50px",
                width: "500px",
                height: "500px",
                background: "linear-gradient(140deg, #3b82f6, #6366f1)", // Blue a Indigo
                filter: "blur(120px)",
                opacity: 0.3,
                borderRadius: "100%",
              },
            },
          },

          // 3. Contenedor Central
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "40px",
                width: "90%",
              },
              children: [
                // Título del Sitio (HERO)
                {
                  type: "h1",
                  props: {
                    style: {
                      fontSize: 100, // Muy grande
                      fontWeight: 900,
                      letterSpacing: "-2px",
                      color: "white",
                      margin: "0 0 20px 0",
                      lineHeight: 1,
                      textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                    },
                    children: SITE.title,
                  },
                },

                // Línea separadora pequeña
                {
                  type: "div",
                  props: {
                    style: {
                      width: "80px",
                      height: "6px",
                      backgroundColor: "#818cf8", // Acento Indigo
                      borderRadius: "4px",
                      marginBottom: "30px",
                    },
                  },
                },

                // Descripción del sitio
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: 36,
                      color: "#cbd5e1", // Slate 300 (gris claro)
                      maxWidth: "80%", // Para que no se estire demasiado a los lados
                      margin: 0,
                      lineHeight: 1.4,
                      fontWeight: 400,
                    },
                    children: SITE.desc,
                  },
                },
              ],
            },
          },

          // 4. Footer: URL del sitio (Pill design)
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "12px 30px",
                borderRadius: "100px",
              },
              children: {
                type: "span",
                props: {
                  style: {
                    fontSize: 24,
                    color: "#94a3b8", // Texto sutil
                    fontWeight: 600,
                    letterSpacing: "1px",
                  },
                  children: hostname,
                },
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(SITE.title + SITE.desc + hostname),
    }
  );
};
