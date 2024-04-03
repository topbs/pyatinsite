<template>
    <UContainer>
        <div class="quest p-4" v-if="!testPassed">
            <div class="buttons space-y-4 my-4 bg-gray-700 rounded-lg p-4" v-for="(question, index) in questions">
                <div>
                    <p class="text-lg">№{{ index+1 }}. {{ question.question }}</p>
                </div>
                <div class="flex flex-col">
                    <UCheckbox v-for="answer in question.answers" v-model="answer.selected" :label="answer.answer" :key="answer.answer" />
                </div>
            </div>
            <UButton class="mont" icon="i-heroicons-chat-bubble-bottom-center-text-16-solid" @click="checkAnswers">Перевірити</UButton>
        </div>
        <div v-if="testPassed">
            <div>
                Ви відповіли правильно на {{ correctAnswers }} з {{ totalQuestions }} питань.
                Відсоток правильних відповідей: {{ (correctAnswers / totalQuestions) * 100 }}%

            </div>
            <UButton class="mont" icon="i-heroicons-chat-bubble-bottom-center-text-16-solid" @click="testPassed = false">Повторити</UButton>
        </div>
    </UContainer>
</template>
<script setup>
const testPassed = ref(false)
const correctAnswers = ref(0)
const incorrectAnswers = ref(0)
const totalQuestions = ref(0)
onMounted(() => {
    questions.forEach((question) => {
        question.answers.forEach((answer) => {
            answer.selected = false
        })
    })
})
const questions = [
    {
        question: "Назвіть містечко, в якому жив Том Сойєр:",
        answers: [
            {
                answer: "Нью-Йорк",
                correct: false,
                selected: false
            },
            {
                answer: "Сент-Пітерсберг",
                correct: true,
                selected: false
            },
            {
                answer: "Лас-Вегас",
                correct: false,
                selected: false
            },
            {
                answer: "Сан-Франциско",
                correct: false,
                selected: false
            }
        ]
    },
    {
        question: "За що тітонька Поллі змусила Тома білити паркан та ще й у суботу?",
        answers: [
            {
                answer: "За те, що їв варення без дозволу",
                correct: false,
                selected: false
            },
            {
                answer: "За те, що побив Сіда",
                correct: false,
                selected: false
            },
            {
                answer: "За те, що таємно крав цукор",
                correct: false,
                selected: false
            },
            {
                answer: "За те, що не пішов до школи, а пішов купатися",
                correct: true,
                selected: false
            }
        ]
    },
    {
        question: "На відміну від Тома, він \"був слухняний хлопець, ніколи не пустував і не завдавав прикрощів дорослим\". Хто він?",
        answers: [
            {
                answer: "Бен",
                correct: false,
                selected: false
            },
            {
                answer: "Джо",
                correct: false,
                selected: false
            },
            {
                answer: "Сід",
                correct: true,
                selected: false
            },
            {
                answer: "Гек",
                correct: false,
                selected: false
            }
        ]
    },
    {
        question: "Огризок яблука, паперовий змій, здохлий пацюк, 12 мармурових кульок, поламаний пищик, скельце від синьої пляшки, ключ, грудка крейди, два пуголовки … - це далеко не повний перелік \"скарбу\" Тома, який він отримав …",
        answers: [
            {
                answer: "За дозвіл побілити його паркан",
                correct: true,
                selected: false
            },
            {
                answer: "За перемогу в кулачному бою",
                correct: false,
                selected: false
            },
            {
                answer: "За вміння найкраще плювати крізь зуби",
                correct: false,
                selected: false
            },
            {
                answer: "За особливий спосіб свисту",
                correct: false,
                selected: false
            }
        ]
    },
    {
        question: "Усі хлопчики містечка заздрили йому і намагались наслідувати, а матері в містечку ненавиділи його. Хто цей хлопчисько?",
        answers: [
            {
                answer: "Альфред Темпль",
                correct: false,
                selected: false
            },
            {
                answer: "Гекльберрі Фінн",
                correct: true,
                selected: false
            },
            {
                answer: "Бен Роджерс",
                correct: false,
                selected: false
            },
            {
                answer: "Джонні Міллер",
                correct: false,
                selected: false
            }
        ]
    }
]
const checkAnswers = () => {
    let correct = 0
    let incorrect = 0
    questions.forEach((question) => {
        question.answers.forEach((answer) => {
            if (answer.selected && answer.correct) {
                correct++
            } else if (answer.selected && !answer.correct) {
                incorrect++
            }
        })
    })
    correctAnswers.value = correct
    incorrectAnswers.value = incorrect
    totalQuestions.value = questions.length
    testPassed.value = true
}
</script>