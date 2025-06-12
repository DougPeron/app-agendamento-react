import React from 'react'
import HeaderHome from '../HeaderHome/HeaderHome'
import './HomePage.scss'

const services = [
  {
    title: 'Agendamento Online',
    description: 'Marque sua consulta de forma rápida e prática pelo nosso sistema.',
    icon: '🗓️'
  },
  {
    title: 'Equipe Especializada',
    description: 'Profissionais qualificados para melhor atender você.',
    icon: '🦷'
  },
  {
    title: 'Atendimento Humanizado',
    description: 'Cuidamos do seu sorriso com atenção e carinho.',
    icon: '😊'
  }
]

const HomePage = () => {
  return (
    <div className='container-page'>
      <HeaderHome />
      <section className='hero-section'>
        <div className='hero-content'>
          <h1>Agende sua consulta com facilidade</h1>
          <p>Bem-vindo à sua clínica odontológica digital. Praticidade, conforto e cuidado em um só lugar.</p>
          <button className='btn-hero'>Agendar Agora</button>
        </div>
        <div className='hero-image'>
          <img src="/dentist-hero.png" alt="Dentista" />
        </div>
      </section>
      <section className='services-section'>
        <h2>Nossos Diferenciais</h2>
        <div className='services-cards'>
          {services.map((service, idx) => (
            <div className='service-card' key={idx}>
              <span className='service-icon'>{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className='footer'>
        <p>&copy; {new Date().getFullYear()} Clean Dentist Scheduler. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default HomePage
