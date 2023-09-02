import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const response = await fetch(process.env.WAKATIME_URL as string);
    const {
      data: { grand_total },
    } = await response.json();
    const codingHours =
      grand_total.human_readable_total_including_other_language;

    const responseJson = { codingHours };
    return res.status(200).json(responseJson);
  }
};

export default handler;
