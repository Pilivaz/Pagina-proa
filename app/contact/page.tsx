"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
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
                  onClick={() => navigateToPage("/agroactiva")}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Agroactiva
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
            src="/images/contact-workspace.jpg"
            alt="Modern workspace with laptop and communication tools"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">Contáctanos</h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
                Estamos aquí para responder tus preguntas, conocer tus ideas y construir juntos soluciones que mejoren
                la vida de las personas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                onClick={() => navigateToPage("/projects")}
              >
                Ver Nuestros Proyectos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-white text-black hover:bg-gray-100 hover:text-black"
                onClick={() => navigateToPage("/agroactiva")}
              >
                Nuestra Participación en Agroactiva
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Horarios</CardTitle>
                <CardDescription className="text-lg">Lun - Vie: 06:30 - 15:30</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Detailed Contact Information */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Cómo podemos ayudarte?</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Para Estudiantes y Familias</h3>
                    <p className="text-blue-700">
                      Si sos estudiante o familia y querés conocer más sobre nuestra propuesta educativa, nuestros
                      proyectos y cómo formar parte de nuestra comunidad, escribinos o llamanos.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">Para Colaboradores</h3>
                    <p className="text-green-700">
                      Si te interesan nuestros proyectos y querés colaborar con nosotros, ya sea como institución,
                      empresa o profesional, nos encantaría conocer tus ideas.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">Para Medios y Prensa</h3>
                    <p className="text-purple-700">
                      Si sos periodista o representás un medio de comunicación y querés conocer más sobre nuestros
                      proyectos e iniciativas, contactanos para coordinar entrevistas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Información Adicional</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Dirección Completa</h4>
                    <p className="text-gray-600">
                      Escuela Experimental PRoA
                      <br />
                      Corral de Bustos-Ifflinger
                      <br />
                      Córdoba, Argentina
                      <br />
                      CP: 2645
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Horarios de Atención</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 06:30 - 15:30
                      <br />
                      Secretaría: 06:30 - 15:30
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Síguenos en Redes Sociales</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Mantente al día con nuestras actividades, proyectos y eventos siguiéndonos en nuestras redes sociales.
            </p>
            <div className="flex justify-center gap-6">
              <Link
                href="https://www.instagram.com/proacorraldebustos?igsh=d3N1Y290YWo3MmVi"
                target="_blank"
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-110 transition-transform duration-200"
              >
                <Instagram className="w-8 h-8" />
              </Link>
              <Link
                href="https://www.facebook.com/proa.corraldebustos"
                target="_blank"
                className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform duration-200"
              >
                <Facebook className="w-8 h-8" />
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029VbB3gHz5a243u3A4IZ3j"
                target="_blank"
                className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full hover:scale-110 transition-transform duration-200"
              >
                <MessageCircle className="w-8 h-8" />
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">¿Listo para conectar con nosotros?</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                No dudes en contactarnos por cualquier medio. Estamos aquí para escucharte y trabajar juntos en
                proyectos que marquen la diferencia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  onClick={() => navigateToPage("/projects")}
                >
                  Ver nuestros proyectos
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-200 text-green-600 hover:bg-green-50"
                  onClick={() => navigateToPage("/agroactiva")}
                >
                  Nuestra participación en Agroactiva
                </Button>
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
                  <button
                    onClick={() => navigateToPage("/agroactiva")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Agroactiva
                  </button>
                </li>
                <li>
                  <span className="text-white">Contáctanos</span>
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
                  <span className="text-white">Contáctanos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-gray-800" />
        <div className="text-center text-gray-400">
          <p>&copy; 2025 Escuela Experimental PRoA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
