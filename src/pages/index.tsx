import React from "react";
import ProductForm from "./ProductForm";

export default function Home() {
  return (
    <div>
      <h1>Product Form</h1>
      <div className="well">
        <ProductForm />
      </div>
    </div>
  );
}
