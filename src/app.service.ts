// app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  handleFileUpload(file: Express.Multer.File): string {
    // You can add your file handling logic here
    const { originalname, filename, size } = file;
    return `File ${originalname} uploaded successfully. Size: ${size} bytes. Stored as: ${filename}`;
  }
}
