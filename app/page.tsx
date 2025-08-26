'use client'

import { useState, useEffect } from 'react'
import { Heart, Calendar, Camera, MessageCircle, Star, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AnniversaryPage() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [heartCount, setHeartCount] = useState(0)

  const createHeart = (e: React.MouseEvent) => {
    const newHeart = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    }
    setHearts(prev => [...prev, newHeart])
    setHeartCount(prev => prev + 1)

    setTimeout(() => {
      setHearts(prev => prev.filter(heart => heart.id !== newHeart.id))
    }, 2000)
  }

  const timeline = [
    { date: "13 Mar 2025", event: "Primera salida", description: "El día que cambió nuestras vidas para siempre" },
    { date: "26 Abr 2025", event: "Día de inicio de la relación", description: "Prepare chufita para tí, y tomamos unas cervezas para celebrar, vimos el partido del Barca ese día" },
    { date: "01 May 2025", event: "Primera reunion que fuimos juntos'", description: "Reunion que tuvimos por el día del trabajo con los amigos del trabajo" },
    { date: "24 May 2025", event: "Ivamos a irnos de viaje, pero hibieron problemas", description: "Primera vez que dormimos juntos" },
    { date: "27 May 2025", event: "No pasamos el primer aniversario juntos, por que tuve que hacer con mi familia", description: "Día antes de mi cumpleaños, fuimos a comer a Rockys, y vimos una asaña que no habia hace mucho logramos pasar a octavos de Libertadores despues de 9 años; me sorprendiste con la musica de cumpleaños a las 12" },
    { date: "28 May 2025", event: "Día de mi cupleaños", description: "Me sorprediste con el desayuno y con los regalos en la noche. Primera vez que conociste a mis padres" },
    { date: "26 Jun 2025", event: "Cena romantica", description: "Pensaba invitarte yo a cenar, pero me sorprendiste con la cena ese dia" },
    { date: "26 Jul 2025", event: "Fuiste a mi casa con cupcakes", description: "No fue lo que esperabas, yo solo queria estar contigo" },
    { date: "03 Ago 2025", event: "Dia que fuimos al concierto", description: "Primera vez que voy por alguien a un concierto de ese tipo de ge nero" },

    { date: "06 Ago 2025", event: "Dia que empecé a hacer esto para tí", description: "Espero te llegue a gustar, porque solo lo hago por tí" },
    { date: "07 Ago 2025", event: "Fuimos a la caminata por el aniversario del club mas grande", description: "Me sorprendiste no pensaba ir, me habia olvidado por completo de todo" },
    { date: "26 Ago 2025", event: "Entrega de regalito", description: "Espero te guste mi amor" },

  ]

  const memories = [
    { title: "Nuestra primera foto", description: "El momento que lo capturó todo" },
    { title: "Segundo aniversario", description: "Cena Romantica" },
    { title: "Cumpleaños de mi abuela", description: "Celebrando el primer cumpleaños de mi familia" },
    { title: "Foto ramdon", description: "Fotos arrecostados uwu" },
    { title: "Aniversario Crema", description: "Una noche para recordar" },
    { title: "Compras y luego chifita", description: "Cena espontanea" },
    { title: "BabyShower JF", description: "Fotito aunque no te gusto" }

  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-rose-100 relative overflow-hidden" onClick={createHeart}>
      {/* Floating Hearts Animation */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="fixed pointer-events-none z-50 animate-bounce"
          style={{ left: heart.x - 12, top: heart.y - 12 }}
        >
          <Heart className="w-6 h-6 text-red-500 fill-red-500" />
        </div>
      ))}

      {/* Background Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-10 left-10 w-8 h-8 text-pink-300 opacity-30 animate-pulse" />
        <Heart className="absolute top-32 right-20 w-6 h-6 text-red-300 opacity-40 animate-pulse delay-1000" />
        <Heart className="absolute bottom-20 left-32 w-10 h-10 text-rose-300 opacity-25 animate-pulse delay-2000" />
        <Heart className="absolute bottom-40 right-10 w-7 h-7 text-pink-400 opacity-35 animate-pulse delay-500" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-4 animate-spin" />
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 mb-4">
              4 Meses
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6">
              Con La Persona Más Especial
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Celebrando cuatro meses de risas, problemas, mometos juntos y un amor que crece cada día
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">

            <div className="text-center">
              <div className="text-4xl font-bold text-pink-500">122</div>
              <div className="text-sm text-gray-600">Días juntos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500">∞</div>
              <div className="text-sm text-gray-600">Amor eterno</div>
            </div>
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Calendar className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestra Historia de Amor</h2>
            <p className="text-xl text-gray-600">Los momentos que definieron nuestro camino juntos</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-400 to-pink-400"></div>

            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <Card className={`w-full max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Heart className="w-5 h-5 text-red-500 mr-2 fill-current" />
                      <span className="text-sm font-semibold text-red-600">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.event}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Camera className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Galería de Recuerdos</h2>
            <p className="text-xl text-gray-600">Momentos capturados, memorias eternas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memories.map((memory, index) => (
              <Card key={index} className="group hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={`/images/memory${index + 1}.jpeg`}
                    alt={memory.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{memory.title}</h3>
                  <p className="text-gray-600">{memory.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Love Letter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-12 h-12 text-red-500 mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Carta de Amor</h2>

          <Card className="shadow-2xl">
            <CardContent className="p-12">
              <div className="text-left space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-2xl font-semibold text-red-600 text-center mb-8">Mi Amor,</p>

                <p>
                  Han pasado cuatro meses increíbles desde que nuestros caminos se cruzaron, y cada día me despierto
                  agradeciendo al universo por haberte puesto en mi vida. Eres mi compañera de locuras, mi refugio
                  en las tormentas y mi razón para sonreír cada mañana.
                </p>

                <p>
                  Quiero que sepas que aunque no te lo digo muy seguido, te quiero con todo mi corazón. Cada momento
                  que compartimos, es algo que atesoro profundamente.
                </p>

                <p>
                  Gracias por ser mi mejor amiga, mi confidente y el amor de mi vida. Por muchos meses más ... Te quiero mucho mi amor❤️.
                </p>

                <p className="text-right text-2xl font-semibold text-red-600 mt-8">
                  Con todo mi amor,<br />
                  Tu alma gemela ❤️
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center mb-6">
            <Heart className="w-8 h-8 text-red-500 fill-current mx-2" />
            <Star className="w-6 h-6 text-yellow-400 fill-current mx-2" />
            <Heart className="w-8 h-8 text-red-500 fill-current mx-2" />
          </div>
          <h3 className="text-2xl font-bold mb-4">4 meses contigo, mi persona mi chica especial</h3>
          <p className="text-gray-300 mb-4">
            "El amor verdadero no tiene final, solo tiene comienzos más hermosos cada día"
          </p>
          <p className="text-sm text-gray-400">
            Creado con 💕 para celebrar nuestro aniversario • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
