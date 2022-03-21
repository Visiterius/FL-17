function task1(num) {
    function reverse(input) {
        let ret = []
        for(let i = input.length-1; i >= 0; i--) {
            ret.push(input[i])
        }
        return ret
    }
    function join(arr){
        let ans = ''
        for (let i=0;i<arr.length;i++){
            if (arr[i]){
                ans+=arr[i]
            }
        }
        return  Number(ans)
    }
    let ans =  Array.from(String(num),Number)
    if (num<0){
      delete ans[0]
        return  -Math.abs(join(reverse(ans)))
    }else{
        return join(reverse(ans))
    }
}
console.log(task1(-3547645))

function task2 (arr){
    function join(arr){
        let ans = ''
        for (let i=0;i<arr.length;i++){
            if (arr[i]){
                ans+=arr[i]+=' '
            }
        }
        return  ans
    }
    return String(join(arr))
}
console.log(task2([2,5,8]))

function map(arr,func){
    let ans = []
    for (let i=0;i<arr.length;i++){
        ans.push(func(arr[i]))
    }
    return ans
}
console.log(map([2,5,8],function (el){return el+3}))
console.log(map([1,2,3,4,5],function (el){return el*2}))

function filter(arr,func){
    let ans = []
    for (let i=0;i<arr.length;i++){
        if(func(arr[i])){
            ans.push(arr[i])
        }
    }
    return ans
}
console.log(filter([2,5,1,3,8,6],function (el){return el>3}))
console.log(filter([1,4,6,7,8,10],function (el){return el%2===0}))

function getAdultAppleLovers(data){
    let ans = []
    for (let i = 0;i<data.length;i++){
        if (data[i].favoriteFruit==='apple'&&data[i].age>18){
            ans.push(data[i].name)
        }
    }
    return ans
}
console.log(getAdultAppleLovers([
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,

        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 17,
        "eyeColor": "green",
        "name": "Weiss",
        "favoriteFruit": "banana"
    }
]))

function getKeys(obj){
    ans = []
    for (let i in obj){
        ans.push(i)
    }
    return ans
}
console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}))

function getValue(obj){
    let ans = []
    let nans=[]
    for (let objKey in obj) {
        ans.push(objKey)
    }
    for (let i=0;i<ans.length;i++){
        nans.push(obj[ans[i]])
    }
    return nans
}
console.log(getValue({keyOne: 1, keyTwo: 2, keyThree: 3}))

function showFormattedDate(date){
    let month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let nd = JSON.stringify(test)
    let year = nd[1]+nd[2]+nd[3]+nd[4]
    let day = Number(nd[9]+nd[10])+1
    let checkMonth = Number(nd[6]+nd[7])-1
    return `It is ${day} of ${month[checkMonth]}, ${year}`
}
let test = new Date('2018-08-27T01:10:00')
console.log(showFormattedDate(test))
