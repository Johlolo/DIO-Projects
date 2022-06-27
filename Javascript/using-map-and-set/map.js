function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const users = new Map();

users.set('John', 'Admin');
users.set('Stephany', 'Admin');
users.set('Peter', 'User');
users.set('Louis', 'Admin');

console.log(getAdmins(users));