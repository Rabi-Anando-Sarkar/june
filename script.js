var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var quotes = document.querySelector("#quote");

var xhrbutton = document.querySelector("#xhr");
var jquerybutton = document.querySelector("#jquery");
var fetchbutton = document.querySelector("#fetch");
var axiosbutton = document.querySelector("#axios");

// U S I N G  X H R
xhrbutton.addEventListener("click",function(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState = 4 && XHR.status == 200){
            var quote = JSON.parse(XHR.responseText);
            quotes.innerText = quote;
        }
    }
    XHR.open("GET",url);
    XHR.send();
});

// U S I N G  J Q U E R Y 
fetchbutton.addEventListener("click",function(){
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        quotes.innerText = data;
    })
    .catch(function(err){
        console.log(err);
    })
});

// U S I N G  F E T C H
$("#jquery").click(function(){
    $.get(url)
    .done(function(data){
        $("#quote").html(data);
    })
    .fail(function(){
        alert("ERROR!, PLEASE CHECK YOUR INTERNET CONNECTION.");
    })
})

// U S I N G  A X I O S
axiosbutton.addEventListener("click",function(){
axios.get(url)
.then(function(res){
    quotes.innerText = res.data[0];
})
.catch(function(){
    alert("ERROR!, PLEASE CHECK YOUR INTERNET CONNECTION.");
})
})

