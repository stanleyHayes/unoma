import {configureStore} from "@reduxjs/toolkit";

import uiReducer from "./../features/ui/ui-slice";
import articleReducer from "./../features/articles/articles-slice";
import faqReducer from "./../features/faqs/faqs-slice";
import reviewReducer from "./../features/reviews/reviews-slice";
import projectReducer from "./../features/projects/projects-slice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        articles: articleReducer,
        faqs: faqReducer,
        reviews: reviewReducer,
        projects: projectReducer,
    },
    devTools: true
});

export default store;