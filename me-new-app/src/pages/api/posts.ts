import { NextApiRequest, NextApiResponse } from "next";

type Post = {
  title: string;
  body: string;
};

export default function PostApi(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      title: "Hello",
      body: "wotld",
    },
  ]);
}
