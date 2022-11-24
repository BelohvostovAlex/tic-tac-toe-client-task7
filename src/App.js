import React from "react";

import { AppRouter } from "./components/AppRouter/AppRouter";

import { useConnect } from "./hooks/useConnect";

export const App = () => {
  useConnect();
  return <AppRouter />;
};
