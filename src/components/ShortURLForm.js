import { useState } from 'react'
import { createUrl } from '../api'
import './ShortURLForm.css'



const ShortURLForm = () => {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [error, setError] = useState(false)

  const shortenURL = (e) => {
    e.preventDefault();

    (async () => {
      const res = await createUrl(url)

      if ('code' in res) {
        setError(false)
        setShortUrl(`${window.location.href}${res.code}`)
      } else {
        setError(true)
      }
    })()
  }

  return (
    <section id='short-url-form'>
      <h1>Short any URL</h1>
      <div className='break'></div>
      <form onSubmit={shortenURL}>
        <input
          type='text'
          placeholder='Enter any URL here...'
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <input type='submit' className='button' value='Short' />
      </form>
      {error && (
      <>
        <div className='break'></div>
        <div id='error'>Please enter a valid URL!</div>
      </>
      )}
      {shortUrl && (
      <>
        <div className='break'></div>
        <div id='shorten-url'>Here is your short URL: <a href={shortUrl}>{shortUrl}</a></div>
      </>
      )}
    </section>
  )
}

export default ShortURLForm
