// Create web server
// Load the express library
const express = require('express');
const app = express();
// Load the body-parser library
const bodyParser = require('body-parser');
// Load the comment service
const commentService = require('./commentService');
// Load the json parser
app.use(bodyParser.json());
// Load the static files
app.use(express.static('public'));
// Load the comments
app.get('/comments', (req, res) => {
    commentService.getComments()
        .then((comments) => {
            res.json(comments);
        });
});
// Add a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    commentService.addComment(comment)
        .then((newComment) => {
            res.json(newComment);
        });
});
// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});