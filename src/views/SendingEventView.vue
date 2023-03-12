<template>
    <div>
        <input type="text" v-model="fName" placeholder="First name" />
        <input type="text" v-model="lName" placeholder="Last name" />
    </div>
    <SendingEventVue :fName="fName" :lName="lName" @greetPerson="greeting" />
</template>

<script>
import { reactive, toRefs } from "vue";
import SendingEventVue from "@/components/SendingEventVue.vue";

export default {
    name: "SendingEventView",
    components: {
        SendingEventVue,
    },
    setup() {
        const state = reactive({
            fName: "",
            lName: "",
        });

        function greeting(completName) {
            alert(`Hello ${completName}`);
        }

        return {
            ...toRefs(state),
            greeting,
        };
    },
};
</script>

<style lang="scss" scoped></style>
