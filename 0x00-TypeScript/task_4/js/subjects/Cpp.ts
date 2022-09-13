namespace Subjects {
    export interface Teacher {
        lastName: any;
        firstName: any;
        experienceTeachingC?: number;
    }
    export class Cpp extends Subject {
        getRequirements() {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher() {
            if (this.teacher.experienceTeachingC == undefined){
                return 'No available teacher';
            } else {
                return `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}`
            }
        }
    }
}
