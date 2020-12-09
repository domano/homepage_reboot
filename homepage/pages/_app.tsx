// pages/_app.js
import { IntlProvider } from "react-intl"
import { useRouter } from "next/router"
// import all locales through barrel file
import * as locales from "../content/locale"
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale, defaultLocale, pathname } = router
  const localeCopy = locales[locale]
  const messages = localeCopy[pathname]

  return (
      <IntlProvider
          locale={locale}
          defaultLocale={defaultLocale}
          messages={messages}
      >
        <Component {...pageProps} />
      </IntlProvider>
  )
}

export default MyApp