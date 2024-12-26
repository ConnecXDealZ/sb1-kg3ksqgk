export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'provider';
  history: ServiceHistory[];
}

export interface Service {
  id: string;
  category: string;
  subCategory: string;
  price: number;
  providerId: string;
  location: string;
  availability: boolean;
  reviews: Review[];
  averageRating: number;
}

export interface ServiceHistory {
  id: string;
  serviceId: string;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
  price: number;
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface PaymentData {
  merchantId: string;
  merchantKey: string;
  returnUrl: string;
  cancelUrl: string;
  notifyUrl: string;
  nameFirst: string;
  nameLast: string;
  emailAddress: string;
  paymentId: string;
  amount: number;
  itemName: string;
}