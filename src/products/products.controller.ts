import { Controller, Post,Body,Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}

    @Post()
   async addProduct(
     @Body('title') prodTitle:string,
     @Body('desc') prodDesc:string,
     @Body('price') prodPrice:number
      ){
       const generatedId= await this.productService.insertProduct(
        prodTitle,
        prodDesc,
        prodPrice);
        return {id:generatedId};

    }
    @Get()
  async getAllProducts()
    {
        const products= await this.productService.getProducts();
        return products;
    }
  }
//    @Get(':id')
//    getProduct(@Param('id') prodId:string,)
//    {
//      return this.productService.getSingleProducts(prodId)
//    }
//    @Patch(":id")
//    updateProduct(
//     @Param('id') prodId:string,
//     @Body('title') ProdTitle:string,
//     @Body('desc') prodDesc: string,
//     @Body('price') Prodprice:number 
//     )
//    {
//      this.productService.updateProduct(prodId,ProdTitle,prodDesc,Prodprice);
//      return null;

//    }
//    @Delete(":id")
   
//    removeProduct(@Param('id') prodId:string,){
//      this.productService.deleteProduct(prodId);
//      return null;
//    }
// }