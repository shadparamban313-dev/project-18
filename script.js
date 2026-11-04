document.getElementById("form").addEventListener("submit",function(event){
   event.preventDefault()
    let patientname=document.getElementById("pname").value
   let patientage=Number(document.getElementById("ptage").value)
   let patientphn=document.getElementById("pnum").value
   let docname=document.getElementById("docnm").value
   let cnsltfee=Number(document.getElementById("cfee").value)
   let cnsltday=Number(document.getElementById("cday").value)
   let len=patientphn.length
   let total=cnsltday*cnsltfee
   let dis1=total*0.05
   let dis2=total*0.15

    document.getElementById("diser").innerHTML =("total price:"+total+"<br>")

  document.getElementById("displaynm").innerHTML =("patient name:" +patientname)
  document.getElementById("displayage").innerHTML =("patient age:" +patientage)
  document.getElementById("displayphn").innerHTML =("patient phone number:" +patientphn)
  document.getElementById("displaydoc").innerHTML =("doctor name:" +docname)
  document.getElementById("displayfee").innerHTML =("consulatation fee:" +cnsltfee)
  document.getElementById("displayday").innerHTML =("number of days:" +cnsltday)

  if(patientname==""){
    document.getElementById("displaynm").innerHTML =("error!")
  }
  if(patientage<=0){
    document.getElementById("displayage").innerHTML =("error!")
  }
  
  if(len !=10){
    document.getElementById("displayphn").innerHTML =("error")
}
if(cnsltfee<=0){
    document.getElementById("displayfee").innerHTML =("error")
}
if(cnsltday<=1){
    document.getElementById("displayday").innerHTML =("error")
}





if(patientage<=18){
    document.getElementById("diss").innerHTML =(" age discount(5%):"+dis1)
    discount=total*0.05
}
if(patientage>18&&patientage<=59){
    document.getElementById("diss").innerHTML =("no discount")
    discount=0
}
if(patientage>=60){
    document.getElementById("diss").innerHTML =("age discount(15%):"+dis2)
    discount=total*0.15
}



if(cnsltfee>=1000){
    document.getElementById("serv").innerHTML =("service charge:"+200)
    service=200
}
if(cnsltday>5){
    document.getElementById("adi").innerHTML =("adittional discount:"+300)
    aditional=300
}

let final=(total-discount-aditional)+service
document.getElementById("fine").innerHTML =("final parable:"+final)


if(patientage>=60){
    document.getElementById("bns").innerHTML =("Senior Citizen Benefit Applied!")
}
if(final>5000){
    document.getElementById("bnss").innerHTML =("High Consultation Expense!")
}

localStorage.setItem("Name",patientname)
localStorage.setItem("Phone",patientphn)

   })

document.getElementById("show").addEventListener("submit",function(event){
   event.preventDefault()
    let name=localStorage.getItem("Name")
    let phn=localStorage.getItem("Phone")
   document.getElementById("cuname").innerHTML =name+"<br>"
   document.getElementById("coma").innerHTML =phn+"<br>"


   })

   document.getElementById("clear").addEventListener("submit",function(event){
   event.preventDefault()
let name=localStorage.removeItem("Name")
let phn=localStorage.removeItem("Phone")
document.getElementById("cccl").innerHTML =name
document.getElementById("cl").innerHTML =phn

   })


