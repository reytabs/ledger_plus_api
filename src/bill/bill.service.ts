import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Bill } from './schemas/bill.schema';

@Injectable()
export class BillService {
  constructor(
    @InjectModel(Bill.name)
    private billModel: mongoose.Model<Bill>,
  ) {}
}
