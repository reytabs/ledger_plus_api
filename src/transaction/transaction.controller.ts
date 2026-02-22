import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './schemas/transaction.schema';
import { SearchTransactionDto } from './dto/search-transaction.dto';

@Controller('api/transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get()
  async getAllTransactions(
    @Query() query: SearchTransactionDto,
  ): Promise<Transaction[]> {
    return this.transactionService.findAll(query);
  }

  @Post()
  async createTransaction(
    @Body() transaction: CreateTransactionDto,
  ): Promise<Transaction> {
    return this.transactionService.create(transaction as any);
  }

  @Get(':id')
  async getTransaction(@Param('id') id: string): Promise<Transaction> {
    return this.transactionService.findById(id);
  }

  @Put(':id')
  async updateTransaction(
    @Param('id') id: string,
    @Body() transaction: UpdateTransactionDto,
  ): Promise<Transaction> {
    return this.transactionService.updateById(id, transaction as any);
  }

  @Delete(':id')
  async deleteTransaction(@Param('id') id: string): Promise<Transaction> {
    return this.transactionService.deleteById(id);
  }
}
