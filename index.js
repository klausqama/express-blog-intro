const express = require('express');
const {posts} = require('./posts');
const app = express();
const port = 3000



app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog ')
});

app.get('/bacheca', (req, res) => {
    res.json({
        posts: posts,
        count: posts.length,
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
