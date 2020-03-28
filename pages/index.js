import Head from 'next/head';
import Layout from '../components/Layout';
import ItemList from '../components/ItemList';

const Home = () => (
  <div>
    <Head>
      <title>React Package Demo</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:300,400,700,800&display=swap" rel="stylesheet" />
      <meta charset="utf-8" />

    </Head>
    <Layout>
      <ItemList />
    </Layout>


        <style jsx global>{`
                body{
                  margin:0;
                }
      `}</style>
  </div>
)

export default Home;
