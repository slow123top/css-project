const assert = require('assert');

const message = new assert.AssertionError({
    actual:'1',
    expected:'1',
    operator:'strictEqual'
});

try{
    assert.equal(1,2);
    console.log(message);
    console.log('正确');
}catch(err){
    console.log(err);
    console.log('错误');
    // assert(err instanceof assert.AssertionError);
    // assert.strictEqual(err.message,message);
    // assert.strictEqual(err.name,'Assertion Err');
    // assert.strictEqual(err.actual,1);
    // assert.strictEqual(err.expected,2);
    // assert.strictEqual(err.code,'ERR_Assertion');
    // assert.strictEqual(err.operator,'strictEqual');
    // assert.strictEqual(err.generatedMessage,true);
}