import { createRouter, createWebHashHistory } from "vue-router";
import DataRefView from "../views/DataRefView.vue";
import DataReactiveView from "../views/DataReactiveView.vue";
import MethodView from "../views/MethodView.vue";
import InputModel from "../views/InputVModel.vue";
import ComputedVue from "../views/ComputedView.vue";
import WatchVue from "../views/WatchView.vue";
import ProvideInject from "../views/ProvideInjectView.vue";
import TemplateRef from "../views/TemplateRefView.vue";
import SendingEventView from "../views/SendingEventView.vue";
import ComposableView from "../views/ComposableView.vue";

const routes = [
    {
        path: "/",
        name: "data-ref",
        component: DataRefView,
    },
    {
        path: "/data-reactive",
        name: "data-reactive",
        component: DataReactiveView,
    },
    {
        path: "/method",
        name: "method",
        component: MethodView,
    },
    {
        path: "/input",
        name: "input",
        component: InputModel,
    },
    {
        path: "/computed",
        name: "computed",
        component: ComputedVue,
    },
    {
        path: "/watch",
        name: "watch",
        component: WatchVue,
    },
    {
        path: "/provide-inject",
        name: "provide-inject",
        component: ProvideInject,
    },
    {
        path: "/reference",
        name: "reference",
        component: TemplateRef,
    },
    {
        path: "/sending-event",
        name: "sending-event",
        component: SendingEventView,
    },
    {
        path: "/composable",
        name: "composable",
        component: ComposableView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
