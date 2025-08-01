import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Inject,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';

import { CreateOrderDto } from './dto/create-order.dto';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ORDER_SERVICE } from 'src/config';
import { catchError } from 'rxjs';
import { ChangeOrderStatusDto } from './dto/change-order-status.dto';
import { FindAllOrdersDto } from './dto/find-all-orders.dto';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(ORDER_SERVICE) private readonly ordersClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersClient.send('createOrder', createOrderDto);
  }

  @Get()
  findAll(@Query() findAllOrdersDto: FindAllOrdersDto) {
    return this.ordersClient.send('findAllOrders', findAllOrdersDto).pipe(
      catchError((error) => {
        throw new RpcException(error as string | object);
      }),
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ordersClient.send('findOneOrder', id).pipe(
      catchError((error) => {
        throw new RpcException(error as string | object);
      }),
    );
  }

  @Patch(':id/change-status')
  changeOrderStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() changeOrderStatusDto: ChangeOrderStatusDto,
  ) {
    return this.ordersClient
      .send('changeOrderStatus', { id, ...changeOrderStatusDto })
      .pipe(
        catchError((error) => {
          throw new RpcException(error as string | object);
        }),
      );
  }
}
