import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    padding: string;
    paddingLarge: string;
    margin: string;
    marginLarge: string;
    
    fonts: {
      content: string;
      title: string;
      label: string;
    }

    colors: {
      mainBackground: string;
      secondaryBackGround: string;
      mainColor: string;
      secondaryColor: string;
      labelColor: string;
    };
  }
}
