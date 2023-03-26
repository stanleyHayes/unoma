import {configureStore} from "@reduxjs/toolkit";

import uiReducer from "./../features/ui/ui-slice";
import articleReducer from "./../features/articles/articles-slice";
import faqReducer from "./../features/faqs/faqs-slice";
import reviewReducer from "./../features/reviews/reviews-slice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        articles: articleReducer,
        faqs: faqReducer,
        reviews: reviewReducer,
    },
    devTools: true
});

export default store;