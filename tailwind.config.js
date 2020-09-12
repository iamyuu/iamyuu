const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        body:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'
      }
    },
    typography: {
      default: {
        css: {
          color: defaultTheme.colors.gray[200],
          a: {
            textDecoration: 'none',
            color: defaultTheme.colors.gray[200],
            boxShadow: `inset 0 -0.12em 0 ${defaultTheme.colors.gray[200]}`,
            transition: 'box-shadow 0.2s ease-in-out, color 0.2s ease-in-out',

            '&:hover': {
              color: defaultTheme.colors.gray[900],
              boxShadow: `inset 0 -1.5em 0 ${defaultTheme.colors.gray[200]}`
            }
          },
          h1: {
            color: defaultTheme.colors.gray[200]
          },
          h2: {
            color: defaultTheme.colors.gray[200]
          },
          h3: {
            color: defaultTheme.colors.gray[200]
          },
          h4: {
            color: defaultTheme.colors.gray[200]
          },
          h5: {
            color: defaultTheme.colors.gray[200]
          },
          h6: {
            color: defaultTheme.colors.gray[200]
          },

          strong: {
            color: defaultTheme.colors.gray[400]
          },

          code: {
            color: defaultTheme.colors.gray[100]
          },

          figcaption: {
            color: defaultTheme.colors.gray[200]
          },

          blockquote: {
            borderLeftColor: defaultTheme.colors.gray[300]
          },

          thead: {
            color: defaultTheme.colors.gray[200],
            borderBottomColor: defaultTheme.colors.gray[100]
          },
          'tbody tr': {
            borderBottomColor: defaultTheme.colors.gray[100]
          },
          'tbody tr': {
            borderBottomColor: defaultTheme.colors.gray[100]
          }
        }
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
};
