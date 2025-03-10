import { Route, Routes } from "react-router";
import { HomePage } from "./pages/home.tsx";
import { InfoPage } from "./pages/info.tsx";
import { ServicesPage } from "./pages/services.tsx";
import { CaseStudiesPage } from "./pages/caseStudies.tsx";
import { CareersPage } from "./pages/careers.tsx";

export const Pages = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="about" element={<InfoPage />} />
            <Route path="Services" element={<ServicesPage />} />
            <Route path="case_studies" element={<CaseStudiesPage />} />
            <Route path="careers" element={<CareersPage />} />
        </Routes>
    );
};
