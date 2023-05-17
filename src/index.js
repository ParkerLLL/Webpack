import x from './x.js'
import png from './assets/1.png'
console.log("Hello World!");

console.log(x)
console.log('hi2')

const div= document.getElementById('app')

div.innerHTML=`
    <img src="${png}">
`

const button = document.createElement('button')
button.innerText='懒加载'
button.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{
        console.log('模块加载错误')
    })
}

div.appendChild(button)