export function debounce(func, wait = 100) {
    let timeout;
    console.log(func, 'func')
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
}