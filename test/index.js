/**
 * Created by Lucas on 2019/5/6.
 */
import test from 'ava';
import cookieOperator from '../src/cookie_operator';

let expires = 30, domain = document.domain, path = '/';

test.serial('Environmental test', t => {
    t.is(typeof document, "object")
    t.is(typeof document.cookie, "string")
    t.is(document.cookie, "")
});

/*串行测试，避免其他测试在设置cookie对checkAll操作的干扰*/
test.serial('Check/RemoveAll test', t => {
    const testArr = [
        'token',
        'rememberMe',
        'refresh_token',
        'invalidTime'
    ];
    t.is(cookieOperator.checkAll(testArr), false);

    testArr.forEach(cookieName => {
        cookieOperator.set(cookieName, 'testString')
    });
    t.is(cookieOperator.checkAll(testArr), true);
    // 清除刚才设置的cookies
    cookieOperator.removeAll(testArr);
    t.is(cookieOperator.checkAll(testArr), false);
});

test('create/getAttr test', t => {
    let testAttr = {
        expires: 1,
        domain: 'test.com',
        path: '/a',
        secure: true
    };
    let _cookieOperator = cookieOperator.create(testAttr)
    t.deepEqual(_cookieOperator.getAttr(), testAttr);

});

test('getAll test', t => {
    // 获取全部的cookie测试
    cookieOperator.set('key1', 'value1');
    cookieOperator.set('key2', 'value2');
    t.deepEqual(cookieOperator.get(), { key1: 'value1', key2: 'value2' });
});

test('Set/Get/Remove test', t => {
    cookieOperator.set('secureCookieName', 'secureCookieValue', { expires, domain, path, secure: true })
    t.is(cookieOperator.get('secureCookieName'), 'undefined');
    cookieOperator.remove('secureCookieName')
    t.is(cookieOperator.get('secureCookieName'), 'undefined');
});

test('Branch coverage test', t => {
    // 分支覆盖：secure为false
    cookieOperator.set('testCookieName', 'testCookieValue', { expires, domain, path, secure: false })
    t.is(cookieOperator.get('testCookieName'), 'testCookieValue');
    // 分支覆盖：expires为日期对象
    let date = new Date(new Date().getTime() + 3 * 864e+5);
    cookieOperator.set('testCookieName', 'testCookieValue', { expires: date, domain, path, secure: false })
    t.is(cookieOperator.get('testCookieName'), 'testCookieValue');
    // 分支覆盖：checkAll传入参数为空
    t.is(cookieOperator.checkAll(), false);
});

test('Domain test', t => {
    t.is(cookieOperator.getTopDomain('test.com'), 'test.com');
    t.is(cookieOperator.getTopDomain('test.com'), 'test.com');
    t.is(cookieOperator.getTopDomain('test.com'), 'test.com');
});