import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dot';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
