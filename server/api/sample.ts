export default defineEventHandler((event) => {
    let sample = [
        { id: 1, name: "sample1" },
        { id: 2, name: "sample2" },
        { id: 3, name: "sample3" },
    ]
    setResponseHeader(event,"Content-Type", "application/json")
    setResponseStatus(event,200)
    return sample
})