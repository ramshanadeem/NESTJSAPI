// export class product{
//    id:string;
//    title:string;
//    desc:string;
//    price:number

//     constructor(id:string, title:string, desc:string, price:number){
//         this.id=id;
//         this.title=title;
//         this.desc=desc;
//         this.price=price;
//     };
// }

import * as mongoose from 'mongoose'

export const ProductSchema =new mongoose.Schema({
   title: {type: String, required:true},
   desc:  {type: String, required:true},
   price: {type: Number, required:true},
});
export interface Product extends mongoose.Document  {

         id:string, 
         title:string,
         desc:string,
         price:number
         
 }