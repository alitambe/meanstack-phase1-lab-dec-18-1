export class Employee {
    name:string; // <NamefVariable> : datatype
    dept:string;
    id:number;

    constructor (_name, _dept, _id){
        this.name = _name;
        this.dept=_dept;
        this.id=_id;
    }

    print():void{// <NamefFunction>(<params>) : returnType 
        console.log(this.name + " " + this.dept);
    }
}

//var emp = new Employee("Ali Tambe","IT",1);

//emp.print();