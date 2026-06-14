'use client'

export default function BookAppointmentBtn({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const handleClick = () => {
    const el = document.getElementById('book-appointment')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a href="/#book-appointment" onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
