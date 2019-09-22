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