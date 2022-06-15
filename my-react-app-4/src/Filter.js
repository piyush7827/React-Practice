import React, { useState } from "react";

import {
  CardGroup,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  InputGroup,
  InputGroupText,
  Input,
} from "reactstrap";

export default function Filter() {
  const [filtertext, setFilterText] = useState("");
  const arr = [
    {
      name: " Water Resistant Watch",
      imageurl:
        "https://rukminim2.flixcart.com/image/800/960/k1nw9zk0/watch/m/f/4/bt7118-britex-original-imafjskrhdvhrff7.jpeg?q=50",
      rating: 4.5,
      price: 19990,
    },
    {
      name: "Quartz Analog Watch",
      imageurl:
        "https://rukminim2.flixcart.com/image/800/960/km2clu80/watch/h/c/m/ls2989-limestone-original-imagffqpymzcx7fy.jpeg?q=50",
      rating: 4.0,
      price: 14500,
    },
    {
      name: "Men Cargos",
      imageurl:
        "https://rukminim2.flixcart.com/image/800/960/kl2mljk0/cargo/a/r/e/3xl-gf-cargo-black-3xl-gyrfalcon-original-imagyaaum8mhbkxy.jpeg?q=50",
      rating: 4.2,
      price: 1200,
    },
    {
      name: "Air Cooler",
      imageurl:
        "https://rukminim2.flixcart.com/image/416/416/k6tniq80/air-cooler/w/z/k/platini-coolest-torque-px-97-bajaj-original-imafp7akmpnvrzt6.jpeg?q=70",
      rating: 4.6,
      price: 5964,
    },
  ];
  return (
    <div className="App">
      <InputGroup>
        <InputGroupText>Filter Your Products</InputGroupText>
        <Input
          type="text"
          value={filtertext}
          onChange={(event) => setFilterText(event.target.value)}
        />
      </InputGroup>
      <CardGroup>
        {arr
          .filter((arr) => arr.name.includes(filtertext))
          .map((item) => (
            <Card>
              <CardImg
                alt="Card image cap"
                src={item.imageurl}
                top
                width="300px"
                height="300px"
              />
              <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  ₹ {item.price}
                </CardSubtitle>

                <CardText>{item.rating}</CardText>
                <Button>Add TO Cart</Button>
              </CardBody>
            </Card>
          ))}
      </CardGroup>
    </div>
  );
}
