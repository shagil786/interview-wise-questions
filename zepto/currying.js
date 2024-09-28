function add(a, b) {
  return a + b;
}

function memo(func) {
  const cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (cache.hasOwnProperty(key)) {
      console.log("cached", cache[key]);
      return cache[key];
    }

    const result = func(...args);
    cache[key] = result;
    console.log(result, "original");
    return result;
  };
}

const memoized = memo(add);
memoized(1, 3);
memoized(1, 3);
memoized(2, 3);
memoized(2, 3);
