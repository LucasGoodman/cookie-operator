/**
 * Created by Lucas on 2019/5/6.
 */
class CookieOperator {
    /*
    * 检测一组cookie是否都存在
    * */
    checkAll(keys = []) {
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
        return decodeURIComponent(value[_key]);
    }

    /**
     * 设置某个cookie的值.
     * @param {string} key - cookie的名字.
     * @param {string} value - cookie的值.
     * @param {Object} attributes - 参数对象.
     */
    set(key, value, attributes = {}) {
        let { expires, path } = attributes;
        // 0.转义
        let _key = encodeURIComponent(String(key));
        let _value = encodeURIComponent(String(value));
        // 1.特殊处理超时时间
        if (typeof expires === 'number') {
            let _expires = new Date();
            _expires.setMilliseconds(_expires.getMilliseconds() + expires * 864e+5);
            attributes.expires = _expires.toGMTString();
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
    }

    /**
     * 删除某个cookie的值.
     * @param {string} key - cookie的名字.
     * @param {Object} attributes - 参数对象.
     */
    remove(key, attributes = {}) {
        let value = '';
        return this.set(key, value, Object.assign(attributes, {
            expires: -1
        }));
    }

    /**
     * 删除某个cookie的值.
     * @param {string} keys - cookie的名字.
     */
    removeAll(keys = []) {
        keys.forEach(name => {
            this.remove(name);
        });
    }

    /**
     * 获取主域名地址.
     */
    getPrimaryDomain(domain) {
        let _domain = domain || document.domain;
        // 删除三级域名
        return _domain.substring(_domain.length, _domain.lastIndexOf('.', _domain.lastIndexOf('.') - 1) + 1);
    }
}

let cookieOperator = new CookieOperator();
export default cookieOperator;

