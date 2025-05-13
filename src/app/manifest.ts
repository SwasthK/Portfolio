import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Portfolio | SwasthK',
    short_name: 'SwasthK',
    description: 'Explore Swasthik\'s portfolio featuring modern full-stack web projects, UI/UX designs, and blog insights on development best practices. Available for freelance and full-time opportunities.',
    categories: ['portfolio', 'web development', 'UI/UX design','blog','freelance','full stack development','web design'],
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
  }
}