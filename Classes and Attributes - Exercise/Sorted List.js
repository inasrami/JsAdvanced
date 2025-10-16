class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    
    add(number) {
        this.list.push(number);
        this.list.sort((a, b) => a - b);
        this.size = this.list.length;
    }
    
    remove(index){
        this.#ensureInside(index);
        this.list.splice(index, 1);
        this.size = this.list.length;
    }
    
    get(index){
        this.#ensureInside(index);
        return this.list[index];
    }
    
    #ensureInside(index) {
        if (!this.#isInsideList(index)) {
            throw new RangeError("Index out of range!");
        }
    }
    
    #isInsideList(index) {
        return 0 <= index && index < this.list.length;
    }
}