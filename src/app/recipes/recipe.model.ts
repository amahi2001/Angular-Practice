export class Recipe {
    public name: string;
    public description :string;
    public imagePath: string;

    //allows us to use the new keyword to instantiate
    constructor(name:string, desc:string, imagePath:string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}