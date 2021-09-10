import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){
  return <div>
    <h1>I like {name}</h1>
    <h2>{rating}/5</h2>
    <img src={picture} alt={name} />
    </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    rating: 2
  },
  {
    id: 2,
    name: "ramen",
    image: "https://cdn.pixabay.com/photo/2019/11/23/15/26/ramen-4647408_1280.jpg",
    rating: 4
  },
  {
    id: 3,
    name: "bibimbap",
    image: "https://cdn.pixabay.com/photo/2015/05/11/09/59/bibimbap-762218_1280.jpg",
    rating: 3
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
