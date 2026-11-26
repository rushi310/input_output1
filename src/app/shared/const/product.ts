import { Iproduct } from '../model/product';

export const products: Iproduct[] = [
  { id: '1', name: 'Samsung Galaxy S24', description: '6.2" AMOLED display, 8GB RAM, 256GB storage.', price: 74999, image: 'https://picsum.photos/seed/phone/300/200', status: 'Delivered', canReturn: true },
  { id: '2', name: 'Apple MacBook Air M3', description: '13.6" Liquid Retina display, 16GB RAM, 512GB SSD.', price: 114900, image: 'https://picsum.photos/seed/laptop/300/200', status: 'Dispatched', canReturn: true },
  { id: '3', name: 'Sony WH-1000XM5', description: 'Wireless noise-cancelling over-ear headphones.', price: 29990, image: 'https://picsum.photos/seed/headphones/300/200', status: 'In-Progress', canReturn: false },
  { id: '4', name: 'Boat Smart Watch', description: '1.96" AMOLED display with Bluetooth calling.', price: 2499, image: 'https://picsum.photos/seed/watch/300/200', status: 'Delivered', canReturn: false },
  { id: '5', name: 'Logitech MX Master 3S', description: 'Wireless ergonomic mouse with quiet clicks.', price: 9995, image: 'https://picsum.photos/seed/mouse/300/200', status: 'Dispatched', canReturn: true },
  { id: '6', name: 'Dell 27" Monitor', description: '27" QHD IPS monitor, 75Hz refresh rate.', price: 18999, image: 'https://picsum.photos/seed/monitor/300/200', status: 'In-Progress', canReturn: true },
  { id: '7', name: 'Canon EOS 1500D', description: '24.1MP DSLR camera with 18-55mm lens.', price: 41990, image: 'https://picsum.photos/seed/camera/300/200', status: 'Delivered', canReturn: false },
  { id: '8', name: 'JBL Flip 6', description: 'Portable waterproof Bluetooth speaker.', price: 9999, image: 'https://picsum.photos/seed/speaker/300/200', status: 'Dispatched', canReturn: true },
];
