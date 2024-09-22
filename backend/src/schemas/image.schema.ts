import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Image extends Document {
  @Prop()
  name: string;

  @Prop()
  size: number;

  @Prop()
  url: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);