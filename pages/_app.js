import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const [carrito, setCarrito] = useState(carritoLS)
  const [listo, setListo] = useState(false)

  useEffect(() => {
    setListo(true)
}, []);

  useEffect(() => {
    if (carrito?.length !== 0) {
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }, [carrito]);

  const agregarCarrito = guitarra => {
    if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      const carritoActualizado = carrito.map(guitarraState => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad
        }

        return guitarraState
      })

      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, guitarra])
    }
  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map(guitarraState => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad
      }

      return guitarraState
    })

    setCarrito(carritoActualizado)
  }

  const eliminarGuitarra = id => {
    const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)

    carritoActualizado.length === 0 && localStorage.setItem('carrito', '[]');

    setCarrito(carritoActualizado)
  }

  return listo && <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    eliminarGuitarra={eliminarGuitarra}
    actualizarCantidad={actualizarCantidad} />
}
