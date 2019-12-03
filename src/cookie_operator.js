/**
 * @author Lucas
 * @description a class that manipulates cookies
 */
class CookieOperator {
    /**
     * Create an instance
     * @param {Object} [attributes] - Parameter object.
     */
    constructor(attributes = {}) {
        this.attributes = attributes
    }

    /**
     * Create an instance with a custom parameter object
     * @param {Object} [attribute] - parameter object.
     * */
    create(attribute) {
        return new CookieOperator(attribute)
    }

    /**
     * Get the parameters of the current instance
     * */
    getAttr() {
        return this.attributes
    }

    /**
     * Check if a set of cookies are present
     * @param {string} keys - cookies keys.
     * */
    checkAll(keys = []) {
        if (Object.keys(keys).length === 0) {
            return false
        }
        let loseCookie = false; // 缺少某个cookie
        keys.forEach(name => {
            if (this.get(name) === 'undefined') {
                loseCookie = true;
            }
        });
        return !loseCookie;
    }

    /**
     * Get the value of a cookie.
     * @param {string} key - cookie name.
     */
    get(key) {
        let _key = encodeURIComponent(String(key));
        let cookie = document.cookie;
        let pattern = /([^=]+)=([^;]+);?\s*/g;
        let result;
        let value = {};
        while ((result = pattern.exec(cookie)) != null) {
            value[result[1]] = result[2];
        }
        if (key) {
            return decodeURIComponent(value[_key]);
        } else {
            return value;
        }
    }

    /**
     * Set the value of a cookie.
     * @param {string} key - cookie name.
     * @param {string} value - cookie value.
     * @param {Object} [attributes] - parameter object.
     * @return {String} The current document's cookie string.
     */
    set(key, value, attributes = this.attributes) {
        let _attributes = Object.assign({}, attributes);
        let { expires, path } = _attributes;
        // 0.转义
        let _key = encodeURIComponent(String(key));
        let _value = encodeURIComponent(String(value));
        // 1.特殊处理超时时间
        if (typeof expires === 'number') {
            let _expires = new Date();
            _expires.setMilliseconds(_expires.getMilliseconds() + expires * 864e5);
            _attributes.expires = _expires.toGMTString();
        } else if (expires instanceof Date) {
            _attributes.expires = expires.toGMTString();
        } else {
            _attributes.expires = '';
        }

        // 2.path默认值
        _attributes.path = path ? path : '/';

        // 3.拼接cookie字符串
        let stringifiedAttributes = '';
        for (let attributeName in _attributes) {
            if (!_attributes[attributeName]) {
                continue;
            }
            stringifiedAttributes += '; ' + attributeName;
            if (_attributes[attributeName] === true) {
                continue;
            }
            stringifiedAttributes += '=' + _attributes[attributeName];
        }
        document.cookie = _key + '=' + _value + stringifiedAttributes;
        return document.cookie;
    }

    /**
     * Delete a cookie.
     * @param {string} key - cookie name.
     * @param {Object} [attributes] - parameter object.
     */
    remove(key, attributes = this.attributes) {
        let value = '';
        return this.set(
            key,
            value,
            Object.assign({}, attributes, {
                expires: -1
            })
        );
    }

    /**
     * Delete a set of cookies.
     * @param {string} keys - cookie keys.
     * @param {Object} [attributes] - parameter object.
     */
    removeAll(keys = [], attributes = this.attributes) {
        keys.forEach(name => {
            this.remove(name, attributes);
        });
    }

    /**
     * Get a top-level domain.
     * @param {string} [domain] - Domain name to be processed.
     */
    getTopDomain(domain) {
        let _domain = domain || document.domain;
        if (isIP(_domain)) {
            return _domain
        } else {
            // 删除三级域名
            return _domain.substring(_domain.length, _domain.lastIndexOf('.', _domain.lastIndexOf('.') - 1) + 1);
        }
    }
}

function isIP(ip) {
    let ipRegExp = /^((25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(25[0-5]|2[0-4]\d|1?\d?\d)$/;
    return ipRegExp.test(ip)
}

let cookieOperator = new CookieOperator();
export default cookieOperator;

