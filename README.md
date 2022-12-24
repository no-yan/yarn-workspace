# yarn-workspace

yarn workspaceとpnpの設定がうまくいくか検証。

結論としては問題なさそうだった。project referencesを設定した後

- yarn workspaceは rootで yarn init -2 -w とした後、各パッケージのディレクトリを作り、yarn initする
- project referenceを使うためには、rootで {references: [{path: "packages/a"}, {path: "packages/b}]} とした後、各パッケージで参照するライブラリを tsconfigに書く　{references: {path: "../b"}}
- pathの解決のために、package.jsonに"main": "src/index.ts" などを指定する必要がある。
- types fieldなどはなくてもfallbackでmainにいくので、省略することもできる。
- TSConfigをJSONSchemeで管理していたが、正しいpathなのにエラーが出ることが多く、削除した
- ビルドは成功するようになったが、エディタ上だけでimport moduleが存在しないとエラーが出続けた。
- VSCodeのpnp integrationを行なっていなかったためで、yarn dlx @yarnpkg/sdks vscode で解決した。
