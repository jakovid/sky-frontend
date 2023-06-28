import ClassPic11 from '../images/ClassPic11.webp';
import ClassPic12 from '../images/ClassPic12.webp';
import ClassPic13 from '../images/ClassPic13.webp';
import { v4 as uuidv4 } from 'uuid';

let ClassLevels = [
    {
        name: 'Beginner Classes',
        zhName: '初級班',
        picture: ClassPic11,
        info: 'At Sky, we believe that building a strong foundation is the most important step to becoming a strong English speaker. We start with a program of phonics that reinforces correct pronunciation from day one! We also introduce vocabulary words and important phrases that students can use in everyday conversations.',
        zhInfo: '我們相信要成為一名傑出的英文口語者，首先要建立強力的基礎。從基本的自然發音課程作為起端，強調了正確發音的重要性。除了此課綱教材，我們也帶入了生字和片語讓學生們在日常生活中學以致用。',
        id: uuidv4()
    },
    {
        name: 'Intermediate Classes',
        zhName: '中級班',
        picture: ClassPic12,
        info: 'Once students demonstrate a strong grasp of phonics and basic sentence patterns - we split our classes into one day of reading and one day of grammar. In our reading classes, students learn new vocabulary about interesting topics - and our teachers practice with students every day to learn to read with proper pronunciation, interesting pacing, and enthusiasm! Our grammar classes take students through verb tenses and learn to stay away from common mistakes for English learners. Above all, both classes emphasize speaking - and with our small class sizes, every student gets a lot of opportunity for practice!',
        zhInfo: '當學生掌握到自然發音的概念和基本的句型組成後，我們將課程分為一堂閱讀、一堂文法。閱讀課孩子們從有趣的主題中學習到新的單字；老師們天天與孩子練習運用正確的發音、句型的起承轉合和情緒! 文法課帶入了時態和學習如何避免一些文法常見的錯誤。以上，兩種課程都大幅提升口說；也因為小班制度，每位孩子都能夠得到許多參與的機會。',
        id: uuidv4()
    },
    {
        name: 'Advanced Classes',
        zhName: '高階班',
        picture: ClassPic13,
        info: 'At our highest levels, we focus our classes to maximize speaking and communication. Using monthly magazines written in Taiwan to introduce interesting topics we challenge students to speak for extended periods to demonstrate their knowledge and think critically about new topics and ideas. With our small class sizes, students can speak frequently, not just with the teacher but with each other in small groups, using materials that are interesting and unique.',
        zhInfo: '最高階的課堂中，我們著重於提升口說和對話的練習。每月訂閱台灣出版的雜誌來介紹有趣的話題，我們要求孩子們長時間演講，以展現他們的知識，並藉由新主題和思想豐富自己的思維。孩子們在小班制下，不僅可以充分與老師交流，還能夠使用有趣且特殊的教材和班上的小組進行討論。',
        id: uuidv4()
    }
];

export { ClassLevels }