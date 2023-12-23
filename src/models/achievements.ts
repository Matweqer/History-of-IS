import { type IAchievement } from '../types'

import firstVector from 'assets/images/firstVector.svg'
import secondVector from 'assets/images/secondVector.svg'
import thirdVector from 'assets/images/thirdVector.svg'
import fourthVector from 'assets/images/fourthVector.svg'
import fifthVector from 'assets/images/fifthVector.svg'
import sixthVector from 'assets/images/sixthVector.svg'
import seventhVector from 'assets/images/seventhVector.svg'
import eightVector from 'assets/images/eightVector.svg'

export const achievements: IAchievement[] = [
  {
    image: firstVector,
    description: '6-е место в финале PHDays IV'
  },
  {
    image: secondVector,
    description: 'Russian Cybersecurity Competition - 3 место'
  },
  {
    image: thirdVector,
    description: '2-е место на HackIM'
  },
  {
    image: fourthVector,
    description: '7-е место на PHD CTF (3-е  среди российских команд)'
  },
  {
    image: fifthVector,
    description: '4-е место на RuCTF Quals'
  },
  {
    image: sixthVector,
    description: 'финал RuCTF (3-е место среди студенческих команд)'
  },
  {
    image: seventhVector,
    description: '4-е место на ForbiddenBITS CTF'
  },
  {
    image: eightVector,
    description: '2-е место Хакатон CyberGarden (ИБ проект)'
  }
]

