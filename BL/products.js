function Products(DL) {
    
    async function read() {
        return DL.read('products')
    }

    return { read }
}

module.exports = Products