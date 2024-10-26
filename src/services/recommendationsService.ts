import { client } from "../database";
import { StatusType } from "../model/recommendationModel";

export const createRecommendation = async (movieId: number, type: string) => {
  try {
    const text = "INSERT INTO rec (movie_id, status) VALUES ($1, $2)";
    const val = [movieId, type];
    const res = await client.query(text, val);

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
