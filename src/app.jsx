import React, { useEffect, useState } from 'react';
import styles from './app.module.css'
import VideoList from './components/video_list/video_list';
import VideoSearch from './components/video_search/video_search';

// 필요한 디펜던시를 받아와야 함. youtube
function App( { youtube } ) {
  const [videos, setVideos] = useState([])

  const search = query => {
    youtube.search(query).then(videos => setVideos(videos))
  }
  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos))
  }, [])

  return <div className={styles.app}>
    <VideoSearch onSearch={search}/>
    <VideoList videos={videos}/>
  </div>
}

export default App;