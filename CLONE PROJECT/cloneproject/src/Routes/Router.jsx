import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Page/Main";
import Project from "../Page/Project";
import Recruit from "../Page/Recruit";
import Contact from "../Page/Contact";


function Router(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/recruit" element={<Recruit/>}/>
        </Routes>
    </BrowserRouter>
}

export default Router;