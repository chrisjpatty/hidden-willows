import fs from 'fs'
import klaw from 'klaw'
import path from 'path'
import matter from 'gray-matter'

const getOpenings = () => {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync('./src/openings')) {
      klaw('./src/openings')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Create slug for URL //
            dataObj.data.slug = dataObj.data.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // postings = items for below routes //
          resolve(items)
        })
    } else {
      // If src/postings directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const openings = await getOpenings()
    return [
      {
        path: '/',
        component: 'src/pages/index',
        getData: () => ({
          openings
        })
      },
      {
        path: '/openings',
        component: 'src/pages/openings',
        getData: () => ({
          openings
        }),
      },
      {
        path: '/rates',
        component: 'src/pages/rates',
        getData: () => ({
          openings
        }),
      },
      {
        path: '/contact',
        component: 'src/pages/config',
        getData: () => ({
          openings
        }),
      },
    ]
  },
}
