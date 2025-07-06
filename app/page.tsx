import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/agroactiva')
  
  return null // Esta línea es importante para TypeScript
}