import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

// Plugin example: Make SVG pretty
import theme from '@freesewing/plugin-theme'

// Import your patterns here
import aaron from '@freesewing/aaron'
import brian from '@freesewing/brian'
// ... and so on

// Helper object
const patterns = {
  aaron,
  brian,
  // ... and so on
}

// Instantiate Express with JSON body support
const app = express().use(bodyParser.json({ limit: '2mb' }))

// This method will handle all requests for patterns
/*
app.post(
  '/:pattern', // First param is the route. :pattern is a url parameter
  function(req, res) { // This function will be called
    let design = req.params.pattern // This is the requested pattern
    let pattern = new patterns[design](req.body) // Create pattern using body as settings
      .use(theme) // Add plugin
      .draft() // Draft the pattern
    let svg = pattern.render() // Render pattern to SVG

    return res.send(svg) // Return SVG data
  }
)
*/

// The same, but as a one-liner
app.post('/:pattern', (req, res) => res.send(new patterns[req.params.pattern](req.body).use(theme).draft().render()).end())

// Catch-all route - Landing page
app.get('/', async (req, res) => res.sendFile(path.resolve(__dirname, 'landing', 'index.html')))

// Start app
const port = process.env.PORT || 3000
app.listen(port, err => console.log(`Listening on port ${port}`)})
