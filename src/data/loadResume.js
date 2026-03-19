/**
 * Loads resume data from content/resume.md (YAML frontmatter).
 * To use a .md file from another folder, symlink it:
 *   ln -sf /path/to/your/resume.md src/content/resume.md
 */
import matter from 'gray-matter'
import resumeRaw from '../content/resume.md?raw'

let resumeFromMd = { title: 'Experience', jobs: [] }
try {
  const { data } = matter(resumeRaw)
  resumeFromMd = {
    title: data?.title ?? 'Experience',
    jobs: Array.isArray(data?.jobs) ? data.jobs : [],
  }
} catch (_) {
  // Fallback: use content.js resume in App
}

export { resumeFromMd }
