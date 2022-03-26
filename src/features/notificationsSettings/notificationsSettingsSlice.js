import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    installation: {
      added: false,
      updated: false,
      deleted: false,
      waterFilterChanges: false,
      upcomingWaterFilterChanges: false,
      waterFilterOverdue: false,
      maintenancePerformed: false,
      maintenanceUpcoming: false,
      maintenanceOverdue: false,
      leaks: false,
      batteryAlerts: false,
      consumptionDrops: false,
      connectionLost: false,
      connectionReestablished: false,
      dailyAverageAlerts: false,
    },
    location: {
      added: false,
      updated: false,
      deleted: false,
    },
    client: {
      added: false,
      updated: false,
      deleted: false,
    },
  },
};

export const notificationsSettingsSlice = createSlice({
  name: "notificationSettings",
  initialState,
  reducers: {
    updateSettings: (state, { payload }) => {
      const { type, name, checked } = payload;
      state.value = {
        ...state.value,
        [type]: {
          ...state.value[type],
          [name]: checked,
        },
      };
    },
  },
});

export const { updateSettings } = notificationsSettingsSlice.actions;

export const selectSettings = (state) => state.notificationsSettings.value;

export default notificationsSettingsSlice.reducer;
