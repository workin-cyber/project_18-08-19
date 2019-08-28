function Admins(DL) {

    async function read(filter) {
        return DL.read('admins', filter)
    }

    async function login(data = {}) {
        const { username, password } = data

        if (!username) throw 'username required'
        if (!password) throw 'password required'

        let admin = await read({ username })
        admin = admin[0]
        if (!admin) throw 'admin not exists'
        if (admin.password != password) throw 'username and password not match'

        return admin
    }


    return { read, login }
}

module.exports = Admins