# cookie-operator 
[![Build Status](https://travis-ci.org/LucasGoodman/cookie-operator.svg?branch=master)](https://travis-ci.org/LucasGoodman/cookie-operator) [![codecov](https://codecov.io/gh/LucasGoodman/cookie-operator/branch/master/graph/badge.svg)](https://codecov.io/gh/LucasGoodman/cookie-operator) ![build](https://img.shields.io/apm/l/vim-mode.svg)

使用JavaScipt操作Cookie

Translations: [English](https://github.com/LucasGoodman/cookie-operator/blob/master/README.md)

## [安装](#Installation)
**npm install**
 ```
 $ npm i cookie-operator
 ```

**直接下载**

在[这里](https://cdn.jsdelivr.net/npm/cookie-operator@1.1.0/src/cookie_operator.min.js)下载脚本并在项目中引用它：

 ```
 <script src="/path/to/cookie_operator.min.js"></script>
 ```

或者使用CDN方式 [jsDelivr CDN](https://www.jsdelivr.com/package/npm/cookie-operator):

```
<script src="https://cdn.jsdelivr.net/npm/cookie-operator@1.0.1/dist/cookieOperator.1.0.1.js">
```

## [使用](#BasicUsage)

创建一个整个站点都可以用访问的cookie:

```javascript
cookieOperator.set('name', 'value');
```

创建一个整个站点都可以用访问且有效期为30天的cookie:

```javascript
cookieOperator.set('name', 'value',{ expires:30, path:'', domain:document.domain});
```

读取cookie:

```javascript
cookieOperator.set('name', 'value');
cookieOperator.set('name2', 'value2');

cookieOperator.get(); // => {name:"value";name2:'value2'}
```

```javascript
cookieOperator.get('name'); // => 'value'
```

```javascript
cookieOperator.get('otherName'); // => 'undefined'
```

根据cookie名字删除cookie:

```javascript
cookieOperator.remove('name'); 
```

根据cookie名字数组批量删除cookie:

```
cookieOperator.removeAll(['name1','name2','name3'...]); 
```

删除在当前路径下的cookie:

```javascript
cookieOperator.set('name', 'value', { path: '' });
cookieOperator.remove('name'); // fail!
cookieOperator.remove('name', { path: '' }); // removed!
```

获取当前站点的主域名:
```javascript
// 'www.test.com'
cookieOperator.getPrimaryDomain(); // 'test.com'
// 'name1.name2.test.com'
cookieOperator.getPrimaryDomain(); // 'test.com'
```

根据给出的域名获取主域名:
```javascript
cookieOperator.getPrimaryDomain('www.test2.com') // 'test2.com'
```


*重要！* 除非您依赖于[Cookie默认属性](#CookieAttributes)，否则在删除cookie时，必须传递用于设置cookie的完全相同的路径和域属性。

## [Cookie属性](#CookieAttributes)

`cookieOperator.set(...)`函数的最后一个参数是一个对象，这个对象包含了几个控制cookie的属性。如果不传入将使用默认值，如果传入则会覆盖默认值。有关cookie的更多资料可以参考：[Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie) 。


**expires**
这个值决定了cookie在设置后，什么时候被删除。如果值类型为 `Number`，则删除的日期将是创建时间加上这个天数;如果是日期对象，则删除的时间将是日期对象表示的时间。

**默认值：** cookie会在浏览器被关闭的时候删除

**例：**
```javascript
cookieOperator.set('name', 'value', { expires: 30 });
cookieOperator.get('name'); // => 'value'
cookieOperator.remove('name');
```

**path**

此cookie只能在设置cookie的路径中获取。

**默认值：** `/`

**例：**
```javascript
cookieOperator.set('name', 'value', { path: '' });
cookieOperator.get('name'); // => 'value'
cookieOperator.remove('name', { path: '' });
```

**domain**

一个表示cookie应该可见的有效域的字符串。
cookie也将对所有子域可见。

**默认值：** `document.domain`

**例：**
```javascript
cookieOperator.set('name', 'value', { domain: 'subdomain.site.com' });
cookieOperator.get('name'); // => undefined (need to read at 'subdomain.site.com')
```

**secure**

表示cookie传输是否需要安全协议（https）。

**默认值：** `false`

**例：**

```javascript
Cookies.set('name', 'value', { secure: true });
```

