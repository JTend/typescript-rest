import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

class Server {

   public app: Application;

   constructor() {
      this.app = express();
      this.config();
      this.routes();
   }

   config() : void {
      this.app.set('port', process.env.PORT || 3000);
   }


   routes() : void {
      this.app.use((req, res, next) => {
         res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
         res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
         res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
         res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
         next();
      });
      this.app.use(bodyParser.json());
      this.app.use(morgan('dev'));
      this.app.use(indexRoutes);
      this.app.use('/api',gamesRoutes);
      
      this.app.use(express.urlencoded({extended: false}));
   }

   start() : void {
      this.app.listen(this.app.get('port'), ()=> {
         console.log('Server on port', this.app.get('port'));
      });
   }
}

new Server().start();