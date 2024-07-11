import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CookiePolicyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-auto">
      <div
        className="absolute top-4 left-4 tooltip tooltip-right"
        data-tip="Atrás"
      >
        <ArrowLeft
          size={34}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
      </div>

      <div className="px-4 lg:px-20 xl:px-0 xl:w-[1040px] mx-auto mt-14 pt-10 mb-28">
        <h1 className="text-3xl font-semibold">POLÍTICA DE COOKIES</h1>

        <div className="space-y-9 mt-6">
          <p>
            La presente Política se aplica a los siguientes sitios web de la
            empresa JAIA 2024 S.L.: JAIA.TV, JAIA.IO, JAIA.STORE, a las
            aplicaciones móviles propias o de terceros y aplicaciones para
            televisiones conectadas (SmartTV) propias o de terceros.
          </p>

          <p>
            Al acceder al sitio web, aplicación móvil o aplicación para Smart
            TV, te mostraremos un aviso de cookies o tecnologías similares
            informando de cómo puedes prestar el consentimiento o rechazar o
            configurar el uso de cookies a través de un panel de configuración
            (en adelante, Panel de Configuración). Podrás asimismo acceder a
            dicho panel para modificar su configuración en cualquier momento a
            través del link “Configuración de Privacidad” en el pie de página.
          </p>

          <p>
            El consentimiento para la instalación de cookies no es un requisito
            obligatorio para acceder al sitio web. No obstante, si decides no
            otorgarlo es posible que haya algunos elementos que no funcionen
            correctamente, o que recibas publicidad que no sea de tu interés.
          </p>

          <p>
            La información obtenida a través de las cookies será asimismo
            tratada por las empresas colaboradoras con las finalidades indicadas
            en sus respectivas políticas de privacidad. Puedes conocer las
            empresas colaboradoras que incorporan sus cookies en nuestros sitios
            web, aplicaciones móviles y aplicaciones para SmartTV, qué datos
            recopilan y con qué finalidad, en la pantalla de configuración o a
            través de la sección “Configuración de Privacidad” del pie de la
            página.
          </p>

          <div className="space-y-4">
            <h4 className="font-semibold text-xl">
              ¿Qué son las cookies? <br />
            </h4>
            <p>
              Las cookies, identificadores publicitarios y/o tecnologías
              similares (en adelante “cookies”) son ficheros que se descargan en
              el dispositivo del usuario (ordenador, Smartphone, tablet, Smart
              tv, etc.) y que almacenan y recuperan información cuando navegas o
              accedes a los diferentes servicios. Las cookies permiten, entre
              otras cosas, reconocerte como usuario, obtener información sobre
              tus hábitos de navegación o personalizar la forma en que se
              muestra el contenido y la publicidad.
            </p>
          </div>

          <p>
            En esta Política se detallan las finalidades con las que JAIA 2924
            SL utiliza la información obtenida a través de las cookies, entre
            otras: posibilitar o mejorar el servicio ofrecido, mostrar los
            contenidos y publicidad general y personalizada o realizar
            mediciones sobre el comportamiento del usuario en el sitio.
          </p>

          <div className="space-y-4">
            <h4 className="font-semibold text-xl">
              ¿Qué datos personales tratamos a través del uso de cookies?
            </h4>
            <p>
              A través de las cookies obtenemos los denominados datos de
              navegación. Estos datos incluyen la dirección IP desde la que te
              has conectado, cookies u otros dispositivos de identificación,
              identificadores publicitarios activados en el dispositivo en el
              caso de que hayas autorizado su uso, características del
              dispositivo como la marca, modelo, tamaño de la pantalla, sistema
              operativo y su versión, detalles del navegador usado, el tipo de
              red a la que estás conectado, identificadores del dispositivo y la
              identificación de los distintos contenidos que visitas.
            </p>
          </div>

          <p>
            Asimismo, obtenemos datos de publicidad, que son aquellos datos
            relativos a los anuncios que te mostramos y cómo interactúas con
            ellos, por ejemplo, si se ha hecho un clic sobre un anuncio, el
            tiempo que ha estado visible en la pantalla o la noticia en la que
            se ha mostrado el anuncio.
          </p>

          <div className="space-y-4">
            <h4 className="font-semibold text-xl">Tipos de Cookies</h4>
            <p>
              Hay distintos tipos de cookies, según la entidad que las gestione,
              el plazo de tiempo que permanecen activadas y su finalidad.
            </p>
          </div>

          <p>
            Según la entidad que gestione el equipo o dominio desde dónde se
            envían y trate los datos que se obtengan:
          </p>

          <p>
            Cookies propias: aquellas gestionadas por el propio editor y desde
            el que se presta el servicio solicitado.
          </p>

          <p>
            Cookies de tercero: aquellas que se envían desde un equipo o dominio
            que no es gestionado por el editor, sino por otra entidad que trata
            los datos obtenidos a través de las cookies.
          </p>

          <p>
            Según el plazo de tiempo que permanecen activadas en el dispositivo:
          </p>

          <p>
            Cookies de sesión: recaban y almacenar datos mientras accedes a
            nuestros servicios, empleándose para almacenar información que sólo
            interesa conservar durante la sesión.
          </p>

          <p>
            Cookies persistentes: los datos siguen almacenados en el terminal y
            pueden ser accedidos y tratados durante un periodo definido por el
            responsable de la cookie.
          </p>

          <p>Según la finalidad para la que se traten los datos obtenidos:</p>

          <p>
            Técnicas: son aquellas que permiten al usuario navegar por el sitio
            web o acceder y utilizar los contenidos y servicios que incluyen
            nuestras aplicaciones. Estas cookies se utilizan para operar el
            servicio, mostrar contenidos correctamente y permitir al usuario
            interactuar con las funcionalidades seleccionadas, incluyendo
            aquellas cookies que permiten gestionar la publicidad que se muestra
            en los distintos espacios publicitarios, sin recopilar información
            de los usuarios con fines distintos como crear un perfil del usuario
            o mostrarle contenido o publicidad personalizada.
          </p>

          <p>
            Cookies de personalización: Hacen posible que cada usuario pueda
            configurar aspectos como el lenguaje en el que desea ver la página
            web o los servicios, formatos de visualización, etc.
          </p>

          <p>
            Analíticas: son aquellas que, ya sean tratadas por nosotros o por
            terceros, nos permiten cuantificar el número de usuarios y así
            realizar la medición y análisis estadístico de la utilización que
            hacen los usuarios del servicio. Para ello se analiza su navegación
            en nuestras páginas web con el fin de mejorar la oferta de productos
            o servicios que ofrecemos.
          </p>

          <p>
            Cookies de redes sociales: facilitan al usuario compartir contenidos
            en redes sociales de su interés. Mediante su utilización el usuario
            no tiene que introducir nuevamente sus datos de acceso para
            compartir contenidos.
          </p>

          <p>
            Cookies de publicidad comportamental: son aquellas que, ya sean
            tratadas por nosotros o por terceros, permiten analizar el
            comportamiento del usuario durante el uso del servicio para
            mostrarle publicidad afín a sus intereses basada en sus preferencias
            y hábitos de navegación o visualización de contenidos. Con tu
            consentimiento, podemos utilizar bases de datos externas para la
            creación de estos perfiles publicitarios, de acuerdo con lo
            detallado en el Panel de Configuración y la Política de Privacidad.
          </p>

          <p>
            A través del Panel de Configuración de Cookies puedes obtener la
            información actualizada de las cookies que hay en nuestros sitios
            web y aplicaciones, junto con información relativa al proveedor de
            cada una de ellas, el propósito o finalidad de la misma, así como su
            duración y la Política de privacidad del proveedor.
          </p>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">
              ¿Cómo puedo desactivar las cookies que utiliza esta página web?
            </h4>

            <p>
              Si deseas permitir o desactivar las cookies, puedes hacerlo a
              través del Panel de Configuración accesible en el link
              “Configuración de Privacidad” que puedes encontrar en el pie de
              página de nuestras páginas web o en Ajustes{'>'}Ajustes de
              Privacidad de las aplicaciones.
            </p>
          </div>

          <p>
            Puedes también gestionar su desactivación, así como borrar tus datos
            de navegación, a través de la configuración de tu navegador o
            dispositivo. Consulta las opciones e instrucciones que te ofrece tu
            navegador. No obstante, en el caso de que decidas bloquearlas, es
            posible que ciertos servicios que necesiten su uso no estén
            disponibles.
          </p>

          <p>
            Puedes llevar a cabo la gestión de las cookies en las siguientes
            ubicaciones de los navegadores más populares:
          </p>

          <div className="space-y-2">
            <p>
              Chrome, desde
              <a
                href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647"
                className="link ml-1"
              >
                {' '}
                http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647
              </a>
            </p>

            <p>
              Windows Edge, desde
              <a
                href="https://support.microsoft.com/es-es/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy"
                className="link ml-1"
              >
                https://support.microsoft.com/es-es/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy
              </a>
            </p>

            <p>
              Firefox, desde
              <a
                href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we"
                className="link ml-1"
              >
                http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
              </a>
            </p>

            <p>
              Safari, desde
              <a
                href="http://support.apple.com/kb/ph5042"
                className="link ml-1"
              >
                http://support.apple.com/kb/ph5042
              </a>
            </p>
          </div>

          <p>
            Ten en cuenta que, en cada caso, la desactivación para cada
            navegador y dispositivo es independiente. Si deseas desactivar las
            cookies en todos los navegadores y dispositivos deberás hacerlo en
            cada uno de ellos individualmente.
          </p>

          <p>
            Además te informamos de que la desactivación no surte efectos de
            forma inmediata y que se hará efectiva una vez se actualice la
            información en los sistemas.
          </p>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">
              Corresponsables del tratamiento
            </h4>

            <p>
              En cumplimiento de lo establecido en el artículo 26 del Reglamento
              General de Protección de Datos, te informamos de la existencia de
              una relación de corresponsabilidad con los terceros detallados en
              este apartado que prestan servicios técnicos para la gestión de la
              publicidad online a través de cookies.
            </p>
          </div>

          <p>
            Dichos proveedores nos proporcionan herramientas de mercado
            destinadas a la creación de identificadores únicos a partir de
            técnicas de cifrado no reversible (hash).
          </p>

          <p>
            En el marco de los acuerdos alcanzados con estos proveedores,
            Atresmedia asume la relación directa con sus Usuarios a través de la
            página web y los terceros son los responsables de la gestión técnica
            de estas soluciones. Puedes solicitar información sobre los aspectos
            básicos de los acuerdos a través de la dirección del Delegado de
            Protección de Datos.
          </p>

          <p>
            Liveramp: Cuando introduce su dirección de correo electrónico en
            nuestro sitio web (ya sea para iniciar sesión, suscribirse a un
            boletín de noticias, o similar) o cuando usas nuestra aplicación,
            podemos compartir la información personal o de otro tipo que
            recogemos, como su correo electrónico (seudonimizado en forma de
            hash), identificador de publicidad móvil, la dirección IP o
            información sobre su navegador o sistema operativo, con nuestro
            socio LiveRamp y las empresas de su grupo actuando como controlador
            conjunto (aplicable a los países del GDPR). La política de
            privacidad de LiveRamp y las opciones para oponerse a esta actividad
            están disponibles aquí:
            <a href="https://liveramp.es/politica-de-privacidad/politica-de-privacidad-de-servicios/">
              https://liveramp.es/politica-de-privacidad/politica-de-privacidad-de-servicios/
            </a>
            . LiveRamp utiliza esta información para crear un código de
            identificación online con el fin de reconocerle en sus dispositivos.
            Este código no contiene datos personales que le identifiquen y no
            será utilizado por LiveRamp para volver a identificarle. Incluimos
            este código en nuestra cookie o utilizamos una cookie de LiveRamp
            para que se utilice para publicidad online y multicanal. Puede ser
            compartido con nuestros socios publicitarios y otras terceras
            empresas de publicidad a nivel global con el fin de habilitar
            contenido basado en intereses o publicidad dirigida en toda su
            experiencia online (por ejemplo, web, correo electrónico,
            dispositivos conectados y apps, etc.) pueden, a su vez, utilizar
            este código para vincular la información demográfica o basada en
            intereses que usted ha proporcionado en sus interacciones con ellos.
            Tiene derecho a decidir si autoriza nuestro uso de las cookies de
            LiveRamp así como que compartamos estos datos con LiveRamp para los
            fines mencionados.
          </p>

          <p>
            ID5: ID5 opera una plataforma de identidad para la industria de la
            publicidad digital mediante la cual proporciona tecnología que los
            sitios web, las aplicaciones móviles y los editores de otras
            propiedades conectadas a internet (como televisores conectados a
            internet), utilizan para reconocer a los usuarios en sus sitios web,
            aplicaciones móviles y otras propiedades de medios digitales
            (colectivamente, "propiedades digitales"), y que los anunciantes, o
            las empresas en nombre de un anunciante, utilizan para dirigir la
            publicidad a los usuarios de la manera más eficiente posible. La
            plataforma está diseñada para utilizar ciertos tipos de información:
            (i) dirección IP, navegador único o identificadores de dispositivo;
            (ii) una copia "hash" de su dirección de correo electrónico (el
            "hashing" impide ver la dirección de correo electrónico real); y
            (iii) identificadores únicos aleatorios creados y conectados con los
            datos anteriores. Puede consultar la política de privacidad de ID5 y
            las opciones para oponerse a esta actividad a través del siguiente
            enlace:{' '}
            <a href="https://id5.io/platform-privacy-policy/">
              https://id5.io/platform-privacy-policy/
            </a>
          </p>

          <p>
            Puedes en cualquier caso decidir si autorizas o rechazas el uso de
            cookies de cualquier socio publicitario para los fines mencionados a
            través de nuestro Panel de Configuración.
          </p>

          <p>
            Además, puedes en cualquier caso decidir si autorizas o rechazas el
            uso de cookies de cualquier socio publicitario para los fines
            mencionados a través de nuestro Panel de Configuración.
          </p>

          <p>
            ¿Quiénes son los destinarios de la información que se recaba a
            través de las cookies? La información obtenida a través de las
            cookies también será tratada por Atresmedia y aquellas empresas que
            proveen cookies con las finalidades aceptadas por el usuario e
            indicadas en sus respectivas políticas de privacidad. Estas
            circunstancias estarán indicadas en las respectivas políticas de
            privacidad de dichas entidades, accesibles a través del link Ver
            listado de socios del Panel de Configuración.
          </p>

          <div className="space-y-3">
            <h3 className="font-semibold">Transferencias internacionales</h3>
            <p>
              Algunos de nuestros colaboradores mencionados (como agencias y
              redes publicitarias, empresas de análisis y medición, anunciantes
              y otros proveedores tecnológicos) pueden estar ubicados en países
              cuya legislación no ofrece un nivel de protección de datos
              equivalente al europeo. Estas circunstancias estarán indicadas en
              las respectivas políticas de privacidad de dichas entidades,
              accesibles a través del link Ver listado de socios del Panel de
              Configuración.
            </p>
          </div>

          <p>
            Sin perjuicio de lo anterior, aquellos proveedores de servicios
            contratados por Atresmedia que tratan datos en centro no ubicados en
            el Espacio Económico Europeo garantizan: i) el tratamiento se
            realiza en países para los que la Comisión ha adoptado una decisión
            de adecuación; o ii) que dicho tratamiento se lleva a cabo de
            conformidad con las garantías adecuadas, en concreto, te informamos
            de que se encuentra regularizado por medio de las cláusulas
            contractuales tipo aprobadas por la Comisión.
          </p>

          <p>
            Póngase en contacto con nosotros a través de la dirección
            <a href="mailto:privacidad@jaia.tv" className="link ml-1">
              privacidad@jaia.tv
            </a>{' '}
            si desea obtener más información sobre el mecanismo específico que
            utilizamos cuando transferimos sus datos personales fuera del EEE.
          </p>

          <div className="space-y-3">
            <h3 className="font-semibold">Información adicional</h3>
            <p>
              Para más información sobre el tratamiento de datos personales,
              incluyendo el ejercicio de los derechos de acceso, rectificación,
              supresión, oposición, portabilidad y limitación puedes consultar
              nuestra Política de Privacidad. También puedes ponerte en contacto
              con nuestro Delegado de Protección de Datos a través de la
              dirección{' '}
              <a href="mailto:privacidad@jaia.tv" className="link ml-1">
                privacidad@jaia.tv
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">
              Actualización de la Política de Cookies
            </h3>
            <p>
              Atresmedia puede modificar esta Política de Cookies en función de
              exigencias legislativas, reglamentarias, o con la finalidad de
              adaptarla a las instrucciones de la Agencia Española de Protección
              de Datos, por lo que se aconseja a los usuarios que la revisen
              periódicamente.
            </p>
          </div>

          <p>Esta Política ha sido revisada en junio de 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
