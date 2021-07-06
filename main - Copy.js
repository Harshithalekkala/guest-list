var studentarray=[];

function submit(){
   
        var studentname=document.getElementById("name_1").value;
        studentarray.push(studentname);
 
    var l=studentarray.length;
  
    document.getElementById("display_name").innerHTML=studentarray;
   

}

function sorting(){
    studentarray.sort();
   var i=studentarray.join("<br>");
    document.getElementById("sorted").innerHTML=i;
}

function show(){
    var i=studentarray.join("<br>");
    document.getElementById("p1").innerHTML=i;
    document.getElementById("sort_button").style.display="block";

}

function searching(){
    var s=document.getElementById("s1").value;
    var found=0;
    for (var i =0; i<studentarray.length; i++){
        if (s==studetarray[i]) {
     found++;       
        }
    }
    document.getElementById("p2").innerHTML="name found"+found+"times";
}

