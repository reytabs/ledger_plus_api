import { Module } from '@nestjs/common';
import { AssetController } from './asset.controller';
import { AssetService } from './asset.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AssetSchema } from './schemas/asset.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Asset', schema: AssetSchema }]),
  ],
  controllers: [AssetController],
  providers: [AssetService],
})
export class AssetModule {}
