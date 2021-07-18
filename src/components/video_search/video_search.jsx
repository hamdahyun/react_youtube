import React, { useRef } from 'react';
import styles from './video_search.module.css';
const VideoSearch = ({ onSearch }) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        // console.log(value)
        onSearch(value)
    }
    const onClick = () => {
        console.log('onclick')
        handleSearch();
    }
    const onKeyPress = (event) => {
        console.log('onKeyPress')
        if(event.key === 'Enter') {
            handleSearch();
        }
    }
    return (
        <header>
            <img className={styles.logo} src="images/logo.png"  alt="Youtube" />
            <h1 className={styles.title}>Youtube</h1>
            <div className={styles.inputBox}>
                <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
                <button className={styles.button} type="submit" onClick={onClick}>
                    <img src="images/search.png" alt="search" />
                </button>
            </div>
        </header>   
    )
};

export default VideoSearch;