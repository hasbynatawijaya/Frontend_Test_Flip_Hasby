import React from "react";
import { Route } from "react-router-dom";

const RouteWithLayout = ({ layout: Layout, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      children={(matchProps) => (
        <Layout {...matchProps}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
