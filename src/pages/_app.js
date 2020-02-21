import React from "react";
import { appWithTranslation } from "./../i18n";

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(App);
