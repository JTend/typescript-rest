import {Request, Response} from 'express';

class IndexController {
    public index (req: Request, res: Response) {
        res.send('HelloIndex');
    }
}

const IC = new IndexController();

export default IC;