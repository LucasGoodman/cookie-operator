/**
 * Created by Lucas on 2019/5/6.
 */
import test from 'ava';
import cookieOperator from '../src/cookie_operator';

test('my passing test1', t => {
    cookieOperator.checkAll(['name']);
    t.pass();
});

test('my passing test2', t => {
    t.pass();
});