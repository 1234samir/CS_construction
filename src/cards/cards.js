import React from 'react';
import { Card as BCard, Button, Image } from 'react-bootstrap';
import './cards.css';

const Img = () => <Image className="bck_card" roundedCircle="roundedCircle" />;

export const Card = () => (
  <BCard className="card">
    <BCard.Img className="card_img" as={Img} />
    <BCard.Body>
      <BCard.Title>Card Title</BCard.Title>
      <BCard.Text>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </BCard.Text>
      <Button variant="primary">View details &raquo;</Button>
    </BCard.Body>
  </BCard>
);

export const Cards = () => {
  return (
    <div className="raper">
      <Card />
      <Card />
      <Card />
    </div>
  );
};
