import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

export default async post => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0f172a", // Fondo oscuro (Slate 900)
          color: "white",
          padding: "80px",
          position: "relative",
        },
        children: [
          // 1. Elemento Decorativo de Fondo (Se pinta primero = queda al fondo)
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "-100px",
                right: "-100px",
                width: "600px",
                height: "600px",
                background: "linear-gradient(140deg, #6366f1, #a855f7)",
                filter: "blur(100px)",
                opacity: 0.4,
                borderRadius: "100%",
              },
            },
          },

          // 2. Cabecera: Nombre del sitio (Se pinta encima del fondo)
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "10px 24px",
                borderRadius: "50px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              },
              children: {
                type: "span",
                props: {
                  style: {
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "#e2e8f0",
                    letterSpacing: "2px",
                  },
                  children: SITE.title + ".com",
                },
              },
            },
          },

          // 3. Contenido Principal: Título del Post
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                width: "100%",
                // zIndex eliminado (no es necesario por el orden de los hijos)
              },
              children: {
                type: "h1",
                props: {
                  style: {
                    fontSize: 84,
                    fontWeight: 900,
                    lineHeight: 1.1,
                    margin: 0,
                    color: "#ffffff",
                    textShadow: "0 2px 10px rgba(0,0,0,0.3)",

                    overflow: "hidden",
                    display: "-webkit-box",
                    lineClamp: 3,
                    boxOrient: "vertical",
                  },
                  children: post.data.title,
                },
              },
            },
          },

          // 4. Pie de página: Autor
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                width: "100%",
                // zIndex eliminado
              },
              children: [
                // Línea separadora decorativa
                {
                  type: "div",
                  props: {
                    style: {
                      width: "60px",
                      height: "4px",
                      backgroundColor: "#818cf8",
                      marginRight: "24px",
                    },
                  },
                },
                {
                  type: "span",
                  props: {
                    style: {
                      fontSize: 32,
                      color: "#cbd5e1",
                    },
                    children: [
                      "Escrito por ",
                      {
                        type: "span",
                        props: {
                          style: {
                            fontWeight: "bold",
                            color: "white",
                            marginLeft: "8px",
                          },
                          children: post.data.author,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(
        post.data.title + post.data.author + SITE.title + "Escritopor" + ".com"
      ),
    }
  );
};
