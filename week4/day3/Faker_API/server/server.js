const {faker} = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



const createUser = () => {
    return {
        password: faker.internet.password(20, true),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    }
}

const createCompany = () => {
    return {
        _id:  faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode:faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get('/api/users/new', (req, res) => {
    const newUsers = createUser();
    res.json(newUsers);
})

app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
})

app.get('/apt/user/company', (req, res) => {
    const users = createUser();
    const company = createCompany();
    res.json({users, company});
})


app.listen(port, () => console.log(`Listening on port: ${port}`));