import { db } from "./data";

interface WeatherInterface {
  zip: string;
  weather: string;
  tempC: string;
  tempF: string;
  friends: string[];
}

export const resolvers = {
  Query: {
    weather: async (_: any, param: { zip?: string }) => {
      if (!param.zip) return db;
      return [db.find((item) => item.zip === param.zip)].filter(Boolean);
    },
  },
  Mutation: {
    weather: async (_: any, param: { data: WeatherInterface }) => {
      return [db.find((item) => item.zip === param.data.zip)].filter(Boolean);
    },
  },

  LocationWeatherType: {
    friendsWeather: (parent: { friends: string[] }) => {
      return parent.friends
        .map((zip) => db.find((item) => item.zip === zip))
        .filter(Boolean);
    },
  },
};
