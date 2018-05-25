// ==UserScript==
// @name        爬虫测试
// @namespace   GetTmallDetail
// @description 取天猫详情图并拼贴
// @version     1.0
// @grant       Chang
// ==/UserScript==
(function() {
  console.log('pachongceshi');
  var init = function(value) {
    var end = 27547;
    var getPage = (indexppppp) => {
      if (indexppppp <= end) {
        var $content = document.getElementById('content');
        var $list = $content.querySelectorAll('a');
        const retList = [];
        for (let i = 0; i < $list.length; i += 1) {
          const item = $list[i];
          retList.push({
            name: item.innerText,
            url: item.href,
          });
        }
        var data = {
          index: indexppppp,
          data: retList,
        };
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:9000/pachong', true);
        xhr.setRequestHeader('Content-Type', 'appivation/form-data');
        xhr.send(JSON.stringify(data));
        console.log('go', indexppppp);

        xhr.onreadystatechange = function() {
          //响应信息返回后处理，在页面提示用户
          if (xhr.readyState === 4) {
            console.log('result', indexppppp, xhr);
            $imgList = $content.querySelectorAll('img');
            console.log(' $imgList', $imgList);
            if ($imgList && $imgList.length) {
              $imgList[2].click();
              setTimeout(() => {
                getPage(indexppppp + 1);
              }, 2000);
            } else {
              console.error('出错了，页码：', indexppppp);
            }
          }
        };
      }
    };

    if (Number(value)) {
      getPage(Number(value));
    } else {
      console.error('请输入正确的数字');
    }
  };

  var topdiv = document.createElement('div');
  topdiv.style = 'width: 100%; height: 40px; position: relative; opacity: 0;';
  var btn = document.createElement('button');
  var input = document.createElement('input');
  input.id = 'pachonginput';
  input.value = '1';
  input.style =
    'width: 100%; height: 40px; display: block; font-size: 14px; position: fixed; top: 0; left: 0; z-index: 9999999999999;';
  btn.id = 'ChangImgGoToDown';
  btn.value = '开始';
  btn.innerText = '开始';
  btn.style =
    'width: 100%; height: 40px; display: block; font-size: 14px; position: fixed; top: 40px; left: 0; z-index: 9999999999999; background-color: #090; color: #fff;';
  btn.onclick = function() {
    btn.style.backgroundColor = '#f00';
    var itime = 0;
    var BtnTime = function() {
      btn.innerText = '正在扒东西，请稍等（' + (itime = itime + 0.1).toFixed(2) + 's）';
    };
    timeInterval = setInterval(BtnTime, 100);
    init(input.value);
  };
  document.body.insertBefore(input, document.getElementsByTagName('table')[0]);
  document.body.insertBefore(btn, document.getElementsByTagName('table')[0]);
  document.body.insertBefore(topdiv, document.getElementsByTagName('table')[0]);
})();
