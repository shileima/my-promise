/* resolve 情形 */
Promise.resolve(1).then(()=>2,()=>3).then(val=>{console.log(val)})
/* reject 情形 */
Promise.reject(1).then(()=>2,()=>3).then(val=>{console.log(val)})
/* finally 特性 */
Promise.resolve(1).finally(()=>2).then(val=>{console.log(val)},reason=>{console.log(reason)})
Promise.reject(1).finally(()=>3).then(val=>{console.log(val)},reason=>{console.log(reason)})

Promise.prototype.toString = function(val){
    console.log(val)
}
Promise.prototype.toString(2)

Promise.resolve(2).then(() => {}, () => {}).then(val=>{console.log(val)})

/* finally的典型应用，执行完ajax后调用函数关闭loading状态 */
let isLoading = true;

fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { /* process your JSON further */ })
  .catch(function(error) { console.log(error); })
  .finally(function() { isLoading = false; });
