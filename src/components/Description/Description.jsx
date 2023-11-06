import React from 'react';
import description from '../../images/description/desc.jpg';
import {
  StyledSection,
  StyledDescImg,
  StyledDescText,
} from './Description.styled';

const Description = () => {
  return (
    <StyledSection>
      <StyledDescImg src={description} alt="Термос" />
      <StyledDescText>
        Шуруповерт Makita призначений для закручування та викручування шурупів у
        деревину, пластмасу та інші матеріали. Цей інструмент має 17 режимів
        обертання, включаючи режим «реверс», що дає фору багатьом аналогічним. <br />
        Також, слід зазначити можливість активації LED-підсвітки, що
        допоможе вирішувати багато завдань у важких місцях та при досить
        поганому освітленні. <br />
        Шуруповерт гарний у своїй справі. Швидкість
        обертання висока. А все це можливо завдяки потужному електродвигуну,
        який живиться від ємного акумулятора.
      </StyledDescText>
    </StyledSection>
  );
};

export default Description;
