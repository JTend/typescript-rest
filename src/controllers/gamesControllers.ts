import {Request, Response, json} from 'express';
import DB from '../database';

class GamesController {

    public async list (req: Request, res: Response) : Promise<void> {
        (await DB).query("select * from games").then(games => {
            //console.log(games);
            res.json(games);
        });
        
    }

    public async oneGame (req: Request, res: Response) : Promise<void> {
        const { id } = req.params; //Another way to take field from req.params
        (await DB).query("select * from games where id = ?", [id]).then(games => {
            if(games.length > 0) {
                //console.log('Displayed game:', games[0].title);
                res.json(games[0]);
            }
            else {
                //console.log('Game not found');
                res.status(404).json({text: 'Game not found'});
            }
        });
    }

    public async create (req: Request, res: Response) : Promise<void> {
        (await DB).query("insert into games set ?", [req.body]).then(response => {
            res.json({text: 'Game saved in database'});
        });
    }

    public async update (req: Request, res: Response) : Promise<void> {
        const { id } = req.params;
        (await DB).query("update games set ? where id = ?", [req.body, id]).then(response => {
            res.json({text: 'Updated game ' + req.params.id});
        });
    }

    public async delete (req: Request, res: Response) : Promise<void> {
        (await DB).query("delete from games where id = ?", req.params.id).then(response => {
            res.json({text: 'Deleted game: ' + req.params.id});
        });
    }
}

const GC = new GamesController();
export default GC;
