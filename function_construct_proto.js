function Employee(firstname,lastname,salary){
    this.empfname = firstname ;
    this.lastname = lastname ;
    this.salary = salary;
    this.TA = 10;
    this.DA = 10;
}


Employee.prototype.calSalary = function(){
    console.log(this.salary + (this.salary * this.TA )/ 100 + (this.salary * this.DA)/100) ;
}

var abc = new Employee('Ramesh','Babu',1000);
abc.calSalary();