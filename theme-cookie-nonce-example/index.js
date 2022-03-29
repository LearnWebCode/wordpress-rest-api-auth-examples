fetch("/wp-json/wp/v2/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-WP-Nonce": myData.nonce
  },
  body: JSON.stringify({
    title: "Blog Post From Cookie Powered REST API Request",
    content: "<!-- wp:paragraph -->This is amazing content.<!-- /wp:paragraph -->",
    status: "publish"
  })
})
