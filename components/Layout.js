import Head from "next/head";
import NavBar from "../components/NavBar";

const Layout = props => (
  <div>
    <Head>
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:300,400,600"
        rel="stylesheet"
        type="text/css"
      />
      <link rel="icon" href="Favicon.png" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    </Head>
    <NavBar />
    {props.children}
  </div>
);

export default Layout;
