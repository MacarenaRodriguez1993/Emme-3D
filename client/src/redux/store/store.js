import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import rootReducer from "../reducer/index"
import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore,
} from "redux-persist"
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"

const persistConfig = {
    key: "root",
    storage: storage,
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
    whitelist: ["shoppingCart", "userByUid", "users"],
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const pReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    pReducer,
    composeEnhancers(applyMiddleware(thunk))
)
export const persistor = persistStore(store)

//export default store
