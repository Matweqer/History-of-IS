import React from 'react';
import { Achievement } from '../../components/achievement/Achievement';
import Footer from "../../components/footer";
import Header from "../../components/header";
import { PlaceOfWork } from '../../components/place-of-work/PlaceOfWork';
import { achievements, placesOfWork } from "../../constants/constants";
import { IAchievement } from '../../types/types';

import './CtfPage.scss';

export const CtfPage: React.FC = () => {

  return (
    <div className="ctf-page">
      <Header />

      <div className="ctf-page__first-section">
        <div className="container-ctf">
          <h3 className="header-text" color={'#FFF'}>Зарождение CTF на кафедре БИТ</h3>
          <div className="first-description-block">
            <img src="images/ctfFlag.svg" style={{ width: '147px' }}/>
            <div className="description" style={{ marginLeft: '40px' }}>
              CTF (Capture the Flag) - это командные соревнования, целью которых является оценка умения участников атаковать и защищать компьютерные системы. Несколько команд в течение заранее определенного времени защищают свои сети и атакуют чужие. Каждой команде выдается сервер с рядом сервисов, которые имеют ряд уязвимостей, намеренно введённых разработчиками
            </div>
          </div>
          <div className="second-description-block">
            <div className="description">
              В 2008 году на кафедре Безопасности информационных технологий была организована студенческая команда CTF "UFOlogists". В 2009 году команда организовала первые CTF соревнования на юге России — UFOCTF. "UFOlogists" входила в десятку лучших команд мирового рейтинга, участвуя в финалах международных и всероссийских чемпионатов, занимая призовые места
            </div>
            <img src="images/ufoLogistics.svg" style={{ width: '150px' }}/>
          </div>
        </div>
      </div>

      <div className="ctf-page__second-section">
        <div className="container-black">
          <h3 className="header-text" color={'#000'}>В числе достижений</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', height: '500px' }}>
            {
              achievements.map((achievement: IAchievement) =>
                <Achievement key={achievement.image} image={achievement.image} description={achievement.description}/>)
            }
          </div>
        </div>
      </div>

      <div className="ctf-page__third-section">
        <div className="container-black">
          <h3 className="header-text" color={'#000'}>В числе достижений</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', height: '500px' }}>
            {
              placesOfWork.map((placeOfWork) => <PlaceOfWork key={placeOfWork} description={placeOfWork}/>)
            }
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
