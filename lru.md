---
outline: deep
prev:
  text: '埋点'
  link: '/maidian'
next:
  text: 'pwa'
  link: '/pwa'
---

### 引言

**LRU**（Least Recently Used）是一种常见的缓存淘汰算法，用于管理有限空间的缓存。当缓存空间满了时，LRU 会根据缓存的使用历史来决定淘汰哪个缓存项，策略是**淘汰最久未被使用的项**。LRU 算法主要用于提高系统性能，特别是在缓存管理、内存管理、数据库等领域中。

### 核心思想

LRU 的核心思想是，当缓存容量有限时，缓存系统会**保留最近使用的内容**，而**淘汰最久未使用的内容**。这种策略的基本原则是，假设在一段时间内没有被使用的缓存项，在未来也很可能不会被使用，因此可以将其删除以释放空间。

### 操作流程

- **获取（get）缓存项：**

1. 如果缓存中存在该项，则将该项移到末尾，表示该项是最近使用的
2. 如果缓存中不存在该项，返回一个默认值（如 null 或 undefined）。

- **代码示例**：

```typescript
    get(key){
        if(this.cache.has(key)) {
         const value = this.cache.get(key)
         this.updateOrder(key)
         return value
        }else{
            return null
        }

    }

    updateOrder(key) {
        const index = this.order.indexOf(key)
        this.order.splice(index,1)
        this.order.push(key)
    }
```

- **插入（set）缓存项：**
1. 如果缓存中已经有该项，则更新该项的值，并将其移到末尾。
2. 如果缓存中没有该项，插入该项到末尾，并将其添加。
3. 如果缓存已满，则删除头部的节点（即最久未使用的项），并从 Map 中移除对应的键值对。

- **代码示例**：

```typescript
set(key,value){
        if(this.cache.has(key)) {
            this.cache.set(key,value),
            this.updateOrder(key)
        }else {
            this.cache.set(key,value),
            this.order.push(key)
            if(this.order.length > this.capacity){
                const oldkey = this.order.shift()
                this.cache.delete(oldkey)
            }
        }
    }

    updateOrder(key) {
        const index = this.order.indexOf(key)
        this.order.splice(index,1)
        this.order.push(key)
    }
```

### API 及应用场景

`Map` 是 JavaScript 中的一种集合类型，表示键值对的集合，类似于对象（Object），但是提供了更多的功能和灵活性。与普通对象不同，Map 允许任何类型的键，而不仅仅是字符串和符号。它还保留了键值对的插入顺序。

**Map 的基本特性**

`键的类型`：与对象不同，Map 允许使用任何类型的值作为键，包括对象、数组、函数、原始类型等。

`顺序`：Map 会按照插入的顺序遍历键值对。

`大小`：Map 提供了一个 size 属性，可以直接获取包含的键值对数量。

`可迭代性`：Map 是可迭代的，可以使用 for...of 或者 forEach 遍历其中的元素。

`键值对操作`：Map 提供了方法来添加、删除、更新和查询键值对。

**常用操作**

`创建 Map`

```typescript
// 使用构造函数创建一个空的 Map
const map1 = new Map();

// 使用二维数组创建 Map
const map2 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

console.log(map2);
```

`添加和更新键值对`

```typescript
const map = new Map();

// 使用 set 方法添加或更新键值对
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

// 更新已有的键值对
map.set("a", 10);

console.log(map);

```

`获取值`

```typescript
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

console.log(map.get("a")); // 输出: 1
console.log(map.get("b")); // 输出: 2
console.log(map.get("z")); // 输出: undefined，因为 z 不存在
```

`检查键是否存在`

```typescript
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

console.log(map.has("a")); // 输出: true
console.log(map.has("z")); // 输出: false
```

`删除键值对`

```typescript
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

map.delete("b"); // 删除键 'b'
console.log(map);
```

`获取 Map 的大小`
```typescript
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

console.log(map.size); // 输出: 3
```

`清空 Map`

```typescript
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

map.clear(); // 清空 Map
console.log(map.size); // 输出: 0
```

`遍历 Map`
 - 可以使用 forEach 或 for...of 来遍历 Map 中的键值对

 ```typescript
 const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

// 使用 forEach 遍历
map.forEach((value, key) => {
  console.log(key, value);
});

// 使用 for...of 遍历
for (let [key, value] of map) {
  console.log(key, value);
}
 ```

`shift()` 方法是 JavaScript 中数组的一个内置方法，用于移除数组的第一个元素，并返回该元素。该方法会改变原数组的长度。

- 返回值

shift() 返回被移除的元素。

如果数组为空，shift() 返回 undefined。

- 特点

shift() 会修改原数组，将其第一个元素移除并使其长度减一。

剩余的元素会向前移动一位来填补移除元素的位置。

**使用示例**

```typescript
// 数组不为空的情况

let arr = [1, 2, 3, 4];
let firstElement = arr.shift();

console.log(firstElement); // 输出: 1
console.log(arr); // 输出: [2, 3, 4]

// 数组为空的情况

let emptyArr = [];
let result = emptyArr.shift();

console.log(result); // 输出: undefined
console.log(emptyArr); // 输出: []
```

- 对比 pop() 方法

shift() 从数组开头移除一个元素，而 pop() 从数组末尾移除一个元素。

两者都会返回移除的元素，并修改数组的长度。

