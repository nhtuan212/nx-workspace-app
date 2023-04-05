import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';
import { createWrapper, MakeStore } from 'next-redux-wrapper';

// export const store = configureStore({
// 	reducer: masterReducer,
// 	middleware: getDefaultMiddleware =>
// 		getDefaultMiddleware({
// 			serializableCheck: false,
// 		}),
// });

const makeStore: MakeStore<any> = () =>
    configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
        devTools: true,
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const ReduxWrapper = createWrapper<AppStore>(makeStore, {
    debug: false,
});
