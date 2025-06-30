import { IsEnum } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../interfaces/order.enum';

export class ChangeOrderStatusDto {
  @IsEnum(OrderStatusList, {
    message: `Possible status values are ${OrderStatusList.join(', ')}`,
  })
  status: OrderStatus;
}
