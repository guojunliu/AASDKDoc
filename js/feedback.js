function plugin (hook, vm) {
  hook.beforeEach(function(html) {

    url = window.location.href;
    var editHtml = '<div><span>该文档内容是否给您带来了帮助？</span><button type="button" onclick="helpfulClick()">有用</button><button type="button" onclick="unhelpfulClick()">没用</button></div>';

    return (
      html + '</br></br></br></br>' + editHtml
    );
  });
}

function helpfulClick() {

	var url = window.location.href;
	_czc.push(["_trackEvent", "feedback-helpful", "helpful", url]);
    alert("感谢您的反馈");
}

function unhelpfulClick() {
    _czc.push(['_trackEvent','feedback-unhelpful','unhelpful', url]);
    alert("感谢您的反馈");
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);