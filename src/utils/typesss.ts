export interface BillingFormData {
    firstName: string;
    lastName: string;
    companyName?: string;
    street: string;
    country: string;
    state: string;
    zipCode: string;
    email: string;
    phone: string;
    orderNotes?: string;
    paymentMethod: 'cash' | 'paypal' | 'amazon';
  }
  