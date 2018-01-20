function validar(){
var n1=document.getElementById("p1").value;
var n2=document.getElementById("p2").value; 
  if(n1>10 || n1<0 || n2<0 || n2>10){
    document.getElementById("info").innerHTML="Valores Invalidos. Tente novamente.";
      return;
      
  }
calcularNota();    
}

function calcularNota(){
document.getElementById("apr").innerHTML="";
document.getElementById("repr").innerHTML="";
var n1=document.getElementById("p1").value;
var n2=document.getElementById("p2").value;
var media=(Number(n1)+Number(n2))/2;
    document.getElementById("media").innerHTML=media;

    if(media>=7){
   document.getElementById("apr").innerHTML="Você foi aprovado direto.";
        return;
    }
    
    
    
    if(n1>=4 || n2>=4){
    if(n1>=n2){
        var maior=n1;
    }
    if(n2>n1){
        var maior=n2;
    }    
    var falta= 14 - maior;
        
    document.getElementById("nota_pf").style.display="block";
    document.getElementById("final").innerHTML="Você deverá fazer a AV3.";
    document.getElementById("info").innerHTML="Sua média precisa ser igual ou maior que 7 para ser aprovado.<br> Sua nota Maior foi " + maior + ". Então você precisa tirar no mínimo " + falta + " para ser aprovado!";
    var pf=document.getElementById("pf").value;
    if(pf>10 || pf<0 ){
      document.getElementById("info").innerHTML="Valores Invalidos. Tente novamente.";
    return;
  }
     var mediaf=(Number(pf)+Number(maior))/2;   
        if(pf!=""){
          
            if(mediaf>=7){
               document.getElementById("apr").innerHTML="Você foi aprovado.";
               document.getElementById("mf").value = mediaf;
               }
            if(mediaf<7){
               document.getElementById("repr").innerHTML="Você está reprovado.";
               document.getElementById("mf").value = mediaf;
               
               }
        }
    }
    
    if(n1<4 && n2<4){
         document.getElementById("repr").innerHTML="Você está reprovado.";
         
        return;
        
    }
  
  
}
