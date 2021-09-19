const getTopUrls = async (length) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/top?` + new URLSearchParams({
      length: length
    })
  )

    const topUrls = await response.json()

  return topUrls;
}

const getUrlByCode = async (code) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/url/${code}`)
  const url = await response.json()

  return url
}

const createUrl = async (fullURL) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullURL: fullURL
      })
    }
  )
  const url = await response.json()

  return url
}

export { createUrl, getTopUrls, getUrlByCode };