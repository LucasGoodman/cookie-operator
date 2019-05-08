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
    * [.getTopDomain([domain])](#CookieOperator+getTopDomain)

<a name="new_CookieOperator_new"></a>

### new CookieOperator([attributes])
a class that manipulates cookies


| Param | Type | Description |
| --- | --- | --- |
| [attributes] | <code>Object</code> | Parameter object. |

<a name="CookieOperator+create"></a>

### cookieOperator.create([attribute])
Create an instance with a custom parameter object

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  

| Param | Type | Description |
| --- | --- | --- |
| [attribute] | <code>Object</code> | parameter object. |

<a name="CookieOperator+getAttr"></a>

### cookieOperator.getAttr()
Get the parameters of the current instance

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  
<a name="CookieOperator+checkAll"></a>

### cookieOperator.checkAll(keys)
Check if a set of cookies are present

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>string</code> | cookies keys. |

<a name="CookieOperator+get"></a>

### cookieOperator.get(key)
Get the value of a cookie.

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | cookie name. |

<a name="CookieOperator+set"></a>

### cookieOperator.set(key, value, [attributes]) ⇒ <code>String</code>
Set the value of a cookie.

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  
**Returns**: <code>String</code> - The current document's cookie string.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | cookie name. |
| value | <code>string</code> | cookie value. |
| [attributes] | <code>Object</code> | parameter object. |

<a name="CookieOperator+remove"></a>

### cookieOperator.remove(key, [attributes])
Delete a cookie.

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | cookie name. |
| [attributes] | <code>Object</code> | parameter object. |

<a name="CookieOperator+removeAll"></a>

### cookieOperator.removeAll(keys, [attributes])
Delete a set of cookies.

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>string</code> | cookie keys. |
| [attributes] | <code>Object</code> | parameter object. |

<a name="CookieOperator+getTopDomain"></a>

### cookieOperator.getTopDomain([domain])
Get a top-level domain.

**Kind**: instance method of [<code>CookieOperator</code>](#CookieOperator)  

| Param | Type | Description |
| --- | --- | --- |
| [domain] | <code>string</code> | Domain name to be processed. |

