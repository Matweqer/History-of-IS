import { type ITimelineItem } from 'types'

import openDepartment from 'assets/images/1996.jpg'
import internationalConference from 'assets/images/1999.jpg'
import firstGraduate from 'assets/images/2000.jpg'
import secoundInternationalConference from 'assets/images/2002.jpg'
import zubr from 'assets/images/2006.jpg'
import ctfTeam from 'assets/images/2008.jpg'
import ctfCompetition from 'assets/images/2013.jpg'
import worldSkills from 'assets/images/2017.jpg'
import worldSkillsInternational from 'assets/images/2019.jpg'
import BRICS from 'assets/images/2020.jpg'

export const timelineItems: ITimelineItem[] = [
  {
    title: 'Открытие кафедры',
    date: '1996',
    img: openDepartment,
    text: 'Kафедра БИТ была создана приказом ректора Таганрогского государственного радиотехнического\n' +
            'университета. ТРТУ вошел в перечень учебных заведений, осуществляющих подготовку специалистов по\n' +
            'вопросам защиты информации'
  },
  {
    title: 'Международные конференции',
    date: '1999',
    img: internationalConference,
    text: 'Международные научно-практические конференции по информационной безопасности проводятся на базе\n' +
            'кафедры БИТ. Участники конференции - представители Министерства образования и науки РФ, Аппарата\n' +
            'Совета Безопасности РФ, Институт Криптографии при Академии ФСБ'
  },
  {
    title: 'Первый выпуск',
    date: '2000',
    img: firstGraduate,
    text: 'Первый выпуск инженеров по специальности - "Организация и технология защиты информации". Была\n' +
            'выпущена группа из 28 человек, причем 13 из них получили красный диплом'
  },
  {
    title: 'Мировое сотрудничество',
    date: '2002',
    img: secoundInternationalConference,
    text: 'Кафедра БИТ начала активно работать на международном уровне, с момента получения гранта\n' +
            'Российского фонда фундаментальных исследований на разработку мультимедиа-коллекции, посвященной\n' +
            'А. П. Чехову'
  },
  {
    title: 'Премия ЗУБР',
    date: '2006',
    img: zubr,
    text: 'БИТ ТРТУ стала дипломантом национальной отраслевой премии по безопасности "Высокие технологии\n' +
            'общего применения в интересах национальной обороны и безопасности - ЗУБР" за полноту и качество\n' +
            'обеспечения учебного процесса'
  },
  {
    title: 'Команда CTF «UFOlogists»',
    date: '2008',
    img: ctfTeam,
    text: 'В 2008 году на кафедре Безопасности информационных технологий нашего факультета была\n' +
            'организована студенческая команда CTF "UFOlogists". CTF (Capture the Flag) - это командные\n' +
            'соревнования, целью которых является оценка умения участников атаковать и защищать компьютерные\n' +
            'системы'
  },
  {
    title: 'CTF соревнования',
    date: '2013',
    img: ctfCompetition,
    text: 'По итогам 2013 года команда UFOlogists заняла 8-е место в международном рейтинге CTFtime. В\n' +
            'соревнованиях CTF принимают участие более 3400 команд со всего мира, в том числе 96 команд из\n' +
            'России. Также заняла 2-е место на HackIM 2013, 4-е место на RuCTF Quals 2013, 4-е место на\n' +
            'ForbiddenBITS CTF 2013, 7 место на PHD CTF 2013 (3-е среди российских команд, единственная\n' +
            'студенческая команда в финале)'
  },
  {
    title: 'Чемпионат «WorldSkills»',
    date: '2017',
    img: worldSkills,
    text: 'На площадке Института компьютерных технологий и информационной безопасности ЮФУ прошел первый\n' +
            'этап национального межвузовского чемпионата «Молодые профессионалы (WorldSkills Russia)» —\n' +
            'открытый отборочный чемпионат ЮФУ по стандартам WorldSkills'
  },
  {
    title: 'Мировой чемпионат «Worldskills»',
    date: '2019',
    img: worldSkillsInternational,
    text: 'The 45th WorldSkills Competition / 45-й мировой чемпионат по\n' +
            'профессиональному мастерству по стандартам «Worldskills»)\n' +
            'Команда ЮФУ заняла второе место в компетенции "Blockchain-based\n' +
            'Solution"'
  },
  {
    title: 'Чемпионат BRICS Future Skills Challenge',
    date: '2020',
    img: BRICS,
    text: 'Команда ЮФУ заняла второе место в компетенции "Разработка решений с\n' +
            'использованием блокчейн технологий. Член команды от кафедры БИТ - Святослав Бобрышев'
  }
]
