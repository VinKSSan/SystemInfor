
import { GlobalStyles } from "@/styles/global.js"


GlobalStyles();
export default function App({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />
    </>

  )
}
