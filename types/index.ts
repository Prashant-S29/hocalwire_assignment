export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type NavlinkProps = {
  href: string;
  text: string;
};

export type CartPropsType = {
  productData: Product;
  quantity: number;
};
