import express, { Request, Response } from 'express';
import path from 'path';
import todoRoutes from './routes/todoRoutes';

const app = express();
const port: number = 3000;

// ミドルウェアの設定
app.use(express.json()); // JSONリクエストボディ解析用（API通信で必要）
app.use(express.urlencoded({ extended: true })); // フォームデータ解析用
app.use(express.static(path.join(__dirname, 'public'))); // 静的ファイル（CSSやJSなど）

// テンプレートエンジンの設定
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ルーティング設定
app.use('/todos', todoRoutes);

// ルートパスにアクセスした場合、/todos へリダイレクト
app.get('/', (req: Request, res: Response) => {
  res.redirect('/todos');
});

// サーバー起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});