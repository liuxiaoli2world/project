var _class, _desc, _value, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function test(target) {
  target.test = true;
}

function readOnly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function showName(target, name, descriptor) {
  let oldValue = descriptor.value;
  descriptor.value = function () {
    console.log('new line');
    return oldValue.apply(null, arguments);
  };
  return descriptor;
}

let Person = test(_class = (_class2 = class Person {
  static say() {
    console.log('hh');
  }
}, (_applyDecoratedDescriptor(_class2, 'say', [readOnly, showName], Object.getOwnPropertyDescriptor(_class2, 'say'), _class2)), _class2)) || _class;

console.log(Person.test);

Person.say = function () {
  console.log('dada');
};

Person.say();
