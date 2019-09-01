function rest(first, second, allOthers) {
    console.log(allOthers);
}
rest('foo', 'bar'); // []
rest('foo', 'bar', 'bas', 'qux'); // ['bas','qux']
