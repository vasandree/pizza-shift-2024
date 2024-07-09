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
