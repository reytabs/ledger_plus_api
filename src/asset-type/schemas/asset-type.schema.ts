import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Category } from 'src/category/schemas/category.schema';

@Schema()
export class AssetType {
  @Prop({ required: true })
  name: string;

  // Foreign key reference to Category
  @Prop({ type: Types.ObjectId, ref: 'Category' })
  category: Category;
}

export const AssetTypeSchema = SchemaFactory.createForClass(AssetType);
