import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database';


const getAvo =  async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id;

    const db = new DB();
    const avo = await db.getById(id as string);
    
    res.status(200).json(avo);

}

export default getAvo;