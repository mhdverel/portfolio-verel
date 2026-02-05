const Testimonial = () => {
  const testimonials = [
    {
      name: 'Bima Yanuar Dewanata',
      role: 'Founder at DOGTOWNLADS',
      avatar: '👨🏻‍🎤',
      text: 'Gue butuh website yang bisa ngewakilin vibe streetwear culture kita, bukan template korporat yang kaku. Verel ngerti banget apa yang gue mau—dari flow checkout yang seamless sampe dashboard admin yang bikin hidup gue lebih gampang. Orangnya responsif, nggak banyak drama, dan yang penting: hasil kerjanya ngomong sendiri.',
    },
  ]

  return (
    <section className="notion-section">
      <h2 className="flex items-center gap-2 notion-heading mb-4">
        <span>💬</span> Testimonial
      </h2>
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="notion-card">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{testimonial.avatar}</span>
              <div>
                <h3 className="font-semibold text-notion-text">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-notion-gray">{testimonial.role}</p>
              </div>
            </div>
            <p className="notion-text italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial
