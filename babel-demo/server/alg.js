// 递归求和
function sum(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }
  if (arr.length === 0) {
    return 0;
  } else {
    let [first, ...rest] = arr;
    return first + sum(rest);
  }
}

let s = sum([2, 3, 4, 5, 6]);
let s1 = sum(3);
console.log(s);
console.log(s1);

// 快速排序算法
function quickSort(arr) {
  if (!Array.isArray(arr)) {
    return 'not a array';
  }
  let len = arr.length;
  if (len === 0 || len === 1) {
    return arr;
  } else {
    let [first, ...rest] = arr;
    let less = [],
      greater = [];
    for (let i = 0; i < len - 1; i++) {
      let cur = rest[i];
      if (cur > first) {
        greater.push(cur);
      } else {
        less.push(cur);
      }
    }

    let lessA = quickSort(less);
    let greaterA = quickSort(greater);
    return [...lessA, first, ...greaterA];
  }
}

let sa = quickSort([3, 6, 1, 8, 31, 4, 0, 2]);
console.log(sa);

// 求最大公约数，前提是a>b
function greatestCommonDivisor(a, b) {
  let remainder = a % b;
  if (remainder === 0) {
    return b;
  } else {
    return greatestCommonDivisor(b, remainder);
  }
}

console.log(greatestCommonDivisor(24, 17));

// 狄克斯特拉算法
let graph = new Map();
graph.set('S', {'A':5,'B':2});
graph.set('A', {'B':2,'C':4,'D':2} );
graph.set('B', {'D':7});
graph.set('C', {'D':6,'E':3});
graph.set('D', {'E':1});
graph.set('E', {});

let costs = new Map();
costs.set('A', 5);
costs.set('B', 2);
costs.set('C', Number.POSITIVE_INFINITY);
costs.set('D', Number.POSITIVE_INFINITY);
costs.set('E', Number.POSITIVE_INFINITY);

let parents = new Map();
parents.set('A', 'S');
parents.set('B', 'S');

let processed = [];

function findLowestNode(costs) {
  let minNode = null;
  let min = Number.POSITIVE_INFINITY;
  for (const key of costs.keys()) {
    const cost = costs.get(key);
    if (min > cost && !processed.includes(key)) {
      min = cost;
      minNode = key;
    }
  }
  return minNode;
}

function agl() {
  let node = findLowestNode(costs);
  while (node !== null) {  
    let cost = costs.get(node);
    let neighbors = graph.get(node);
    for (const key in neighbors) {
      let new_cost = cost + neighbors[key];
      let old_cost = costs.get(key);
      if (old_cost > new_cost) {
        costs.set(key, new_cost);
        parents.set(key,node);
      }
    }
    processed.push(node);
    node = findLowestNode(costs);
  }
}

agl();
console.log(processed);

function printPath() {
  let a = ['E'];
  let c = parents.get('E');
  while(c !== 'S') {
    a.push(c);
    c = parents.get(c);
  }
  a.push('S');
  let n = a.reverse();
  console.log(n);
}
console.log(parents);
printPath();
console.log(costs.get('E'));
