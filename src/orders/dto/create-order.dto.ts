import {
  IsNumber,
  IsPositive,
  IsEnum,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { OrderStatus, OrderStatusList } from '../interfaces/order.enum';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  totalAmount: number;

  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  totalItems: number;

  @IsEnum(OrderStatusList, {
    message: `Posible satus values are ${OrderStatusList.join(', ')}`,
  })
  @IsOptional()
  status?: OrderStatus = OrderStatus.PENDING;

  @IsOptional()
  @IsBoolean()
  paid?: boolean = false;
}
