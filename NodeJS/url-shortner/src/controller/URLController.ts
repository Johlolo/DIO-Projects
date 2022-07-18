import { config } from '../config/Constants';
import { Request, Response } from 'express';
import shortId from 'shortid';
import { URLModel } from '../database/model/URL';

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        // Ver se a URL já não existe
        const { originURL } = req.body;
        const url = await URLModel.findOne({ originURL });
        if (url) {
            res.json(url);
            return
        }
        // Criar o hash para essa URL
        const hash = shortId.generate();
        const shortURL = `${config.API_URL}/${hash}`;
        // Salvar a URL no banco de dados
        const newUrl = await URLModel.create({ hash, shortURL, originURL });
        // Retornar a URL que a gente salvou
        res.json(newUrl);

    }

    public async redirect(req: Request, res: Response): Promise<void> {
        // Pegar hash da URL
        const { hash } = req.params;
        const url = await URLModel.findOne({ hash });

        if (url) {
            res.redirect(url.originURL);
            return
        }

        res.status(400).json({ error: 'URL not found' })
    }
}
