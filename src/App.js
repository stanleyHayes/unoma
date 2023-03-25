import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import {lazy, Suspense} from "react";
import Splash from "./components/shared/splash";
import {useSelector} from "react-redux";
import {selectUI} from "./redux/features/ui/ui-slice";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {THEMES} from "./utils/themes";
import {AnimatePresence} from "framer-motion";

const ServicesPage = lazy(() => import("./pages/services/services-page"));
const HomePage = lazy(() => import("./pages/home/home-page"));
const ReviewsPage = lazy(() => import("./pages/reviews/reviews-page"));
const ContactPage = lazy(() => import("./pages/contact/contact-page"));
const FAQsPage = lazy(() => import("./pages/faqs/faq-page"));
const CalculatorPage = lazy(() => import("./pages/calculator/calculator-page"));
const BlogPage = lazy(() => import("./pages/blog/blog-page"));

// https://www.behance.net/gallery/165987065/Unona-Cleaning-Website-Design?tracking_source=search_projects%7Ccleaning+service
function App() {

    const {theme} = useSelector(selectUI);
    const location = useLocation();

    return (
        <ThemeProvider theme={theme === "light" ? THEMES.lightTheme : THEMES.darkTheme}>
            <CssBaseline enableColorScheme={true}>
                <AnimatePresence presenceAffectsLayout={true} mode="wait" initial={true}>
                    <Routes location={location}>
                        <Route path="/" element={<Suspense fallback={<Splash/>}><HomePage/></Suspense>}/>
                        <Route path="/services" element={<Suspense fallback={<Splash/>}><ServicesPage/></Suspense>}/>
                        <Route path="/reviews" element={<Suspense fallback={<Splash/>}><ReviewsPage/></Suspense>}/>
                        <Route path="/contact" element={<Suspense fallback={<Splash/>}><ContactPage/></Suspense>}/>
                        <Route path="/faqs" element={<Suspense fallback={<Splash/>}><FAQsPage/></Suspense>}/>
                        <Route path="/calculator"
                               element={<Suspense fallback={<Splash/>}><CalculatorPage/></Suspense>}/>
                        <Route path="/articles" element={<Suspense fallback={<Splash/>}><BlogPage/></Suspense>}/>
                    </Routes>
                </AnimatePresence>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
