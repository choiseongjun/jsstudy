var result = "";
for(var i=0;i<5;i++){
    result += i+",";
}
result = result.substr(0,result.length-1)
console.log(result)