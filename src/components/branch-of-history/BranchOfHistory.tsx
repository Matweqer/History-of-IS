import { FC } from 'react';
import { NodeForBranch } from './node-for-branch/NodeForBranch';
import { dataForLeftNode, dataForRightNode } from '../../constants/constants';
import { IDataForNode } from '../../interfaces/interfaces';

import './styles.scss';
import { LeftNodeForBranch } from './nodeForLeftSideBranch/LeftNodeForBranch';
import { RightNodeForBranch } from './nodeForRightSideBranch/RightNodeForBranch';


export const BranchOfHistory: FC = () => {

  // return(
  //   <>
  //     <div className="container-for-header">
  //       <h1 className="history-of-institute">Краткая история кафедры</h1>
  //     </div>
  //     <div className="container">
  //       <div className="container-for-nodes">
  //         {dataForNode.map((dataForOneNode: IDataForNode) =>
  //           <NodeForBranch key={dataForOneNode.year} dataForNode={dataForOneNode}/>)}
  //       </div>
  //       <div className="horizontal-line">
  //       </div>
  //     </div>
  //   </>
  // );
  // return (
  //   <div className="container">
  //     <div className="leftSideContainer">
  //       {
  //         dataForLeftNode.map((node) => <LeftNodeForBranch key={node.year} dataForNode={node}/>)
  //       }
  //     </div>
  //     <div className="middleContainer">
  //       <div className="lineForAllHeight"></div>
  //     </div>
  //     <div className="rightSideContainer">
  //       {
  //         dataForRightNode.map((node) => <RightNodeForBranch key={node.year} dataForNode={node}/>)
  //       }
  //     </div>
  //   </div>
  // )

  return (
    <div className="timeline">
      <div className="container left">
        <div className="date">1996</div>
        <img src="images/1996.jpg" className="icon"/>
        <div className="content">
          <h2>Открытие кафедры</h2>
          <p>
            Kафедра БИТ была создана приказом ректора Таганрогского государственного радиотехнического университета. ТРТУ вошел в перечень учебных заведений, осуществляющих подготовку специалистов по вопросам защиты информации
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="date">1999</div>
        <img src="images/1999.jpg" className="icon"/>
        <div className="content">
          <h2>Международные конференции</h2>
          <p>
            Международные научно-практические конференции по информационной безопасности проводятся на базе кафедры БИТ. Участники конференции - представители Министерства образования и науки РФ, Аппарата Совета Безопасности РФ, Институт Криптографии при Академии ФСБ
          </p>
        </div>
      </div>
      <div className="container left">
        <div className="date">2000</div>
        <img src="images/2000.jpg" className="icon"/>
        <div className="content">
          <h2>Первый выпуск</h2>
          <p>
            Первый выпуск инженеров по специальности - "Организация и технология защиты информации". Была выпущена группа из 28 человек, причем 13 из них получили красный диплом
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="date">2002</div>
        <img src="images/2002.jpg" className="icon"/>
        <div className="content">
          <h2>Мировое сотрудничество</h2>
          <p>
            Кафедра БИТ начала активно работать на международном уровне, с момента получения гранта Российского фонда фундаментальных исследований на разработку мультимедиа-коллекции, посвященной А. П. Чехову
          </p>
        </div>
      </div>
      <div className="container left">
        <div className="date">2006</div>
        <img src="images/2006.jpg" className="icon"/>
        <div className="content">
          <h2>Премия ЗУБР</h2>
          <p>
            БИТ ТРТУ стала дипломантом национальной отраслевой премии по безопасности "Высокие технологии общего применения в интересах национальной обороны и безопасности - ЗУБР" за полноту и качество обеспечения учебного процесса
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="date">2008</div>
        <img src="images/2008.jpg" className="icon"/>
        <div className="content">
          <h2>Команда CTF «UFOlogists»</h2>
          <p>
            В 2008 году на кафедре Безопасности информационных технологий нашего факультета была организована студенческая команда CTF "UFOlogists". CTF (Capture the Flag) - это командные соревнования, целью которых является оценка умения участников атаковать и защищать компьютерные системы
          </p>
        </div>
      </div>
      <div className="container left">
        <div className="date">2013</div>
        <img src="images/2013.jpg" className="icon"/>
        <div className="content">
          <h2>CTF соревнования</h2>
          <p>
            По итогам 2013 года команда UFOlogists заняла 8-е место в международном рейтинге CTFtime. В соревнованиях CTF принимают участие более 3400 команд со всего мира, в том числе 96 команд из России. Также заняла 2-е место на HackIM 2013, 4-е место на RuCTF Quals 2013, 4-е место на ForbiddenBITS CTF 2013, 7 место на PHD CTF 2013 (3-е среди российских команд, единственная студенческая команда в финале)
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="date">2017</div>
        <img src="images/2017.jpg" className="icon"/>
        <div className="content">
          <h2>Чемпионат «WorldSkills»</h2>
          <p>
            На площадке Института компьютерных технологий и информационной безопасности ЮФУ прошел первый этап национального межвузовского чемпионата «Молодые профессионалы (WorldSkills Russia)» — открытый отборочный чемпионат ЮФУ по стандартам WorldSkills
          </p>
        </div>
      </div>
      <div className="container left">
        <div className="date">2019</div>
        <img src="images/2019.jpg" className="icon"/>
        <div className="content">
          <h2>Мировой чемпионат «Worldskills»</h2>
          <p>
            The 45th WorldSkills Competition / 45-й мировой чемпионат по
            профессиональному мастерству по стандартам «Worldskills»)
            Команда ЮФУ заняла второе место в компетенции "Blockchain-based
            Solution"
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="date">2020</div>
        <img src="images/2020.jpg" className="icon"/>
        <div className="content">
          <h2>Чемпионат BRICS Future Skills Challenge</h2>
          <p>
            Команда ЮФУ заняла второе место в компетенции "Разработка решений с
            использованием блокчейн технологий. Член команды от кафедры БИТ - Святослав Бобрышев
          </p>
        </div>
      </div>
    </div>
  )
}
