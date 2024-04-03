<template>
    <div class="text-3xl flex justify-center">
        <div class="flex flex-col align-middle text-center mt-96">
            <p class="text-3xl font-bold mont">Домашня сторінка</p>
            <p class="text-xl font-bold mont">Марк Твен</p>
            <p class="text-lg font-bold mont">Виконав студент групи КІ-203</p>
            <div class="justify-center">
                <UButton class="mont" variant="link" icon="i-mdi-github-box"
                    @click="navigateTo('https://github.com/topbs', {
                        external: true,
                        open: {
                            target: '_blank',
                        },
                    })">Плейзор Олександр</UButton>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>