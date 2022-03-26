import { configureStore } from '@reduxjs/toolkit';
import notificationsSettingsReducer from '../features/notificationsSettings/notificationsSettingsSlice';

export const store = configureStore({
  reducer: {
    notificationsSettings: notificationsSettingsReducer,
  },
});
