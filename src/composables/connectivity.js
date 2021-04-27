import { ref } from "vue"

const online = ref(navigator.onLine)
const offline = ref(!navigator.onLine)

window.addEventListener('offline', function () {
    offline.value = true
    online.value = false
})

window.addEventListener('online', function () {
    offline.value = false
    online.value = true
})

export {
    online,
    offline
}