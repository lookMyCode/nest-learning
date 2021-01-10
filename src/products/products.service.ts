import { Products, ProductDocument } from './schemas/products.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Products.name) private productsModel: Model<ProductDocument>) {}

  async getAll(): Promise<Products[]> {
    return this.productsModel.find().exec();
  }

  async getById(id: string): Promise<Products> {
    return this.productsModel.findById(id)
  }

  async create(productDto: CreateProductDto): Promise<Products> {
    const newProduct = new this.productsModel(productDto);
    return newProduct.save();
  }

  async remove(id: string): Promise<Products> {
    return this.productsModel.findByIdAndRemove(id);
  }

  async update(id: string, productDto: CreateProductDto): Promise<Products> {
    return this.productsModel.findByIdAndUpdate(id, productDto, {new: true});
  }
}