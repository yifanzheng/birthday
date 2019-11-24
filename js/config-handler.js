$(function () {
  const title = configData.title;
  if (title) {

    let titleElement = null;
    title.forEach((e, index) => {
      let spanElement = document.createElement('span');
      spanElement.innerHTML = e;
      $('#b' + (index + 1)).append(e);

    });
  }

});

/** 加载生日祝福的内容 */
$(function () {
  let spanElement = document.createElement('span');
  const contents = configData.contents;
  let pElement = null;
  if (contents) {
    contents.forEach(item => {
      pElement = document.createElement('p');
      pElement.innerHTML = item;
      spanElement.appendChild(pElement);
    });

    $('#text-container').append(spanElement.innerHTML);
  }
});


/** 设置按钮文字 */
$(function () {
  const btns = configData.btn_text;
  if (btns) {
    const btnKeys = Object.keys(btns);
    let btnElement = null;
    btnKeys.forEach(key => {
      btnElement = $('#' + key);
      btnElement.html(btns[key]);
    });
  }
});