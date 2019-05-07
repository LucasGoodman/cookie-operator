# cookie-operator 
[![Build Status](https://travis-ci.org/LucasGoodman/cookie-operator.svg?branch=master)](https://travis-ci.org/LucasGoodman/cookie-operator) 
[![codecov](https://codecov.io/gh/LucasGoodman/cookie-operator/branch/master/graph/badge.svg)](https://codecov.io/gh/LucasGoodman/cookie-operator) 
![build](https://img.shields.io/npm/v/cookie-operator.svg)
![build](https://img.shields.io/apm/l/vim-mode.svg)


Used to manipulate cookies for JavaScript

Translations: [中文](https://github.com/LucasGoodman/cookie-operator/blob/master/README_CN.md)

## [Installation](#Installation)
**npm install**
 ```
 $ npm i cookie-operator
 ```

**Direct download**

Download the script [here](https://cdn.jsdelivr.net/npm/cookie-operator@1.1.0/src/cookie_operator.min.js) and include it (unless you are packaging scripts somehow else):

 ```
 <script src="/path/to/cookie_operator.min.js"></script>
 ```

Or include it via [jsDelivr CDN](https://www.jsdelivr.com/package/npm/cookie-operator):

```
<script src="https://cdn.jsdelivr.net/npm/cookie-operator@1.0.1/dist/cookieOperator.1.0.1.js">
```

## [Basic Usage](#BasicUsage)

Create a cookie, valid across the entire site:

```javascript
cookieOperator.set('name', 'value');
```

Create a cookie that expires 30 days from now, valid across the entire site:

```javascript
cookieOperator.set('name', 'value',{ expires:30, path:'', domain:document.domain});
```

Read cookie:

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

Delete cookie:

```javascript
cookieOperator.remove('name'); 
```

Delete cookies by keys:

```
cookieOperator.removeAll(['name1','name2','name3'...]); 
```

Delete a cookie valid to the path of the current page:

```javascript
cookieOperator.set('name', 'value', { path: '' });
cookieOperator.remove('name'); // fail!
cookieOperator.remove('name', { path: '' }); // removed!
```

Get the current primary domain name:
```javascript
// 'www.test.com'
cookieOperator.getPrimaryDomain(); // 'test.com'
// 'name1.name2.test.com'
cookieOperator.getPrimaryDomain(); // 'test.com'
```

Get the primary domain name based on the given domain name:
```javascript
cookieOperator.getPrimaryDomain('www.test2.com') // 'test2.com'
```


*IMPORTANT!* when deleting a cookie, you must pass the exact same path and domain attributes that was used to set the cookie, unless you're relying on the  [default attributes](#CookieAttributes).

## [Cookie Attributes](#CookieAttributes)


The last parameter of a function `cookieOperator.set(...)` is an object, which has several properties that control the cookie.
If you pass in these parameters, the default properties will be overwritten.
For more information on the properties of cookies, please refer to [Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie) 


**expires**
Define when the cookie will be removed.If the value is a `Number`, the deleted date will be the number of days after the creation time; if it is a date object, the deleted time will be the time represented by the date object.

**Default:** Cookie is removed when the user closes the browser.

**Examples:**
```javascript
cookieOperator.set('name', 'value', { expires: 30 });
cookieOperator.get('name'); // => 'value'
cookieOperator.remove('name');
```

**path**

This cookie can only be obtained in the path where the cookie is set.

**Default:** `/`

**Examples:**
```javascript
cookieOperator.set('name', 'value', { path: '' });
cookieOperator.get('name'); // => 'value'
cookieOperator.remove('name', { path: '' });
```

**domain**

A `String` indicating a valid domain where the cookie should be visible. The cookie will also be visible to all subdomains.

**Default:** `document.domain`

**Examples:**
```javascript
cookieOperator.set('name', 'value', { domain: 'subdomain.site.com' });
cookieOperator.get('name'); // => undefined (need to read at 'subdomain.site.com')
```

**secure**

Either `true` or `false`, indicating if the cookie transmission requires a secure protocol (https).

**Default:** `false`

**Examples:**
```javascript
Cookies.set('name', 'value', { secure: true });
```

