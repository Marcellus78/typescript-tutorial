// const person: {
//     name: string;
//     age: number;
// } 

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Marcellus',
    age: 41,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if(person.role === Role.AUTHOR) {
    console.log('is author');
}