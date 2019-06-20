var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v2/sources?apiKey=6f7c85381a5c44deb7e024cd02c60e31', false);


xhr.send();
x = JSON.parse(xhr.responseText);
  console.log( x ); 
  
 for(i=0;i<x.sources.length;i++){
 var div = document.createElement('div');
div.innerHTML = x.sources[i].description;
document.body.insertBefore(div, document.body.firstChild);

 // console.log(x.sources[i]);
  }