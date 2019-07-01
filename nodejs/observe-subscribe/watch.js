/*
深入响应原理 
 */
class Observe {
    constructor() {
        // 初始化发布者们
        this.subscribers = [];
    }
    
    addSub(newSub) {
        // 添加新发布者 去重
        if (this.subscribers.indexOf(newSub) < 0) {
            this.subscribers.push(newSub);
        }
    }
    doSub() {
        // 执行发布
        this.subscribers.forEach(sub => {
            sub();
        })
    }
}
const sub_1 = () => {
    console.log('我是第一个发布者');
}
const sub_2 = () => {
    console.log('我是第二个发布者');
}
const obsrve = new Observe();
// 订阅
obsrve.addSub(sub_1);
obsrve.addSub(sub_2);
// 发布
obsrve.doSub();
