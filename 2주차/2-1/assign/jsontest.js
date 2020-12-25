const list = require( './jsondata.json' );
//1.주어진 데이터를 리스트형식으로 뽑으세요
//2.그 리스트형식으로 뽑은 데이터중 active가 true인거만 출력하세요
//3.2번 조건을 충족한 내용중 4번 데이터만 추출하세요
//4.출력한 4번데이터에서 comment만 뽑아주세요
//5.그 출력한 4번데이터 comment에서 a를 맨앞에 추가해주세요.
//6.그 데이터를 내림차순으로 배열해주세요. ex)9,8,7,6 ....높은 숫자대로 
//7.6번 데이터를 다 합해주세요.
const a = {
    "id": 5,
    "write": '댓글푸시',
    "age": 12,
    "secretIdentity": 'Dan Jukes',
    "hobby": [ 'Radiation resistance', 'Turning tiny', 'Radiation blast' ]
  }
const res = list.map((m)=>m)
            .filter((m)=>m.active)
            .find((m)=>m.index===4)
            .comment.map((c)=>c)
//res 정렬된걸 가져와서 unshift로 맨앞에 붙인다
res.unshift(a);           
//다시 반복문을 돌린다.
const res2 = res.map((i)=>i.age)
    .sort((a,b)=>b-a)
    .reduce((prev,curr)=>{ return curr+prev},0)

console.log(res2)

//console.log(res.unshift(a));

