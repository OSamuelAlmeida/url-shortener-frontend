import { useEffect, useState } from 'react'
import { getTopUrls } from '../api'
import './TopLinksTable.css'

const TopLinksTable = () => {
  const [topUrls, setTopUrls] = useState([])

  useEffect(() => {
    (async () => {
      const res = await getTopUrls(100)
      setTopUrls(res)
    })()
  }, [])

  return (
    <section id='top-links-table'>
      <h1>Top 100 Most Accessed Links</h1>
      {topUrls.length > 0 ?
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Full URL</th>
            <th>Number of Clicks</th>
            <th>Short URL</th>
            </tr>
        </thead>
        <tbody>
          {topUrls.map((topUrl, index) => (
            <tr key={topUrl._id}>
              <td>{index + 1}</td>
              <td><a href={topUrl.fullURL}>{topUrl.fullURL}</a></td>
              <td>{topUrl.numberOfClicks}</td>
              <td><a href={window.location.href + topUrl.code}>{window.location.href + topUrl.code}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      :
      <h1>No URLs found!</h1>
      }
    </section>
  )
}

export default TopLinksTable
