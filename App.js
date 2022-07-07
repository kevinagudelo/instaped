import React from "react";
import { ListOfCategory } from "./components/ListOfCategory";
import { GlobalStyle } from "./styles/GlobalStyles";
//import { PhotoCard } from "./components/PhotoCard";
import { ListOfPhotoCard } from "./components/ListOfPhotoCard";
import { Logo } from "./components/logo";
//import { Category } from "./components/Category";

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo/>
    <ListOfCategory />
    <ListOfPhotoCard/>
  </div>
);
