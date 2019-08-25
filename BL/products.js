function Products(DL) {

    async function read() {
        return DL.read('products')
    }

    async function update(product) {
        if (!product.id) throw 'must specify id'
        if (!product.name) throw 'must specify name'
        if (!product.image) throw 'must specify image'
        if (!product.price) throw 'must specify price'
        
        return DL.update('products', product)
    }

    return { read, update }
}

module.exports = Products