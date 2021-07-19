import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css'
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';
import VideoSearch from './components/video_search/video_search';

// 필요한 디펜던시를 받아와야 함. youtube
function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
     setSelectedVideo(video);
  }
  
  const search = useCallback(query => {
    // 사용할 수 있을 때와 없을 때를 구분하고 사용해야 한다.
    // 메모리에 계속 저장하기 때문에.
    // 자식컴포넌트가 계속 re-render가 발생할 수 있을 때 사용.
    youtube.search(query).then(videos => setVideos(videos))
  }, [youtube]);

  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos))
    console.log(videos)
  }, [youtube])

  return <div className={styles.app}>
    <VideoSearch onSearch={search}/>
    <section className={styles.content}>
    {selectedVideo && (
      <div className={styles.detail}>
        <VideoDetail video={selectedVideo} />
      </div>
    )}
      <div className={styles.list}>
        <VideoList videos={videos} onVideoClick={selectVideo} display={selectVideo? 'list' : 'grid'} />
      </div>
    </section>
  </div>
}

export default App;
