"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Droplets,
  Leaf,
  Users,
  Target,
  Lightbulb,
  Cog,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowLeft,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function ProjectsPage() {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
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
            src="/images/technical-drawings.jpg"
            alt="Planos técnicos y diseños de ingeniería - Proyectos de la Escuela Experimental PRoA"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-lg px-4 py-2"
              >
                <Cog className="w-5 h-5 mr-2" />
                Innovación Tecnológica
              </Badge>
              <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Nuestros
                <span className="text-blue-300 block">Proyectos</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
                Descubre los proyectos innovadores que nuestros estudiantes desarrollan para resolver problemas reales y
                contribuir al desarrollo sostenible de nuestra comunidad a través de la ciencia y la tecnología.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                onClick={() => scrollToSection("infiltrometro")}
              >
                Ver Infiltrómetro
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-white text-black hover:bg-gray-100 hover:text-black"
                onClick={() => scrollToSection("invernadero")}
              >
                Ver Invernaculo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Infiltrometer Project */}
            <div id="infiltrometro" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-20">
              <div>
                <Badge className="bg-blue-600 text-white mb-4">
                  <Droplets className="w-4 h-4 mr-1" />
                  Ciencias Ambientales
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Proyecto Infiltrómetro</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Nuestro infiltrómetro es un dispositivo innovador que se entierra en el suelo para medir la humedad en
                  distintas capas gracias a sensores colocados a diferentes profundidades.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-blue-600" />
                      Objetivos del Proyecto
                    </h3>
                    <ul className="text-gray-600 space-y-2 ml-7">
                      <li>• Estudiar la infiltración del agua en distintos tipos de suelo</li>
                      <li>• Optimizar sistemas de riego para la agricultura sustentable</li>
                      <li>• Proporcionar datos en tiempo real sobre la humedad del suelo</li>
                      <li>• Contribuir a la conservación del agua en la región</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-blue-600" />
                      Características Técnicas
                    </h3>
                    <ul className="text-gray-600 space-y-2 ml-7">
                      <li>• Sensores de humedad distribuidos por capas del suelo</li>
                      <li>• Pantalla LCD para lectura local de datos</li>
                      <li>• Módulo GSM para envío de datos por SMS</li>
                      <li>• Monitoreo remoto en tiempo real</li>
                      <li>• Alimentación por batería de larga duración</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" />
                      Impacto en la Comunidad
                    </h3>
                    <p className="text-gray-600 ml-7">
                      Este proyecto ha permitido a productores locales optimizar sus sistemas de riego, reduciendo el
                      consumo de agua hasta en un 30% mientras mantienen la productividad de sus cultivos.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/infiltrometer-project.jpg"
                  alt="Infiltrometer Device at Escuela Experimental PRoA"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full"
                />
              </div>
            </div>

            <Separator className="my-16" />

            {/* Greenhouse Project */}
            <div id="invernadero" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-20">
              <div className="order-2 lg:order-1">
                <Image
                  src="/images/greenhouse-project.jpg"
                  alt="Smart Greenhouse Project at Escuela Experimental PRoA"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="bg-green-600 text-white mb-4">
                  <Leaf className="w-4 h-4 mr-1" />
                  Agricultura Sustentable
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Invernaculo Automático</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Un mini invernadero de 1m x 1m diseñado para abastecer con plantas de hoja a una familia de 4
                  personas, utilizando materiales reciclados y tecnología de automatización.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-green-600" />
                      Objetivos del Proyecto
                    </h3>
                    <ul className="text-gray-600 space-y-2 ml-7">
                      <li>• Promover la agricultura familiar sustentable</li>
                      <li>• Reutilizar materiales para reducir el impacto ambiental</li>
                      <li>• Automatizar el cultivo para facilitar el mantenimiento</li>
                      <li>• Garantizar producción continua de alimentos frescos</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-green-600" />
                      Características Técnicas
                    </h3>
                    <ul className="text-gray-600 space-y-2 ml-7">
                      <li>• Techo de botellas recicladas que canalizan agua de lluvia</li>
                      <li>• Sistema de riego automático activado por sensores de humedad</li>
                      <li>• Ventilación automática controlada por temperatura</li>
                      <li>• Pantalla LCD para monitoreo de condiciones ambientales</li>
                      <li>• Recolección y almacenamiento de agua de lluvia</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-green-600" />
                      Impacto en la Comunidad
                    </h3>
                    <p className="text-gray-600 ml-7">
                      El diseño ha sido replicado por varias familias de la comunidad, promoviendo la seguridad
                      alimentaria y la conciencia ambiental a través del reciclaje y la agricultura urbana.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">¿Te interesan nuestros proyectos?</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Si querés conocer más detalles sobre nuestros proyectos o colaborar con nosotros, no dudes en
                contactarnos. Siempre estamos abiertos a nuevas ideas y colaboraciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => navigateToPage("/contact")}
                >
                  Contáctanos
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-200 text-green-600 hover:bg-green-50"
                  onClick={() => navigateToPage("/agroactiva")}
                >
                  Ver nuestra participación en Agroactiva
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
                  <span className="text-white">Proyectos</span>
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
                  <span className="text-white">Nuestros Proyectos</span>
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
