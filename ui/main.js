var button = document.getElementById("counter");

button.onclick = function(){
    var request = new XMLHttpRequest();
    span.innerHTML="hello";
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                var coutner = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
                
            }
        }
    };
    
    request.open("GET","http://nirmal309.imad.hasura-app.io/counter",true);
    request.send(null);
};