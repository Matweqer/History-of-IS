import React from 'react'
import { Link } from 'react-router-dom'
import { DepartmentButton } from 'components'

import portret from 'assets/images/portret-photo.svg'

import './bio.scss'


const Bio: React.FC = () => {
  return (
        <div className='Background'>
            <div className='Heading'>
                Олег Борисович Макаревич
            </div>
            <div className='Description'>
                <div className='DescriptionTextBlock'>
                    Олег Борисович Макаревич — советский и российский учёный в
                    области разработки многопроцессорных вычислительных систем и средств защиты информации,
                    доктор технических наук (1983), профессор (1986), заслуженный изобретатель РСФСР (1987),
                    заслуженный деятель науки Российской Федерации (2001). Почётный работник высшего
                    профессионального образования РФ (2006).
                </div>
            </div>
            <div className='Biography'>
                <div className='BioFirstBlock'>
                    <div className='PhotoBackground'/>
                    <img src={portret} alt="Олег Борисович Макаревич" className='PortretPhoto'/>
                    <div className='FirstBlockText'>
                        Родился 13 сентября 1934 г., станция Оловянная Читинской области.
                        С 1953 по 1955 г. служил в Советской Армии. В 1956 г. поступил, а в 1961 г.
                        окончил Таганрогский государственный радиотехнический институт с дипломом инженера-электрика.
                        <br/>
                        <br/>
                        С 1962 года работал там же, в ТРТИ/ТРТУ/ЮФУ: ассистент, старший инженер,
                        заведующий проблемной лабораторией цифровых интегрирующих машин,
                        заведующий отделом многопроцессорных систем НИИ МВС (1973—1996),
                        Ученые степени кандидата и доктора технических наук в области многопроцессорных
                        вычислительных систем получил в 1970г. и 1983.г. соответственно, звание профессора в 1986 г.
                        <br/>
                        <br/>
                        В 1997 году по его инициативе создана кафедра безопасности информационных
                        технологий, а затем факультет информационной безопасности. С 1997 по 2013
                        годы он был заведующим кафедрой безопасности информационных технологий и
                        директором Южно-Российского регионального центра по проблемам информационной
                        безопасности в системе высшей школы.
                    </div>
                </div>
                <div className='SecondBlock'>
                    <div className='SecondBlockText'>
                        Макаревич О.Б. является автором более 300 научных работ,
                        в том числе 75 изобретений и 9 монографий. Он был главным конструктором ряда разработок,
                        в частности вычислительного комплекса ЕС-2703 (16-ти компьютерной вычислительной системы)
                        и разработчиком серии интегральных микросхем К-502 (цифровых интеграторов).
                        Участник выполнения грантов РФФИ и Минобразования. За личный вклад в укрепление
                        государственной системы защиты информации и оказание содействия в решении задач,
                        возложенных на Гостехкомиссию России в Южном федеральном округе Макаревич О.Б.
                        награжден медалью «За укрепление государственной системы защиты информации II степени».
                        Макаревичем О.Б. сформирована и успешно функционирует научно-педагогическая школа
                        «Интеллектуальные системы защиты информации на базе нейросетевых технологий».
                        Кандидатские диссертации защитили более двадцати его учеников,
                        один – А.Г. Чефранов – докторскую. За время работы в ТРТУ участвовал в качестве исполнителя,
                        заместителя научного руководителя и научного руководителя в выполнении более 40 НИОКР.
                        <br/>
                        <br/>
                        Макаревич О.Б. являлся председателем диссертационного совета
                        Д 212.208.25 по защите докторских диссертаций по специальностям 05.13.19 и 05.25.05,
                        членом специализированных советов по защите диссертаций Д 212.208.21 и Д 212.208.24 в ТТИ ЮФУ.
                        <br/>
                        <br/>
                        С 1999 года организовал и провел тринадцать конференций
                        с международным участием «Информационная безопасность», десять
                        международных конференций «Security of Information and Networks».
                        <br/>
                        <br/>
                        Умер 3 ноября 2022 года после продолжительной болезни.
                        Похоронен на Аллее Славы Мариупольского кладбища в городе Таганрог.
                    </div>
                </div>
                <div className='LowerButton'>
                    <Link to="/origin">
                        <DepartmentButton name="Зарождение кафедры"/>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export { Bio }
