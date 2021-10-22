type OrderBaseRequest = {
  title: string;
  description: string;
};

export interface PurchaseOrderRequest extends OrderBaseRequest {
  price: number;
  url: string;
}

export interface RefundOrderRequest extends OrderBaseRequest {
  price: number;
  url: string;
}
