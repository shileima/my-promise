const Promise = require('./promise2');

let p = new Promise((resolve,reject) => {
    // resolve('resolved')
    //throw new Error('err')
   setTimeout(()=>{
    resolve('resolved')
   },1000)

    // reject('rejected')
})

p.then((data)=>{
    console.log(1,data)
},(reason)=>{
    console.log(1,reason)
})

let p2 = new Promise((resolve,reject)=>{
    resolve(3)
})
/* finally 特性 */
/* p2.finally(()=>2).then(val=>{console.log(val)},reason=>{console.log(reason)})
p2.finally(()=>3).then(val=>{console.log(val)},reason=>{console.log(reason)}) */