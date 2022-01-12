// 404
window.onload = function(){
  var link = document.getElementById('info')
  var space = localStorage.getItem("spaceId")
  link.innerHTML = `
    <h2>We can't find that page</h2>
  <p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p><a id="link" href="" target="_self" rel="noreferrer noopener">Home</a>
  `
}