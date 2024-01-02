// fetch('htts://dummyjson.com/test')
// .then(res => res.json())
// .then(console.log);

fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
.then(console.log);

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);