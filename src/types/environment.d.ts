declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
      EMAIL_SERVER: string;
      EMAIL_FROM: string;
      APPLE_ID: string;
      APPLE_TEAM_ID: string;
      APPLE_PRIVATE_KEY: string;
      APPLE_KEY_ID: string;
      AUTH0_ID: string;
      AUTH0_SECRET: string;
      AUTH0_ISSUER: string;
      FACEBOOK_ID: string;
      FACEBOOK_SECRET: string;
      GITHUB_ID: string;
      GITHUB_SECRET: string;
      GOOGLE_ID: string;
      GOOGLE_SECRET: string;
      TWITTER_ID: string;
      TWITTER_SECRET: string;
      DATABASE_URL: string;
      SECRET: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
