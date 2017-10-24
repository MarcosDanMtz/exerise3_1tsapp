export class Recipes{
    public name: string;
    public description: string;
    public imagepath: string;

    constructor(Name: string, Description: string, imagePath: string){
        this.name = Name;
        this.description = Description;
        this.imagepath = imagePath;
    }
}