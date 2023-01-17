import { setupWorker } from "msw";
import { handlers } from "./handlers";

// 実際にGraphQLリクエストを実行するわけにはいかないので、MSWでインターセプトする
export const worker = setupWorker(...handlers);
