function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            this.currentStep = 0;
        }

        work() {
            if (this.currentStep > this.tasks.length - 1){
                this.currentStep = 0;
            }
            console.log(this.name + this.tasks[this.currentStep++]);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [' is working on a simple task.'];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [' is working on a complicated task.',
                          ' is taking time off work.',
                          ' is supervising junior workers.']
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [' scheduled a meeting.',
                          ' is preparing a quarterly report.']
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {Employee, Junior, Senior, Manager}
}