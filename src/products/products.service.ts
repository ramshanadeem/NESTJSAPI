import { Injectable ,NotFoundException} from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class ProductService{
   private products: Product[]=[];
  //name upto you like insertProduct

    insertProduct(title:string,desc:string,price:number){
        const prodId= Math.random().toString();
        const newPoduct = new Product(prodId,title,desc,price)
        //push product into array like this
        this.products.push(newPoduct)
        return prodId;
    }
    getProducts(){
        return [...this.products];
    }
    getSingleProducts(productId:string)
    {
    //   const product = this.products.find((prod)=>prod.id===productId)
    //   if(!product){
    //       throw new NotFoundException('could not find product');
    //   }
    //   return {...product};
    const product= this.findProduct(productId)[0];
    return{...product};
    }
    updateProduct(productId:string, title:string, desc:string, price:number)
    {
        const [product,index]= this.findProduct(productId);
        const updatedProduct={...product}
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
        this.products[index]=updatedProduct;
       }
       deleteProduct(productId:string)
       {
         const index= this.findProduct(productId)[1]
         this.products.splice(index,1)
       }
    //[product, number ] this is define the return type of that product 
    private  findProduct(id:string): [Product,number]
    {
   const productIndex = this.products.findIndex(prod=>prod.id===id)
   const product= this.products[productIndex];
    if(!product){
         throw new NotFoundException('could not find product');
    }
    
    return [product,productIndex];
    }

  
}