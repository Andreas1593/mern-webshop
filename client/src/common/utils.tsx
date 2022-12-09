import { IImage, IProduct } from '../models';

export const capitalize = (string: string) => {
  if (string) {
    return string
      .split('-')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  }
};

export const extractImagePaths = (product: IProduct) => {
  var imagePaths: string[] = [];
  product.images.forEach((image: IImage) =>
    imagePaths.push(`http://localhost:5000/${image.path}`)
  );
  if (!imagePaths.length)
    imagePaths.push('http://localhost:5000/uploads/no_photo_available.jpeg');
  return imagePaths;
};
