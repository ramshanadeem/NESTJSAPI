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
export class Product{

     constructor(
        public id:string, 
        public title:string,
        public desc:string,
        public price:number
        ) 
        {};
 }