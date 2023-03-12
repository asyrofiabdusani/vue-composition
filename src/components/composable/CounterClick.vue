<template>
    <div>
        <button @click="increaseCounter">
            Click To Increase = {{ counter }}
        </button>
    </div>
</template>

<script>
import useCounter from "@/composable/useCounter";

export default {
    name: "CounterClick",
    setup() {
        const { counter, increaseCounter } = useCounter(2, 3);

        return {
            counter,
            increaseCounter,
        };
    },
};
</script>

<style lang="scss" scoped></style>
