import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
