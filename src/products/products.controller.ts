import { CreateProductDto } from './dto/create-product.dto';
import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect, Req, Res } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import {Response, Request} from 'express';
import { ProductsService } from './products.service';
import { Products } from './schemas/products.schema';

@Controller('products')
export class ProductsController {

  constructor(
    private readonly productsService: ProductsService
  ) {}

  @Get()
  getAll(): Promise<Products[]> {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Products> {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Controle', 'None')
  create(@Body() createProductDto: CreateProductDto): Promise<Products> {
    return this.productsService.create(createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Products> {
    return this.productsService.remove(id);
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Products> {
    return this.productsService.update(id, updateProductDto);
  } 
}