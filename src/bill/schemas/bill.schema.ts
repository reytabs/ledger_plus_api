import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

@Schema({
  timestamps: true,
})
export class Bill {
  @Prop({ type: SchemaTypes.Decimal128, required: true })
  amount_due: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  due_date: Date;

  @Prop()
  recurrence: string;

  @Prop()
  reminder_days: Date;

  @Prop({ default: false })
  is_auto_paid: boolean;

  // Foreign key reference to User
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User;
}

export const BillSchema = SchemaFactory.createForClass(Bill);
