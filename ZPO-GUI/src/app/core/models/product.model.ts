import { Category } from './category.model';
import { Warehouse } from './warehouse.model';

export class Product {

    private _id: number;
    private _name: string;
    private _description: string
    private _price: number;
    private _quantity: number;
    private _category: Category;
    private _warehouse: Warehouse;

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter price
     * @return {number}
     */
	public get price(): number {
		return this._price;
	}

    /**
     * Getter quantity
     * @return {number}
     */
	public get quantity(): number {
		return this._quantity;
	}

    /**
     * Getter category
     * @return {Category}
     */
	public get category(): Category {
		return this._category;
	}

    /**
     * Getter warehouse
     * @return {Warehouse}
     */
	public get warehouse(): Warehouse {
		return this._warehouse;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter price
     * @param {number} value
     */
	public set price(value: number) {
		this._price = value;
	}

    /**
     * Setter quantity
     * @param {number} value
     */
	public set quantity(value: number) {
		this._quantity = value;
	}

    /**
     * Setter category
     * @param {Category} value
     */
	public set category(value: Category) {
		this._category = value;
	}

    /**
     * Setter warehouse
     * @param {Warehouse} value
     */
	public set warehouse(value: Warehouse) {
		this._warehouse = value;
	}
    

}