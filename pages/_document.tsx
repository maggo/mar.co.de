import Document, { Html, Head, Main, NextScript } from "next/document";
//@ts-ignore
import sprite from "svg-sprite-loader/runtime/sprite.build";

interface Props {
  spriteContent: any;
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    const spriteContent = sprite.stringify();

    return {
      spriteContent,
      ...initialProps
    };
  }

  render() {
    return (
      //@ts-ignore
      <Html lang="en">
        <Head />
        <body>
          <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
