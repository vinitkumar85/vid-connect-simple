import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import * as path from 'path';

@Injectable()
export class UploadService {
  async uploadVideo(video: Express.Multer.File) {
    const fileName = `${Date.now()}-${video.originalname}`;
    const filePath = path.join(__dirname, '..', 'uploads', fileName);

    return new Promise((resolve, reject) =>
      createWriteStream(filePath)
        .end(video.buffer, () => resolve({ filename: fileName }))
        .on('error', reject),
    );
  }
}
