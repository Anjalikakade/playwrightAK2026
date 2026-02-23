class person
{
    name:string;
    readonly id:number
    age:number;
    static schoolName: string = "high school"

    constructor(sname:string,age:number,id:number)
    {
        this.name=sname,
        this.age =age
        this.id=id
    }
    //regular method

    display():void{

        console.log(this.id+ "-"+ "name is:"+ this.name + " " + "age: "+this.age +" " + "school: " + " "+ person.schoolName)
    }
    //static method 
    static changeSName(newstr:string):void
    {
        person.schoolName=newstr ;
    }

}

let p = new person("jogn",23,10);
p.display();
p.name="karan" // after change
//p.id=40 // error Cannot assign to 'id' because it is a read-only property.
p.display(); //after name change
person.changeSName("sunrise Acadymys") // called static method
p.display(); //after school name changed