import { PriceModel } from './price.model';

export class BookModel{
    public id: number;
    public title: string;
    public totalPages: number;
    private _author: string;
    public price: PriceModel;

    public set author(a: string){
        this._author = a;
    };

    public get author(){
        return "Author Name: " + this._author;
    };
}