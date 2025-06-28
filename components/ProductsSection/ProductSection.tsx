import React from "react";
import ProductCard from "../ProductCard";

const Product = [
  {
    imgUrl: "/assets/product/1.png",
    title: "Добавки для бетона",
  },
  {
    imgUrl: "/assets/product/2.png",
    title: "Продукты для защиты фасадов",
  },
  {
    imgUrl: "/assets/product/3.png",
    title: "Инъекции для трещин",
  },
  {
    imgUrl: "/assets/product/4.png",
    title: "Герметизация деформационных и строительных швов",
  },
  {
    imgUrl: "/assets/product/5.png",
    title: "Влажные помещения",
  },
  {
    imgUrl: "/assets/product/6.png",
    title: "Надземные автостоянки / Зелёные крыши",
  },
  {
    imgUrl: "/assets/product/7.png",
    title: "Резервуары для воды / Бассейны",
  },
  {
    imgUrl: "/assets/product/8.png",
    title: "Фундаменты и подпорные стены из бетона",
  },
  {
    imgUrl: "/assets/product/9.png",
    title: "Террасы / Крыши",
  },
  {
    imgUrl: "/assets/product/10.png",
    title: "Напольные покрытия",
  },
];

export default function ProductSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:!justify-center gap-8">
      {Product.map((product, index) => (
        <ProductCard key={index} imgUrl={product.imgUrl} title={product.title}/>
      ))}
    </div>
  );
}
