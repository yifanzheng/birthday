## Happy Birthday

使用 CSS3，HTML5 设计的“生日快乐” 动画。

URL: http://yifanzheng.github.io/birthday/index.html

### 运行

环境：Node.js

```
npm install
```
&&

```
npm run server-node
```
在浏览器中访问 http://localhost:8080/index.html 。

### 配置内容

在 `config-data.js` 文件中，可修改想要的数据。

```js
var configData = {
  // 祝福标题，内容最好 7 条。默认没有
  title: [
    "G",
    "o",
    "d",
    ".",
    "G",
    "a",
    "o"
  ],

  // 生日祝福的内容，内容条数任意。每句话尽量不要超过 15 个字，不然展示效果可能不太好。
  contents: [
    "送给我",
    "心爱的宝贝儿",
    "今天是你的生日",
    "这是我们在一起的",
    "第一个生日哟",
    "以后你的每个生日",
    "我们都一起过",
    "今年要吃好的喽哦",
    "要把我家小猪猪喂得饱饱",
    "然后抱起走",
    "mua~"
  ],

  // 按钮描述，默认英文。可以修改成自己喜欢的。
  btn_text: {
    turn_on: "开始",
    play: "音乐",
    bannar_coming: "好像少点东西",
    balloons_flying: "气球？",
    cake_fadein: "蛋糕？",
    light_candle: "蜡烛？",
    wish_message: "生日快乐",
    story: "A MESSAGE FOR YOU",
  }
}
```

### 动画演示

![演示](asset/imgs/show.gif)


### 最后

修改数据，给心爱的人送上生日祝福，可以使用 GitHub Page 将项目发布网上，将链接做成二维码，可以使用微信扫码浏览哟。

