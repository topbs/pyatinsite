<template>
    <UContainer>
        <div class="quest p-4" v-if="!testPassed">
            <div class="buttons space-y-4 my-4 bg-gray-700 rounded-lg p-4" v-for="question in questions">
                <div>
                    <p class="text-lg">{{ question.question }}</p>
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
        question: "Які з цих творів належать Льюїсу Керролу?",
        answers: [
            {
                answer: "Аліса в країні чудес",
                correct: true,
                selected: false
            },
            {
                answer: "Сон літньої ночі",
                correct: false,
                selected: false
            },
            {
                answer: "Сонети",
                correct: false,
                selected: false
            },
            {
                answer: "Віндзорські жартівниці",
                correct: false,
                selected: false
            }
        ]
    },
    {
        question: "Коли народився Льюїс Керрол?",
        answers: [
            {
                answer: "27 лютого 1832 року",
                correct: false,
                selected: false
            },
            {
                answer: "1 лютого 1833 року",
                correct: false,
                selected: false
            },
            {
                answer: "27 січня 1832 року",
                correct: true,
                selected: false
            },
            {
                answer: "27 січня 1833 року",
                correct: false,
                selected: false
            }
        ]
    },
    {
        question: "Де навчався Льюїс Керрол?",
        answers: [
            {
                answer: "В Оксфорді",
                correct: true,
                selected: false
            },
            {
                answer: "В Кембриджі",
                correct: false,
                selected: false
            },
            {
                answer: "В Гарварді",
                correct: false,
                selected: false
            },
            {
                answer: "В Єльському університеті",
                correct: false,
                selected: false
            }
        ]
    },
    {
        question: "Де народився Льюїс Керрол?",
        answers: [
            {
                answer: "В Лондоні",
                correct: false,
                selected: false
            },
            {
                answer: "В Дубліні",
                correct: false,
                selected: false
            },
            {
                answer: "В Ліверпулі",
                correct: false,
                selected: false
            },
            {
                answer: "В Дерсбері",
                correct: true,
                selected: false
            }
        ]
    },
    {
        question: "Коли помер Льюїс Керрол?",
        answers: [
            {
                answer: "14 січня 1898 року",
                correct: true,
                selected: false
            },
            {
                answer: "14 лютого 1898 року",
                correct: false,
                selected: false
            },
            {
                answer: "27 січня 1898 року",
                correct: false,
                selected: false
            },
            {
                answer: "27 січня 1899 року",
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