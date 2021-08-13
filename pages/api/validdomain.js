export default function handler(req, res) {
  const { domain } = req.query
  res.end(`Post: ${domain}`)
}
