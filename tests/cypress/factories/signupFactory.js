import { faker } from '@faker-js/faker';

export default {

    barber: function() {

        let firstName = faker.name.firstName();
        
        return {
            nome: `${firstName} ${faker.name.lastName()}`,
            email: faker.internet.email(firstName),
            senha: "123@Wrty-12_q244"
        };

    }
}