import marioPic from '../images/english-teachers/mario.webp';
import andrewPic from '../images/english-teachers/andrew.webp';
import jacobPic from '../images/english-teachers/jacob.webp';
import emilyPic from '../images/english-teachers/emily.webp';
import markPic from '../images/english-teachers/mark.webp';
import samPic from '../images/english-teachers/sam.webp';
import usaFlag from '../images/english-teachers/usaFlag.png';
import canadaFlag from '../images/english-teachers/canadaFlag.png';
import ukFlag from '../images/english-teachers/ukFlag.png';
import { v4 as uuidv4 } from 'uuid';

let EnglishTeachers = [
    {
        name: 'Mario',
        flag: canadaFlag,
        picture: marioPic,
        bio: 'Mario has worked as an English teacher in Taiwan for 25 years and been teaching and running Sky Education for 14 years.',
        ChineseBio: 'Mario 出生於加拿大渥太華. 在台灣 當了25年的英語老師. 他經營Sky Education和教學已近14年.',
        id: uuidv4()
    },
    {
        name: 'Sam',
        flag: usaFlag,
        picture: samPic,
        bio: 'Sam has worked as an English teacher and comedian for nearly 8 years, starting in South Korea before coming to Sky Education 5 years ago.',
        ChineseBio: 'Sam 從事英語教師和喜劇演員工作近 8 年，從韓國開始，5 年前加入天空教育。',
        id: uuidv4()
    },
    {
        name: 'Jacob',
        flag: usaFlag,
        picture: jacobPic,
        bio: 'Jacob has worked as an English teacher for 7 years, starting in Shanghai, China before coming to Sky Education 3 years ago.',
        ChineseBio: 'Jacob 曾在上海擔任英語教師和家      教近6年, 並於上海復旦大學獲得碩士  學位在Sky Education任職近3年.',
        id: uuidv4()
    },
    {
        name: 'Emily',
        flag: ukFlag,
        picture: emilyPic,
        bio: 'Emily is from the United Kingdom and has been teaching for more than 2 years in South Korea and China. She is new to Taiwan and also new to Sky.',
        ChineseBio: 'Emily 出生於英國,並在韓國和中國任教超過 2 年. 她是台灣新人也是在 Sky.',
        id: uuidv4()
    },
    {
        name: 'Mark',
        flag: canadaFlag,
        picture: markPic,
        bio: 'Mark has worked as an English teacher and computer programmer in Taiwan for more than 4 years. He was born in Vancouver and new to Sky.',
        ChineseBio: 'Mark 曾在台灣擔任英語教師和計算機程序員超過 4 年。他出生在溫哥華，是 Sky 的新手。',
        id: uuidv4()
    },
    {
        name: 'Andrew',
        flag: canadaFlag,
        picture: andrewPic,
        bio: 'Andrew has worked as an English teacher in Taipei for about 4 years, and has been at Sky Education for more than 3 years.',
        ChineseBio: 'Andrew 出生於加拿大, 居住於溫哥華, 畢業於昆特侖理工大學心理學系. 在Sky Education擔任英語教師近3年.',
        id: uuidv4()
    }
];

export { EnglishTeachers };