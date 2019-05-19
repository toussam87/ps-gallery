var data;

var request = new XMLHttpRequest();
request.open('GET', 'http://gsx2json.com/api?id=1wZa0Gx2yAFDyMVayzRn428SDXCOJHOL-0_IX9uLiWW0');
request.responseType = 'text';

request.onload = function() {
  data= JSON.parse(request.response)

  console.log(data);

};

request.send();