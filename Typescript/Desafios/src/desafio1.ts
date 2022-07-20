// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

// Resposta

const employee: { code: number, name: string } = {
    code: 10,
    name: "John"
};

// Ou pode declarar direto

const employee2 = { 
    code: 10, 
    name: 'John'
}

// Ou com interfaces

interface IEmployee {
    code: number,
    name: string
}

const employee3: IEmployee = {
    code: 10,
    name: "Johnny"
}