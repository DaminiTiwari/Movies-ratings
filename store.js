// import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducers";
// import { moviesReducer, selectedMoviesReducer } from "./reducers/moviesReducer";
import { createStore } from "redux";
import  reducers  from "./reducers/index"; 




// const store = configureStore({
//     reducer: {moviesReducer, selectedMoviesReducer}
// }
// );


// export default store;



const store = createStore(
    reducers,
    {}
);

 export default store;

