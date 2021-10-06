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
      const product = this.products.find((prod)=>prod.id===productId)
      if(!product){
          throw new NotFoundException('could not find product');
      }
      return {...product};
    }
}