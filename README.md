# このリポジトリについて
*  フロントエンドTypescript + React、バックエンドAPIがGoで構成されたアプリケーションです
*  ローカル環境の構築はdokcerで構成しています

# ローカルでの実行
* git cloneしたら、docker compose upで立ち上がります
  * 当然ですが、dockerのセットアップは完了している前提です
* 立ち上げ成功したら、localhost:3000にアクセスすると以下の画面が表示されます
  ![image](https://github.com/gitk47320/go_react/assets/34836412/649b91bc-2eee-4d3c-857f-f3f2fc4d3824)
* 「PingAPIを呼ぶ」または「HelloAPIを呼ぶ」ボタンを押して、pingとかhelloとかいう文字列が表示されれば正常動作となります

# 注意
* あくまで、作者の勉強用に作ったものですので、使用は自己責任でお願いします
* 作者はWindows11のUbuntu22.04 on WSL2で実行しています。macOSやその他環境では正常に実行されない恐れがあります
* 作者はReact、Typescript、Goを日常的に使っている人ではないので、わかる人からするとところどころおかしい部分があるかもしれません
