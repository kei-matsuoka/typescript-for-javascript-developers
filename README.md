# 環境構築

## package.jsonの作成（初期化）
```zsh
npm init -y
```

## パッケージの最新バージョンの確認
```zsh
npm info パッケージ名
```

## TypeScriptのインストール
- TypeScriptをJavaScriptにコンパイルするパッケージ
```zsh
npm install --save-dev typescript@4.9.3
```
- コンパイル
```zsh
npx tsc ファイル
```

## ts-nodeのインストール
- コンパイルとNodeでの実行をまとめるパッケージ
```zsh
npm install --save-dev ts-node@10.9.1
```
- 実行
```zsh
npx ts-node ファイル
```

## ts-node-devのインストール
- コードを修正する度に自動で再コンパイルしてNodeで実行するためのパッケージ
```zsh
npm install --save-dev ts-node-dev@2.0.0
```
- 実行
```zsh
npx ts-node-dev --respawn ファイル
```

## scriptsにタスクとして登録
```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn",
  }
}
```
- コマンドで実行
```zsh
npm run dev ファイル
```

