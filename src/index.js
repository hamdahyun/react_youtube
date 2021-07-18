import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import Youtube from './service/youtube'

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY)
ReactDOM.render(
  // 위에서 만든 youtube를 전달.
  <App youtube={youtube} />,
  document.getElementById('root')
);