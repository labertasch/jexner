// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
onload = () => {
    const webview = document.querySelector('#foo')
    const indicator = document.querySelector('.indicator')
    const visitorId = document.querySelector('#visitor-id');
$("#page").on("click", function (e) {
  webview.src = $("#url").val();
  return false;
})
    const loadstart = () => {
      indicator.innerText = 'loading...'
      visitorId.innerText = "";
      $(".indicator").show();
    }

    const loadstop = () => {
      indicator.innerText = '';
      //Visitor.version
      if(!webview.isLoading()) {
        webview.getWebContents().executeJavaScript("Visitor.version").then(function (value) {$(".indicator").hide();
          visitorId.innerText = value;
        });
      }
    }

    webview.addEventListener('did-start-loading', loadstart)
    webview.addEventListener('did-stop-loading', loadstop)
  }
