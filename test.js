
async function add(a,b){
    return a+b;
}

const promise = add(1,2);

promise.then((e) => console.log('Res1',e))
promise.then((e) => console.log('Res2',e))
