describe('StringBuilder', () => {
    describe('constructor', () => {
        it('should create instance with string parameter', () => {
            let sb = new StringBuilder('test');
            expect(sb.toString()).to.equal('test');
        });

        it('should create instance without parameter', () => {
            let sb = new StringBuilder();
            expect(sb.toString()).to.equal('');
        });

        it('should throw TypeError for non-string parameter', () => {
            expect(() => new StringBuilder(123)).to.throw(TypeError);
            expect(() => new StringBuilder([])).to.throw(TypeError);
            expect(() => new StringBuilder({})).to.throw(TypeError);
        });

        it('should store string as array internally', () => {
            let sb = new StringBuilder('test');
            expect(Array.isArray(sb._stringArray)).to.be.true;
            expect(sb._stringArray.length).to.equal(4);
        });
    });

    describe('append', () => {
        it('should append string to end', () => {
            let sb = new StringBuilder('hello');
            sb.append(' world');
            expect(sb.toString()).to.equal('hello world');
        });

        it('should throw TypeError for non-string', () => {
            let sb = new StringBuilder();
            expect(() => sb.append(123)).to.throw(TypeError);
        });

        it('should append empty string', () => {
            let sb = new StringBuilder('test');
            sb.append('');
            expect(sb.toString()).to.equal('test');
        });
    });

    describe('prepend', () => {
        it('should prepend string to beginning', () => {
            let sb = new StringBuilder('world');
            sb.prepend('hello ');
            expect(sb.toString()).to.equal('hello world');
        });

        it('should throw TypeError for non-string', () => {
            let sb = new StringBuilder();
            expect(() => sb.prepend(123)).to.throw(TypeError);
        });
    });

    describe('insertAt', () => {
        it('should insert string at specified index', () => {
            let sb = new StringBuilder('hello world');
            sb.insertAt('there ', 6);
            expect(sb.toString()).to.equal('hello there world');
        });

        it('should throw TypeError for non-string', () => {
            let sb = new StringBuilder('test');
            expect(() => sb.insertAt(123, 0)).to.throw(TypeError);
        });

        it('should insert at beginning', () => {
            let sb = new StringBuilder('test');
            sb.insertAt('a', 0);
            expect(sb.toString()).to.equal('atest');
        });
    });

    describe('remove', () => {
        it('should remove characters from specified index', () => {
            let sb = new StringBuilder('hello world');
            sb.remove(5, 6);
            expect(sb.toString()).to.equal('hello');
        });

        it('should remove single character', () => {
            let sb = new StringBuilder('test');
            sb.remove(1, 1);
            expect(sb.toString()).to.equal('tst');
        });
    });

    describe('toString', () => {
        it('should return correct string representation', () => {
            let sb = new StringBuilder('test');
            expect(sb.toString()).to.equal('test');
        });
    });
});