import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import EnglishHome from "./pages/EnglishHome";
import EnglishAboutUs from "./pages/EnglishAboutUs";
import EnglishOurTeam from "./pages/EnglishOurTeam";
import EnglishOurClasses from "./pages/EnglishOurClasses";
import EnglishContactUs from "./pages/EnglishContactUs";
import ChineseHome from "./pages/ChineseHome";
import ChineseAboutUs from "./pages/ChineseAboutUs";
import ChineseOurTeam from "./pages/ChineseOurTeam";
import ChineseOurClasses from "./pages/ChineseOurClasses";
import ChineseContactUs from "./pages/ChineseContactUs";

export default function RouteSwitch(){
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<ChineseHome />} />
            <Route exact path='/about-us' element={<ChineseAboutUs />} />
            <Route exact path='/our-team' element={<ChineseOurTeam />} />
            <Route exact path='/our-classes' element={<ChineseOurClasses />} />
            <Route exact path="/contact-us" element={<ChineseContactUs />} />
            <Route exact path='/home/en' element={<EnglishHome />} />
            <Route exact path='/about-us/en' element={<EnglishAboutUs />} />
            <Route exact path='/our-team/en' element={<EnglishOurTeam />} />
            <Route exact path="/our-classes/en" element={<EnglishOurClasses />} />
            <Route exact path="/contact-us/en" element={<EnglishContactUs />} />
        </Routes>
        </BrowserRouter>
    )
}