import { type IOverviewBlock } from 'types'

import isConference from 'assets/images/is-conference.jpg'
import perspectiveConference from 'assets/images/perspective-conference.jpg'
import ctf from 'assets/images/ctf.jpg'
import sciencebit from 'assets/images/sciencebit.jpg'

export const overviewBlocks: IOverviewBlock[] = [
  {
    img: isConference,
    imgAltText: 'Конференция “Информационная безопасность”',
    buttonText: 'Подробнее',
    title: 'Конференция “Информационная безопасность”',
    link: '/is-conference',
    isSwap: true
  },
  {
    img: perspectiveConference,
    imgAltText: 'Конференция “Перспектива”',
    buttonText: 'Подробнее',
    title: 'Конференция “Перспектива”',
    link: '/perspective-conference',
    isSwap: false
  },
  {
    img: ctf,
    imgAltText: 'ctf',
    buttonText: 'Подробнее',
    title: 'CTF',
    link: '/ctf',
    isSwap: false
  },
  {
    img: sciencebit,
    imgAltText: 'Научная деятельность',
    buttonText: 'Подробнее',
    title: 'Научная деятельность',
    link: '/science',
    isSwap: true
  }
]
