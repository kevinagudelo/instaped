import React, { useState, useEffect, Fragment } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

function userCategoriesData(){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(function () {
        setLoading(true)
        window.fetch("https://petgram-server-kevin-coral.vercel.app/categories")
          .then((res) => res.json())
          .then((response) => {
            setCategories(response);
            setLoading(false)
          });
      }, []);

      return {categories, loading}
}

export const ListOfCategory = () => {
  const {categories,loading} = userCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  
  useEffect(function(){
    const onscroll = e => {
        const newShowFixed = window.scrollY >
        200
        showFixed !== newShowFixed &&
        setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll',onscroll)

    return () => document.removeEventListener('scroll',onscroll)

  })
  const renderList = (fixed) => (
    <List fixed={fixed}>
      { loading ? <h1>loading...</h1>:
      categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
  

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};
