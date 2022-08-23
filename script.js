var div=document.createElement("div")
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","kural");
input.setAttribute("placeholder","type kural number(EX:1 to 1330)");

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="search";
button.addEventListener("click",foo);

let con=document.createElement("div");
con.setAttribute("id","cont");

div.append(input,button,con);
document.body.append(div);

async function foo(){
    let res=document.getElementById("kural").value;
    let url=`https://api-thirukkural.vercel.app/api?num=${res}`;
    // console.log(url)

    let result=await fetch(url);
    let result1=await result.json();
    console.log(result1)
    console.log(result1.line1)
    console.log(result1.line2)
    con.innerHTML=`<div class="card">
    <div class="card-body">அதிகாரம் :${result1.chap_tam}<br><br>
    ${result1.line1}<br>${result1.line2}<br><br>பொருள் :${result1.tam_exp}
    </div>
    </div>`
    // for(var i=0;i<result1.length;i++){
    // console.log(result1.line1)
    // }
    // for(var i in result1){
        
    // }
    // console.log(i,result1[i].line1)
    
}