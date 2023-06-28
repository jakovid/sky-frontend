import wilmaPic from "../images/taiwan-teachers/wilma.webp";
import amyPic from "../images/taiwan-teachers/amy.webp";
import viviPic from "../images/taiwan-teachers/vivi.webp";
import alizaPic from "../images/taiwan-teachers/aliza.webp";
import tinaPic from "../images/taiwan-teachers/tina.webp";
import meijiaPic from '../images/taiwan-teachers/meijia.webp';
import cindyPic from '../images/taiwan-teachers/cindy.jpg';
import { v4 as uuidv4 } from 'uuid';

let TaiwanTeachers = [
    {
        name: 'Wilma',
        picture: wilmaPic,
        id: uuidv4()
    },
    {
        name: 'Amy',
        picture: amyPic,
        id: uuidv4()
    },
    {
        name: 'Vivi',
        picture: viviPic,
        id: uuidv4()
    },
    {
        name: 'Aliza',
        picture: alizaPic,
        id: uuidv4()
    },
    {
        name: 'Tina',
        picture: tinaPic,
        id: uuidv4()
    },
    {
        name: 'Mei-Jia',
        picture: meijiaPic,
        id: uuidv4()
    },
    {
        name: 'Cindy',
        picture: cindyPic,
        id: uuidv4()
    },
];

export { TaiwanTeachers };