const http = require('http')

http.createServer((req,res) => {
    res.write("Hi successfully running your first application !")
}).listen(4378, () => {
    console.log('running at port 4378')
});
