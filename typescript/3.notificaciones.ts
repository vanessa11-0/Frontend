//Define una unión de tipos para representar notificaciones por email, SMS y push. Cada una debe tener propiedades
// distintas. Implementa una función enviarNotificacion que reciba una notificación y ejecute
// una lógica distinta dependiendo del tipo (usando type narrowing).

interface NotificacionEmail {
    tipo: "email";
    destinatario: string;
    asunto: string;
    cuerpo: string;
}

interface NotificacionSMS {
    tipo: "sms";
    numeroTelefono: string;
    mensaje: string;
}

interface NotificacionPush {
    tipo: "push";
    dispositivoId: string;
    titulo: string;
}

type Notificacion = NotificacionEmail | NotificacionSMS | NotificacionPush;

function enviarNotificacion(notificacion: Notificacion) {
    switch (notificacion.tipo) {
    case "email":

    console.log(`Enviando Email a ${notificacion.destinatario}: ${notificacion.asunto}`);
    break;
    case "sms":
    console.log(`Enviando SMS al número ${notificacion.numeroTelefono}: ${notificacion.mensaje}`);
    break;
    case "push":

    console.log(`Enviando Alerta Push al dispositivo ${notificacion.dispositivoId}: ${notificacion.titulo}`);
    break;
    }
}

const miAviso: Notificacion = {
    tipo: "email",
    destinatario: "vanessa@email.com",
    asunto: "Taller de TS",
    cuerpo: "No olvidar entregar la tarea antes de las 6:00pm"
};

enviarNotificacion(miAviso);