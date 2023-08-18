export function Books ({ data }) {
  return (
    <ul className='books'>
      {data.map((book, index) => (
        <li key={index}>
          <h3>{book.title}</h3>
          <img
            src={book.cover}
            alt={book.title}
            style={{
              width: '250px', // Cambia este valor al tamaño deseado
              height: '320px', // Cambia este valor al tamaño deseado
              objectFit: 'cover' // Para mantener la proporción y recortar si es necesario
            }}
          />
          <p>{book.year}</p>
          <p>{book.genre}</p>
        </li>
      ))}
    </ul>
  )
}
