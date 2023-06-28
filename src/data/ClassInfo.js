import { v4 as uuidv4 } from 'uuid';

let ClassTimes = [
    {
        days: 'Monday & Thursday',
        zhDays: '週一和週四',
        start: '1:15',
        end: '3:45',
        id: uuidv4()
    },
    {
        days: 'Wedneday & Friday',
        zhDays: '週三和週五',
        start: '1:15',
        end: '3:45',
        id: uuidv4()
    },
    {
        days: 'Monday & Thursday',
        zhDays: '週一和週四',
        start: '4:40',
        end: '7:10',
        id: uuidv4()
    },
    {
        days: 'Wedneday & Friday',
        zhDays: '週三和週五',
        start: '4:40',
        end: '7:10',
        id: uuidv4()
    }
];

let SemesterTimes = [
    {
        name: 'Spring Semeseter',
        zhName: '春季學期',
        start: 'February',
        zhStart: '一月',
        end: 'June',
        zhEnd: '六月',
        id: uuidv4()
    },
    {
        name: 'Fall Semeseter',
        zhName: '秋季學期',
        start: 'September',
        zhStart: '九月',
        end: 'January',
        zhEnd: '一月',
        id: uuidv4()
    }
]

export { ClassTimes, SemesterTimes };