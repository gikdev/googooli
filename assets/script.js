const $ = q => document.querySelector(q)

$("form").addEventListener("submit", e => {
  e.preventDefault()
  const searchQuery = $("#query-input").value
  const searchURL = `https://google.com/search?q=${encodeURIComponent(searchQuery)}`
  location.replace(searchURL)
})
