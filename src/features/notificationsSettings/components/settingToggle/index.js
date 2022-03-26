import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Checkbox } from 'semantic-ui-react';

import { selectSettings, updateSettings } from '../../notificationsSettingsSlice';

const SettingsToggle = ({ type, name }) => {
  const settings = useSelector(selectSettings);
  const dispatch = useDispatch();

  const onChange = (type, { name, checked }) => {
    dispatch(updateSettings({ type, name, checked }));
  };

  return (
    <Grid.Row>
      <Grid.Column>
        <Checkbox
          label={name}
          name={name}
          value={settings[type][name]}
          toggle
          onChange={(_, data) => onChange(type, data)}
        />
      </Grid.Column>
    </Grid.Row>
  );
}

export default SettingsToggle;