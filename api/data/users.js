import bcrypt from 'bcryptjs';

const users = [
    {
        email: 'Admin@test.com',
        password: bcrypt.hashSync("Admin1", 10),
        isAdmin: true,
    },
    {
        email: 'test105@test.com',
        password: bcrypt.hashSync("password105", 10),
        isAdmin: false,
    },
    
]

export default users