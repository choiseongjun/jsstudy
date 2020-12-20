class Counter{
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }
    increase(){
        this.counter++;
        console.log(this.counter)
        if(this.counter%5==0){
            if(this.callback){
                this.callback(this.counter)
            }
        }
    }
}
const counter = new Counter();
function some(num){
    console.log(`${num}번 입력했습니다`);
}
counter.increase(some);
counter.increase(some);
counter.increase(some);
counter.increase(some);
counter.increase(some);
console.log(counter);
