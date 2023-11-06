import React from 'react';
import img from '../../images/description/secDesc.jpg';
import carImg from '../../images/description/car.jpg';
import redTer from '../../images/description/red.jpg';
import {
  StyledSection,
  StyledDescImg,
  StyledDescText,
} from '../Description/Description.styled';

const SecondDescription = () => {
  return (
    <StyledSection>
      <StyledDescImg src={img} alt="Термос" />
      <StyledDescText>
        Разом із основним акумулятором, у комплекті йде також другий. Це
        дозволить використовувати пристрій вдвічі довше, просто змінюючи між
        собою два акумулятори. <br />
        Механічний редуктор на металевих шестернях працює на двох швидкостях.
      </StyledDescText>
      <StyledDescImg src={carImg} alt="Термос" />
      <StyledDescText>
        Перший – це режим від нуля до 350 обертів на хвилину, який дозволяє
        працювати з максимальним моментом, що крутить, як шуруповерт, а також
        застосовується для свердління, яке вимагає великих зусиль. <br />
        Другий режим – від нуля до 1300 обертів за хвилину. Його застосовують
        для того, щоб свердлити невеликі отвори, причому застосування великої
        сили абсолютно не потрібно.
      </StyledDescText>
      <StyledDescImg src={redTer} alt="Термос" />
    </StyledSection>
  );
};

export default SecondDescription;
