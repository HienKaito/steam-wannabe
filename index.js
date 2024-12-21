const app = require('./src/app');
const port = 10000;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
