import { Products, ProductsSchema } from './schemas/products.schema';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [
    MongooseModule.forFeature([
      {name: Products.name, schema: ProductsSchema}
    ])
  ]
})
export class ProductsModule {}