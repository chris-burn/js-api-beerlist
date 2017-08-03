var app = function(){
  var url = "https://api.punkapi.com/v2/beers";

  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function(){
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  var beers = JSON.parse(jsonString);
  populateList(beers);
};

var populateList = function(beers){
  var ul = document.getElementById('beer-list');

  beers.forEach(function(beer){
    var li1 = document.createElement('h2');
    li1.innerText = beer.name;
    ul.appendChild(li1);

    var image = document.createElement('img');
    image.src = beer.image_url;
    ul.appendChild(image);

    var li2 = document.createElement('li');
    li2.innerText = "Malts:"
    ul.appendChild(li2);    

    for (var i = 0; i < beer.ingredients.malt.length; i ++){
      var li3 = document.createElement('li');
      li3.innerText = beer.ingredients.malt[i].name;
      ul.appendChild(li3)
    }

  });
}


window.addEventListener('load', app);