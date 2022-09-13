interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

const createEmployee = function (salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: DirectorInterface | TeacherInterface): boolean {
    return (employee instanceof Director);
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (employee instanceof Director) {
        return (employee.workDirectorTasks());
    } else if (employee instanceof Teacher) {
        return (employee.workTeacherTasks());
    }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass:Subjects): string {
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
