import Layout from "@/components/layout"
import Image from "next/image"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
    return (
        <Layout
            title='Nosotros'
            description='Sobre Nosotros. GuitarLA. Tienda de Música'>

            <main className="contenedor">
                <h1 className="heading">Nosotros</h1>

                <div className={styles.contenido}>
                    <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Nosotros" />

                    <div>
                        <p>
                            Vestibulum metus magna, semper a tellus non, consequat faucibus eros. Fusce interdum ac mi in mollis. Duis vitae risus et neque euismod tristique. Proin ornare ante ultricies, sollicitudin magna in, congue sem. Vivamus fermentum rutrum quam in maximus. Praesent non mi faucibus nisl rhoncus semper vel ac dui. Nullam in mauris in ex ornare luctus.
                        </p>
                        <p>
                            Nullam aliquam ultricies tortor, at interdum nibh mattis vitae. Integer sed ex lobortis, ornare eros imperdiet, elementum massa. Suspendisse sit amet risus accumsan, iaculis nulla at, condimentum orci. In euismod erat dui, non semper tortor hendrerit vel. Sed fermentum quis urna in pulvinar. Quisque enim enim, molestie sit amet massa ac, posuere sagittis magna.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}