export default {
    datalist: [],
    subscribe(cb) {
        this.datalist.push(cb);
        // console.log(this.datalist);
    },
    publish(value) {
        this.datalist.forEach(cb => cb(value));
    }
}