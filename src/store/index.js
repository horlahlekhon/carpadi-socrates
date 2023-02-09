import { configureStore } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';
import storage from '../utils/storage'
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';
import {combineReducers} from "redux";
import authReducer from "./reducers/authReducer";
import stageReducer from "./reducers/stageReducer";
import boxReducer from "./reducers/boxReducer";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    stage: stageReducer,
    rating: boxReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);