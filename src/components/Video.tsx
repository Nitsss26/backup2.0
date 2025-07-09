// // // // // // import React, { useRef, useState } from 'react';

// // // // // // const Video = () => {
// // // // // //   const videoRefs = [
// // // // // //     useRef(null),
// // // // // //     useRef(null),
// // // // // //     useRef(null),
// // // // // //     useRef(null),
// // // // // //   ];
// // // // // //   const [isPlaying, setIsPlaying] = useState([false, false, false, false]);
// // // // // //   const [isMuted, setIsMuted] = useState([true, true, true, true]);

// // // // // //   const handleHover = (index) => {
// // // // // //     if (videoRefs[index].current) {
// // // // // //       videoRefs[index].current.play();
// // // // // //       setIsPlaying((prev) => {
// // // // // //         const newState = [...prev];
// // // // // //         newState[index] = true;
// // // // // //         return newState;
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   const handleLeave = (index) => {
// // // // // //     if (videoRefs[index].current) {
// // // // // //       videoRefs[index].current.pause();
// // // // // //       setIsPlaying((prev) => {
// // // // // //         const newState = [...prev];
// // // // // //         newState[index] = false;
// // // // // //         return newState;
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   const togglePlayPause = (index) => {
// // // // // //     if (videoRefs[index].current) {
// // // // // //       if (isPlaying[index]) {
// // // // // //         videoRefs[index].current.pause();
// // // // // //       } else {
// // // // // //         videoRefs[index].current.play();
// // // // // //       }
// // // // // //       setIsPlaying((prev) => {
// // // // // //         const newState = [...prev];
// // // // // //         newState[index] = !newState[index];
// // // // // //         return newState;
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   const toggleMute = (index) => {
// // // // // //     if (videoRefs[index].current) {
// // // // // //       videoRefs[index].current.muted = !isMuted[index];
// // // // // //       setIsMuted((prev) => {
// // // // // //         const newState = [...prev];
// // // // // //         newState[index] = !newState[index];
// // // // // //         return newState;
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   const videos = [
// // // // // //     {
// // // // // //       src: '/a.mp4',
// // // // // //       caption: 'WALMART under $5 haul',
// // // // // //       handle: '@alexnicolehome',
// // // // // //       price: '$10.57',
// // // // // //       description: 'Time and Tru Women's Cotton Off the Shoulder Midi Dress Sizes XS-XXXXL',
// // // // // //     },
// // // // // //     {
// // // // // //       src: '/b.mp4',
// // // // // //       caption: '@walmartfinds',
// // // // // //       handle: '@walmartfinds',
// // // // // //       price: '$16.99',
// // // // // //       description: 'Madden NYC Women's Raffia Flat Platform Sandals with Adjustable Straps',
// // // // // //     },
// // // // // //     {
// // // // // //       src: '/c.mp4',
// // // // // //       caption: 'cutest water bottles',
// // // // // //       handle: '@fabfindswithfallon',
// // // // // //       price: '$10.97',
// // // // // //       description: 'TAL Stainless Steel Paracord Handle Water Bottle 24 oz, Pink',
// // // // // //     },
// // // // // //     {
// // // // // //       src: '/d.mp4',
// // // // // //       caption: '@burleighford',
// // // // // //       handle: '@burleighford',
// // // // // //       price: '$5.48',
// // // // // //       description: 'No Boundaries Seamless Tank Top, Women's',
// // // // // //     },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="bg-gray-900 text-white p-6">
// // // // // //       <h2 className="text-2xl font-bold mb-4">Featured in videos</h2>
// // // // // //       <p className="text-sm mb-4 text-gray-400">See what creators are sharing</p>
      
// // // // // //       {/* Desktop Grid - unchanged */}
// // // // // //       <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // // // // //         {videos.map((video, index) => (
// // // // // //           <div
// // // // // //             key={index}
// // // // // //             className="bg-gray-800 rounded-lg overflow-hidden relative"
// // // // // //             onMouseEnter={() => handleHover(index)}
// // // // // //             onMouseLeave={() => handleLeave(index)}
// // // // // //           >
// // // // // //             <div className="w-full" style={{ paddingTop: '128.00%' }}>
// // // // // //               <video
// // // // // //                 ref={videoRefs[index]}
// // // // // //                 className="absolute top-0 left-0 w-full h-full object-cover"
// // // // // //                 muted={isMuted[index]}
// // // // // //                 loop
// // // // // //               >
// // // // // //                 <source src={video.src} type="video/mp4" />
// // // // // //                 Your browser does not support the video tag.
// // // // // //               </video>
// // // // // //               <button
// // // // // //                 onClick={() => togglePlayPause(index)}
// // // // // //                 className="absolute top-2 right-12 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
// // // // // //               >
// // // // // //                 {isPlaying[index] ? (
// // // // // //                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // //                     <path d="M6 5V19L18 12L6 5Z" fill="white"/>
// // // // // //                   </svg>
// // // // // //                 ) : (
// // // // // //                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // //                     <path d="M8 5V19L19 12L8 5Z" fill="white"/>
// // // // // //                   </svg>
// // // // // //                 )}
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => toggleMute(index)}
// // // // // //                 className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
// // // // // //               >
// // // // // //                 {isMuted[index] ? (
// // // // // //                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM16 7V17H18V7H16ZM18 5H14.5L19.5 10V14L14.5 19H18L23 14V10L18 5Z" fill="white"/>
// // // // // //                   </svg>
// // // // // //                 ) : (
// // // // // //                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM14 6H16L19 9V15L16 18H14V6Z" fill="white"/>
// // // // // //                   </svg>
// // // // // //                 )}
// // // // // //               </button>
// // // // // //             </div>
// // // // // //             <div className="p-2">
// // // // // //               <p className="text-xs text-gray-400">{video.caption}</p>
// // // // // //               <p className="text-sm font-semibold">{video.handle}</p>
// // // // // //               <p className="text-green-400 text-sm">{video.price}</p>
// // // // // //               <p className="text-xs text-gray-300">{video.description}</p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* Mobile Grid - 2 columns */}
// // // // // //       <div className="md:hidden grid grid-cols-2 gap-3">
// // // // // //         {videos.map((video, index) => (
// // // // // //           <div
// // // // // //             key={index}
// // // // // //             className="bg-gray-800 rounded-lg overflow-hidden relative"
// // // // // //             onMouseEnter={() => handleHover(index)}
// // // // // //             onMouseLeave={() => handleLeave(index)}
// // // // // //           >
// // // // // //             <div className="w-full" style={{ paddingTop: '128.00%' }}>
// // // // // //               <video
// // // // // //                 ref={videoRefs[index]}
// // // // // //                 className="absolute top-0 left-0 w-full h-full object-cover"
// // // // // //                 muted={isMuted[index]}
// // // // // //                 loop
// // // // // //               >
// // // // // //                 <source src={video.src} type="video/mp4" />
// // // // // //                 Your browser does not support the video tag.
// // // // // //               </video>
// // // // // //               <button
// // // // // //                 onClick={() => togglePlayPause(index)}
// // // // // //                 className="absolute top-1 right-8 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded-full"
// // // // // //               >
// // // // // //                 {isPlaying[index] ? (
// // // // // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // //                     <path d="M6 5V19L18 12L6 5Z" fill="white"/>
// // // // // //                   </svg>
// // // // // //                 ) : (
// // // // // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // //                     <path d="M8 5V19L19 12L8 5Z" fill="white"/>
// // // // // //                   </svg>
// // // // // //                 )}
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => toggleMute(index)}
// // // // // //                 className="absolute top-1 right-1 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded-full"
// // // // // //               >
// // // // // //                 {isMuted[index] ? (
// // // // // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM16 7V17H18V7H16ZM18 5H14.5L19.5 10V14L14.5 19H18L23 14V10L18 5Z" fill="white"/>
// // // // // //                   </svg>
// // // // // //                 ) : (
// // // // // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM14 6H16L19 9V15L16 18H14V6Z" fill="white"/>
// // // // // //                   </svg>
// // // // // //                 )}
// // // // // //               </button>
// // // // // //             </div>
// // // // // //             <div className="p-2">
// // // // // //               <p className="text-xs text-gray-400 truncate">{video.caption}</p>
// // // // // //               <p className="text-sm font-semibold truncate">{video.handle}</p>
// // // // // //               <p className="text-green-400 text-sm">{video.price}</p>
// // // // // //               <p className="text-xs text-gray-300 line-clamp-2">{video.description}</p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Video;

// // // // // import React, { useRef, useState } from 'react';

// // // // // const Video = () => {
// // // // //   const videoRefs = [
// // // // //     useRef(null),
// // // // //     useRef(null),
// // // // //     useRef(null),
// // // // //     useRef(null),
// // // // //   ];
// // // // //   const [isPlaying, setIsPlaying] = useState([false, false, false, false]);
// // // // //   const [isMuted, setIsMuted] = useState([true, true, true, true]);

// // // // //   const handleHover = (index) => {
// // // // //     if (videoRefs[index].current) {
// // // // //       videoRefs[index].current.play();
// // // // //       setIsPlaying((prev) => {
// // // // //         const newState = [...prev];
// // // // //         newState[index] = true;
// // // // //         return newState;
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const handleLeave = (index) => {
// // // // //     if (videoRefs[index].current) {
// // // // //       videoRefs[index].current.pause();
// // // // //       setIsPlaying((prev) => {
// // // // //         const newState = [...prev];
// // // // //         newState[index] = false;
// // // // //         return newState;
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const togglePlayPause = (index) => {
// // // // //     if (videoRefs[index].current) {
// // // // //       if (isPlaying[index]) {
// // // // //         videoRefs[index].current.pause();
// // // // //       } else {
// // // // //         videoRefs[index].current.play();
// // // // //       }
// // // // //       setIsPlaying((prev) => {
// // // // //         const newState = [...prev];
// // // // //         newState[index] = !newState[index];
// // // // //         return newState;
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const toggleMute = (index) => {
// // // // //     if (videoRefs[index].current) {
// // // // //       videoRefs[index].current.muted = !isMuted[index];
// // // // //       setIsMuted((prev) => {
// // // // //         const newState = [...prev];
// // // // //         newState[index] = !newState[index];
// // // // //         return newState;
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const videos = [
// // // // //     {
// // // // //       src: '/a.mp4',
// // // // //       caption: 'WALMART under $5 haul',
// // // // //       handle: '@alexnicolehome',
// // // // //       price: '$10.57',
// // // // //       description: "Time and Tru Women's Cotton Off the Shoulder Midi Dress Sizes XS-XXXXL",
// // // // //     },
// // // // //     {
// // // // //       src: '/b.mp4',
// // // // //       caption: '@walmartfinds',
// // // // //       handle: '@walmartfinds',
// // // // //       price: '$16.99',
// // // // //       description: 'Madden NYC Women\'s Raffia Flat Platform Sandals with Adjustable Straps',
// // // // //     },
// // // // //     {
// // // // //       src: '/c.mp4',
// // // // //       caption: 'cutest water bottles',
// // // // //       handle: '@fabfindswithfallon',
// // // // //       price: '$10.97',
// // // // //       description: 'TAL Stainless Steel Paracord Handle Water Bottle 24 oz, Pink',
// // // // //     },
// // // // //     {
// // // // //       src: '/d.mp4',
// // // // //       caption: '@burleighford',
// // // // //       handle: '@burleighford',
// // // // //       price: '$5.48',
// // // // //       description: 'No Boundaries Seamless Tank Top, Women\'s',
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <div className="bg-gray-900 text-white p-6">
// // // // //       <h2 className="text-2xl font-bold mb-4">Featured in videos</h2>
// // // // //       <p className="text-sm mb-4 text-gray-400">See what creators are sharing</p>
      
// // // // //       {/* Desktop Grid - unchanged */}
// // // // //       <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // // // //         {videos.map((video, index) => (
// // // // //           <div
// // // // //             key={index}
// // // // //             className="bg-gray-800 rounded-lg overflow-hidden relative"
// // // // //             onMouseEnter={() => handleHover(index)}
// // // // //             onMouseLeave={() => handleLeave(index)}
// // // // //           >
// // // // //             <div className="w-full" style={{ paddingTop: '128.00%' }}>
// // // // //               <video
// // // // //                 ref={videoRefs[index]}
// // // // //                 className="absolute top-0 left-0 w-full h-full object-cover"
// // // // //                 muted={isMuted[index]}
// // // // //                 loop
// // // // //               >
// // // // //                 <source src={video.src} type="video/mp4" />
// // // // //                 Your browser does not support the video tag.
// // // // //               </video>
// // // // //               <button
// // // // //                 onClick={() => togglePlayPause(index)}
// // // // //                 className="absolute top-2 right-12 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
// // // // //               >
// // // // //                 {isPlaying[index] ? (
// // // // //                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // //                     <path d="M6 5V19L18 12L6 5Z" fill="white"/>
// // // // //                   </svg>
// // // // //                 ) : (
// // // // //                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // //                     <path d="M8 5V19L19 12L8 5Z" fill="white"/>
// // // // //                   </svg>
// // // // //                 )}
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={() => toggleMute(index)}
// // // // //                 className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
// // // // //               >
// // // // //                 {isMuted[index] ? (
// // // // //                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM16 7V17H18V7H16ZM18 5H14.5L19.5 10V14L14.5 19H18L23 14V10L18 5Z" fill="white"/>
// // // // //                   </svg>
// // // // //                 ) : (
// // // // //                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM14 6H16L19 9V15L16 18H14V6Z" fill="white"/>
// // // // //                   </svg>
// // // // //                 )}
// // // // //               </button>
// // // // //             </div>
// // // // //             <div className="p-2">
// // // // //               <p className="text-xs text-gray-400">{video.caption}</p>
// // // // //               <p className="text-sm font-semibold">{video.handle}</p>
// // // // //               <p className="text-green-400 text-sm">{video.price}</p>
// // // // //               <p className="text-xs text-gray-300">{video.description}</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Mobile Grid - 2 columns */}
// // // // //       <div className="md:hidden grid grid-cols-2 gap-3">
// // // // //         {videos.map((video, index) => (
// // // // //           <div
// // // // //             key={index}
// // // // //             className="bg-gray-800 rounded-lg overflow-hidden relative"
// // // // //             onMouseEnter={() => handleHover(index)}
// // // // //             onMouseLeave={() => handleLeave(index)}
// // // // //           >
// // // // //             <div className="w-full" style={{ paddingTop: '128.00%' }}>
// // // // //               <video
// // // // //                 ref={videoRefs[index]}
// // // // //                 className="absolute top-0 left-0 w-full h-full object-cover"
// // // // //                 muted={isMuted[index]}
// // // // //                 loop
// // // // //               >
// // // // //                 <source src={video.src} type="video/mp4" />
// // // // //                 Your browser does not support the video tag.
// // // // //               </video>
// // // // //               <button
// // // // //                 onClick={() => togglePlayPause(index)}
// // // // //                 className="absolute top-1 right-8 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded-full"
// // // // //               >
// // // // //                 {isPlaying[index] ? (
// // // // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // //                     <path d="M6 5V19L18 12L6 5Z" fill="white"/>
// // // // //                   </svg>
// // // // //                 ) : (
// // // // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // //                     <path d="M8 5V19L19 12L8 5Z" fill="white"/>
// // // // //                   </svg>
// // // // //                 )}
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={() => toggleMute(index)}
// // // // //                 className="absolute top-1 right-1 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded-full"
// // // // //               >
// // // // //                 {isMuted[index] ? (
// // // // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM16 7V17H18V7H16ZM18 5H14.5L19.5 10V14L14.5 19H18L23 14V10L18 5Z" fill="white"/>
// // // // //                   </svg>
// // // // //                 ) : (
// // // // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM14 6H16L19 9V15L16 18H14V6Z" fill="white"/>
// // // // //                   </svg>
// // // // //                 )}
// // // // //               </button>
// // // // //             </div>
// // // // //             <div className="p-2">
// // // // //               <p className="text-xs text-gray-400 truncate">{video.caption}</p>
// // // // //               <p className="text-sm font-semibold truncate">{video.handle}</p>
// // // // //               <p className="text-green-400 text-sm">{video.price}</p>
// // // // //               <p className="text-xs text-gray-300 line-clamp-2">{video.description}</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Video;

// // // // import React, { useRef, useState } from 'react';

// // // // const Video = () => {
// // // //   const videoRefs = [
// // // //     useRef(null),
// // // //     useRef(null),
// // // //     useRef(null),
// // // //     useRef(null),
// // // //   ];
// // // //   const [isPlaying, setIsPlaying] = useState([false, false, false, false]);
// // // //   const [isMuted, setIsMuted] = useState([true, true, true, true]);

// // // //   const handleHover = (index) => {
// // // //     if (videoRefs[index].current) {
// // // //       videoRefs[index].current.play();
// // // //       setIsPlaying((prev) => {
// // // //         const newState = [...prev];
// // // //         newState[index] = true;
// // // //         return newState;
// // // //       });
// // // //     }
// // // //   };

// // // //   const handleLeave = (index) => {
// // // //     if (videoRefs[index].current) {
// // // //       videoRefs[index].current.pause();
// // // //       setIsPlaying((prev) => {
// // // //         const newState = [...prev];
// // // //         newState[index] = false;
// // // //         return newState;
// // // //       });
// // // //     }
// // // //   };

// // // //   const togglePlayPause = (index) => {
// // // //     if (videoRefs[index].current) {
// // // //       if (isPlaying[index]) {
// // // //         videoRefs[index].current.pause();
// // // //       } else {
// // // //         videoRefs[index].current.play();
// // // //       }
// // // //       setIsPlaying((prev) => {
// // // //         const newState = [...prev];
// // // //         newState[index] = !newState[index];
// // // //         return newState;
// // // //       });
// // // //     }
// // // //   };

// // // //   const toggleMute = (index) => {
// // // //     if (videoRefs[index].current) {
// // // //       videoRefs[index].current.muted = !isMuted[index];
// // // //       setIsMuted((prev) => {
// // // //         const newState = [...prev];
// // // //         newState[index] = !newState[index];
// // // //         return newState;
// // // //       });
// // // //     }
// // // //   };

// // // //   const videos = [
// // // //     {
// // // //       src: '/f.mp4',
// // // //       caption: 'WALMART under $5 haul',
// // // //       handle: '@alexnicolehome',
// // // //       price: '$10.57',
// // // //       description: "Time and Tru Women's Cotton Off the Shoulder Midi Dress Sizes XS-XXXXL",
// // // //     },
// // // //     {
// // // //       src: '/h.mp4',
// // // //       caption: '@walmartfinds',
// // // //       handle: '@walmartfinds',
// // // //       price: '$16.99',
// // // //       description: 'Madden NYC Women\'s Raffia Flat Platform Sandals with Adjustable Straps',
// // // //     },
// // // //     {
// // // //       src: '/c.mp4',
// // // //       caption: 'cutest water bottles',
// // // //       handle: '@fabfindswithfallon',
// // // //       price: '$10.97',
// // // //       description: 'TAL Stainless Steel Paracord Handle Water Bottle 24 oz, Pink',
// // // //     },
// // // //     {
// // // //       src: '/e.mp4',
// // // //       caption: '@burleighford',
// // // //       handle: '@burleighford',
// // // //       price: '$5.48',
// // // //       description: 'No Boundaries Seamless Tank Top, Women\'s',
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <div className="bg-gray-900 text-white p-6">
// // // //       <h2 className="text-2xl font-bold mb-4">Featured in videos</h2>
// // // //       <p className="text-sm mb-4 text-gray-400">See what creators are sharing</p>
      
// // // //       {/* Desktop Grid - unchanged */}
// // // //       <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // // //         {videos.map((video, index) => (
// // // //           <div
// // // //             key={index}
// // // //             className="bg-gray-800 rounded-lg overflow-hidden relative"
// // // //             onMouseEnter={() => handleHover(index)}
// // // //             onMouseLeave={() => handleLeave(index)}
// // // //           >
// // // //             <div className="w-full" style={{ paddingTop: '128.00%' }}>
// // // //               <video
// // // //                 ref={videoRefs[index]}
// // // //                 className="absolute top-0 left-0 w-full h-full object-cover"
// // // //                 muted={isMuted[index]}
// // // //                 loop
// // // //               >
// // // //                 <source src={video.src} type="video/mp4" />
// // // //                 Your browser does not support the video tag.
// // // //               </video>
// // // //               <button
// // // //                 onClick={() => togglePlayPause(index)}
// // // //                 className="absolute top-2 right-12 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
// // // //               >
// // // //                 {isPlaying[index] ? (
// // // //                   // Pause icon
// // // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //                     <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="white"/>
// // // //                   </svg>
// // // //                 ) : (
// // // //                   // Play icon
// // // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //                     <path d="M8 5V19L19 12L8 5Z" fill="white"/>
// // // //                   </svg>
// // // //                 )}
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => toggleMute(index)}
// // // //                 className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
// // // //               >
// // // //                 {isMuted[index] ? (
// // // //                   // Muted icon
// // // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //                     <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="white"/>
// // // //                   </svg>
// // // //                 ) : (
// // // //                   // Unmuted icon
// // // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.02C15.5 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="white"/>
// // // //                   </svg>
// // // //                 )}
// // // //               </button>
// // // //             </div>
// // // //             <div className="p-2">
            
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {/* Mobile Grid - 2 columns, same layout as desktop */}
// // // //       <div className="md:hidden grid grid-cols-2 gap-3">
// // // //         {videos.map((video, index) => (
// // // //           <div
// // // //             key={index}
// // // //             className="bg-gray-800 rounded-lg overflow-hidden relative"
// // // //             onMouseEnter={() => handleHover(index)}
// // // //             onMouseLeave={() => handleLeave(index)}
// // // //           >
// // // //             <div className="w-full" style={{ paddingTop: '128.00%' }}>
// // // //               <video
// // // //                 ref={videoRefs[index]}
// // // //                 className="absolute top-0 left-0 w-full h-full object-cover"
// // // //                 muted={isMuted[index]}
// // // //                 loop
// // // //               >
// // // //                 <source src={video.src} type="video/mp4" />
// // // //                 Your browser does not support the video tag.
// // // //               </video>
// // // //               <button
// // // //                 onClick={() => togglePlayPause(index)}
// // // //                 className="absolute top-2 right-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1.5 rounded-full transition-all duration-200"
// // // //               >
// // // //                 {isPlaying[index] ? (
// // // //                   // Pause icon
// // // //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //                     <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="white"/>
// // // //                   </svg>
// // // //                 ) : (
// // // //                   // Play icon
// // // //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //                     <path d="M8 5V19L19 12L8 5Z" fill="white"/>
// // // //                   </svg>
// // // //                 )}
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => toggleMute(index)}
// // // //                 className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1.5 rounded-full transition-all duration-200"
// // // //               >
// // // //                 {isMuted[index] ? (
// // // //                   // Muted icon
// // // //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //                     <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="white"/>
// // // //                   </svg>
// // // //                 ) : (
// // // //                   // Unmuted icon
// // // //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.02C15.5 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="white"/>
// // // //                   </svg>
// // // //                 )}
// // // //               </button>
// // // //             </div>
// // // //             <div className="p-2">
         
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Video;

// // // import React, { useRef, useState, useEffect } from 'react';

// // // const Video = () => {
// // //   const videoRefs = [
// // //     useRef(null),
// // //     useRef(null),
// // //     useRef(null),
// // //     useRef(null),
// // //   ];
// // //   const [isPlaying, setIsPlaying] = useState([false, false, false, false]);
// // //   const [isMuted, setIsMuted] = useState([true, true, true, true]);
// // //   const [hasInteraction, setHasInteraction] = useState(false);

// // //   // Handle user interaction to enable playback
// // //   useEffect(() => {
// // //     const enablePlayback = () => setHasInteraction(true);
// // //     window.addEventListener('touchstart', enablePlayback, { once: true });
// // //     window.addEventListener('click', enablePlayback, { once: true });
// // //     return () => {
// // //       window.removeEventListener('touchstart', enablePlayback);
// // //       window.removeEventListener('click', enablePlayback);
// // //     };
// // //   }, []);

// // //   const togglePlayPause = (index) => {
// // //     if (videoRefs[index].current && hasInteraction) {
// // //       if (isPlaying[index]) {
// // //         videoRefs[index].current.pause();
// // //       } else {
// // //         videoRefs[index].current.play().catch((error) => {
// // //           console.error(`Error playing video ${index}:`, error);
// // //         });
// // //       }
// // //       setIsPlaying((prev) => {
// // //         const newState = [...prev];
// // //         newState[index] = !newState[index];
// // //         return newState;
// // //       });
// // //     }
// // //   };

// // //   const toggleMute = (index) => {
// // //     if (videoRefs[index].current) {
// // //       videoRefs[index].current.muted = !isMuted[index];
// // //       setIsMuted((prev) => {
// // //         const newState = [...prev];
// // //         newState[index] = !newState[index];
// // //         return newState;
// // //       });
// // //     }
// // //   };

// // //   const videos = [
// // //     { src: '/f.mp4', caption: 'WALMART under $5 haul', handle: '@alexnicolehome', price: '$10.57', description: "Time and Tru Women's Cotton Off the Shoulder Midi Dress Sizes XS-XXXXL" },
// // //     { src: '/h.mp4', caption: '@walmartfinds', handle: '@walmartfinds', price: '$16.99', description: 'Madden NYC Women\'s Raffia Flat Platform Sandals with Adjustable Straps' },
// // //     { src: '/c.mp4', caption: 'cutest water bottles', handle: '@fabfindswithfallon', price: '$10.97', description: 'TAL Stainless Steel Paracord Handle Water Bottle 24 oz, Pink' },
// // //     { src: '/e.mp4', caption: '@burleighford', handle: '@burleighford', price: '$5.48', description: 'No Boundaries Seamless Tank Top, Women\'s' },
// // //   ];

// // //   return (
// // //     <div className="bg-gray-900 text-white p-6">
// // //       <h2 className="text-2xl font-bold mb-4">Featured in videos</h2>
// // //       <p className="text-sm mb-4 text-gray-400">See what creators are sharing</p>
      
// // //       {/* Desktop Grid */}
// // //       <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // //         {videos.map((video, index) => (
// // //           <div
// // //             key={index}
// // //             className="bg-gray-800 rounded-lg overflow-hidden relative"
// // //           >
// // //             <div className="w-full" style={{ paddingTop: '128.00%' }}>
// // //               <video
// // //                 ref={videoRefs[index]}
// // //                 className="absolute top-0 left-0 w-full h-full object-cover"
// // //                 muted={isMuted[index]}
// // //                 loop
// // //                 preload="metadata"
// // //                 playsInline
// // //               >
// // //                 <source src={video.src} type="video/mp4" />
// // //                 Your browser does not support the video tag.
// // //               </video>
// // //               <button
// // //                 onClick={(e) => { e.stopPropagation(); togglePlayPause(index); }}
// // //                 className="absolute top-2 right-12 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
// // //               >
// // //                 {isPlaying[index] ? (
// // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                     <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="white"/>
// // //                   </svg>
// // //                 ) : (
// // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                     <path d="M8 5V19L19 12L8 5Z" fill="white"/>
// // //                   </svg>
// // //                 )}
// // //               </button>
// // //               <button
// // //                 onClick={(e) => { e.stopPropagation(); toggleMute(index); }}
// // //                 className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
// // //               >
// // //                 {isMuted[index] ? (
// // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                     <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="white"/>
// // //                   </svg>
// // //                 ) : (
// // //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.02C15.5 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="white"/>
// // //                   </svg>
// // //                 )}
// // //               </button>
// // //             </div>
// // //             <div className="p-2">
// // //               <p className="text-sm font-medium">{video.caption}</p>
// // //               <p className="text-xs text-gray-400">{video.handle}</p>
// // //               <p className="text-xs text-green-400">{video.price}</p>
// // //               <p className="text-xs text-gray-300 line-clamp-2">{video.description}</p>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Mobile Grid */}
// // //       <div className="md:hidden grid grid-cols-2 gap-3">
// // //         {videos.map((video, index) => (
// // //           <div
// // //             key={index}
// // //             className="bg-gray-800 rounded-lg overflow-hidden relative"
// // //             onClick={() => togglePlayPause(index)} // Only play on click
// // //           >
// // //             <div className="w-full" style={{ paddingTop: '128.00%' }}>
// // //               <video
// // //                 ref={videoRefs[index]}
// // //                 className="absolute top-0 left-0 w-full h-full object-cover"
// // //                 muted={isMuted[index]}
// // //                 loop
// // //                 preload="metadata"
// // //                 playsInline
// // //               >
// // //                 <source src={video.src} type="video/mp4" />
// // //                 Your browser does not support the video tag.
// // //               </video>
// // //               <button
// // //                 onClick={(e) => { e.stopPropagation(); togglePlayPause(index); }}
// // //                 className="absolute top-2 right-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1.5 rounded-full transition-all duration-200 z-10"
// // //               >
// // //                 {isPlaying[index] ? (
// // //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                     <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="white"/>
// // //                   </svg>
// // //                 ) : (
// // //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                     <path d="M8 5V19L19 12L8 5Z" fill="white"/>
// // //                   </svg>
// // //                 )}
// // //               </button>
// // //               <button
// // //                 onClick={(e) => { e.stopPropagation(); toggleMute(index); }}
// // //                 className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1.5 rounded-full transition-all duration-200 z-10"
// // //               >
// // //                 {isMuted[index] ? (
// // //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                     <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="white"/>
// // //                   </svg>
// // //                 ) : (
// // //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.02C15.5 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="white"/>
// // //                   </svg>
// // //                 )}
// // //               </button>
// // //             </div>
// // //             <div className="p-2">
// // //               <p className="text-sm font-medium">{video.caption}</p>
// // //               <p className="text-xs text-gray-400">{video.handle}</p>
// // //               <p className="text-xs text-green-400">{video.price}</p>
// // //               <p className="text-xs text-gray-300 line-clamp-2">{video.description}</p>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Video;

// import React, { useRef, useState, useEffect } from 'react';

// const Video = () => {
//   const videoRefs = [
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//   ];
//   const [isPlaying, setIsPlaying] = useState([false, false, false, false]);
//   const [isMuted, setIsMuted] = useState([true, true, true, true]);
//   const [hasInteraction, setHasInteraction] = useState(false);

//   // Handle user interaction to enable playback
//   useEffect(() => {
//     const enablePlayback = () => setHasInteraction(true);
//     document.addEventListener('touchstart', enablePlayback, { once: true });
//     document.addEventListener('click', enablePlayback, { once: true });
//     return () => {
//       document.removeEventListener('touchstart', enablePlayback);
//       document.removeEventListener('click', enablePlayback);
//     };
//   }, []);

//   const togglePlayPause = async (index) => {
//     if (!videoRefs[index].current || !hasInteraction) return;
    
//     try {
//       if (isPlaying[index]) {
//         videoRefs[index].current.pause();
//         setIsPlaying((prev) => {
//           const newState = [...prev];
//           newState[index] = false;
//           return newState;
//         });
//       } else {
//         // Pause all other videos first
//         videoRefs.forEach((ref, i) => {
//           if (i !== index && ref.current && !ref.current.paused) {
//             ref.current.pause();
//           }
//         });
        
//         // Reset all playing states
//         setIsPlaying([false, false, false, false]);
        
//         // Play the selected video
//         await videoRefs[index].current.play();
//         setIsPlaying((prev) => {
//           const newState = [...prev];
//           newState[index] = true;
//           return newState;
//         });
//       }
//     } catch (error) {
//       console.error(`Error playing video ${index}:`, error);
//     }
//   };

//   const toggleMute = (index) => {
//     if (videoRefs[index].current) {
//       const newMutedState = !isMuted[index];
//       videoRefs[index].current.muted = newMutedState;
//       setIsMuted((prev) => {
//         const newState = [...prev];
//         newState[index] = newMutedState;
//         return newState;
//       });
//     }
//   };

//   // Handle video events
//   const handleVideoEnd = (index) => {
//     setIsPlaying((prev) => {
//       const newState = [...prev];
//       newState[index] = false;
//       return newState;
//     });
//   };

//   const handleVideoPause = (index) => {
//     setIsPlaying((prev) => {
//       const newState = [...prev];
//       newState[index] = false;
//       return newState;
//     });
//   };

//   const videos = [
//     { src: '/f.mp4', caption: 'WALMART under $5 haul', handle: '@alexnicolehome', price: '$10.57', description: "Time and Tru Women's Cotton Off the Shoulder Midi Dress Sizes XS-XXXXL" },
//     { src: '/h.mp4', caption: '@walmartfinds', handle: '@walmartfinds', price: '$16.99', description: 'Madden NYC Women\'s Raffia Flat Platform Sandals with Adjustable Straps' },
//     { src: '/c.mp4', caption: 'cutest water bottles', handle: '@fabfindswithfallon', price: '$10.97', description: 'TAL Stainless Steel Paracord Handle Water Bottle 24 oz, Pink' },
//     { src: '/e.mp4', caption: '@burleighford', handle: '@burleighford', price: '$5.48', description: 'No Boundaries Seamless Tank Top, Women\'s' },
//   ];

//   return (
//     <div className="bg-gray-900 text-white p-6">
//       <h2 className="text-2xl font-bold mb-4">Featured in videos</h2>
//       <p className="text-sm mb-4 text-gray-400">See what creators are sharing</p>
      
//       {/* Desktop Grid */}
//       <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {videos.map((video, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 rounded-lg overflow-hidden relative"
//           >
//             <div className="w-full relative" style={{ paddingTop: '128.00%' }}>
//               <video
//                 ref={videoRefs[index]}
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 muted={isMuted[index]}
//                 loop
//                 preload="metadata"
//                 playsInline
//                 onEnded={() => handleVideoEnd(index)}
//                 onPause={() => handleVideoPause(index)}
//               >
//                 <source src={video.src} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
              
//               {/* Play/Pause Button */}
//               <button
//                 onClick={() => togglePlayPause(index)}
//                 className="absolute top-2 right-12 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
//                 title={isPlaying[index] ? 'Pause' : 'Play'}
//               >
//                 {isPlaying[index] ? (
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="white"/>
//                   </svg>
//                 ) : (
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8 5V19L19 12L8 5Z" fill="white"/>
//                   </svg>
//                 )}
//               </button>
              
//               {/* Mute/Unmute Button */}
//               <button
//                 onClick={() => toggleMute(index)}
//                 className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
//                 title={isMuted[index] ? 'Unmute' : 'Mute'}
//               >
//                 {isMuted[index] ? (
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="white"/>
//                   </svg>
//                 ) : (
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.02C15.5 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="white"/>
//                   </svg>
//                 )}
//               </button>
//             </div>
            
//             <div className="p-2">
//               <p className="text-sm font-medium">{video.caption}</p>
//               <p className="text-xs text-gray-400">{video.handle}</p>
//               <p className="text-xs text-green-400">{video.price}</p>
//               <p className="text-xs text-gray-300 line-clamp-2">{video.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Mobile Grid */}
//       <div className="md:hidden grid grid-cols-2 gap-3">
//         {videos.map((video, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 rounded-lg overflow-hidden relative"
//           >
//             <div className="w-full relative" style={{ paddingTop: '128.00%' }}>
//               <video
//                 ref={videoRefs[index]}
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 muted={isMuted[index]}
//                 loop
//                 preload="metadata"
//                 playsInline
//                 onEnded={() => handleVideoEnd(index)}
//                 onPause={() => handleVideoPause(index)}
//               >
//                 <source src={video.src} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
              
//               {/* Play/Pause Button */}
//               <button
//                 onClick={() => togglePlayPause(index)}
//                 className="absolute top-2 right-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1.5 rounded-full transition-all duration-200 z-10"
//                 title={isPlaying[index] ? 'Pause' : 'Play'}
//               >
//                 {isPlaying[index] ? (
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="white"/>
//                   </svg>
//                 ) : (
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8 5V19L19 12L8 5Z" fill="white"/>
//                   </svg>
//                 )}
//               </button>
              
//               {/* Mute/Unmute Button */}
//               <button
//                 onClick={() => toggleMute(index)}
//                 className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1.5 rounded-full transition-all duration-200 z-10"
//                 title={isMuted[index] ? 'Unmute' : 'Mute'}
//               >
//                 {isMuted[index] ? (
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="white"/>
//                   </svg>
//                 ) : (
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.02C15.5 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="white"/>
//                   </svg>
//                 )}
//               </button>
//             </div>
            
//             <div className="p-2">
//               <p className="text-sm font-medium">{video.caption}</p>
//               <p className="text-xs text-gray-400">{video.handle}</p>
//               <p className="text-xs text-green-400">{video.price}</p>
//               <p className="text-xs text-gray-300 line-clamp-2">{video.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Video;

// // import React, { useRef, useState, useEffect } from 'react';

// // const Video = () => {
// //   const videoRefs = [
// //     useRef(null),
// //     useRef(null),
// //     useRef(null),
// //     useRef(null),
// //   ];
// //   const [isPlaying, setIsPlaying] = useState([false, false, false, false]);
// //   const [isMuted, setIsMuted] = useState([true, true, true, true]);
// //   const [hasInteraction, setHasInteraction] = useState(false);

// //   // Handle user interaction to enable playback
// //   useEffect(() => {
// //     const enablePlayback = () => setHasInteraction(true);
// //     document.addEventListener('touchstart', enablePlayback, { once: true });
// //     document.addEventListener('click', enablePlayback, { once: true });
// //     return () => {
// //       document.removeEventListener('touchstart', enablePlayback);
// //       document.removeEventListener('click', enablePlayback);
// //     };
// //   }, []);

// //   const togglePlayPause = async (index) => {
// //     if (!videoRefs[index].current || !hasInteraction) return;
    
// //     try {
// //       if (isPlaying[index]) {
// //         videoRefs[index].current.pause();
// //         setIsPlaying((prev) => {
// //           const newState = [...prev];
// //           newState[index] = false;
// //           return newState;
// //         });
// //       } else {
// //         // Pause all other videos first
// //         videoRefs.forEach((ref, i) => {
// //           if (i !== index && ref.current && !ref.current.paused) {
// //             ref.current.pause();
// //           }
// //         });
        
// //         // Reset all playing states
// //         setIsPlaying([false, false, false, false]);
        
// //         // Play the selected video
// //         await videoRefs[index].current.play();
// //         setIsPlaying((prev) => {
// //           const newState = [...prev];
// //           newState[index] = true;
// //           return newState;
// //         });
// //       }
// //     } catch (error) {
// //       console.error(`Error playing video ${index}:`, error);
// //     }
// //   };

// //   const toggleMute = (index) => {
// //     if (videoRefs[index].current) {
// //       const newMutedState = !isMuted[index];
// //       videoRefs[index].current.muted = newMutedState;
// //       setIsMuted((prev) => {
// //         const newState = [...prev];
// //         newState[index] = newMutedState;
// //         return newState;
// //       });
// //     }
// //   };

// //   // Handle video events
// //   const handleVideoEnd = (index) => {
// //     setIsPlaying((prev) => {
// //       const newState = [...prev];
// //       newState[index] = false;
// //       return newState;
// //     });
// //   };

// //   const handleVideoPause = (index) => {
// //     setIsPlaying((prev) => {
// //       const newState = [...prev];
// //       newState[index] = false;
// //       return newState;
// //     });
// //   };

// //   const videos = [
// //     { src: '/f.mp4', caption: 'WALMART under $5 haul', handle: '@alexnicolehome', price: '$10.57', description: "Time and Tru Women's Cotton Off the Shoulder Midi Dress Sizes XS-XXXXL" },
// //     { src: '/h.mp4', caption: '@walmartfinds', handle: '@walmartfinds', price: '$16.99', description: 'Madden NYC Women\'s Raffia Flat Platform Sandals with Adjustable Straps' },
// //     { src: '/c.mp4', caption: 'cutest water bottles', handle: '@fabfindswithfallon', price: '$10.97', description: 'TAL Stainless Steel Paracord Handle Water Bottle 24 oz, Pink' },
// //     { src: '/e.mp4', caption: '@burleighford', handle: '@burleighford', price: '$5.48', description: 'No Boundaries Seamless Tank Top, Women\'s' },
// //   ];

// //   return (
// //     <div className="bg-gray-900 text-white p-6">
// //       <h2 className="text-2xl font-bold mb-4">Featured in videos</h2>
// //       <p className="text-sm mb-4 text-gray-400">See what creators are sharing</p>
      
// //       {/* Desktop Grid */}
// //       <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //         {videos.map((video, index) => (
// //           <div
// //             key={index}
// //             className="bg-gray-800 rounded-lg overflow-hidden relative"
// //           >
// //             <div className="w-full relative" style={{ paddingTop: '128.00%' }}>
// //               <video
// //                 ref={videoRefs[index]}
// //                 className="absolute top-0 left-0 w-full h-full object-cover"
// //                 muted={isMuted[index]}
// //                 loop
// //                 preload="metadata"
// //                 playsInline
// //                 onEnded={() => handleVideoEnd(index)}
// //                 onPause={() => handleVideoPause(index)}
// //               >
// //                 <source src={video.src} type="video/mp4" />
// //                 Your browser does not support the video tag.
// //               </video>
              
// //               {/* Play/Pause Button */}
// //               <button
// //                 onClick={() => togglePlayPause(index)}
// //                 className="absolute top-2 right-12 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
// //                 title={isPlaying[index] ? 'Pause' : 'Play'}
// //               >
// //                 {isPlaying[index] ? (
// //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                     <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="white"/>
// //                   </svg>
// //                 ) : (
// //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                     <path d="M8 5V19L19 12L8 5Z" fill="white"/>
// //                   </svg>
// //                 )}
// //               </button>
              
// //               {/* Mute/Unmute Button */}
// //               <button
// //                 onClick={() => toggleMute(index)}
// //                 className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
// //                 title={isMuted[index] ? 'Unmute' : 'Mute'}
// //               >
// //                 {isMuted[index] ? (
// //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                     <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="white"/>
// //                   </svg>
// //                 ) : (
// //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.02C15.5 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="white"/>
// //                   </svg>
// //                 )}
// //               </button>
// //             </div>
            
// //             <div className="p-2">
// //               <p className="text-sm font-medium">{video.caption}</p>
// //               <p className="text-xs text-gray-400">{video.handle}</p>
// //               <p className="text-xs text-green-400">{video.price}</p>
// //               <p className="text-xs text-gray-300 line-clamp-2">{video.description}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Mobile Grid */}
// //       <div className="md:hidden grid grid-cols-2 gap-3">
// //         {videos.map((video, index) => (
// //           <div
// //             key={index}
// //             className="bg-gray-800 rounded-lg overflow-hidden relative"
// //           >
// //             <div className="w-full relative" style={{ paddingTop: '128.00%' }}>
// //               <video
// //                 ref={videoRefs[index]}
// //                 className="absolute top-0 left-0 w-full h-full object-cover"
// //                 muted={isMuted[index]}
// //                 loop
// //                 preload="metadata"
// //                 playsInline
// //                 onEnded={() => handleVideoEnd(index)}
// //                 onPause={() => handleVideoPause(index)}
// //               >
// //                 <source src={video.src} type="video/mp4" />
// //                 Your browser does not support the video tag.
// //               </video>
              
// //               {/* Play/Pause Button */}
// //               <button
// //                 onClick={() => togglePlayPause(index)}
// //                 className="absolute top-2 right-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1.5 rounded-full transition-all duration-200 z-10"
// //                 title={isPlaying[index] ? 'Pause' : 'Play'}
// //               >
// //                 {isPlaying[index] ? (
// //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                     <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="white"/>
// //                   </svg>
// //                 ) : (
// //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                     <path d="M8 5V19L19 12L8 5Z" fill="white"/>
// //                   </svg>
// //                 )}
// //               </button>
              
// //               {/* Mute/Unmute Button */}
// //               <button
// //                 onClick={() => toggleMute(index)}
// //                 className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1.5 rounded-full transition-all duration-200 z-10"
// //                 title={isMuted[index] ? 'Unmute' : 'Mute'}
// //               >
// //                 {isMuted[index] ? (
// //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                     <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="white"/>
// //                   </svg>
// //                 ) : (
// //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                     <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.02C15.5 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="white"/>
// //                   </svg>
// //                 )}
// //               </button>
// //             </div>
            
// //             <div className="p-2">
// //               <p className="text-sm font-medium">{video.caption}</p>
// //               <p className="text-xs text-gray-400">{video.handle}</p>
// //               <p className="text-xs text-green-400">{video.price}</p>
// //               <p className="text-xs text-gray-300 line-clamp-2">{video.description}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Video;

import React, { useRef, useState, useEffect } from 'react';

const Video = () => {
  const videoRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [isPlaying, setIsPlaying] = useState([false, false, false, false]);
  const [isMuted, setIsMuted] = useState([true, true, true, true]);
  const [hasInteraction, setHasInteraction] = useState(false);

  // Enable playback after user interaction
  useEffect(() => {
    const enablePlayback = () => setHasInteraction(true);
    window.addEventListener('touchstart', enablePlayback, { once: true });
    window.addEventListener('click', enablePlayback, { once: true });
    return () => {
      window.removeEventListener('touchstart', enablePlayback);
      window.removeEventListener('click', enablePlayback);
    };
  }, []);

  const togglePlayPause = (index) => {
    if (videoRefs[index].current && hasInteraction) {
      const video = videoRefs[index].current;
      if (isPlaying[index]) {
        video.pause();
      } else {
        video.play().catch((error) => {
          console.error(`Error playing video ${index}:`, error);
          // Fallback: Show a message if playback fails
          alert(`Could not play video ${index}. Check file or permissions.`);
        });
      }
      setIsPlaying((prev) => {
        const newState = [...prev];
        newState[index] = !newState[index];
        return newState;
      });
    }
  };

  const toggleMute = (index) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.muted = !isMuted[index];
      setIsMuted((prev) => {
        const newState = [...prev];
        newState[index] = !newState[index];
        return newState;
      });
    }
  };

  const videos = [
    { src: '/f.mp4', caption: 'WALMART under $5 haul', handle: '@alexnicolehome', price: '$10.57', description: "Time and Tru Women's Cotton Off the Shoulder Midi Dress Sizes XS-XXXXL" },
    { src: '/h.mp4', caption: '@walmartfinds', handle: '@walmartfinds', price: '$16.99', description: 'Madden NYC Women\'s Raffia Flat Platform Sandals with Adjustable Straps' },
    { src: '/c.mp4', caption: 'cutest water bottles', handle: '@fabfindswithfallon', price: '$10.97', description: 'TAL Stainless Steel Paracord Handle Water Bottle 24 oz, Pink' },
    { src: '/e.mp4', caption: '@burleighford', handle: '@burleighford', price: '$5.48', description: 'No Boundaries Seamless Tank Top, Women\'s' },
  ];

  return (
    <div className="bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Featured in videos</h2>
      <p className="text-sm mb-4 text-gray-400">See what creators are sharing</p>
      
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden relative"
          >
            <div className="w-full" style={{ paddingTop: '128.00%' }}>
              <video
                ref={videoRefs[index]}
                className="absolute top-0 left-0 w-full h-full object-cover"
                muted={isMuted[index]}
                loop
                preload="metadata"
                playsInline
                onClick={(e) => e.preventDefault()} // Prevent default click behavior
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={(e) => { e.stopPropagation(); togglePlayPause(index); }}
                className="absolute top-2 right-12 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
              >
                {isPlaying[index] ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="white"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                )}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); toggleMute(index); }}
                className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
              >
                {isMuted[index] ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="white"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.02C15.5 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="white"/>
                  </svg>
                )}
              </button>
            </div>
            <div className="p-2">
              <p className="text-sm font-medium">{video.caption}</p>
              <p className="text-xs text-gray-400">{video.handle}</p>
              <p className="text-xs text-green-400">{video.price}</p>
              <p className="text-xs text-gray-300 line-clamp-2">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Grid */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden relative"
            onClick={() => togglePlayPause(index)}
          >
            <div className="w-full" style={{ paddingTop: '128.00%' }}>
              <video
                ref={videoRefs[index]}
                className="absolute top-0 left-0 w-full h-full object-cover"
                muted={isMuted[index]}
                loop
                preload="metadata"
                playsInline
                onClick={(e) => e.preventDefault()} // Prevent default click behavior
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={(e) => { e.stopPropagation(); togglePlayPause(index); }}
                className="absolute top-2 right-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1.5 rounded-full transition-all duration-200 z-10"
              >
                {isPlaying[index] ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="white"/>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                )}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); toggleMute(index); }}
                className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1.5 rounded-full transition-all duration-200 z-10"
              >
                {isMuted[index] ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="white"/>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.02C15.5 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="white"/>
                  </svg>
                )}
              </button>
            </div>
            <div className="p-2">
              {/* <p className="text-sm font-medium">{video.caption}</p>
              <p className="text-xs text-gray-400">{video.handle}</p>
              <p className="text-xs text-green-400">{video.price}</p>
              <p className="text-xs text-gray-300 line-clamp-2">{video.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;