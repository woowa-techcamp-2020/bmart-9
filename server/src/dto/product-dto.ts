export class ProductDto{
    public id:number;
    public name:string;
    public discount:number;
    public price:number;
    public base_price:number;
    public created_at:string;
    public updated_at:string;
    public stock:number;
    public category1_id:number;
    public category2_id:number;
    public img:string;
    
    constructor(productParams:any){
        this.id = Number(productParams.id) ? Number(productParams.id) : undefined;
        this.name = productParams.name;
        this.discount = Number(productParams.discount);
        this.price = Number(productParams.price);
        this.stock = Number(productParams.stock);
        this.base_price = Number(productParams.base_price);
        this.created_at = productParams.created_at;
        this.updated_at = productParams.updated_at;
        this.img = productParams.img;
        this.category1_id = Number(productParams.category1_id);
        this.category2_id = Number(productParams.category2_id);
    }

    getId():number{
        return this.id;
    }
    getName():string{
        return this.name;
    }
    getDiscount():number{
        return this.discount;
    }
    getPrice():number{
        return this.price;
    }
    getBasePrice():number{
        return this.base_price;
    }
    getStock():number{
        return this.stock;
    }
    getImg():string{
        return this.img;
    }
    getCreatedAt():string{
        return this.created_at;
    }
    getUpdatedAt():string{
        return this.updated_at;
    }
    getCategory1():number{
        return this.category1_id;
    }
    getCategory2():number{
        return this.category2_id;
    }

    setId(id:number):void{
        this.id = id;
    }
    setName(name:string):void{
        this.name = name;
    }
    setDiscount(discount:number):void{
        this.discount = discount;
    }
    setPrice(price:number):void{
        this.price = price;
    }
    setBasePrice(base_price:number):void{
        this.base_price = base_price;
    }
    setStock(stock:number):void{
        this.stock = stock;
    }
    setImg(img:string):void{
        this.img = img;
    }
    setCreatedAt(created_at:string):void{
        this.created_at = created_at;
    }
    setUpdatedAt(updated_at:string):void{
        this.updated_at = updated_at;
    }
    setCategory1(category1_id:number):void{
        this.category1_id= category1_id;
    }
    setCategory2(category2_id:number):void{
        this.category2_id = category2_id;
    }

    
}