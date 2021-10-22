type OrderBaseModel = {
  id: number;
  title: string;
  description: string;
  isApproved: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface PurchaseOrderModel extends OrderBaseModel {
  price: number;
  url: string;
  isPurchased: boolean;
}

export interface RefundOrderModel extends OrderBaseModel {
  price: number;
  isPaid: boolean;
  purchaseDate: Date;
}
