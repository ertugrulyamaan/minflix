import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'


const Home = () => {


  return (
    <div>
      <Main/>
      <Row title='upcoming' fetchURl={requests.requestUpcoming} />
      <Row title='popular' fetchURl={requests.requestPopular} />
      <Row title='trending' fetchURl={requests.requestTrending} />
      <Row title='toprated' fetchURl={requests.requestTopRated} />
    </div>
  )
}

export default Home