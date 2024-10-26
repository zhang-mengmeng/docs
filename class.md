# Class类

## 1.类型约束 
**implements**

```ts{4}
// 定义类型
interface Options {
    el:string | HTMLElement
}
interface VueCls {
    options:Options,
    init():void
}
// 创建类
class Vue implements VueCls{
    options: Options
    constructor (options: Options) {
        this.options = options
        console.log(options)
    }
    init(): void {
        
    }
}

// 实例化
new Vue({
    el:'app'
})

```

## 2.继承 ##
**extends**

一定要写在implements前面，然后跟上父类的名字，然后通过super初始化一下父类，一定要放到constructor里面的第一行

```ts
// 定义类型
interface Options {
    el:string | HTMLElement
}
interface VueCls {
    options:Options,
    init():void
}
interface Vnode {
    // 标签
    tag:string
    // 文字
    text?:string
    // 子级
    children?:Vnode[]
}
// 虚拟DOM简单版
class Dom {
    // 创建节点
    createElement (el:string) {
        return document.createElement(el)
    }
    // 填充文本
    setText(el:HTMLElement,text:string | null) {
        el.textContent = text
    }
    // 渲染元素
    render(data:Vnode){
        let root = this.createElement(data.tag)
        if(data.children && Array.isArray(data.children)) {
            data.children.forEach(item =>{
                 let child = this.render(item)
                 root.appendChild(child)
            })
        }else{
            this.setText(root,data.text)
        }

        return root
    }
}
// 创建类
class Vue extends Dom implements VueCls{
    options: Options
    constructor (options: Options) {
        super()
        this.options = options
        this.init()
    }
    init(): void {
        // 虚拟DOM就是通过js去渲染真是的DOM
        let data:Vnode = {
            tag:'div',
            children:[
                {
                    tag:'p',
                    text:'我是子节点1'
                },
                {
                    tag:'p',
                    text:'我是子节点2'
                }
            ]
        }
        // 在子类中调用父类的方法
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el
        app.appendChild(this.render(data))
        
    }
}

// 实例化
new Vue({
    el:'#app'
})

```
## 3.readonly ##
**只能运用在索引签名或者属性上面 说明这个属性是不能被修改**
## 4. private ##
**只能在父类的内部使用，也可以自己调用自己，子类不可以被使用，实例化也不能被使用**
## 5. protected ##
**可以给父类和子类调用，但是实例化不能被调用**
## 6. public ##
**哪里都可以使用** 
## 7. super的原理 ##
**父类的prototype.constructor.call  通过call进行传参**
## 8. static ##
**在外部不用被new，可以直接调用，static方法之间可以相互调用**
## 9. get set 拦截器 ##
**get拦截读取时的操作 set拦截设置时的操作**
```ts
class Ref{
    _value:any
    constructor(value:any){
        this._value = value
    }
    get value(){
        return this._value + 'vvv'
    }
    set value(newvalue){
        this._value = newvalue + '小满'
    }
}

const ref = new Ref('哈哈哈')
ref.value = '坏人'
console.log(ref.value)
```
