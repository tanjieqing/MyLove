const host = 'https://www.tanjieqing.club:8000/party/'
//const host = 'https://localhost:8080/party/';

//接口统一入口地址
const mobileIn = host + 'mobile/';

//==================================================================================================================================//
//个人标识用于从数据库获取appid和appsecret
const mark = 'wangzhe';

//手机,姓名,婚礼日期,宾客到达地址,地址经纬度
const iphone_bridegroom = '13370509072';
const iphone_bride = '13370509072';
const bridegroom_name = 'Mr.王';
const bride_name = 'Miss.田';
const date_yang = '2018年9月30日';
const date_nong = '二〇一八年八月二十一日';
const marry_addr = '淄博市桓台县起凤镇辛泉村';

//也可以通过方法获取需要的内容,纯粹尝试,用变量也行
//经度
function getLongitude() {
  return 118.1230366230;
}

//维度
function getLatitude() {
  return 37.0423712451;
}


//6张轮播图,均为竖版
const image1 = 'https://7465-test-89epu-1259185171.tcb.qcloud.la/wangzhe/jiejing1.jpg?sign=f6a15833ad4686a1fda00498e3e7ea0f&t=1558512052';
const image2 = 'https://7465-test-89epu-1259185171.tcb.qcloud.la/wangzhe/jiejing3.jpg?sign=e8c08e55d9b8a746eb42849183784de4&t=1558512111';
const image3 = 'https://7465-test-89epu-1259185171.tcb.qcloud.la/wangzhe/jiejing5.jpg?sign=5f2d5bb4f9b45a7995cb4ac601bd4cbf&t=1558512124';
const image4 = 'https://7465-test-89epu-1259185171.tcb.qcloud.la/wangzhe/jiejing6.jpg?sign=e556fea5c6e4a40c5f650061123ab926&t=1558512137';
const image5 = 'https://7465-test-89epu-1259185171.tcb.qcloud.la/wangzhe/red2.jpg?sign=db5b426cefd06daf01faea946461e3c9&t=1558512160';
const image6 = 'https://7465-test-89epu-1259185171.tcb.qcloud.la/wangzhe/red3.jpg?sign=c274aa803ca59777f9fc03ad512a1969&t=1558512173';

//首页头像,主要内容尽量占比大一点
const image7 = 'https://7465-test-89epu-1259185171.tcb.qcloud.la/wangzhe/jiejingi1.jpg?sign=77076dcba006aa9cf8ae4a09f9d9c8c6&t=1558511595';
//map导航页背景图(竖的图)
const image8 = 'https://7465-test-89epu-1259185171.tcb.qcloud.la/wangzhe/jiejing2.jpg?sign=7846c14d454d4f5f3260b4a79bdf80d3&t=1558512090';
//分享链接的图片(横的图)
const image9 = 'https://7465-test-89epu-1259185171.tcb.qcloud.la/wangzhe/hunsha.jpg?sign=3fbb71074bde66750096650bed7530d3&t=1558512031';

//音乐名称和音乐链接
const music_title = 'My Love';
const music_url = 'https://7465-test-89epu-1259185171.tcb.qcloud.la/music/Westlife-My%20Love.mp3?sign=3b1025092e80ff5154615e58a647d9c1&t=1558511772';
//==================================================================================================================================//

module.exports = {
  host,
  mobileIn,
  mark,
  iphone_bridegroom,
  iphone_bride,
  bridegroom_name,
  bride_name,
  date_yang,
  date_nong,
  marry_addr,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  music_title,
  music_url,
  getLatitude: getLatitude,
  getLongitude: getLongitude
