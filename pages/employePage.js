const {
    I
} = inject();
const assert = require('assert');
module.exports = {
    fields: {
        firstName: '[ng-model="selectedEmployee.firstName"]',
        lastName: '[ng-model="selectedEmployee.lastName"]',
        startDate: '[ng-model="selectedEmployee.startDate"]',
        email: '[ng-model="selectedEmployee.email"]',
        add: 'Add',
        create: 'Create',
        edit: 'Edit',
        delete: 'Delete',
        update: 'Update'
    },
    createEmploye(firstName, lastName, startDate, email) {
        this.commonEmploye(firstName, lastName, startDate, email);
        I.dontSee(this.fields.add);
        this.assertThatEmployeExistByName(firstName, lastName);
    },
    updateEmploye(firstName, lastName, updatedValue) {
        const employeSelector = this.getSelectorFromEmploye(firstName, lastName);
        I.doubleClick(employeSelector);
        for (var key in updatedValue) {
            const selector = this.fields[key];
            I.fillField(selector, updatedValue[key]);
        };
        I.click(this.fields.update);
    },
    async assertUpdatedEmploye(firstName, lastName, updatedValue) {
        const element = locate('li').withText(`${firstName} ${lastName}`);
        I.doubleClick(element);
        for (var key in updatedValue) {
            const selector = this.fields[key];
            let attribute = await I.grabTextFrom(selector);
            assert.notStrictEqual(updatedValue[key], attribute);
        };
    },
    deleteEmployeByName(firstName, lastName) {
        const employeSelector = this.getSelectorFromEmploye(firstName, lastName);
        if (employeSelector) {
            I.click(employeSelector);
            I.click(this.fields.delete);
        }
    },
    assertThatEmployeExistByName(firstName, lastName) {
        I.see(`${firstName} ${lastName}`);
    },
    attemptsToCreateEmploye(firstName, lastName, startDate, email) {
        this.commonEmploye(firstName, lastName, startDate, email);
    },
    getSelectorFromEmploye(firstName, lastName) {
        I.waitForVisible('#employee-list',5);
        var employeSelector;
        try {
            employeSelector = locate('li')
                .withText(`${firstName} ${lastName}`);
            return employeSelector;
        } catch (err) {
            console.log('EMPLOYE NOT FOUND');
            return undefined;
        }
    },
    commonEmploye(firstName, lastName, startDate, email) {
        I.click(this.fields.create);
        I.fillField(this.fields.firstName, firstName);
        I.fillField(this.fields.lastName, lastName);
        I.fillField(this.fields.startDate, startDate);
        I.fillField(this.fields.email, email);
        I.click(this.fields.add);
    },
}