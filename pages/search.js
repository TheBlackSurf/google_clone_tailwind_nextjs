import Head from "next/head";
import Header from "../components/Header";

function Search() {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link
          rel="icon"
          href="https://icons-for-free.com/iconfiles/png/512/Google-1320568266385361674.png"
        />
      </Head>
      {/*Header*/}
      <Header />
    </div>
  );
}

export default Search;
