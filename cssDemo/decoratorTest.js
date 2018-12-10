function test(target) {
  target.test = true;
}

function readOnly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function showName(target, name, descriptor) {
  let oldValue = descriptor.value;
  descriptor.value = function() {
    console.log('new line');
    return oldValue.apply(null, arguments);
  };
  return descriptor;
}

@test
class Person {
  @readOnly
  @showName
  static say() {
    console.log('hh');
  }
}

console.log(Person.test);

Person.say = function() {
  console.log('dada');
};

Person.say();
