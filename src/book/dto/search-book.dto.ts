import { IsInt, IsOptional } from 'class-validator';

export class SearchBookDto {
  @IsOptional()
  title?: string;

  @IsOptional()
  author?: string;

  @IsOptional()
  category?: string;

  @IsOptional()
  @IsInt()
  page?: number;

  @IsOptional()
  @IsInt()
  limit?: number;
}
