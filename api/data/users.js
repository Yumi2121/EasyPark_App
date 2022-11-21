import bcrypt from 'bcryptjs';

const users = [
    {
        email: 'Admin@test.com',
        password: bcrypt.hashSync("Admin1", 10),
        isAdmin: true,
    },
    {
        email: 'test22@test.com',
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        email: 'test33@test.com',
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
    
]

export default users