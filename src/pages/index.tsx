import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, FormGroup, Label, Input, Button } from "react-bootstrap";
import * as Yup from "yup";
import { productsSchema } from "./api/server/models/products.schema.ts";

const ProductForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(productsSchema)
  });

  const onSubmit = async data => {
    setIsSubmitting(true);
    setSuccessMessage("");

    // Submit the form data to your API
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setSuccessMessage("Product created successfully!");
    } else {
      // Handle error
    }

    setIsSubmitting(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label>Product Number</Label>
        <Input type="number" {...register("productNum")} />
        {errors.productNum && (
          <span className="text-danger">{errors.productNum.message}</span>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Name</Label>
        <Input type="text" {...register("name")} />
        {errors.name && (
          <span className="text-danger">{errors.name.message}</span>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Price</Label>
        <Input type="number" {...register("price")} />
        {errors.price && (
          <span className="text-danger">{errors.price.message}</span>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Stock</Label>
        <Input type="number" {...register("stock")} />
        {errors.stock && (
          <span className="text-danger">{errors.stock.message}</span>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Average Cost</Label>
        <Input type="number" {...register("avgCost")} />
        {errors.avgCost && (
          <span className="text-danger">{errors.avgCost.message}</span>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Is Atomic</Label>
        <Input type="checkbox" {...register("isAtomic")} />
      </FormGroup>

      <FormGroup>
        <Label>Categories</Label>
        <Input type="textarea" {...register("categories")} />
        {errors.categories && (
          <span className="text-danger">{errors.categories.message}</span>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Product Tree</Label>
        <Input type="textarea" {...register("productTree")} />
        {errors.productTree && (
          <span className="text-danger">{errors.productTree.message}</span>
        )}
      </FormGroup>

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>

      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
    </Form>
  );
};

export default ProductForm;
