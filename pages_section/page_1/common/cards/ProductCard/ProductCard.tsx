"use client";

import { ProductCardRoot as Root } from "./components/Root";
import { ProductCardImage as Image } from "./components/Image";
import { ProductCardMeta as Meta } from "./components/Meta";
import { ProductCardTitle as Title } from "./components/Title";
import { ProductCardBrand as Brand } from "./components/Brand";
import { ProductCardFooter as Footer } from "./components/Footer";
import {
  ProductCardFavoriteButton as FavoriteButton,
  ProductCardCompareButton as CompareButton,
} from "./components/Actions";
import {
  ProductCardBody as Body,
  ProductCardActionsGroup as Actions,
} from "./components/Layouts";

export const ProductCard = {
  Root,
  Image,
  Meta,
  Title,
  Brand,
  Footer,
  FavoriteButton,
  CompareButton,
  Body,
  Actions,
};
