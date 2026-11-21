import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name} para colaboraciones o proyectos web`,
  openGraph: {
    title: `Contacto | ${personalInfo.name}`,
    description: `Envía un mensaje directo a ${personalInfo.name}`,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 mb-8">
          ¿Tienes una idea o proyecto en mente? Completa el formulario o escríbeme directamente a{' '}
          <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">
            {personalInfo.email}
          </a>.
        </p>

        <ContactForm />
      </div>
    </div>
  );
}