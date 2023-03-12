<template>
    <div>
        <h2 @mouseover="increaseCounter">Hover To Increase = {{ counter }}</h2>
    </div>
</template>

<script>
import useCounter from "@/composable/useCounter";
export default {
    name: "CounterHover",

    setup() {
        const { counter, increaseCounter } = useCounter(0, 1);

        return {
            counter,
            increaseCounter,
        };
    },
};
</script>

<style lang="scss" scoped></style>
