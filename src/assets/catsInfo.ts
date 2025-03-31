import img1 from '@/assets/img/IMG_7286.jpeg';
import img2 from '@/assets/img/IMG_7636.jpeg';
import img3 from '@/assets/img/IMG_7747.jpeg';
import img4 from '@/assets/img/IMG_8179.jpeg';
import img5 from '@/assets/img/IMG_8249.jpeg';
import img6 from '@/assets/img/DSC_0009.jpeg';
import img7 from '@/assets/img/IMG_3094.jpeg';
import img8 from '@/assets/img/IMG_7637.jpeg';

export interface CatInfo {
  id: number;
  cardNumber: number;
  image: HTMLImageElement['src'];
}

export const CatsInfo = [
  { id: 1, cardNumber: 1, image: img1 },
  { id: 2, cardNumber: 2, image: img2 },
  { id: 3, cardNumber: 3, image: img3 },
  { id: 4, cardNumber: 4, image: img4 },
  { id: 5, cardNumber: 5, image: img5 },
  { id: 6, cardNumber: 6, image: img6 },
  { id: 7, cardNumber: 7, image: img7 },
  { id: 8, cardNumber: 8, image: img8 },
];
