/**
 * @author Lucas
 * @description 一个操作cookie的类
 */
class CookieOperator {
    /**
     * 创建一个实例
     * @param {Object} [attributes] - 参数对象.
     */
    constructor(attributes = {}) {
        this.attributes = attributes
    }

    /**
     * 使用自定义参数对象创建一个实例
     * @param {Object} [attribute] - 实例参数对象.
     * */
    create(attribute) {
        return new CookieOperator(attribute)
    }

    /**
     * 获取当前实例的参数
     * */
    getAttr() {
        return this.attributes
    }

    /**
     * 检测一组cookie是否都存在
     * @param {string} keys - cookie名字数组.
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
     * 读取某个cookie的值.
     * @param {string} key - cookie的名字.
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
     * 设置某个cookie的值.
     * @param {string} key - cookie的名字.
     * @param {string} value - cookie的值.
     * @param {Object} [attributes] - 参数对象.
     * @return {String} 当前文档的cookie字符串
     */
    set(key, value, attributes = this.attributes) {
        let { expires, path } = attributes;
        // 0.转义
        let _key = encodeURIComponent(String(key));
        let _value = encodeURIComponent(String(value));
        // 1.特殊处理超时时间
        if (typeof expires === 'number') {
            let _expires = new Date();
            _expires.setMilliseconds(_expires.getMilliseconds() + expires * 864e+5);
            attributes.expires = _expires.toGMTString();
        } else if (expires instanceof Date) {
            attributes.expires = expires.toGMTString();
        } else {
            attributes.expires = '';
        }

        // 2.path默认值
        attributes.path = path ? path : '/';

        // 3.拼接cookie字符串
        let stringifiedAttributes = '';
        for (let attributeName in attributes) {
            if (!attributes[attributeName]) {
                continue;
            }
            stringifiedAttributes += '; ' + attributeName;
            if (attributes[attributeName] === true) {
                continue;
            }
            stringifiedAttributes += '=' + attributes[attributeName];
        }
        document.cookie = _key + '=' + _value + stringifiedAttributes;
        return document.cookie
    }

    /**
     * 删除某个cookie的值.
     * @param {string} key - cookie的名字.
     * @param {Object} [attributes] - 参数对象.
     */
    remove(key, attributes = this.attributes) {
        let value = '';
        return this.set(key, value, Object.assign(attributes, {
            expires: -1
        }));
    }

    /**
     * 删除一组cookie的值.
     * @param {string} keys - cookie名字数组.
     * @param {Object} [attributes] - 参数对象.
     */
    removeAll(keys = [], attributes = this.attributes) {
        keys.forEach(name => {
            this.remove(name, attributes);
        });
    }

    /**
     * 获取主域名地址.
     * @param {string} [domain] - 需要处理的域名.
     */
    getPrimaryDomain(domain) {
        let _domain = domain || document.domain;
        // 删除三级域名
        return _domain.substring(_domain.length, _domain.lastIndexOf('.', _domain.lastIndexOf('.') - 1) + 1);
    }
}

let cookieOperator = new CookieOperator();
export default cookieOperator;

