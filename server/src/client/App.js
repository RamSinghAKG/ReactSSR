import React from 'react';
import { renderRoutes } from 'react-router-config';
const App = ({ route }) => {
  return (<div>
            <h2>Header</h2>
            {renderRoutes(route.routes)}
        </div>);
};

export default {
  component: App
};
