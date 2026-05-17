import https from 'https';

https.get('https://www.youtube.com/results?search_query=kenyan+safari+4k', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const matches = [...data.matchAll(/watch\?v=([a-zA-Z0-9_-]{11})/g)];
    if (matches.length > 0) {
      console.log('Video IDs:', Array.from(new Set(matches.map(m => m[1]))).slice(0, 5));
    }
  });
});
