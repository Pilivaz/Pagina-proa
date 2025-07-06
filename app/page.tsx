"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Award,
  Lightbulb,
  Target,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function AgroactivaPage() {
  const router = useRouter()

  const navigateToPage = (path: string) => {
    router.push(path)
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const navigateToHome = () => {
    router.push("/")
    // Scroll to top immediately when going to home
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" })
    }, 50)
  }

  const navigateToProject = (projectId: string) => {
    router.push(`/projects#${projectId}`)
    // Small delay to ensure page loads before scrolling
    setTimeout(() => {
      const element = document.getElementById(projectId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logos/proa-logo-circular.png"
                alt="Escuela Experimental PRoA Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-gray-900">
                Escuela Experimental PRoA | Corral de Bustos-Ifflinger
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <button
                  onClick={() => navigateToPage("/projects")}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Proyectos
                </button>
                <button
                  onClick={() => navigateToPage("/contact")}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contáctanos
                </button>
              </div>
              <button
                onClick={navigateToHome}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/agroactiva-entrance.webp"
            alt="Entrada principal de Agroactiva con multitud de visitantes"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-lg px-4 py-2"
              >
                <Award className="w-5 h-5 mr-2" />
                Evento Nacional
              </Badge>
              <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                PRoA en
                <span className="text-green-300 block">Agroactiva 2025</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
                Nuestra participación en uno de los eventos agropecuarios más importantes de Argentina, donde
                presentamos nuestros proyectos innovadores ante más de 200,000 visitantes de todo el país y el exterior.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
                onClick={() => navigateToPage("/projects")}
              >
                Ver Nuestros Proyectos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-white text-black hover:bg-gray-100 hover:text-black"
                onClick={() => navigateToPage("/contact")}
              >
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Fecha del Evento</CardTitle>
                <CardDescription className="text-lg">Junio 2025</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Ubicación</CardTitle>
                <CardDescription className="text-lg">Armstrong, Santa Fe</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Visitantes</CardTitle>
                <CardDescription className="text-lg">+200,000 personas</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* About Agroactiva */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">¿Qué es Agroactiva?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Agroactiva es la muestra a campo más importante de Argentina y una de las más relevantes de
                  Sudamérica. Durante cuatro días, reúne a productores, empresarios, técnicos, estudiantes y
                  profesionales del sector agropecuario de todo el país y el exterior.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Más de 500 empresas expositoras</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Demostraciones de maquinaria en vivo</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Conferencias técnicas y capacitaciones</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Espacio dedicado a la innovación y tecnología</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/agroactiva-aerial.jpg"
                  alt="Vista aérea de Agroactiva - La muestra agropecuaria más importante de Argentina"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
                {/* Botón centrado debajo de la imagen en dispositivos grandes */}
                <div className="mt-6 hidden lg:block">
                  <Link
                    href="https://agroactiva.com/agroactiva2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
                      Visitar sitio oficial de Agroactiva
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Botón centrado para dispositivos pequeños y medianos */}
            <div className="mt-12 text-center lg:hidden">
              <Link
                href="https://agroactiva.com/agroactiva2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
                  Visitar sitio oficial de Agroactiva
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>

          {/* Our Participation */}
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Nuestra Participación</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fuimos invitados a participar en el sector de innovación educativa de Córdoba, donde presentamos
                nuestros proyectos de infiltrómetro e invernadero automático.
              </p>
            </div>

            {/* Projects Showcase */}
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="overflow-hidden shadow-xl border-0">
                <div className="relative h-64">
                  <Image
                    src="/images/infiltrometer-project.jpg"
                    alt="Infiltrometer at Agroactiva"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">Proyecto Destacado</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Infiltrómetro en Agroactiva</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Demostraciones en vivo del funcionamiento del dispositivo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Nuestro infiltrómetro captó la atención de productores y técnicos agropecuarios. Realizamos
                    demostraciones en vivo mostrando cómo el dispositivo mide la humedad del suelo y envía datos por
                    SMS.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Logros en el evento:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Muchas consultas de productores interesados</li>
                      <li>• Entrevistas en medios especializados</li>
                      <li>• Contactos con personas del sector tecnológico</li>
                      <li>• Invitación a participar en otros eventos</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                      onClick={() => navigateToProject("infiltrometro")}
                    >
                      Ver más detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-xl border-0">
                <div className="relative h-64">
                  <Image
                    src="/images/greenhouse-project.jpg"
                    alt="Greenhouse at Agroactiva"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">Innovación Sustentable</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Invernaculo Sustentable</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Modelo funcional con materiales reciclados
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    El invernadero automático fue un éxito por su enfoque en la sustentabilidad y el uso de materiales
                    reciclados. Muchas familias se interesaron en replicar el modelo en sus hogares.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Impacto generado:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Muchas familias solicitaron el proyecto</li>
                      <li>• Reconocimiento por innovación sustentable</li>
                      <li>• Propuesta de escalamiento del proyecto</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-200 hover:bg-green-50"
                      onClick={() => navigateToProject("invernadero")}
                    >
                      Ver más detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact and Recognition */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Impacto y Reconocimientos</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Nuestra participación en Agroactiva generó un impacto significativo y nos permitió establecer
                  conexiones valiosas para el futuro de nuestros proyectos.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Networking</h4>
                  <p className="text-gray-600">
                    Establecimos contactos con varias personas y organizaciones del sector agropecuario.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovación</h4>
                  <p className="text-gray-600">
                    Nuestros proyectos fueron reconocidos como ejemplos de innovación educativa aplicada.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Proyección</h4>
                  <p className="text-gray-600">
                    Recibimos invitaciones para participar en otros eventos y ferias tecnológicas.
                  </p>
                </div>
              </div>
            </div>

            {/* Student Testimonials */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Testimonios de Nuestros Estudiantes</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                  <p className="text-gray-600 italic mb-4">
                    "Participar en Agroactiva fue increíble. Ver cómo nuestro proyecto del infiltrómetro interesaba a
                    tantos productores nos hizo sentir que realmente estamos haciendo algo útil."
                  </p>
                  <p className="font-semibold text-gray-900">- Estudiante de 6º año</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                  <p className="text-gray-600 italic mb-4">
                    "Fue emocionante explicar nuestro invernadero a familias que querían replicarlo en sus casas. Nos
                    dimos cuenta de que la tecnología puede ayudar a resolver problemas reales."
                  </p>
                  <p className="font-semibold text-gray-900">- Estudiante de 5º año</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  ¿Querés conocer más sobre nuestros proyectos?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Si te interesó nuestra participación en Agroactiva y querés conocer más detalles sobre nuestros
                  proyectos, no dudes en contactarnos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => navigateToPage("/projects")}
                  >
                    Ver todos nuestros proyectos
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-green-200 text-green-600 hover:bg-green-50"
                    onClick={() => navigateToPage("/contact")}
                  >
                    Contáctanos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Image
                  src="/logos/proa-logo-new.png"
                  alt="Escuela Experimental PRoA Logo"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Formando los innovadores del mañana a través de la excelencia educativa y la investigación.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href="https://www.instagram.com/proacorraldebustos?igsh=d3N1Y290YWo3MmVi"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/proa.corraldebustos"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://whatsapp.com/channel/0029VbB3gHz5a243u3A4IZ3j"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={navigateToHome} className="hover:text-white transition-colors text-left">
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToPage("/projects")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Proyectos
                  </button>
                </li>
                <li>
                  <span className="text-white">Agroactiva</span>
                </li>
                <li>
                  <button
                    onClick={() => navigateToPage("/contact")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Contáctanos
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Desarrollo de Software
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Ciencias Ambientales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Innovación Tecnológica
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Agricultura Sustentable
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Conectar</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => navigateToPage("/projects")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Nuestros Proyectos
                  </button>
                </li>
                <li>
                  <span className="text-white">Participación en Eventos</span>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Colaboraciones
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => navigateToPage("/contact")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Contáctanos
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Escuela Experimental PRoA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
