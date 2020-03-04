import React from 'react';

const AddProductForm = (props) =>{
  //hook statement setting up state for new product
  const [newProduct, setNewProduct] = useState({
    owner: 0,
    title: "",
    description: "",
    price: "",
    availability: false,
    brand: "",
    model: "",
    imgURL: "",
    renter: false
  })
  //handle changes statement to access the event object and give our object key value pairs
  const handleChanges = event => {
    console.log("value", event.target.value);
    console.log("name", event.target.name)

    setNewProduct({...newProduct, [event.target.name]: event.target.value})
  };

  // const addNewProduct = product => {
  //
  //   const newProduct = {
  //     id: Date.now(),
  //     owner: product.owner,
  //     title: product.title,
  //     description: product.description,
  //     price: product.price,
  //     availability: product.availability,
  //     brand: product.brand,
  //     model: product.model,
  //     imgURL: product.imgURL,
  //     renter: product.renter,
  //   };
  //function to submit a new product and reset the state of setNewProduct however i think we would need to add it to an array passed through props or something in the addNewProduct function.
    const submitProduct = event => {
      event.preventDefault();
      addNewProduct(newProduct);
      setNewProduct({
        owner: 0,
        title: "",
        description: "",
        price: "",
        availability: false,
        brand: "",
        model: "",
        imgURL: "",
        renter: false
      });
    };
// le form
  return(
    <section>
    <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title </label>
        <input
            type = "text"
            placeholder = "Enter Title"
            id = "title"
            name = "title"
            value = {newProduct.title}
            onChange = {handleChange}
        />
        <label htmlFor="type"> Type </label>
        <input
            type = "text"
            placeholder = "Enter Type"
            id = "type"
            name = "type"
            value = {newProduct.type}
            onChange = {handleChange}
        />
        <label htmlFor="brand"> Brand </label>
        <input
            type = "text"
            placeholder = "Enter Brand"
            id = "brand"
            name = "brand"
            value = {newProduct.brand}
            onChange = {handleChange}
        />
        <label htmlFor="model"> Model </label>
        <input
            type = "text"
            placeholder = "Enter Model"
            id = "model"
            name = "model"
            value = {newProduct.model}
            onChange = {handleChange}
        />

        <label htmlFor="description"> Description </label>
        <input
            type = "text"
            placeholder = "Enter Description"
            id = "description"
            name = "description"
            value = {newProduct.description}
            onChange = {handleChange}
        />
        <label htmlFor="price"> Price </label>
        <input
            type = "text"
            placeholder = "Enter Price"
            id = "price"
            name = "price"
            value = {newProduct.price}
            onChange = {handleChange}
        />

        </form>

    </section>
  )
}
