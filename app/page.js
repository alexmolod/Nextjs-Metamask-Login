import Head from 'next/head'
import Auth from '../components/Auth'

const Home = () => {
  return (
    <div className='app'>
      <Head>
        <title>Metamask Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Auth />
    </div>
  );
}

export default Home;