import { WatsonSTT } from '../util';
import { Request, Response, RequestHandler } from 'express';
import { NextFunction } from 'connect';
declare global {
    namespace Express {
        interface Request {
            watsonSTT?: WatsonSTT;
            log?: Console;
        }
    }
}
declare const uploadAudio: RequestHandler;
declare function postTranscribe(req: Request, res: Response): Promise<Response>;
declare function getModel(req: Request, res: Response): Promise<Response>;
declare function getAcousticModel(req: Request, res: Response): Promise<Response>;
declare function postAudio(req: Request, res: Response): Promise<Response>;
declare function listAudio(req: Request, res: Response): Promise<Response>;
declare function deleteAudio(req: Request, res: Response): Promise<Response>;
declare function postCorpus(req: Request, res: Response): Promise<Response>;
declare function deleteCorpus(req: Request, res: Response): Promise<Response>;
declare function getCorpora(req: Request, res: Response): Promise<Response>;
declare function getWords(req: Request, res: Response): Promise<Response>;
declare function addWord(req: Request, res: Response): Promise<Response>;
declare function deleteWord(req: Request, res: Response): Promise<Response>;
declare function trainModel(req: Request, res: Response): Promise<Response>;
declare function trainAcousticModel(req: Request, res: Response): Promise<Response>;
declare function checkWatsonCredential(req: Request, res: Response, next: NextFunction): Promise<void>;
export { uploadAudio, postTranscribe, getModel, getAcousticModel, deleteCorpus, postCorpus, postAudio, listAudio, deleteAudio, getCorpora, getWords, addWord, deleteWord, trainModel, trainAcousticModel, checkWatsonCredential };
