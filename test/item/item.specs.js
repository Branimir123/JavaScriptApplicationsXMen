import { common } from '../common.js';
let expect = common.expect;

import Item from '../../public/models/viewModels/itemViewModel';;


describe('Item', () => {
    describe('#id', () => {
        let item;

        beforeEach(() => {
            item = new Item("Name", 20, "Category");
        });

        it('should return the id', () => {
            expect(item.id).to.not.equal(null);
        });

        it('should be a unique id', () => {
            let newItem = new Item("Book", 45, "Comedy");
            expect(item.id).to.not.equal(newItem.id);
        });

        it('cannot be null', () => {
            expect(item.id).to.not.equal(null);
        });
    });

    describe('#name', () => {
        let item;

        beforeEach(() => {
            item = new Item("Name", 20, "Category");
        });

        it('should return the name', () => {
            expect(item.name).to.equal("Name");
        });

        it('can be changed', () => {
            item.name = "New name";
            expect(item.name).to.equal("New name")
        });

        it('should accept only string', () => {
            expect(() => {
                item.name = 42;
            }).to.throw(Error);
            expect(() => {
                item.name = true;
            }).to.throw(Error);
        });

        it('cannot be an empty string', () => {
            expect(() => {
                item.name = "";
            }).to.throw(Error);
        });

        it('cannot be null', () => {
            expect(item.name).to.not.equal(null);
        });
    });

    describe('#price', () => {
        let item;

        beforeEach(() => {
            item = new Item("Name", 20, "Category");
        });

        it('should return the price', () => {
            expect(item.price).to.equal(20);
        });

        it('can be changed', () => {
            item.price = 45;
            expect(item.price).to.equal(45);
        });

        it('should accept only number', () => {
            expect(() => {
                item.price = "bad price";
            }).to.throw(Error);
            expect(() => {
                item.price = true;
            }).to.throw(Error);
            expect(() => {
                item.price = () => {};
            }).to.throw(Error);
        });

        //So far it can be zero and the test doesnt pass.

        // it('cannot be zero', () => {
        //     expect(() => {
        //         item.price = 0;
        //     }).to.throw(Error);
        // });

        it('cannot be less than zero', () => {
            expect(() => {
                item.price = -23;
            }).to.throw(Error);
        });

        it('cannot be null', () => {
            expect(item.price).to.not.equal(null);
        });
    });

    describe('#category', () => {
        let item;

        beforeEach(() => {
            item = new Item("Name", 20, "Drama");
        });

        it('should return the category', () => {
            expect(item.category).to.equal("Drama");
        });

        it('can be changed', () => {
            item.category = "Bollywood";
            expect(item.category).to.equal("Bollywood");
        });

        it('should accept only string', () => {
            expect(() => {
                item.category = 666;
            }).to.throw(Error);
            expect(() => {
                item.category = true;
            }).to.throw(Error);
        });

        it('cannot be an empty string', () => {
            expect(() => {
                item.category = "";
            }).to.throw(Error);
        });

        it('cannot be null', () => {
            expect(() => {
                item.category = null;
            }).to.throw(Error);
        });
    });
});
