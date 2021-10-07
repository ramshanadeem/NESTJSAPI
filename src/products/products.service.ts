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
      
        return products as Product[];
    }
//     getSingleProducts(productId:string)
//     {
   
//     const product= this.findProduct(productId)[0];
//     return{...product};
//     }
//     updateProduct(productId:string, title:string, desc:string, price:number)
//     {
//         const [product,index]= this.findProduct(productId);
//         const updatedProduct={...product}
//         if(title)
//         {
//             updatedProduct.title=title ;
//         }
//         if(desc)
//         {
//             updatedProduct.desc=desc ;
//         }
//         if(price)
//         {
//             updatedProduct.price=price ;
//         }
//         this.products[index]=updatedProduct;
//        }
//        deleteProduct(productId:string)
//        {
//          const index= this.findProduct(productId)[1]
//          this.products.splice(index,1)
//        }
//     //[product, number ] this is define the return type of that product 
//     private  findProduct(id:string): [Product,number]
//     {
//    const productIndex = this.products.findIndex(prod=>prod.id===id)
//    const product= this.products[productIndex];
//     if(!product){
//          throw new NotFoundException('could not find product');
//     }
    
//     return [product,productIndex];
//     }

  
}