import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Accordion, Container, Grid, Icon } from 'semantic-ui-react';

import SettingsToggle from './components/settingToggle';

import { selectSettings } from './notificationsSettingsSlice';

const NotificationsSettings = () => {
  const settings = useSelector(selectSettings);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Accordion styled>
      {Object.entries(settings).map(([typeKey, values], index) => (
        <Container key={typeKey}>
          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            {typeKey} updates
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            <Grid>
              {Object.keys(values).map((key) => (
                <SettingsToggle key={key} type={typeKey} name={key} />
              ))}
            </Grid>
          </Accordion.Content>
        </Container>
      ))}
    </Accordion>
  );
};

export default NotificationsSettings;