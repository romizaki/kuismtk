const questions = [

    {
        question : `Berapakah cm luas persegi panjang dengan Lebar ${a = Math.floor(Math.random() * 100) + 1 } cm dan Panjang ${b = Math.floor(Math.random() * 100) + 1 }cm ?`,
        answer : `${a*b}`
    },

    {
        question : `Berapakah luas lingkaran dengan jari-jari ${a = Math.floor(Math.random() * 10) + 1 }?`,
        answer : `${(a*a*3.14).toFixed(0)}`
    },

    {
        question : `Ibu membeli ${a = Math.floor(Math.random() * 10) + 1 } kg gula pasir karena dijual lagi gula pasir tersebut dibungkus ke dalam kantong plastik berukuran 1/4 kg, Berapa banyaknya bungkus gula pasir yang akan dijual ?`,
        answer : `${a/0.25}`
    },

    {
        question : `Perbandingan uang Mas Semmi dan uang Mas Very adalah ${a = Math.floor(Math.random() * 10) + 1 } : ${b = Math.floor(Math.random() * 10) + 1 }. Jika jumlah uang mereka adalah ${c = Math.floor(Math.random() * 10) + 1 } dollar, maka berapa jumlah uang Mas Semmi?`,
        answer : `${((a/(a+b))*c).toFixed(0)}`
    },

    {
        question : `Perbandingan uang Mas Semmi dan uang Mas Very adalah ${a = Math.floor(Math.random() * 10) + 1 } : ${b = Math.floor(Math.random() * 10) + 1 }. Jika jumlah uang mereka adalah ${c = Math.floor(Math.random() * 10) + 1 } dollar, maka berapa jumlah uang Mas Very?`,
        answer : `${((b/(a+b))*c).toFixed(0)}`
    },

    {
        question : `Romi sedang mengisi kolam renang pribadinya. Ia menggunakan keran dengan debit ${a = Math.floor(Math.random() * 10) + 1 } liter/menit. Jika ia membuka keran selama ${b = Math.floor(Math.random() * 4) + 1 } jam, maka volume air di dalam kolam pribadi romi adalah....liter.`,
        answer : `${((a*60)*b).toFixed(0)}`
    },

    {
        question : `Mas Semmi berangkat kerja menggunakan mobil dengan kecepatan ${a = Math.floor(Math.random() * 60) + 1 }km/jam. Perjalanan dari rumah ke kantor adalah ${b = Math.floor(Math.random() * 90) + 1 } menit. Jarak dari rumah Mas Semmi ke kantor adalah.... km`,
        answer : `${((b/60)*a).toFixed(0)}`
    },

    {
        question : `Sebuah botol berisi ${a = Math.floor(Math.random() * 2) + 1 } liter air. Mas Very menuangkan air tersebut ke dalam gelas sebanyak ${b = Math.floor(Math.random() * 500) + 1 } cc kemudian mas semmi meminum air dari botol tadi hingga tersisa ${c = Math.floor(Math.random() * 100) + 1 } cm3, maka air yang diminum mas semmi sebanyak....ml`,
        answer : `${(a*100)-b-c}`
    },
]


const random = Math.floor(Math.random() * 8)
const selectedQuestion = questions[random]
// console.log(selectedQuestionMtk);

const questionElement = document.getElementById('question')
questionElement.innerText = selectedQuestion.question

const answerButton = document.getElementById('checkAnswer')

let counter = 0

answerButton.addEventListener('click', function () {
    const answerElement = document.getElementById('answer')

    if (answerElement.value === selectedQuestion.answer) {
        prompt('Jawaban anda benar')
    } else {
        alert('Anda salah menghitung, silahkan belajar lagi')
    }
})
