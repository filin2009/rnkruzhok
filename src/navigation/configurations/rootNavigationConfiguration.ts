import {Playground} from "../../common/playground";
import {extendWithDontPushTwoPageInStack} from "../extendWithDontPushTwoPageInStack";
import {NavigationPages} from "../navigation";
import {InDeveloping} from "../../common/components/InDeveloping";
import { createStackNavigator } from "react-navigation-stack";
import {CafePage} from "../../modules/cafe/CafePage";

export const RootNavigator = createStackNavigator({
    [NavigationPages.cafepage]: {screen: CafePage},
    [NavigationPages.playground]: {screen: Playground},
    [NavigationPages.inDevelopment]: {screen: InDeveloping},
}, {
    headerMode: "screen",
});

extendWithDontPushTwoPageInStack(RootNavigator.router);