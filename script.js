//get(document.getElementById("fileId").value) fuck how do i get the contents of a file in js?????

function format() {
  document.getElementsByTagName("pre")[0].innerText=document.getElementsByTagName("pre")[0].innerText.replace('{"media_comments": [', '{"media_comments": [\n '); //first line
  document.getElementsByTagName("pre")[0].innerText=document.getElementsByTagName("pre")[0].innerText.replace(']}', '\n]}'); //last line
  
  document.getElementsByTagName("pre")[0].innerText=document.getElementsByTagName("pre")[0].innerText.replace(/],/g, '],\n'); //every comment on a new line
  var j=0;
  document.getElementsByTagName("pre")[0].innerHTML=document.getElementsByTagName("pre")[0].innerHTML.replace(/\["/g, '["<span style="color:red">'); //red time start
  document.getElementsByTagName("pre")[0].innerHTML=document.getElementsByTagName("pre")[0].innerHTML.replace(/", "/g, function (txtVar) { j++; if (j%2==1) return '</span>", "'; else return '", "'; }); //red @ start
  var i=0;
  document.getElementsByTagName("pre")[0].innerHTML=document.getElementsByTagName("pre")[0].innerHTML.replace(/", "/g, function (txtVar) { i++; if (i%2==0) return '", "<span style="color:red">'; else return '", "'; }); //red @ start
  document.getElementsByTagName("pre")[0].innerHTML=document.getElementsByTagName("pre")[0].innerHTML.replace(/"]/g, '</span>"]'); //red @ ending
}
