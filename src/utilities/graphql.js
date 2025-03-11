import { GraphQLClient } from 'graphql-request';

const GITHUB_API_URL = 'https://api.github.com/graphql';
const client = new GraphQLClient(GITHUB_API_URL, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MY_GITHUB_TOKEN}`, 
  },
});

export const getContributionsByYear = async (username, from, to) => {
  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const variables = { username, from, to };
  const response = await client.request(query, variables);
  return response.user.contributionsCollection.contributionCalendar.weeks;
};
