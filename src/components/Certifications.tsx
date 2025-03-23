// import data from "../data/data";

// const Certifications = () => {
//   return (
//     <section id="certifications" className="py-24 section-padding">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <span className="inline-block py-1 px-3 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
//             My Certifications
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Professional Credentials
//           </h2>
//           <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {data.certifications.map((cert) => (
//             <a
//               key={cert.id}
//               href={cert.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="glass-card p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-card/90"
//             >
//               <div className="w-24 h-24 mb-4 overflow-hidden">
//                 <img
//                   src={cert.image}
//                   alt={cert.name}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
//               <p className="text-foreground/70 text-sm mb-1">{cert.issuer}</p>
//               <p className="text-foreground/50 text-sm">{cert.date}</p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;
