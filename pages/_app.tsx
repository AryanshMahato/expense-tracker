import { NextPage } from "next";
import { AppProps } from "next/app";
import "../public/global.css";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
