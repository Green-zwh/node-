const express = require("express")
const app = express()

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", req.headers.origin); // 为了安全，可指定域名白名单，此处为所有域名都可访问，配置多个域名白名单不可直接写数组，要判断条件后赋值单个域名
    // res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // 为了安全，可指定域名白名单，此处为所有域名都可访问，配置多个域名白名单不可直接写数组，要判断条件后赋值单个域名
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,token");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.get('/data', (req, res) => {
    res.send({
        'name': 'green',
        data: [1, 2, 3, 4, ]
    })

})
app.listen(4000, () => {
    console.log('this serve is running 4000...')
})