"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  BookOpen,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
  Droplets,
  Leaf,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react"

export default function SchoolPage() {
  const router = useRouter()

  // Agregar una nueva función para navegar a páginas completas
  const navigateToPage = (path: string) => {
    router.push(path)
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
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
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                Acerca de
              </Link>
              <button
                onClick={() => navigateToPage("/projects")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Proyectos
              </button>
              <button
                onClick={() => navigateToPage("/agroactiva")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Agroactiva
              </button>
              <button
                onClick={() => navigateToPage("/contact")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contáctanos
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
            src="/images/school-building.jpg"
            alt="Escuela Experimental PRoA Campus Building"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Innovación Educativa desde 2018
              </Badge>
              <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Formando los
                <span className="text-blue-300 block font-bold">Innovadores del mañana</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
                En la Escuela Experimental PRoA, combinamos estándares académicos rigurosos con proyectos de
                investigación práctica, preparando a los estudiantes para los desafíos del futuro a través de
                experiencias de aprendizaje innovadoras.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                onClick={() => navigateToPage("/projects")}
              >
                Ver Proyectos
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

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sobre nuestra Escuela</h2>
            <p className="text-gray-600 mb-4 text-xl max-w-3xl mx-auto">
              Somos una escuela ProA con orientación en Desarrollo de Software. Combinamos formación académica con
              proyectos reales y metodologías activas. Promovemos trayectorias personalizadas y buscamos formar jóvenes
              críticos, autónomos y comprometidos con su entorno.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">170+</CardTitle>
                <CardDescription className="text-lg">Estudiantes</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">95%</CardTitle>
                <CardDescription className="text-lg">Proyectos terminados</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">50+</CardTitle>
                <CardDescription className="text-lg">Egresados</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-6">Nuestra Misión y Visión</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-500 mb-2">Misión</h4>
                    <p className="text-gray-600 mb-4">
                      Nuestra escuela tiene como misión formar personas comprometidas con su comunidad, capaces de
                      pensar soluciones reales a los problemas que nos rodean. Creemos que la educación no debe quedarse
                      solo en los libros, sino que tiene que salir al mundo y transformarlo.
                    </p>

                    <p className="text-gray-600 mb-4">
                      Por eso impulsamos proyectos que nacen de las ideas y preocupaciones de los estudiantes. Ya sea
                      buscando maneras de cuidar el ambiente, ayudar a quienes más lo necesitan o mejorar aspectos de la
                      vida cotidiana, cada proyecto es una oportunidad para marcar la diferencia.
                    </p>

                    <p className="text-gray-600">
                      Queremos que lo que se aprende en el aula sirva para actuar, para construir, para cambiar. Nuestra
                      meta es que el conocimiento se convierta en acción, y que esa acción ayude a que la vida de las
                      personas sea un poco más fácil.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-500 mb-2">Visión</h4>
                    <p className="text-gray-600 mb-4">
                      Soñamos con una escuela que sea un espacio de creatividad, participación y compromiso social. Una
                      escuela que inspire a sus estudiantes a mirar el mundo con ojos críticos, pero también con
                      esperanza, y que los motive a buscar soluciones para construir un futuro mejor.
                    </p>

                    <p className="text-gray-600 mb-4">
                      Nos proyectamos como una comunidad educativa que forma ciudadanos solidarios, responsables y
                      capaces de liderar cambios positivos. Queremos ser reconocidos por promover proyectos que no solo
                      enseñen, sino que también impacten de manera concreta en la vida de las personas.
                    </p>

                    <p className="text-gray-600">
                      Nuestra visión es una escuela que no se encierra, sino que se abre al entorno, dialoga con él y se
                      involucra activamente para transformar la realidad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Image
                  src="/images/students-laboratory.jpg"
                  alt="Students working collaboratively in laboratory at Escuela Experimental PRoA"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover w-full"
                />
                <Image
                  src="/images/electronics-project.jpg"
                  alt="Electronics and circuit board project at Escuela Experimental PRoA"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Proyectos de investigación destacados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En nuestra escuela impulsamos proyectos que combinan el aprendizaje con la acción. A través de la
              tecnología y la creatividad, buscamos resolver problemáticas reales, mejorar la calidad de vida y cuidar
              el ambiente.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Proyecto infiltrometro */}
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="relative h-64">
                <Image
                  src="/images/infiltrometer-project.jpg"
                  alt="Infiltrometer Device at Escuela Experimental PRoA"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">
                    <Droplets className="w-4 h-4 mr-1" />
                    Ciencias Ambientales
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900">Proyecto de "Infiltrómetro"</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Medición automatizada de la humedad en distintas capas del suelo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Este dispositivo se entierra en el suelo y mide la humedad en distintas capas gracias a sensores
                  colocados a diferentes profundidades. Los datos se visualizan en una pantalla LCD y se envían por SMS.
                </p>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Presentado en Agroactiva 2025</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-200 hover:bg-blue-50"
                    onClick={() => navigateToProject("infiltrometro")}
                  >
                    Ver más
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Proyecto Invernaculo */}
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="relative h-64">
                <Image
                  src="/images/greenhouse-project.jpg"
                  alt="Smart Greenhouse Project at Escuela Experimental PRoA"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white">
                    <Leaf className="w-4 h-4 mr-1" />
                    Agricultura Sustentable
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900">Proyecto "Invernaculo Automático"</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Mini invernadero reciclado y autónomo para el cultivo familiar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Un mini invernadero de 1m x 1m con techo de botellas recicladas, riego automático por sensores de
                  humedad y ventilación inteligente según temperatura.
                </p>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Presentado en Agroactiva 2025</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-green-600 border-green-200 hover:bg-green-50"
                    onClick={() => navigateToProject("invernadero")}
                  >
                    Ver más
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
              onClick={() => navigateToPage("/projects")}
            >
              Ver todos los proyectos
            </Button>
          </div>
        </div>
      </section>

      {/* Agroactiva Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <Badge className="bg-green-600 text-white mb-4 text-lg px-4 py-2">
                <Award className="w-5 h-5 mr-2" />
                Evento Nacional
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Participamos en Agroactiva 2025</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fuimos invitados a presentar nuestros proyectos en uno de los eventos agropecuarios más importantes de
                Argentina, donde más de 200,000 visitantes conocieron nuestras innovaciones.
              </p>
            </div>
            <div className="text-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => navigateToPage("/agroactiva")}
              >
                Conoce nuestra participación
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Si te interesan los proyectos que hacemos o querés colaborar con nosotros, no dudes en comunicarte.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Teléfono</CardTitle>
                <CardDescription className="text-lg">+54 (3468) 64-4403</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Email</CardTitle>
                <CardDescription className="text-lg">info@escuelasproa.edu.ar</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Ubicación</CardTitle>
                <CardDescription className="text-lg">Corral de Bustos-Ifflinger, Córdoba, Argentina</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => navigateToPage("/contact")}
            >
              Ver información completa de contacto
            </Button>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Síguenos en Redes Sociales</h3>
            <div className="flex justify-center gap-6">
              <Link
                href="https://www.instagram.com/proacorraldebustos?igsh=d3N1Y290YWo3MmVi"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-110 transition-transform duration-200"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.facebook.com/proa.corraldebustos"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform duration-200"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029VbB3gHz5a243u3A4IZ3j"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full hover:scale-110 transition-transform duration-200"
              >
                <MessageCircle className="w-6 h-6" />
              </Link>
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
                  <Link href="#about" className="hover:text-white transition-colors">
                    Sobre nosotros
                  </Link>
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
                  <button
                    onClick={() => navigateToPage("/agroactiva")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Agroactiva
                  </button>
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
                  <button
                    onClick={() => navigateToPage("/agroactiva")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Participación en Eventos
                  </button>
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
