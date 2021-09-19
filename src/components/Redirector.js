import { useEffect } from "react";
import { useParams } from "react-router"
import { getUrlByCode } from "../api";
import './Redirector.css'

const Redirector = () => {
  let { code }= useParams ()

  useEffect(() => {
    (async () => {
      const fullUrl = await getUrlByCode(code)

      if ('fullURL' in fullUrl) {
        window.location.href = fullUrl.fullURL
      } else {
        window.location.href = '/not-found'
      }
    })()
  }, [code]);

  return (
    <section id='redirector'>
      <h1>Redirecting...</h1>
    </section>
  )
}

export default Redirector
