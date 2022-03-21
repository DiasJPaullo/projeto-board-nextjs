import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document{
  render(){
    return(
      <Html>
        <Head>
          <title>Bem Vindo ao Board</title>
        </Head>
        <body>
          <Main/>
          <NextScript>
            
          </NextScript>
        </body>
      </Html>
    )
  }
}