// import React, { useContext } from 'react';
// import { MyContext } from '../../Context'; // Replace 'YourContextFile' with the actual file path

// const Trailer = () => {
//   const { state } = useContext(MyContext);

//   // Check if there is a trailer available
//   if (!state.trailer) {
//     return <p>No trailer available for this movie.</p>;
//   }

//   const { key, name } = state.trailer;

//   return (
//     <div>
//       <h2>Trailer: {name}</h2>
//       <div>
//         <iframe
//           title={name}
//           width="560"
//           height="315"
//           src={`https://www.youtube.com/embed/${key}`}
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Trailer;
