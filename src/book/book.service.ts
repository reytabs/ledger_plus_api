import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from './schemas/book.schema';
import { SearchBookDto } from './dto/search-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
  ) {}

  async findAll(query: SearchBookDto): Promise<Book[]> {
    const resPerPage = 2;
    const page = query.page || 1;
    const skip = resPerPage * (page - 1);

    const filter: any = {};
    if (query.title) filter.title = new RegExp(query.title, 'i');
    if (query.author) filter.author = new RegExp(query.author, 'i');
    if (query.category) filter.category = new RegExp(query.category, 'i');

    const res = await this.bookModel
      .find(filter)
      .limit(resPerPage)
      .skip(skip)
      .exec();
    return res;
  }

  async create(book: Book): Promise<Book> {
    const res = await this.bookModel.create(book);

    if (!res) throw new NotFoundException('Book could not be created.');

    return res;
  }

  async findById(id: string): Promise<Book> {
    const res = await this.bookModel.findById(id);

    if (!res) throw new NotFoundException('Book not found.');

    return res;
  }

  async updateById(id: string, book: Book): Promise<Book> {
    const res = await this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });

    if (!res) throw new NotFoundException(`Book with id ${id} not found`);

    return res;
  }

  async deleteById(id: string): Promise<Book> {
    const res = await this.bookModel.findByIdAndDelete(id);

    if (!res) throw new NotFoundException(`Book with id ${id} not found`);

    return res;
  }
}
