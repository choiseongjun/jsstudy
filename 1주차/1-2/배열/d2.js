const fruits = ['apple','banana','orange'];
const result = fruits.join(',');
console.log(result);


const fValue = 'apple,grape,banana,orange';
const res = fValue.split(',');
console.log(res);

for(var i=0;i<res.length;i++){
    console.log(res[i])
}



const arr = [1,2,3,4,5];
const result3 = arr.reverse();

class Student{
    constructor(name,age,enrolled,score){
        this.name=name;
        this.age=age;
        this.enrolled=enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,true,66),
    new Student('E',18,true,88),
];

const res1= students.find(function(students,index){
    return students.score===90;
})
const res2= students.find((student) => student.score === 90);
console.log(res2)

const res3 = students.filter((student) =>student.enrolled);
console.log(res3);

const res4= students.map((student)=>student.score)
console.log(res4);

const res5= students.some((student)=>student.score<50);
console.log(res5);
const res6= students.every((student)=>student.score<50);//모든 요건을 충족해서 true가 됨
console.log(res6);
const res7 =students.reduce((prev,curr)=>{
    console.log('-----')
    console.log(prev);
    console.log(curr);
    return curr.score+prev;
},0)//0으로 시작함
console.log(res7)

const res8 = students.reduce((prev,curr)=>prev+curr.score,0);
console.log("res8",res8)

const res9 = students.map((student)=>student.score)
            .filter((score)=>score>=50)
            .join();

console.log("res9",res9)

const res10 = students.map((student)=>student.score)
                .sort((a,b)=>a-b)
                .join()
console.log(res10)