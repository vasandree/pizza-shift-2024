export type Dough = 'THIN' | 'THICK';

export type Size = 'SMALL' | 'MEDIUM' | 'LARGE';

export type Ingredients =
  | 'PINEAPPLE'
  | 'MOZZARELLA'
  | 'PEPERONI'
  | 'GREEN_PEPPER'
  | 'MUSHROOMS'
  | 'BASIL'
  | 'CHEDDAR'
  | 'PARMESAN'
  | 'FETA'
  | 'HAM'
  | 'PICKLE'
  | 'TOMATO'
  | 'BACON'
  | 'ONION'
  | 'CHILE'
  | 'SHRIMPS'
  | 'CHICKEN_FILLET'
  | 'MEATBALLS';

export interface PizzaDough {
  name: Dough;
  price: number;
}

export interface PizzaIngredient {
  name: Ingredients;
  cost: number;
  img: string;
}

export interface PizzaSize {
  name: Size;
  price: number;
}

export interface Pizza {
  id: string;
  name: string;
  ingredients: PizzaIngredient[];
  toppings: PizzaIngredient[];
  description: string;
  sizes: PizzaSize[];
  doughs: PizzaDough[];
  calories: number;
  protein: string;
  totalFat: string;
  carbohydrates: string;
  sodium: string;
  allergens: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isNew: boolean;
  isHit: boolean;
  img: string;
}

export interface BaseResponse {
  success: boolean;
  reason?: string;
}

export interface PizzasResponse extends BaseResponse {
  catalog: Pizza[];
}

export interface CreateOtpDto {
  phone: string;
}

export interface OtpResponse extends BaseResponse {
  retryDelay: number;
}

export interface SignInDto {
  phone: string;
  code: number;
}

export interface User {
  _id: string;
  phone: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
  email?: string;
  city?: string;
}

export interface SignInResponse extends BaseResponse {
  user: User;
  token: string;
}

export interface SessionResponse extends BaseResponse {
  user: User;
}

export interface UpdateProfileProfileDto {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  city: string;
}

export interface UpdateProfileDto {
  profile: UpdateProfileProfileDto;
  phone: string;
}

export interface UpdateProfileResponse extends BaseResponse {
  user?: User;
}

export interface CreatePizzaPaymentAddressDto {
  street: string;
  house: string;
  apartment: string;
  comment?: string;
}

export interface CreatePizzaPaymentPersonDto {
  firstname: string;
  lastname: string;
  middlename?: string;
  phone: string;
}

export interface CreatePizzaPaymentDebitCardDto {
  pan: string;
  expireDate: string;
  cvv: string;
}

export interface CreatePizzaPaymentPizzaDto {
  id: string;
  name: string;
  toppings: PizzaIngredient[];
  size: string;
  dough: string;
}

export interface CreatePizzaPaymentDto {
  receiverAddress: CreatePizzaPaymentAddressDto;
  person: CreatePizzaPaymentPersonDto;
  debitCard: CreatePizzaPaymentDebitCardDto;
  pizzas: CreatePizzaPaymentPizzaDto[];
}

export interface PizzaPerson {
  firstname: string;
  lastname: string;
  middlename: string;
  phone: string;
}

export interface PizzaAddress {
  street: string;
  house: string;
  apartment: string;
  comment: string;
}

export const PizzaStatus = {
  0: 'В обрабртке',
  1: 'Ждет курьера',
  2: 'В пути',
  3: 'Доставлен',
  4: 'Отменен'
};

export interface PizzaOrder {
  _id: string;
  person: PizzaPerson;
  receiverAddress: PizzaAddress;
  status: number;
  cancellable: boolean;
}
export interface PizzaPaymentResponse extends BaseResponse {
  order: PizzaOrder;
}

export interface PizzaOrderResponse extends BaseResponse {
  order: PizzaOrder;
}

export interface PizzaOrdersResponse extends BaseResponse {
  orders: PizzaOrder[];
}

export interface CancelPizzaOrderResponse extends BaseResponse {}
