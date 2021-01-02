a=[1,2,3];
b=[2,3,4,5];
//a b를 합쳐서 [1,2,3,4,5]로 뽑아주세요

result= [1,2,3,4,5]


var c= a.concat(b)

var d = c.filter((item,index)=>c.indexOf(item)===index)

console.log(d)