import { createEffect, attach, createStore } from "effector";

export const GITHUB_API_URL = "https://api.github.com/graphql";

const userInfo = `
query GetUserInfo($login: String!) {
    repositoryOwner(login: $login) {
        login
        ... on User {
            name,
            company,
            avatarUrl,
            email,
            twitterUsername,
            followers {
                totalCount
            }
            following {
                totalCount
            }
            starredRepositories {
                totalCount
            }
        }
    }
}
`;

type StatsData = {
    totalCount: number
}

export type TGitHubUserInfo = {
    databaseId: number | null
    name: string
    company: string
    url: string
    avatarUrl: string
    login: string
    email: string
    twitterUsername: string
    followers?: StatsData
    following?: StatsData
    starredRepositories?: StatsData
  }
  
  export const initialUserInfo: TGitHubUserInfo = {
    databaseId: null,
    avatarUrl: '',
    name: '',
    url: '',
    login: '',
    company: '',
    email: "dan.abramov@gmail.com",
    twitterUsername: "dan_abramov",
  }
  
  export type TToken = string | null

const GITHUB_TOKEN = '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';

const $githubToken = createStore<TToken>(GITHUB_TOKEN);

class AuthError extends Error {
    constructor(message: string) {
      super(message || "Authorization error!");
    }
  }
  
  class BadTokenError extends AuthError {
    constructor() {
      super("Bad token!");
    }
  }
  
  class UnauthorizedError extends AuthError {
    constructor() {
      super("Unauthorized!");
    }
  }
  
  const userJson = {
    "login": "gaearon",
    "name": "dan",
    "company": "@facebook ",
    "avatarUrl": "https://avatars.githubusercontent.com/u/810438?u=36b11d1db9c2380295b4371a98de87ab6b4c898f&v=4",
    "email": "dan.abramov@gmail.com",
    "twitterUsername": "dan_abramov",
    "websiteUrl": null,
    "followers": {
        "totalCount": 71874
    },
    "following": {
        "totalCount": 172
    },
    "starredRepositories": {
        "totalCount": 1401
    }
}
  
  const gqlQuery = createEffect({
    async handler({ query, variables, token }) {
      if (!token) throw new BadTokenError();
    //   const res = await fetch(GITHUB_API_URL, {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     },
    //     body: JSON.stringify({
    //       query,
    //       variables
    //     })
    //   });
  
    //   if (!res.ok) {
    //     throw new UnauthorizedError();
    //   }
  
    //   return await res.json();
    return { data: { repositoryOwner: userJson } };
    }
  });
  
  const authorizedRequest = attach({
    effect: gqlQuery,
    source: $githubToken,
    mapParams: ({ query, variables }, token: TToken) => ({
      query,
      variables,
      token
    })
  });
  
  const createGqlQuery = (query: string) =>
    attach({
      effect: authorizedRequest,
      mapParams: (variables?: {}) => ({ query, variables })
    });
  
  export const getUserInfo = createGqlQuery(userInfo);
  
  export const $githubUser = createStore<TGitHubUserInfo>(initialUserInfo)

  $githubUser
  .on(getUserInfo.doneData, (_, {data}) => data.repositoryOwner)
  .reset(getUserInfo.fail)

  $githubUser.watch(console.log)