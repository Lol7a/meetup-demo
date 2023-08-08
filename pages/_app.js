import Head from "next/head";
import Layout from "@/components/layout/Layout";

import "../styles/globals.scss";

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta
					name="description"
					content="Browse a huge list of highly active React meetups"
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default App;
