import { Ingredient } from '../Shared/ingredient.model';
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    ingredients: Ingredient[];

    constructor(name: string, desc: string , imagePath: string , ingred:Ingredient[])
    {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingred;
    }
}