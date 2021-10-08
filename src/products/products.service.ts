import { Injectable ,NotFoundException} from "@nestjs/common";
import { Product } from "./products.model";
import {InjectModel} from '@nestjs/mongoose'
import { Model } from "mongoose";
@Injectable()
export class ProductService{
   private products: Product[]=[];
   //Product name same as write in product.module
   // if the model have many different types not the same type so we use generic model
   constructor(
       @InjectModel('Product') private readonly ProductModel :Model<Product> 
       )
       {}
  //name upto you like insertProduct

   async insertProduct(title:string,desc:string,price:number){
        // const prodId= Math.random().toString();
        const newPoduct = new this.ProductModel(
            //yha id nh dygy wo auto connect hogi
            {   title,
                desc,
                price,
            }
            );
        //push product into array like this
        // use await and asyc for inserting the product 
   const result= await newPoduct.save();
      
        return result.id as string;
    }
   async getProducts(){
        //its a find funct given by mongoose
       const products=await this.ProductModel.find().exec();
      
        return products.map(prod=>({
            id:prod.id,
            title:prod.title,
            desc:prod.desc,
            price:prod.price
        }));
    }
   async getSingleProducts(productId:string)
    {
   
    const product=await this.findProduct(productId);
    return product;
    }
 async updateProduct(productId:string, title:string, desc:string, price:number)
    {
        const updatedProduct= await this.findProduct(productId);
        
        if(title)
        {
            updatedProduct.title=title ;
        }
        if(desc)
        {
            updatedProduct.desc=desc ;
        }
        if(price)
        {
            updatedProduct.price=price ;
        }
        updatedProduct.save()
       }
      async deleteProduct(productId:string)
       {
         await this.ProductModel.deleteOne({id:productId}).exec();
     
       }
//     //[product, number ] this is define the return type of that product 
    private async findProduct(id:string): Promise<Product>
    {
        let product;
        try {
             product = await this.ProductModel.findById(id);
        } catch (error) {
            if(!product){
                throw new NotFoundException('could not find product');
           }
        }
    return product;
    // {
        // id: product.id, 
        // title:product.title,
        // desc:product.desc,
        // price:product.price
       // };
    }

  
}