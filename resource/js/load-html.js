function includeHTML(){
  var z,i,elmnt,file,xhttp;
  z=document.getElementsByTagName("*");
  for(i=0;i<z.length;i++){
    elmnt=z[i];
    file=elmnt.getAttribute("w3-include-html");
    if(file){
      xhttp=new XMLHttpRequest();
      xhttp.onreadystatechange=function(){
        if(this.readyState==4){
          if(this.status==200){
            elmnt.innerHTML=this.responseText;
          }
          if(this.status==404){
            elmnt.innerHTML="Unable to load content.";
          }
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET",file,true);
      xhttp.send();
      return;
    }
  }
}
includeHTML();


$(document).ready(function(){
  $(".main_bar").click(function(){
    $(".a_left").toggle(500);
  });

});

$(document).ready(function(){
  $(".homemain_bar").click(function(){
    $(".homea_left").toggle(500);
  });

});



