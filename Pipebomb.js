function putNumba(a){
    var currrentText = document.getElementById("ResultNum").innerHTML;
    b = a.toString();
    var newText = currrentText+b;
    document.getElementById("ResultNum").innerHTML = newText;
}
function putOperation(a){
    var currrentText = document.getElementById("ResultNum").innerHTML;
    b = a.toString();
    c = currrentText.slice(currrentText.length-1);
    if(c != a && c != ""){
        var newText = currrentText+b;
        document.getElementById("ResultNum").innerHTML = newText;
    } 
}
function putOperation2(a){
    var currrentText = document.getElementById("ResultNum").innerHTML;
    if(a == "C"){
        var newText = currrentText.slice(0,-1);
        document.getElementById("ResultNum").innerHTML = newText;
    }
    else{
        var newText = null;
        document.getElementById("ResultNum").innerHTML = newText;
    }
}
function putOperation3(a) {
    var currrentText = document.getElementById("ResultNum").innerHTML;
    var dick = currrentText.match(/[^+\-*\/]+|[+\-*\/]/g);
    console.log(currrentText);
    console.log(dick);
  
    for (let index = 0; index < dick.length; ++index) {
      console.log("THE CURRENT DICK IS" + dick[index]);
      if (dick[index] == "*") {
        var res = Number(dick[index - 1]) * Number(dick[index + 1]);
        res = res.toString();
        console.log(dick);
        dick.splice(index, 2);
        console.log(dick);
        dick[index - 1] = res;
        index = index - 1;
        console.log(dick + "Current dick is" + dick[index]);
      }
      if (dick[index] == "/") {
        var res = Number(dick[index - 1]) / Number(dick[index + 1]);
        res = res.toString();
        console.log(dick);
        dick.splice(index, 2);
        console.log(dick);
        dick[index - 1] = res;
        index = index - 1;
        console.log(dick + "Current dick is" + dick[index]);
      }
  
    }
    console.log("THE TIMES AND DIVIDE HAS FINISHED, THE CURRENT DICK IS " + dick);
    for (let index = 0; index < dick.length; ++index) {
      console.log("THE CURRENT DICK IS" + dick[index]);
      if (dick[index] == "+") {
        var res = Number(dick[index - 1]) + Number(dick[index + 1]);
        res = res.toString();
        console.log(dick);
        dick.splice(index, 2);
        console.log(dick);
        dick[index - 1] = res;
        index = index - 1;
        console.log(dick + "Current dick is" + dick[index]);
      }
      if (dick[index] == "-") {
        var res = Number(dick[index - 1]) - Number(dick[index + 1]);
        res = res.toString();
        console.log(dick);
        dick.splice(index, 2);
        console.log(dick);
        dick[index - 1] = res;
        index = index - 1;
        console.log(dick + "Current dick is" + dick[index]);
      }
  
    }
    console.log("------------");
    console.log("FINAL DICK " + dick);
  
    document.getElementById("ResultNum").innerHTML = dick.toString();
  }
  