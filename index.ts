/*
Reto 2.
Queremos implementar un sistema de registro de eventos, para esto, necesitamos guardar una lista con  la información de las personas participantes del evento,  los datos mínimos por participante son: nombre completo, teléfono, correo. Cada evento cuenta con un nombre, precio, fecha y aforo máximo. Se desea guardar una lista con el historial de los eventos y que cada persona pueda ver los datos de los eventos a los que asistió y a los que piensa asistir en un futuro.
*/

class Evento {
    nombre: string;
    precio: number;
    fecha: number;
    aforoMaximo: number;
    estado: Estado;
  }
  
  class Participante {
    nombreCompleto: string;
    telefono: number;
    correo: string;
    evento: Evento[];
  }
  
  enum Estado {
    evento_futuro = "evento futuro",
    evento_asistido = "evento asistido"
  }
  
  let participantes: Participante[] = [
    {
      nombreCompleto: "Hector",
      telefono: 3133755040,
      correo: "hectorfabiovasquez@gmail.com",
      evento: [
        {
          nombre: "Concierto",
          precio: 200,
          fecha: 8042021,
          aforoMaximo: 10000,
          estado: Estado.evento_asistido,
        },
        {
          nombre: "ClubLectura",
          precio: 10,
          fecha: 4042021,
          aforoMaximo: 150,
          estado: Estado.evento_futuro,
        }
      ]
    },
    {
      nombreCompleto: "William",
      telefono: 3100755040,
      correo: "williamaguilar@gmail.com",
      evento: [
        {
          nombre: "ConciertoRock",
          precio: 250,
          fecha: 8042021,
          aforoMaximo: 5000,
          estado: Estado.evento_futuro
        }
      ]
    },
    {
      nombreCompleto: "Juan",
      telefono: 3133005040,
      correo: "juanmedina@gmail.com",
      evento: [
        {
          nombre: "ConciertoSalsa",
          precio: 280,
          fecha: 8042021,
          aforoMaximo: 450,
          estado: Estado.evento_asistido
        }
      ]
    }
  ];
  
  console.log(participantes);