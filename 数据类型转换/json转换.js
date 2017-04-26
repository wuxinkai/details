var str = '{"name":"huangxiaojian","age":"23"}';

JSON.parse(str);
console.log(JSON.parse(str));//{ name: 'huangxiaojian', age: '23' }

var a = {a:1,b:2};
JSON.stringify(a)
console.log(JSON.stringify(a)) //{"a":1,"b":2}