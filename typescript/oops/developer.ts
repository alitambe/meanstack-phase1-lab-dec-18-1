import { Employee } from "./employee";

class Developer extends Employee{
    projectName:string;
    constructor(_name, _dept, _id, _projectName){
        super(_name, _dept, _id);
        this.projectName=_projectName;
    }

    writecode(){
        console.log("Writing Code");
    }

    getproject(){
        console.log(this.projectName);
    }
}
var dev = new Developer("Ali Tambe","Bank",2,"HDFC");
dev.print();
dev.writecode();
dev.getproject();