import fetch, { Headers } from "node-fetch"
const headers = new Headers()

// in reality, for security, you would store these values in an environment variable, not in a source code file like this:
const ourPassword = "ro3z CzdX hz3a g5XE cYlp 92EZ"
const ourUsername = "admin"

headers.set("Content-Type", "application/json")
headers.set("Authorization", "Basic " + Buffer.from(`${ourUsername}:${ourPassword}`).toString("base64"))

fetch("http://brandnewempty.local/wp-json/wp/v2/posts", {
  method: "POST",
  headers: headers,
  body: JSON.stringify({ title: "Hello from Node!", content: "<!-- wp:paragraph -->This is amazing content.<!-- /wp:paragraph -->", status: "publish" })
})
