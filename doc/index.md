<a name="CookieOperator"></a>

## CookieOperator
**Kind**: global class  
**Author**: Lucas  

* [CookieOperator](#CookieOperator)
    * [new CookieOperator([attributes])](#new_CookieOperator_new)
    * [.create([attribute])](#CookieOperator+create)
    * [.getAttr()](#CookieOperator+getAttr)
    * [.checkAll(keys)](#CookieOperator+checkAll)
    * [.get(key)](#CookieOperator+get)
    * [.set(key, value, [attributes])](#CookieOperator+set) ⇒ <code>String</code>
    * [.remove(key, [attributes])](#CookieOperator+remove)
    * [.removeAll(keys, [attributes])](#CookieOperator+removeAll)
    * [.getPrimaryDomain([domain])](#CookieOperator+getPrimaryDomain)

<a name="new_CookieOperator_new"></a>

### new CookieOperator([attributes])
一个操作cookie的类


| Param | Type | Description |
| --- | --- | --- |
| [attributes] | <code>Object</code> | 参数对象. |

<a name="CookieOperator+create"></a>

### cookieOperator.create([attribute])
使用自定义参数对象创建一个实例

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  

| Param | Type | Description |
| --- | --- | --- |
| [attribute] | <code>Object</code> | 实例参数对象. |

<a name="CookieOperator+getAttr"></a>

### cookieOperator.getAttr()
获取当前实例的参数

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  
<a name="CookieOperator+checkAll"></a>

### cookieOperator.checkAll(keys)
检测一组cookie是否都存在

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>string</code> | cookie名字数组. |

<a name="CookieOperator+get"></a>

### cookieOperator.get(key)
读取某个cookie的值.

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | cookie的名字. |

<a name="CookieOperator+set"></a>

### cookieOperator.set(key, value, [attributes]) ⇒ <code>String</code>
设置某个cookie的值.

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  
**Returns**: <code>String</code> - 当前文档的cookie字符串  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | cookie的名字. |
| value | <code>string</code> | cookie的值. |
| [attributes] | <code>Object</code> | 参数对象. |

<a name="CookieOperator+remove"></a>

### cookieOperator.remove(key, [attributes])
删除某个cookie的值.

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | cookie的名字. |
| [attributes] | <code>Object</code> | 参数对象. |

<a name="CookieOperator+removeAll"></a>

### cookieOperator.removeAll(keys, [attributes])
删除某个cookie的值.

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>string</code> | cookie名字数组. |
| [attributes] | <code>Object</code> | 参数对象. |

<a name="CookieOperator+getPrimaryDomain"></a>

### cookieOperator.getPrimaryDomain([domain])
获取主域名地址.

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  

| Param | Type | Description |
| --- | --- | --- |
| [domain] | <code>string</code> | 需要处理的域名. |

