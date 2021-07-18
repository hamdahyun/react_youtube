class Youtube {
    constructor(key) {
       this.key = key; // key저장
       // 중복적인 것을 기본으로 설정.
       this.getRequestOptions = {
          method: 'GET',
          redirect: 'follow'
       };
    }

    // 
    async mostPopular() {
       const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
          this.getRequestOptions
       );
       const result = await response.json();
       return result.items;
    }

    // 해당하는 쿼리에 맞게 검색
    async search (query) {
        const response = await  fetch(
          `https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
          this.getRequestOptions
 
       )
       const result = await response.json();
       return result.items.map(item => ({...item , id: item.id.videoId }));
    }
 }
 
 export default Youtube;