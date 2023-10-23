import {Apis} from "@r-squared/rsquared-js-ws";
import {ChainStore} from "../lib";

Apis.instance("wss://node.rsquared.digital", true).init_promise.then(res => {
    console.log("connected to:", res[0].network);
    ChainStore.init(false).then(() => {
        ChainStore.subscribe(updateState);
    });
});

let dynamicGlobal = null;
function updateState(object) {
    // dynamicGlobal = ChainStore.getObject("2.1.0");

    console.log("ChainStore object update");
}
