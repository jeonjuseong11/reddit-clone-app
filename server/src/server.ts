import express from "express";
import morgan from "morgan";
import { AppDataSource } from "./data-source";

const app = express();

app.use(express.json());
app.use(morgan("dev")); //dev, short, common, combined 중 개발 환경에서는 dev를 가장 많이 씀
app.get("/", (_, res) => res.send("runnging")); //url로 접속을 하면 해당 블록의 코드를 실행

let port = 4000; //포트를 지정
app.listen(port, async () => {
  //express를 실행할때 실행 후 로그를 보여준다
  console.log(`Server running at http://localhost:${port}`);

  AppDataSource.initialize()
    .then(async () => {
      console.log("database initialized");
    })
    .catch((error) => console.log(error));
});
