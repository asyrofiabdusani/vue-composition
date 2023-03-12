<template>
    <div>
        <h1>Hello {{ fullName }}</h1>
        <button @click="sendEvent">Say Greeting</button>
    </div>
</template>

<script>
import { computed } from "vue";

export default {
    name: "SedingEventVue",
    props: ["fName", "lName"],
    setup(props, context) {
        const fullName = computed(() => {
            return `${props.fName} ${props.lName}`;
        });

        function sendEvent() {
            context.emit("greetPerson", fullName.value);
        }

        return {
            fullName,
            sendEvent,
        };
    },
};
</script>

<style lang="scss" scoped></style>
