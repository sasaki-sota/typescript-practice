# 環境構築

## 1.package.jsonを作る

標準出力でpackage.jsonを出力
```npm init -y```

## 2.TypeScirptのインストール

TypeScriptの情報を確認
```npm info typescript```

TypeScriptのインストール
```npm install --save-dev typescript@ infoで確認したバージョン```

src(ソース)ファイルの作成
```mkdir src```

からのファイルを作成
```touch src/install-typescript.ts```

### npxコマンド
プロジェクトに特化した特殊なもののパスを自動で検索して自動で実行してくれるコマンド

## 3.ts-nodeのインストール
ts-nodeの情報を確認
``` npm info ts-node```

ts-nodeのインストール
※ここの部分は不具合があるため8.5系のインストール
```npm install --save-dev ts-node@8.5.4```

## 4.ts-node-devのインストール
ts-node-devの情報を確認
```npm info ts-node-dev```

ts-node-devのインストール
```npm install --save-dev ts-node-dev@確認したバージョン```

コードのリアルタイムの確認
```npx ts-node-dev src/ファイル名~```



