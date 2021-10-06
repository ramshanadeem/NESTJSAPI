import { Controller, Post,Body,Get, Param } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    addProduct(
     @Body('title') prodTitle:string,
     @Body('desc') prodDesc:string,
     @Body('price') prodPrice:number
      ):any{
       const generatedId= this.productService.insertProduct
       (prodTitle,
        prodDesc,
        prodPrice);
        return {id:generatedId};

    }
    @Get()
    getAllProducts()
    {
        return this.productService.getProducts();
    }
   @Get(':id')
   getProduct(@Param('id') prodId:string,)
   {
     return this.productService.getSingleProducts(prodId)
   }
}