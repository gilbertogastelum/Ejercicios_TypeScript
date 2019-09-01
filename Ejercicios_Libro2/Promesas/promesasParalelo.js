function loadItem(id) {
    return new Promise(function (resolve) {
        console.log('loading item', id);
        setTimeout(function () {
            resolve({ id: id });
        }, 1000);
    });
}
var item1, item2;
loadItem(1)
    .then(function (res) {
    item1 = res;
    return loadItem(2);
})
    .then(function (res) {
    item2 = res;
    console.log('done');
});
Promise.all([loadItem(1), loadItem(2)])
    .then(function (res) {
    item1 = res[0], item2 = res[1];
    console.log('done');
});
