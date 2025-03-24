"use client";

import { useState } from "react";

export default function Home() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      nombre: form[0].value,
      email: form[1].value,
      whatsapp: form[2].value,
      empresa: form[3].value,
      interes: form[4].value,
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbz9oCC3Kvh7ZXZS7xfHZFGeJuTCXPaJYSlVlPnNJMs1PpGspVKwFiZ0k7EA7b7S1tpyYA/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      
      

      const result = await response.json();

      if (result.result === "success") {
        alert("✅ ¡Gracias! Te hemos registrado con éxito.");
        form.reset();
        setEnviado(true);
      } else {
        alert("❌ Ocurrió un error al enviar. Intenta de nuevo.");
      }
    } catch (error) {
      alert("⚠️ Error de conexión. Revisa tu red o intenta más tarde.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Tu contabilidad no tiene por qué ser complicada</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Conecta tus cifras, y deja que la IA te diga en lenguaje claro qué está pasando con tu negocio.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition">
          Únete a la lista de espera GRATIS
        </button>
      </section>

      {/* Problema */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">¿Qué problema resolvemos?</h2>
        <p className="mb-2">Muchos empresarios de mipymes toman decisiones a ciegas por no entender su contabilidad.</p>
        <p>Los números están ahí… pero enredados en Excel, cuentas mentales o informes que nadie lee.</p>
      </section>

      {/* Funcionalidad */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">¿Qué hace Contabili.AI?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>📂 Sube tus archivos (Excel, CSV o PDF)</li>
            <li>💬 O simplemente envía por WhatsApp tus ingresos y egresos:
              <ul className="list-disc pl-10 mt-2 space-y-1">
                <li>📝 Escribe: “Pagué $200.000 a proveedor”</li>
                <li>🎤 Manda una nota de voz</li>
                <li>📸 Envía una foto de la factura o recibo</li>
              </ul>
            </li>
            <li>🔍 Nosotros lo analizamos con IA</li>
            <li>
              📊 Te entregamos:
              <ul className="list-disc pl-10 mt-2 space-y-1">
                <li>Tu flujo de caja explicado</li>
                <li>Principales ingresos y gastos</li>
                <li>Alertas de riesgo</li>
                <li>Recomendaciones fáciles de entender</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* WhatsApp feature */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-6">💬 ¡Muy pronto desde WhatsApp!</h2>
        <p className="mb-4">¿Te gustaría registrar tus ingresos y gastos simplemente hablando, escribiendo o enviando una foto por WhatsApp?</p>
        <p>Contabili.AI podrá recibir notas de voz, textos e imágenes para ayudarte a organizar tu contabilidad sin complicaciones.</p>
      </section>

      {/* Beneficios */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-6">¿Por qué usarlo?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>✅ No necesitas conocimientos contables</li>
          <li>✅ No reemplazas a tu contador, lo entiendes mejor</li>
          <li>✅ Accede desde cualquier lugar</li>
          <li>✅ 100% seguro y privado</li>
          <li>✅ Próximamente: integración con WhatsApp</li>
        </ul>
      </section>

      {/* Formulario */}
      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Únete a la lista de espera</h2>
        <p className="mb-6">Sé de los primeros en probar la herramienta GRATIS.</p>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre" className="w-full p-3 border rounded-xl" required />
          <input type="email" placeholder="Correo electrónico" className="w-full p-3 border rounded-xl" required />
          <input type="text" placeholder="WhatsApp" className="w-full p-3 border rounded-xl" required />
          <select className="w-full p-3 border rounded-xl" required>
            <option>¿Tienes empresa actualmente?</option>
            <option>Sí</option>
            <option>No</option>
          </select>
          <select className="w-full p-3 border rounded-xl" required>
            <option>¿Te gustaría usar Contabili.AI desde WhatsApp?</option>
            <option>Sí, me interesa</option>
            <option>No lo necesito</option>
            <option>Quiero saber más</option>
          </select>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition">
            Quiero probarla primero
          </button>
        </form>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-6">Preguntas Frecuentes</h2>
        <ul className="space-y-4">
          <li>
            <strong>¿Esto reemplaza a mi contador?</strong><br />
            No. Lo complementa. Tú entiendes, él organiza.
          </li>
          <li>
            <strong>¿Puedo usarlo sin saber contabilidad?</strong><br />
            ¡Claro! Está diseñado en lenguaje simple.
          </li>
          <li>
            <strong>¿Tiene costo?</strong><br />
            La prueba inicial es gratis. Luego habrá planes asequibles.
          </li>
          <li>
            <strong>¿Funcionará por WhatsApp?</strong><br />
            ¡Sí! Estamos trabajando para que puedas registrar tus datos por voz, texto o imagen desde WhatsApp.
          </li>
        </ul>
      </section>
    </div>
  );
}
