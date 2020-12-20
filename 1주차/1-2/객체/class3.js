//최신이라 아직 쓰기는 시기상조

class Experiment{
    publicField = 2;
    #privateField = 0;//내부변수 캡슐화
}
const experiment = new Experiment();
console.log(experiment.publicField);//2
