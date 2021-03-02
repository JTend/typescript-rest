import { Router } from 'express';
import IC from '../controllers/indexControllers';

class  IndexRouter {
    public router : Router = Router();

    constructor() {
        this.config();
    }

    config() : void {
        this.router.get('/', IC.index);
    }
}

const IR = new IndexRouter();
export default IR.router;