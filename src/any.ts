import axios from 'axios';
export {};

let url: string = 'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// https://github.com/axios/axios
// 今回はエラー処理は書かず成功の場合のみかく

// RubyのAPIでいうgetを取得できる
axios.get(url)
    // コールバック関数でレスポンスを受け取れる
    .then(function (response) {

        // オブジェクトの各要素の型を書く
        // それぞれの要素の方を提示することができるようになる
        interface Article {
            id: number;
            title: string;
            description: string;
        }

        // typescriptにとって得体の知れないデータはanyとなる
        // 正確には型推論ができていない
        // let data: any;

        //interfaceで設定したArticleのオブジェクトの配列のイノテーションする
        let data: Article[];
        data = response.data;
        // 試しに配列のオブジェクトのものを一つ作成する
        data = [
            {
                id: 1,
                title: 'title',
                description: 'description'
            }
        ];
        // dataをつけることでオブジェクトの配列のみを取り出すことができるようになる
        console.log(data);
    });