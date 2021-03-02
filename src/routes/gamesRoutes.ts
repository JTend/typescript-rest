import { Router } from 'express';
import GC from '../controllers/gamesControllers';

class  GameRouter {
    public router : Router = Router();

    constructor() {
        this.config();
    }

    config() : void {
        this.router.get('/games', GC.list);
        this.router.get('/game/:id', GC.oneGame);
        this.router.post('/game', GC.create);
        this.router.put('/game/:id', GC.update);
        this.router.delete('/game/:id', GC.delete);
    }
}

const IR = new GameRouter();
export default IR.router;