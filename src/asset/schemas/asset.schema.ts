import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Asset {
  @Prop({ required: true })
  asset_id: string;

  @Prop({ required: true })
  asset_table: string;

  @Prop()
  asset_name: string;

  @Prop()
  asset_path: string;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
