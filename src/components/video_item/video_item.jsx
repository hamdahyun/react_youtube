import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video : {snippet} }) => (

    // video전체를 전달하기 보다는 snippet을 나눠서 전달해도 될 것 같다고 생각.
    <li className={styles.video}>
        <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
        <div className={styles.box}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
    </li>
);

export default VideoItem;