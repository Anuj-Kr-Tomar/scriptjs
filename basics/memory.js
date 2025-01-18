// stack(primitive) ,  Heap (non-primtive)
let myName = "anujgmail.com"
let anotherName = myName

anotherName = "touij"
console.log(myName);
console.log(anotherName);

let userone = {
    email: "iamgmao.com",
    upi:    " ian@gmail.c"
}

let usertwo = userone
usertwo.email = "hitesh@gmai.co"

console.log(userone.email);
console.log(usertwo.email);