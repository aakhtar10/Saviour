import Layout from '../components/layout'; // Adjust the path as needed
import './styles/globals.css'; // Your global styles

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
