class car{
    name:string;
    model:string;
    constructor(name:string,model:string)
    {
        this.name=name;
        this.model=model;
    }
    start()
    {
        console.log("Car start..")
        
    }
    displayCar()
    {
        console.log(`Name:${this.name},model:${this.model}`)
    }
}
class Honda extends car{
    year:number;
    constructor(name:string,model:string,year:number)
    {
        super(name,model)
        this.year=year
    }
     start():void   // method overriding 
    {
        console.log("Honda start..")
        super.start()//
    }
     display()
    {
        console.log(`Name:${this.name},model:${this.model},year:${this.year}`)
    }
    yearM()
    {
        console.log("Year..")
    }
}
let h=new Honda("Hx","CZ",2024)
h.display(); // child class method
h.displayCar(); //parent class
h.start() // method overridin but called child class method


console.log("******** parent variable referance***")
let cobj:car=new Honda("ZZ","CZ",2025) //crete child class object but prvide parent class refer
cobj.displayCar()
cobj.start();   //called child class method as cobj will call all commom method 
                 // will available in child class