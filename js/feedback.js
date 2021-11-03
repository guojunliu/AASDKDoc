var _czc = _czc || [];
_czc.push(["_setAccount","1280517875"]);

var url = window.location.href;

function plugin (hook, vm) {
  hook.beforeEach(function(html) {

    url = window.location.href;
    var editHtml = '<div><span>该文档内容是否给您带来了帮助？</span><button type="button" onclick="youyongClick()">有用</button><button type="button" onclick="meiyongClick()">没用</button></div>';

    return (
      html + '</br></br></br></br>' + editHtml
    );
  });
}

function youyongClick() {
  _czc.push(['_traceEvent','feedback','zan',url,1,'zan']);
  alert("感谢您的反馈");
}

function meiyongClick() {
  _czc.push(['_traceEvent','feedback','nozan',url,2,'nozan']);
  alert("感谢您的反馈");
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);