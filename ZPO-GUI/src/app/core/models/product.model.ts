import { Category } from './category.model';
import { Warehouse } from './warehouse.model';

export class Product {

    public id: number;
    public name: string;
    public description: string
    public price: number;
    public quantity: number;
    public category: Category;
    public warehouse: Warehouse;
    
}