/**
 * Created by Lucas on 2019/5/6.
 */
import test from 'ava';
import cookieOperator from '../src/cookie_operator';

test.serial('Environmental test', t => {
    t.is(typeof document, "object")
    t.is(typeof document.cookie, "string")
    t.is(document.cookie, "")
});

/*串行测试，避免Check test中清除cookie操作带来的干扰*/
test.serial('Set/Get/Remove test', t => {
    let expires = 30, domain = document.domain, path = '/';
    // secure为true
    cookieOperator.set('secureCookieName', 'secureCookieValue', { expires, domain, path, secure: true })
    t.is(cookieOperator.get('secureCookieName'), 'undefined');
    cookieOperator.remove('secureCookieName')

    // secure为false
    cookieOperator.set('testCookieName', 'testCookieValue', { expires, domain, path, secure: false })
    t.is(cookieOperator.get('testCookieName'), 'testCookieValue');
    cookieOperator.remove('testCookieName')
    t.is(cookieOperator.get('testCookieName'), 'undefined');
});

test('Check/RemoveAll test', t => {
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

test('Domain test', t => {
    t.is(cookieOperator.getPrimaryDomain('www.test.com'), 'test.com');
    t.is(cookieOperator.getPrimaryDomain('name1.name2.test.com'), 'test.com');
    t.is(cookieOperator.getPrimaryDomain('test.com'), 'test.com');
});