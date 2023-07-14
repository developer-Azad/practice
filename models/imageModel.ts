import { ChangeEvent } from 'react';

export interface ImageModelData {
  name: string;
  url: string;
  file: File | null;
}

export class ImageData implements ImageModelData {
  name: string;
  url: string;
  file: File | null;

  constructor(data: ImageModelData) {
    this.name = data.name;
    this.url = data.url;
    this.file = data.file;
  }

  static create(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      return new ImageData({
        name: event.target.files[0].name,
        url: URL.createObjectURL(event.target.files[0]),
        file: event.target.files[0],
      });
    }
  }

  static createAll(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const files = event.target.files;

      return [...files].map((file) => {
        return new ImageData({
          name: file.name,
          url: URL.createObjectURL(file),
          file,
        });
      });
    }
  }
}
