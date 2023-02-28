/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: Date;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: Date;
  /** An RFC 3986 and RFC 3987 compliant URI string. */
  URL: string;
};

export type Attributes = {
  __typename?: 'Attributes';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  product?: Maybe<Product>;
  size?: Maybe<Scalars['Float']>;
  storage?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  weight?: Maybe<Scalars['Float']>;
};

export type Brand = {
  __typename?: 'Brand';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  model: Model;
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

/** A paginated list of Brand edges. */
export type BrandConnection = {
  __typename?: 'BrandConnection';
  /** A list of Brand edges. */
  edges: Array<BrandEdge>;
  /** Pagination information about the list of edges. */
  pageInfo: PageInfo;
};

/** An edge that contains a node of type Brand and a cursor. */
export type BrandEdge = {
  __typename?: 'BrandEdge';
  /** A unique cursor that can be used for pagination. */
  cursor: Scalars['String'];
  /** The Brand node. */
  node: Brand;
};

export type Category = {
  __typename?: 'Category';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  products?: Maybe<ProductConnection>;
  updated_at: Scalars['DateTime'];
};


export type CategoryproductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};

/** A paginated list of Category edges. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** A list of Category edges. */
  edges: Array<CategoryEdge>;
  /** Pagination information about the list of edges. */
  pageInfo: PageInfo;
};

/** An edge that contains a node of type Category and a cursor. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** A unique cursor that can be used for pagination. */
  cursor: Scalars['String'];
  /** The Category node. */
  node: Category;
};

export type ClientSecretInput = {
  amount?: InputMaybe<Scalars['Float']>;
  deliveryPlace?: InputMaybe<Scalars['String']>;
  products: Array<PaymentInput>;
};

export type ClientSecretPayload = {
  __typename?: 'ClientSecretPayload';
  clientSecret?: Maybe<Scalars['String']>;
  userErrors?: Maybe<Array<Maybe<UserError>>>;
};

export type Color = {
  __typename?: 'Color';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  updatedAt: Scalars['DateTime'];
};

export type Delivery = {
  __typename?: 'Delivery';
  createdAt: Scalars['DateTime'];
  deliveryDate: Scalars['Date'];
  deliveryPlace: Scalars['String'];
  id: Scalars['ID'];
  productSale: ProductSale;
  updatedAt: Scalars['DateTime'];
};

export type DeliveryCreatePayload = {
  __typename?: 'DeliveryCreatePayload';
  delivery?: Maybe<Delivery>;
  userErrors?: Maybe<Array<Maybe<UserError>>>;
};

export type DeliveryInput = {
  deliveryDate?: InputMaybe<Scalars['Date']>;
  deliveryPlace?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  productSaleId?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<DeliveryStatus>;
};

/** Delivery status */
export enum DeliveryStatus {
  /** Completed */
  COMPLETED = 'COMPLETED',
  /** Pending */
  PENDING = 'PENDING'
}

export type Discount = {
  __typename?: 'Discount';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  endAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  product: Product;
  startAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

/** Represents an error in the input of a mutation. */
export type DisplayableError = {
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** Represents a generic file. */
export type GenericFile = {
  __typename?: 'GenericFile';
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The name of the file. */
  name: Scalars['String'];
  /** The URL of the file. */
  url: Scalars['URL'];
};

/** Represents an image. */
export type Image = {
  __typename?: 'Image';
  /** The original height of the image in pixels. */
  height?: Maybe<Scalars['Int']>;
  /** A unique identifier for the image. */
  id: Scalars['ID'];
  /** The location of the original image as a URL. */
  originalSrc: Scalars['URL'];
  width?: Maybe<Scalars['Int']>;
};

export type Model = {
  __typename?: 'Model';
  brand: Brand;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  modelName: Scalars['String'];
  product: Product;
  updated_at: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  clientSecret?: Maybe<ClientSecretPayload>;
  deliveryCreate?: Maybe<DeliveryCreatePayload>;
  productSaleCreate?: Maybe<ProductSaleCreatePayload>;
  sellerCreate?: Maybe<SellerCreatePayload>;
  sellerLogin?: Maybe<SellerLoginPayload>;
  sellerUpdate?: Maybe<SellerUpdatePayload>;
  userLogin?: Maybe<UserLoginPayload>;
  userRegister?: Maybe<UserRegisterPayload>;
  userUpdate?: Maybe<UserUpdatePayload>;
};


export type MutationclientSecretArgs = {
  input: ClientSecretInput;
};


export type MutationdeliveryCreateArgs = {
  input: DeliveryInput;
};


export type MutationproductSaleCreateArgs = {
  input: PaymentInput;
};


export type MutationsellerCreateArgs = {
  input: SellerInput;
};


export type MutationsellerLoginArgs = {
  input: SellerLoginInput;
};


export type MutationsellerUpdateArgs = {
  input?: InputMaybe<SellerInput>;
};


export type MutationuserLoginArgs = {
  input: UserLoginInput;
};


export type MutationuserRegisterArgs = {
  input: UserInput;
};


export type MutationuserUpdateArgs = {
  input: UserInput;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  COUNT = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  AVG = 'AVG',
  /** Amount of items. */
  COUNT = 'COUNT',
  /** Maximum. */
  MAX = 'MAX',
  /** Minimum. */
  MIN = 'MIN',
  /** Sum. */
  SUM = 'SUM'
}

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of nodes in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

export type PaymentInput = {
  amount?: InputMaybe<Scalars['Float']>;
  currentPrice?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<imageType>;
  name?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  saleId?: InputMaybe<Scalars['ID']>;
  tax?: InputMaybe<Scalars['Float']>;
  total?: InputMaybe<Scalars['Float']>;
};

export type Person = {
  __typename?: 'Person';
  /** When the account was created. */
  created_at: Scalars['DateTime'];
  dni: Scalars['String'];
  /** Unique email address. */
  email: Scalars['String'];
  /** Person first name. */
  firstName: Scalars['String'];
  homeAddress: Scalars['String'];
  id: Scalars['ID'];
  /** Person last name. */
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
  /** When the account was last updated. */
  updated_at: Scalars['DateTime'];
};

export type Price = {
  __typename?: 'Price';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  price: Scalars['Float'];
  product: Product;
  updated_at: Scalars['DateTime'];
};

export type Product = {
  __typename?: 'Product';
  attributes: Attributes;
  category: Category;
  color: Color;
  createdAt: Scalars['DateTime'];
  currentPrice?: Maybe<Scalars['Float']>;
  currentStock?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  discount?: Maybe<Discount>;
  id: Scalars['ID'];
  image?: Maybe<Image>;
  model: Model;
  name: Scalars['String'];
  prices: Array<Price>;
  productDetails: Array<Maybe<ProductDetail>>;
  status?: Maybe<ProductStatus>;
  updatedAt: Scalars['DateTime'];
};

/** A paginated list of Product edges. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** A list of Product edges. */
  edges: Array<ProductEdge>;
  /** Pagination information about the list of edges. */
  pageInfo: PageInfo;
};

export type ProductCreatePayload = {
  __typename?: 'ProductCreatePayload';
  productEdge?: Maybe<ProductEdge>;
  userErrors?: Maybe<Array<Maybe<UserError>>>;
};

export type ProductDetail = {
  __typename?: 'ProductDetail';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  price: Scalars['Float'];
  product: Product;
  productSale: ProductSale;
  quantity: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

/** A paginated list of ProductDetail edges. */
export type ProductDetailConnection = {
  __typename?: 'ProductDetailConnection';
  /** A list of ProductDetail edges. */
  edges: Array<ProductDetailEdge>;
  /** Pagination information about the list of edges. */
  pageInfo: PageInfo;
};

/** An edge that contains a node of type ProductDetail and a cursor. */
export type ProductDetailEdge = {
  __typename?: 'ProductDetailEdge';
  /** A unique cursor that can be used for pagination. */
  cursor: Scalars['String'];
  /** The ProductDetail node. */
  node: ProductDetail;
};

/** An edge that contains a node of type Product and a cursor. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A unique cursor that can be used for pagination. */
  cursor: Scalars['String'];
  /** The Product node. */
  node: Product;
};

export type ProductInput = {
  description?: InputMaybe<Scalars['String']>;
  discountId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  modelId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProductStatus>;
};

export type ProductSale = {
  __typename?: 'ProductSale';
  amount: Scalars['Float'];
  buyerableId: Scalars['ID'];
  buyerableType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  delivery?: Maybe<Delivery>;
  productDetails: Array<ProductDetail>;
  seller?: Maybe<Seller>;
  tax: Scalars['Float'];
  total: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type ProductSaleCreatePayload = {
  __typename?: 'ProductSaleCreatePayload';
  productSale?: Maybe<ProductSale>;
  userErrors?: Maybe<Array<Maybe<UserError>>>;
};

/** Product status */
export enum ProductStatus {
  /** Active */
  ACTIVE = 'ACTIVE',
  /** Inactive */
  INACTIVE = 'INACTIVE'
}

export type ProductUpdatePayload = {
  __typename?: 'ProductUpdatePayload';
  product?: Maybe<Product>;
  userErrors?: Maybe<Array<Maybe<UserError>>>;
};

export type Query = {
  __typename?: 'Query';
  brand?: Maybe<Brand>;
  brands?: Maybe<BrandConnection>;
  categories?: Maybe<CategoryConnection>;
  category?: Maybe<Category>;
  payment?: Maybe<ProductDetail>;
  payments?: Maybe<ProductDetailConnection>;
  product?: Maybe<Product>;
  products?: Maybe<ProductConnection>;
  /** Find a single user by an identifying attribute. */
  seller?: Maybe<Seller>;
  /** List multiple users. */
  sellers?: Maybe<SellerConnection>;
  /** Find a single user by an identifying attribute. */
  user?: Maybe<User>;
  /** List multiple users. */
  users?: Maybe<UserConnection>;
  viewer: User;
};


export type QuerybrandArgs = {
  id: Scalars['ID'];
};


export type QuerybrandsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


export type QuerycategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  productsId?: InputMaybe<Scalars['ID']>;
};


export type QuerycategoryArgs = {
  id: Scalars['ID'];
};


export type QuerypaymentArgs = {
  id: Scalars['ID'];
};


export type QuerypaymentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


export type QueryproductArgs = {
  id: Scalars['ID'];
};


export type QueryproductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['ID']>;
  first: Scalars['Int'];
  query?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProductStatus>;
};


export type QuerysellerArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerysellersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};


export type QueryuserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryusersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
};

/** Account of a person who utilizes this application. */
export type Seller = {
  __typename?: 'Seller';
  carnet: Scalars['String'];
  /** When the account was created. */
  created_at: Scalars['DateTime'];
  /** Unique email address. */
  email: Scalars['String'];
  /** When the email was verified. */
  email_verified_at?: Maybe<Scalars['DateTime']>;
  /** Seller first name. */
  firstName: Scalars['String'];
  hiredAt: Scalars['Date'];
  /** Unique primary key. */
  id: Scalars['ID'];
  /** Seller last name. */
  lastName: Scalars['String'];
  password: Scalars['String'];
  productSale?: Maybe<ProductSale>;
  /** When the account was last updated. */
  updated_at: Scalars['DateTime'];
};

/** A paginated list of Seller edges. */
export type SellerConnection = {
  __typename?: 'SellerConnection';
  /** A list of Seller edges. */
  edges: Array<SellerEdge>;
  /** Pagination information about the list of edges. */
  pageInfo: PageInfo;
};

export type SellerCreatePayload = {
  __typename?: 'SellerCreatePayload';
  seller?: Maybe<Seller>;
  sellerToken?: Maybe<Scalars['String']>;
  userErrors?: Maybe<Array<Maybe<UserError>>>;
};

/** An edge that contains a node of type Seller and a cursor. */
export type SellerEdge = {
  __typename?: 'SellerEdge';
  /** A unique cursor that can be used for pagination. */
  cursor: Scalars['String'];
  /** The Seller node. */
  node: Seller;
};

export type SellerInput = {
  carnet: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  hiredAt: Scalars['Date'];
  id?: InputMaybe<Scalars['ID']>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmed: Scalars['String'];
};

export type SellerLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SellerLoginPayload = {
  __typename?: 'SellerLoginPayload';
  seller?: Maybe<Seller>;
  sellerToken: Scalars['String'];
  userErrors?: Maybe<Array<Maybe<UserError>>>;
};

export type SellerUpdatePayload = {
  __typename?: 'SellerUpdatePayload';
  seller?: Maybe<Seller>;
  userErrors?: Maybe<Array<Maybe<UserError>>>;
};

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page. */
  perPage: Scalars['Int'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  ASC = 'ASC',
  /** Sort records in descending order. */
  DESC = 'DESC'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  ONLY = 'ONLY',
  /** Return both trashed and non-trashed results. */
  WITH = 'WITH',
  /** Only return non-trashed results. */
  WITHOUT = 'WITHOUT'
}

/** Account of a person who utilizes this application. */
export type User = {
  __typename?: 'User';
  /** When the account was created. */
  created_at: Scalars['DateTime'];
  /** Unique primary key. */
  id: Scalars['ID'];
  password: Scalars['String'];
  person?: Maybe<Person>;
  picture?: Maybe<Image>;
  /** When the account was last updated. */
  updated_at: Scalars['DateTime'];
};

/** A paginated list of User edges. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of User edges. */
  edges: Array<UserEdge>;
  /** Pagination information about the list of edges. */
  pageInfo: PageInfo;
};

/** An edge that contains a node of type User and a cursor. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A unique cursor that can be used for pagination. */
  cursor: Scalars['String'];
  /** The User node. */
  node: User;
};

/** Represents an error in the input of a mutation. */
export type UserError = DisplayableError & {
  __typename?: 'UserError';
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

export type UserInput = {
  dni?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  homeAddress?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserLoginPayload = {
  __typename?: 'UserLoginPayload';
  userAuth?: Maybe<User>;
  userErrors?: Maybe<Array<Maybe<UserError>>>;
  userToken?: Maybe<Scalars['String']>;
};

export type UserRegisterPayload = {
  __typename?: 'UserRegisterPayload';
  user?: Maybe<User>;
  userErrors?: Maybe<Array<Maybe<UserError>>>;
  userToken?: Maybe<Scalars['String']>;
};

export type UserUpdatePayload = {
  __typename?: 'UserUpdatePayload';
  user?: Maybe<User>;
  userErrors?: Maybe<Array<Maybe<UserError>>>;
};

export type imageType = {
  originalSrc?: InputMaybe<Scalars['String']>;
};
