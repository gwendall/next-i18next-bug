import React from "react";
import { appWithTranslation } from "./../i18n";

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

const App2 = appWithTranslation(App);
App2.getInitialProps = App.getInitialProps;
export default App2;
