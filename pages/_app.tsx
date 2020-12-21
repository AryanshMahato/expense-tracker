import { NextPage } from "next";
import { AppProps } from "next/app";
import "../public/global.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<ChakraProvider>
				<CSSReset />
				<Component {...pageProps} />;
			</ChakraProvider>
		</>
	);
};

export default App;
