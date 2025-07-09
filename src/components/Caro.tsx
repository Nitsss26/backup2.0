// // // // "use client"

// // // // import { useState, useEffect } from "react"
// // // // import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, BookOpen } from "lucide-react"

// // // // const Caro = () => {
// // // //   const [currentSlide, setCurrentSlide] = useState(0)
// // // //   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

// // // //   const slides = [
// // // //     // Slide 1 - Course Marketplace
// // // //     {
// // // //       id: 1,
// // // //       type: "marketplace",
// // // //       title: "Get more out of your learning journey",
// // // //       subtitle:
// // // //         "Study anytime, anywhere, and make it even more engaging with certificates, achievements, and other learning rewards. Enhance your skills with new courses, materials, and other resources - check out our full offer now!",
// // // //       content: {
// // // //         leftSection: [
// // // //           {
// // // //             type: "course",
// // // //             badge: "OFFER FROM 1 INSTRUCTOR",
// // // //             image: "/placeholder.svg?height=120&width=120",
// // // //             title: "Complete Web Development Bootcamp",
// // // //             price: "28.25 USD",
// // // //             tag: "GLOBAL",
// // // //             favorite: false,
// // // //           },
// // // //           {
// // // //             type: "course",
// // // //             badge: "OFFERS FROM 12 INSTRUCTORS",
// // // //             image: "/placeholder.svg?height=120&width=120",
// // // //             title: "Data Science Masterclass",
// // // //             price: "21.88 USD",
// // // //             originalPrice: "29.42 USD",
// // // //             discount: "26%",
// // // //             tag: "GLOBAL",
// // // //             favorite: false,
// // // //           },
// // // //           {
// // // //             type: "course",
// // // //             badge: "OFFERS FROM 4 INSTRUCTORS",
// // // //             image: "/placeholder.svg?height=120&width=120",
// // // //             title: "React Native Mobile Development",
// // // //             price: "30.01 USD",
// // // //             tag: "GLOBAL",
// // // //             favorite: false,
// // // //           },
// // // //           {
// // // //             type: "course",
// // // //             badge: "SPONSORED",
// // // //             image: "/placeholder.svg?height=120&width=120",
// // // //             title: "AI & Machine Learning Fundamentals",
// // // //             price: "18.10 USD",
// // // //             originalPrice: "19.07 USD",
// // // //             discount: "5%",
// // // //             tag: "UNITED STATES",
// // // //             favorite: false,
// // // //           },
// // // //         ],
// // // //         rightSection: {
// // // //           image: "/placeholder.svg?height=400&width=400",
// // // //           title: "LEARN ON THE GO",
// // // //           subtitle: "BEST FOR CONTINUOUS LEARNING",
// // // //         },
// // // //       },
// // // //     },
// // // //     // Slide 2 - Featured Courses
// // // //     {
// // // //       id: 2,
// // // //       type: "featured",
// // // //       title: "Featured Courses",
// // // //       content: {
// // // //         mainCourse: {
// // // //           image: "/placeholder.svg?height=400&width=600",
// // // //           title: "Full Stack Development: Complete Guide",
// // // //           description: "Master modern web development with React, Node.js, and MongoDB",
// // // //           rating: "4.8",
// // // //           reviews: "2,847",
// // // //           tags: ["Web Development", "JavaScript", "React", "Node.js"],
// // // //           platforms: ["Online", "Mobile App"],
// // // //           price: "₹3,646.29",
// // // //           originalPrice: "₹4,289.21",
// // // //           discount: "15%",
// // // //         },
// // // //         sideCourses: [
// // // //           {
// // // //             image: "/placeholder.svg?height=150&width=200",
// // // //             title: "Python Programming",
// // // //             badge: "Publisher Sale",
// // // //             type: "BESTSELLER",
// // // //           },
// // // //           {
// // // //             image: "/placeholder.svg?height=150&width=200",
// // // //             title: "Digital Marketing",
// // // //             badge: "Publisher Sale",
// // // //             type: "STAR DEAL",
// // // //           },
// // // //           {
// // // //             image: "/placeholder.svg?height=150&width=200",
// // // //             title: "UI/UX Design",
// // // //             badge: "Publisher Sale",
// // // //             type: "NEW",
// // // //           },
// // // //           {
// // // //             image: "/placeholder.svg?height=150&width=200",
// // // //             title: "Data Analytics",
// // // //             badge: "Publisher Sale",
// // // //             type: "TRENDING",
// // // //           },
// // // //         ],
// // // //       },
// // // //     },
// // // //     // Slide 3 - Categories
// // // //     {
// // // //       id: 3,
// // // //       type: "categories",
// // // //       content: [
// // // //         {
// // // //           title: "COURSE CERTIFICATES",
// // // //           subtitle: "Verified • Global • Accredited",
// // // //           image: "/placeholder.svg?height=300&width=400",
// // // //           badge: "BESTSELLER",
// // // //           gradient: "from-purple-600 to-pink-600",
// // // //         },
// // // //         {
// // // //           title: "SAVE BIG ON POPULAR COURSES",
// // // //           subtitle: "Programming • Design • Business",
// // // //           image: "/placeholder.svg?height=300&width=400",
// // // //           badge: "BESTSELLER",
// // // //           gradient: "from-blue-600 to-cyan-600",
// // // //         },
// // // //         {
// // // //           title: "LATEST RELEASES",
// // // //           subtitle: "Discover all the fresh courses",
// // // //           image: "/placeholder.svg?height=300&width=400",
// // // //           badge: "NEW",
// // // //           gradient: "from-green-600 to-teal-600",
// // // //         },
// // // //         {
// // // //           title: "SKILL ASSESSMENTS",
// // // //           subtitle: "Test • Global • Certified",
// // // //           image: "/placeholder.svg?height=300&width=400",
// // // //           badge: "BESTSELLER",
// // // //           gradient: "from-orange-600 to-red-600",
// // // //         },
// // // //       ],
// // // //     },
// // // //   ]

// // // //   useEffect(() => {
// // // //     if (isAutoPlaying) {
// // // //       const interval = setInterval(() => {
// // // //         setCurrentSlide((prev) => (prev + 1) % slides.length)
// // // //       }, 5000)
// // // //       return () => clearInterval(interval)
// // // //     }
// // // //   }, [isAutoPlaying, slides.length])

// // // //   const nextSlide = () => {
// // // //     setCurrentSlide((prev) => (prev + 1) % slides.length)
// // // //   }

// // // //   const prevSlide = () => {
// // // //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
// // // //   }

// // // //   const renderMarketplaceSlide = (slide: any) => (
// // // //     <div className="bg-gray-900 text-white min-h-screen p-4 md:p-8">
// // // //       <div className="max-w-7xl mx-auto">
// // // //         <div className="mb-8">
// // // //           <h1 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h1>
// // // //           <p className="text-gray-300 text-sm md:text-base max-w-4xl">{slide.subtitle}</p>
// // // //         </div>

// // // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // //           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //             {slide.content.leftSection.map((course: any, index: number) => (
// // // //               <div key={index} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors">
// // // //                 <div className="text-xs text-gray-400 mb-3">{course.badge}</div>
// // // //                 <div className="flex gap-4">
// // // //                   <img
// // // //                     src={course.image || "/placeholder.svg"}
// // // //                     alt={course.title}
// // // //                     className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover"
// // // //                   />
// // // //                   <div className="flex-1">
// // // //                     <h3 className="font-semibold text-sm md:text-base mb-2">{course.title}</h3>
// // // //                     <div className="flex items-center gap-2 mb-2">
// // // //                       <BookOpen className="w-4 h-4 text-gray-400" />
// // // //                       <span className="text-xs text-green-400">{course.tag}</span>
// // // //                     </div>
// // // //                     <div className="flex items-center justify-between">
// // // //                       <div className="flex items-center gap-2">
// // // //                         <span className="font-bold text-lg">{course.price}</span>
// // // //                         {course.originalPrice && (
// // // //                           <>
// // // //                             <span className="text-sm text-gray-400 line-through">{course.originalPrice}</span>
// // // //                             <span className="bg-orange-600 text-xs px-2 py-1 rounded">{course.discount}</span>
// // // //                           </>
// // // //                         )}
// // // //                       </div>
// // // //                       <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           <div className="relative">
// // // //             <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg p-6 h-full flex flex-col justify-center items-center text-center">
// // // //               <img
// // // //                 src={slide.content.rightSection.image || "/placeholder.svg"}
// // // //                 alt="Learning illustration"
// // // //                 className="w-full max-w-xs mb-4 rounded-lg"
// // // //               />
// // // //               <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.content.rightSection.title}</h2>
// // // //               <p className="text-sm md:text-base opacity-90">{slide.content.rightSection.subtitle}</p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )

// // // //   const renderFeaturedSlide = (slide: any) => (
// // // //     <div className="bg-gray-900 text-white min-h-screen p-4 md:p-8">
// // // //       <div className="max-w-7xl mx-auto">
// // // //         <h1 className="text-2xl md:text-4xl font-bold mb-8">{slide.title}</h1>

// // // //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
// // // //           <div className="lg:col-span-2">
// // // //             <div className="relative bg-gray-800 rounded-lg overflow-hidden">
// // // //               <img
// // // //                 src={slide.content.mainCourse.image || "/placeholder.svg"}
// // // //                 alt={slide.content.mainCourse.title}
// // // //                 className="w-full h-64 md:h-80 object-cover"
// // // //               />
// // // //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
// // // //               <div className="absolute bottom-0 left-0 right-0 p-6">
// // // //                 <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.content.mainCourse.title}</h2>
// // // //                 <p className="text-gray-300 mb-4">{slide.content.mainCourse.description}</p>
// // // //                 <div className="flex flex-wrap gap-2 mb-4">
// // // //                   {slide.content.mainCourse.tags.map((tag: string, index: number) => (
// // // //                     <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
// // // //                       {tag}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>
// // // //                 <div className="flex items-center justify-between">
// // // //                   <div className="flex items-center gap-4">
// // // //                     <div className="flex items-center gap-1">
// // // //                       <span className="text-lg font-bold">{slide.content.mainCourse.rating}</span>
// // // //                       <Star className="w-5 h-5 text-yellow-400 fill-current" />
// // // //                     </div>
// // // //                     <span className="text-gray-300">({slide.content.mainCourse.reviews})</span>
// // // //                   </div>
// // // //                   <div className="flex items-center gap-2">
// // // //                     <span className="bg-green-600 text-sm px-2 py-1 rounded">{slide.content.mainCourse.discount}</span>
// // // //                     <span className="font-bold text-xl">{slide.content.mainCourse.price}</span>
// // // //                     <ShoppingCart className="w-6 h-6 bg-orange-600 p-1 rounded cursor-pointer hover:bg-orange-700" />
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="space-y-4">
// // // //             {slide.content.sideCourses.map((course: any, index: number) => (
// // // //               <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
// // // //                 <div className="relative">
// // // //                   <img
// // // //                     src={course.image || "/placeholder.svg"}
// // // //                     alt={course.title}
// // // //                     className="w-full h-24 object-cover"
// // // //                   />
// // // //                   <div className="absolute top-2 left-2">
// // // //                     <span
// // // //                       className={`px-2 py-1 rounded text-xs font-bold ${
// // // //                         course.type === "BESTSELLER"
// // // //                           ? "bg-orange-600"
// // // //                           : course.type === "STAR DEAL"
// // // //                             ? "bg-blue-600"
// // // //                             : course.type === "NEW"
// // // //                               ? "bg-green-600"
// // // //                               : "bg-purple-600"
// // // //                       }`}
// // // //                     >
// // // //                       {course.type}
// // // //                     </span>
// // // //                   </div>
// // // //                   <div className="absolute bottom-2 right-2">
// // // //                     <div className="bg-orange-600 p-1 rounded">
// // // //                       <ShoppingCart className="w-4 h-4" />
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="p-3">
// // // //                   <h3 className="font-semibold text-sm">{course.title}</h3>
// // // //                   <span className="text-xs text-blue-400">{course.badge}</span>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         <div className="flex justify-center mt-8 space-x-2">
// // // //           {[0, 1, 2].map((dot) => (
// // // //             <div key={dot} className={`w-3 h-3 rounded-full ${dot === 0 ? "bg-white" : "bg-gray-600"}`} />
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )

// // // //   const renderCategoriesSlide = (slide: any) => (
// // // //     <div className="bg-gray-900 text-white min-h-screen p-4 md:p-8">
// // // //       <div className="max-w-7xl mx-auto">
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // //           {slide.content.map((category: any, index: number) => (
// // // //             <div key={index} className="relative group cursor-pointer">
// // // //               <div
// // // //                 className={`bg-gradient-to-br ${category.gradient} rounded-lg p-6 h-64 md:h-80 flex flex-col justify-between overflow-hidden relative`}
// // // //               >
// // // //                 <div className="absolute inset-0 opacity-20">
// // // //                   <img
// // // //                     src={category.image || "/placeholder.svg"}
// // // //                     alt={category.title}
// // // //                     className="w-full h-full object-cover"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="relative z-10">
// // // //                   <span
// // // //                     className={`inline-block px-3 py-1 rounded text-xs font-bold mb-4 ${
// // // //                       category.badge === "BESTSELLER"
// // // //                         ? "bg-orange-600"
// // // //                         : category.badge === "NEW"
// // // //                           ? "bg-green-600"
// // // //                           : "bg-blue-600"
// // // //                     }`}
// // // //                   >
// // // //                     {category.badge}
// // // //                   </span>
// // // //                 </div>
// // // //                 <div className="relative z-10">
// // // //                   <h3 className="text-xl md:text-2xl font-bold mb-2">{category.title}</h3>
// // // //                   <p className="text-sm opacity-90">{category.subtitle}</p>
// // // //                 </div>
// // // //                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )

// // // //   const renderSlide = (slide: any) => {
// // // //     switch (slide.type) {
// // // //       case "marketplace":
// // // //         return renderMarketplaceSlide(slide)
// // // //       case "featured":
// // // //         return renderFeaturedSlide(slide)
// // // //       case "categories":
// // // //         return renderCategoriesSlide(slide)
// // // //       default:
// // // //         return null
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="relative w-full overflow-hidden">
// // // //       <div
// // // //         className="flex transition-transform duration-500 ease-in-out"
// // // //         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
// // // //         onMouseEnter={() => setIsAutoPlaying(false)}
// // // //         onMouseLeave={() => setIsAutoPlaying(true)}
// // // //       >
// // // //         {slides.map((slide) => (
// // // //           <div key={slide.id} className="w-full flex-shrink-0">
// // // //             {renderSlide(slide)}
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {/* Navigation Arrows */}
// // // //       <button
// // // //         onClick={prevSlide}
// // // //         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
// // // //       >
// // // //         <ChevronLeft className="w-6 h-6" />
// // // //       </button>
// // // //       <button
// // // //         onClick={nextSlide}
// // // //         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
// // // //       >
// // // //         <ChevronRight className="w-6 h-6" />
// // // //       </button>

// // // //       {/* Slide Indicators */}
// // // //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
// // // //         {slides.map((_, index) => (
// // // //           <button
// // // //             key={index}
// // // //             onClick={() => setCurrentSlide(index)}
// // // //             className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Caro

// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Play } from "lucide-react"

// // // const Caro = () => {
// // //   const [currentSlide, setCurrentSlide] = useState(0)
// // //   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

// // //   const slides = [
// // //     // Slide 1 - Main Featured Layout (2/3 + 1/3)
// // //     {
// // //       id: 1,
// // //       type: "featured",
// // //       content: {
// // //         mainCourse: {
// // //           title: "Complete Web Development Bootcamp",
// // //           subtitle: "Learn HTML, CSS, JavaScript, React, Node.js and MongoDB",
// // //           tags: ["Open World", "Web Development", "JavaScript", "Full Stack"],
// // //           rating: "4.8",
// // //           reviewCount: "2,847",
// // //           originalPrice: "₹4,289.21",
// // //           currentPrice: "₹3,646.29",
// // //           discount: "-15%",
// // //           platforms: ["steam", "windows"],
// // //           image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop&crop=center"
// // //         },
// // //         sideDeals: [
// // //           {
// // //             title: "React Native Development",
// // //             badge: "STAR DEAL",
// // //             price: "₹771.48",
// // //             originalPrice: "₹1,715.45",
// // //             discount: "-55%",
// // //             platforms: ["steam", "windows"],
// // //             image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop&crop=center"
// // //           },
// // //           {
// // //             title: "PlayStation Courses Bundle",
// // //             badge: "Publisher Sale",
// // //             subtitle: "SAVE UP TO 60%",
// // //             image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=200&fit=crop&crop=center"
// // //           },
// // //           {
// // //             title: "Data Science Masterclass",
// // //             badge: "Publisher Sale",
// // //             image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center"
// // //           },
// // //           {
// // //             title: "AI & Machine Learning",
// // //             badge: "Publisher Sale",
// // //             image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop&crop=center"
// // //           }
// // //         ]
// // //       }
// // //     },
// // //     // Slide 2 - 4 Column Grid Layout
// // //     {
// // //       id: 2,
// // //       type: "categories",
// // //       content: [
// // //         {
// // //           title: "PROGRAMMING COURSES",
// // //           subtitle: "Python • JavaScript • Java",
// // //           badge: "BESTSELLER",
// // //           image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center",
// // //           gradient: "from-purple-600 to-blue-600"
// // //         },
// // //         {
// // //           title: "SAVE BIG ON POPULAR COURSES",
// // //           subtitle: "Web Development • Mobile Apps",
// // //           badge: "BESTSELLER", 
// // //           image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
// // //           gradient: "from-orange-600 to-red-600"
// // //         },
// // //         {
// // //           title: "LATEST RELEASES",
// // //           subtitle: "Discover all the fresh courses",
// // //           badge: "NEW",
// // //           image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
// // //           gradient: "from-green-600 to-teal-600"
// // //         },
// // //         {
// // //           title: "CERTIFICATION PROGRAMS",
// // //           subtitle: "AWS • Google Cloud • Azure",
// // //           badge: "BESTSELLER",
// // //           image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center",
// // //           gradient: "from-blue-600 to-cyan-600"
// // //         }
// // //       ]
// // //     },
// // //     // Slide 3 - Mobile Gaming Layout (2/3 + 1/3)
// // //     {
// // //       id: 3,
// // //       type: "mobile",
// // //       title: "Get more out of your learning journey",
// // //       subtitle: "Study anytime, anywhere, and make it even more engaging with certificates, achievements, and other learning rewards. Enhance your skills with new courses, materials, and other resources - check out our full offer now!",
// // //       content: {
// // //         leftSection: [
// // //           {
// // //             badge: "OFFER FROM 1 INSTRUCTOR",
// // //             title: "Mobile App Development with React Native",
// // //             price: "28.25 USD",
// // //             tag: "GLOBAL",
// // //             image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=120&h=120&fit=crop&crop=center"
// // //           },
// // //           {
// // //             badge: "OFFERS FROM 12 INSTRUCTORS",
// // //             title: "Full Stack JavaScript Course",
// // //             price: "21.88 USD",
// // //             originalPrice: "29.42 USD",
// // //             discount: "26%",
// // //             tag: "GLOBAL",
// // //             image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=120&h=120&fit=crop&crop=center"
// // //           },
// // //           {
// // //             badge: "OFFERS FROM 4 INSTRUCTORS",
// // //             title: "Python for Data Science",
// // //             price: "30.01 USD",
// // //             tag: "GLOBAL",
// // //             image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=120&h=120&fit=crop&crop=center"
// // //           },
// // //           {
// // //             badge: "SPONSORED",
// // //             title: "Cloud Computing Fundamentals",
// // //             price: "18.10 USD",
// // //             originalPrice: "19.07 USD",
// // //             discount: "5%",
// // //             tag: "UNITED STATES",
// // //             image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=120&h=120&fit=crop&crop=center"
// // //           }
// // //         ],
// // //         rightSection: {
// // //           title: "LEARN ON THE GO",
// // //           subtitle: "BEST FOR CONTINUOUS LEARNING",
// // //           image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=center"
// // //         }
// // //       }
// // //     }
// // //   ]

// // //   useEffect(() => {
// // //     if (isAutoPlaying) {
// // //       const interval = setInterval(() => {
// // //         setCurrentSlide((prev) => (prev + 1) % slides.length)
// // //       }, 6000)
// // //       return () => clearInterval(interval)
// // //     }
// // //   }, [isAutoPlaying, slides.length])

// // //   const nextSlide = () => {
// // //     setCurrentSlide((prev) => (prev + 1) % slides.length)
// // //   }

// // //   const prevSlide = () => {
// // //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
// // //   }

// // //   // Slide 1 - Featured Layout
// // //   const renderFeaturedSlide = (slide) => (
// // //     <div className="bg-gray-900 text-white p-6">
// // //       <div className="max-w-7xl mx-auto">
// // //         <h1 className="text-4xl font-bold mb-8 text-white">Featured Deals</h1>
        
// // //         <div className="grid grid-cols-12 gap-6 h-[500px]">
// // //           {/* Main Course - 2/3 width */}
// // //           <div className="col-span-8 relative">
// // //             <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-800">
// // //               <img 
// // //                 src={slide.content.mainCourse.image}
// // //                 alt={slide.content.mainCourse.title}
// // //                 className="w-full h-full object-cover"
// // //               />
// // //               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
// // //               {/* Course Info Overlay */}
// // //               <div className="absolute bottom-0 left-0 right-0 p-8">
// // //                 <h2 className="text-4xl font-bold mb-3 text-white">{slide.content.mainCourse.title}</h2>
// // //                 <p className="text-lg text-gray-300 mb-4">{slide.content.mainCourse.subtitle}</p>
                
// // //                 {/* Tags */}
// // //                 <div className="flex flex-wrap gap-2 mb-4">
// // //                   {slide.content.mainCourse.tags.map((tag, index) => (
// // //                     <span key={index} className="px-3 py-1 bg-gray-700 text-white text-sm rounded">
// // //                       {tag}
// // //                     </span>
// // //                   ))}
// // //                 </div>
                
// // //                 {/* Rating and Price */}
// // //                 <div className="flex items-center justify-between">
// // //                   <div className="flex items-center gap-4">
// // //                     <div className="flex items-center gap-1">
// // //                       <span className="text-2xl font-bold text-white">{slide.content.mainCourse.rating}</span>
// // //                       <Star className="w-5 h-5 text-yellow-400 fill-current" />
// // //                     </div>
// // //                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
// // //                     <span className="text-lg text-gray-300">({slide.content.mainCourse.reviewCount})</span>
// // //                   </div>
                  
// // //                   <div className="flex items-center gap-3">
// // //                     <span className="bg-black text-white px-3 py-1 rounded text-lg font-bold">
// // //                       {slide.content.mainCourse.discount}
// // //                     </span>
// // //                     <div className="text-right">
// // //                       <div className="text-sm text-gray-400 line-through">{slide.content.mainCourse.originalPrice}</div>
// // //                       <div className="text-2xl font-bold text-orange-400">{slide.content.mainCourse.currentPrice}</div>
// // //                     </div>
// // //                     <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded">
// // //                       <ShoppingCart className="w-5 h-5 text-white" />
// // //                     </button>
// // //                   </div>
// // //                 </div>
                
// // //                 {/* Platforms */}
// // //                 <div className="flex items-center gap-2 mt-4">
// // //                   <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
// // //                     <span className="text-xs font-bold text-black">S</span>
// // //                   </div>
// // //                   <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
// // //                     <span className="text-xs font-bold text-black">W</span>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           {/* Side Deals - 1/3 width */}
// // //           <div className="col-span-4 grid grid-rows-4 gap-4">
// // //             {slide.content.sideDeals.map((deal, index) => (
// // //               <div key={index} className="relative rounded-lg overflow-hidden bg-gray-800 group hover:scale-105 transition-transform">
// // //                 <img 
// // //                   src={deal.image}
// // //                   alt={deal.title}
// // //                   className="w-full h-full object-cover"
// // //                 />
// // //                 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                
// // //                 {/* Deal Info */}
// // //                 <div className="absolute inset-0 p-4 flex flex-col justify-between">
// // //                   <div className="flex justify-between items-start">
// // //                     <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
// // //                       {deal.badge}
// // //                     </span>
// // //                     <button className="bg-orange-500 hover:bg-orange-600 p-1 rounded">
// // //                       <ShoppingCart className="w-4 h-4 text-white" />
// // //                     </button>
// // //                   </div>
                  
// // //                   <div>
// // //                     <h3 className="text-white font-bold text-sm mb-1">{deal.title}</h3>
// // //                     {deal.subtitle && (
// // //                       <p className="text-gray-300 text-xs mb-2">{deal.subtitle}</p>
// // //                     )}
// // //                     {deal.price && (
// // //                       <div className="flex items-center gap-2">
// // //                         {deal.originalPrice && (
// // //                           <span className="text-xs text-gray-400 line-through">{deal.originalPrice}</span>
// // //                         )}
// // //                         <span className="text-orange-400 font-bold">{deal.price}</span>
// // //                         {deal.discount && (
// // //                           <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs">
// // //                             {deal.discount}
// // //                           </span>
// // //                         )}
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
        
// // //         {/* Dots Navigation */}
// // //         <div className="flex justify-center mt-8 space-x-2">
// // //           {slides.map((_, index) => (
// // //             <button
// // //               key={index}
// // //               onClick={() => setCurrentSlide(index)}
// // //               className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-600'}`}
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )

// // //   // Slide 2 - Categories Layout
// // //   const renderCategoriesSlide = (slide) => (
// // //     <div className="bg-gray-900 text-white p-6">
// // //       <div className="max-w-7xl mx-auto">
// // //         <div className="grid grid-cols-4 gap-6 h-[500px]">
// // //           {slide.content.map((category, index) => (
// // //             <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer">
// // //               <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`} />
// // //               <img 
// // //                 src={category.image}
// // //                 alt={category.title}
// // //                 className="w-full h-full object-cover"
// // //               />
// // //               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              
// // //               <div className="absolute inset-0 p-6 flex flex-col justify-between">
// // //                 <div>
// // //                   <span className={`inline-block px-3 py-1 rounded text-xs font-bold ${
// // //                     category.badge === 'BESTSELLER' 
// // //                       ? 'bg-orange-600 text-white' 
// // //                       : 'bg-green-600 text-white'
// // //                   }`}>
// // //                     {category.badge}
// // //                   </span>
// // //                 </div>
                
// // //                 <div>
// // //                   <h3 className="text-white font-bold text-xl mb-2">{category.title}</h3>
// // //                   <p className="text-gray-200 text-sm">{category.subtitle}</p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )

// // //   // Slide 3 - Mobile Layout
// // //   const renderMobileSlide = (slide) => (
// // //     <div className="bg-gray-100 text-gray-800 p-6">
// // //       <div className="max-w-7xl mx-auto">
// // //         <div className="mb-8">
// // //           <h1 className="text-4xl font-bold mb-4 text-gray-800">{slide.title}</h1>
// // //           <p className="text-gray-600 text-lg max-w-4xl">{slide.subtitle}</p>
// // //         </div>
        
// // //         <div className="grid grid-cols-12 gap-6">
// // //           {/* Left Section - Course Cards */}
// // //           <div className="col-span-8 grid grid-cols-2 gap-4">
// // //             {slide.content.leftSection.map((course, index) => (
// // //               <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
// // //                 <div className="text-xs text-gray-500 mb-3 uppercase">{course.badge}</div>
// // //                 <div className="flex gap-4">
// // //                   <img 
// // //                     src={course.image}
// // //                     alt={course.title}
// // //                     className="w-16 h-16 rounded-lg object-cover"
// // //                   />
// // //                   <div className="flex-1">
// // //                     <h3 className="font-semibold text-gray-800 mb-2 text-sm">{course.title}</h3>
// // //                     <div className="flex items-center gap-2 mb-2">
// // //                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
// // //                       <span className="text-xs text-green-600 font-medium">{course.tag}</span>
// // //                     </div>
// // //                     <div className="flex items-center justify-between">
// // //                       <div className="flex items-center gap-2">
// // //                         <span className="font-bold text-lg text-gray-800">{course.price}</span>
// // //                         {course.originalPrice && (
// // //                           <>
// // //                             <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
// // //                             <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
// // //                               {course.discount}
// // //                             </span>
// // //                           </>
// // //                         )}
// // //                       </div>
// // //                       <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
          
// // //           {/* Right Section - Promotional */}
// // //           <div className="col-span-4">
// // //             <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg p-8 h-full flex flex-col justify-center items-center text-center text-white">
// // //               <img 
// // //                 src={slide.content.rightSection.image}
// // //                 alt="Learning illustration"
// // //                 className="w-full max-w-sm mb-6 rounded-lg"
// // //               />
// // //               <h2 className="text-3xl font-bold mb-2">{slide.content.rightSection.title}</h2>
// // //               <p className="text-lg opacity-90">{slide.content.rightSection.subtitle}</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )

// // //   const renderSlide = (slide) => {
// // //     switch (slide.type) {
// // //       case 'featured':
// // //         return renderFeaturedSlide(slide)
// // //       case 'categories':
// // //         return renderCategoriesSlide(slide)
// // //       case 'mobile':
// // //         return renderMobileSlide(slide)
// // //       default:
// // //         return null
// // //     }
// // //   }

// // //   return (
// // //     <div className="relative w-full overflow-hidden">
// // //       <div 
// // //         className="flex transition-transform duration-500 ease-in-out"
// // //         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
// // //         onMouseEnter={() => setIsAutoPlaying(false)}
// // //         onMouseLeave={() => setIsAutoPlaying(true)}
// // //       >
// // //         {slides.map((slide) => (
// // //           <div key={slide.id} className="w-full flex-shrink-0 min-h-screen">
// // //             {renderSlide(slide)}
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Navigation Arrows */}
// // //       <button
// // //         onClick={prevSlide}
// // //         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
// // //       >
// // //         <ChevronLeft className="w-6 h-6" />
// // //       </button>
// // //       <button
// // //         onClick={nextSlide}
// // //         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
// // //       >
// // //         <ChevronRight className="w-6 h-6" />
// // //       </button>

// // //       {/* Slide Indicators */}
// // //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
// // //         {slides.map((_, index) => (
// // //           <button
// // //             key={index}
// // //             onClick={() => setCurrentSlide(index)}
// // //             className={`w-3 h-3 rounded-full transition-colors ${
// // //               index === currentSlide ? 'bg-white' : 'bg-white/50'
// // //             }`}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Caro

// // "use client";

// // import { useState, useEffect } from "react";
// // import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Play } from "lucide-react";

// // const Caro = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

// //   const slides = [
// //     // Slide 1 - Featured Layout (2/3 + 1/3)
// //     {
// //       id: 1,
// //       type: "featured",
// //       content: {
// //         mainGame: {
// //           title: "Ultimate Open World Adventure",
// //           subtitle: "Explore vast lands with stunning graphics and epic quests",
// //           tags: ["Open World", "RPG", "Action", "Multiplayer"],
// //           rating: "4.8",
// //           reviewCount: "12,347",
// //           originalPrice: "$59.99",
// //           currentPrice: "$49.99",
// //           discount: "-17%",
// //           platforms: ["steam", "playstation"],
// //           image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //         },
// //         sideDeals: [
// //           {
// //             title: "Battle Royale Pack",
// //             badge: "HOT DEAL",
// //             price: "$19.99",
// //             originalPrice: "$39.99",
// //             discount: "-50%",
// //             platforms: ["steam", "xbox"],
// //             image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //           },
// //           {
// //             title: "Racing Legends Bundle",
// //             badge: "Publisher Sale",
// //             subtitle: "SAVE UP TO 60%",
// //             image: "https://images.unsplash.com/photo-1503376788353-b0988e0d9a89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //           },
// //           {
// //             title: "Strategy War Game",
// //             badge: "Publisher Sale",
// //             image: "https://images.unsplash.com/photo-1600585154516-58a61f2e6ea0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //           },
// //           {
// //             title: "Fantasy RPG Expansion",
// //             badge: "Publisher Sale",
// //             image: "https://images.unsplash.com/photo-1617806111677-698e0c8cbce3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //           },
// //         ],
// //       },
// //     },
// //     // Slide 2 - Categories Layout
// //     {
// //       id: 2,
// //       type: "categories",
// //       content: [
// //         {
// //           title: "ACTION GAMES",
// //           subtitle: "Shooter • Fighter • Adventure",
// //           badge: "BESTSELLER",
// //           image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //           gradient: "from-red-600 to-orange-600",
// //         },
// //         {
// //           title: "SAVE BIG ON HIT GAMES",
// //           subtitle: "Racing • Sports",
// //           badge: "BESTSELLER",
// //           image: "https://images.unsplash.com/photo-1503376788353-b0988e0d9a89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //           gradient: "from-yellow-600 to-amber-600",
// //         },
// //         {
// //           title: "NEW RELEASES",
// //           subtitle: "Check out the latest titles",
// //           badge: "NEW",
// //           image: "https://images.unsplash.com/photo-1600585154516-58a61f2e6ea0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //           gradient: "from-green-600 to-emerald-600",
// //         },
// //         {
// //           title: "MULTIPLAYER PACKS",
// //           subtitle: "Online • Co-op",
// //           badge: "BESTSELLER",
// //           image: "https://images.unsplash.com/photo-1617806111677-698e0c8cbce3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //           gradient: "from-blue-600 to-indigo-600",
// //         },
// //       ],
// //     },
// //     // Slide 3 - Mobile Layout
// //     {
// //       id: 3,
// //       type: "mobile",
// //       title: "Level Up Your Gaming Anywhere",
// //       subtitle: "Play anytime, anywhere with exclusive mobile titles, achievements, and rewards. Explore new games and bundles now!",
// //       content: {
// //         leftSection: [
// //           {
// //             badge: "OFFER FROM 1 DEVELOPER",
// //             title: "Mobile Battle Arena",
// //             price: "9.99 USD",
// //             tag: "GLOBAL",
// //             image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //           },
// //           {
// //             badge: "OFFERS FROM 5 DEVELOPERS",
// //             title: "Racing Championship",
// //             price: "14.99 USD",
// //             originalPrice: "19.99 USD",
// //             discount: "25%",
// //             tag: "GLOBAL",
// //             image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //           },
// //           {
// //             badge: "OFFERS FROM 3 DEVELOPERS",
// //             title: "Puzzle Quest",
// //             price: "7.49 USD",
// //             tag: "GLOBAL",
// //             image: "https://images.unsplash.com/photo-1503376788353-b0988e0d9a89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //           },
// //           {
// //             badge: "SPONSORED",
// //             title: "Survival Shooter",
// //             price: "12.50 USD",
// //             originalPrice: "15.00 USD",
// //             discount: "17%",
// //             tag: "UNITED STATES",
// //             image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //           },
// //         ],
// //         rightSection: {
// //           title: "GAME ON THE GO",
// //           subtitle: "BEST FOR MOBILE PLAYERS",
// //           image: "https://images.unsplash.com/photo-1600585154516-58a61f2e6ea0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //         },
// //       },
// //     },
// //   ];

// //   useEffect(() => {
// //     if (isAutoPlaying) {
// //       const interval = setInterval(() => {
// //         setCurrentSlide((prev) => (prev + 1) % slides.length);
// //       }, 6000);
// //       return () => clearInterval(interval);
// //     }
// //   }, [isAutoPlaying, slides.length]);

// //   const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev + 1) % slides.length);
// //   };

// //   const prevSlide = () => {
// //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
// //   };

// //   // Slide 1 - Featured Layout
// //   const renderFeaturedSlide = (slide) => (
// //     <div className="bg-gray-900 text-white p-6">
// //       <div className="max-w-7xl mx-auto">
// //         <h1 className="text-4xl font-bold mb-8 text-white">Featured Deals</h1>
        
// //         <div className="grid grid-cols-12 gap-6 h-[450px]">
// //           {/* Main Game - 2/3 width */}
// //           <div className="col-span-8 relative">
// //             <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-800">
// //               <img 
// //                 src={slide.content.mainGame.image}
// //                 alt={slide.content.mainGame.title}
// //                 className="w-full h-full object-cover"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
// //               {/* Game Info Overlay */}
// //               <div className="absolute bottom-0 left-0 right-0 p-8">
// //                 <h2 className="text-4xl font-bold mb-3 text-white">{slide.content.mainGame.title}</h2>
// //                 <p className="text-lg text-gray-300 mb-4">{slide.content.mainGame.subtitle}</p>
                
// //                 {/* Tags */}
// //                 <div className="flex flex-wrap gap-2 mb-4">
// //                   {slide.content.mainGame.tags.map((tag, index) => (
// //                     <span key={index} className="px-3 py-1 bg-gray-700 text-white text-sm rounded">
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>
                
// //                 {/* Rating and Price */}
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-4">
// //                     <div className="flex items-center gap-1">
// //                       <span className="text-2xl font-bold text-white">{slide.content.mainGame.rating}</span>
// //                       <Star className="w-5 h-5 text-yellow-400 fill-current" />
// //                     </div>
// //                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
// //                     <span className="text-lg text-gray-300">({slide.content.mainGame.reviewCount})</span>
// //                   </div>
                  
// //                   <div className="flex items-center gap-3">
// //                     <span className="bg-black text-white px-3 py-1 rounded text-lg font-bold">
// //                       {slide.content.mainGame.discount}
// //                     </span>
// //                     <div className="text-right">
// //                       <div className="text-sm text-gray-400 line-through">{slide.content.mainGame.originalPrice}</div>
// //                       <div className="text-2xl font-bold text-orange-400">{slide.content.mainGame.currentPrice}</div>
// //                     </div>
// //                     <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded">
// //                       <ShoppingCart className="w-5 h-5 text-white" />
// //                     </button>
// //                   </div>
// //                 </div>
                
// //                 {/* Platforms */}
// //                 <div className="flex items-center gap-2 mt-4">
// //                   <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
// //                     <span className="text-xs font-bold text-black">S</span>
// //                   </div>
// //                   <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
// //                     <span className="text-xs font-bold text-black">P</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
          
// //           {/* Side Deals - 1/3 width */}
// //           <div className="col-span-4 grid grid-rows-4 gap-4">
// //             {slide.content.sideDeals.map((deal, index) => (
// //               <div key={index} className="relative rounded-lg overflow-hidden bg-gray-800 group hover:scale-105 transition-transform h-full">
// //                 <img 
// //                   src={deal.image}
// //                   alt={deal.title}
// //                   className="w-full h-full object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                
// //                 {/* Deal Info */}
// //                 <div className="absolute inset-0 p-4 flex flex-col justify-between">
// //                   <div className="flex justify-between items-start">
// //                     <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
// //                       {deal.badge}
// //                     </span>
// //                     <button className="bg-orange-500 hover:bg-orange-600 p-1 rounded">
// //                       <ShoppingCart className="w-4 h-4 text-white" />
// //                     </button>
// //                   </div>
                  
// //                   <div>
// //                     <h3 className="text-white font-bold text-sm mb-1">{deal.title}</h3>
// //                     {deal.subtitle && (
// //                       <p className="text-gray-300 text-xs mb-2">{deal.subtitle}</p>
// //                     )}
// //                     {deal.price && (
// //                       <div className="flex items-center gap-2">
// //                         {deal.originalPrice && (
// //                           <span className="text-xs text-gray-400 line-through">{deal.originalPrice}</span>
// //                         )}
// //                         <span className="text-orange-400 font-bold">{deal.price}</span>
// //                         {deal.discount && (
// //                           <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs">
// //                             {deal.discount}
// //                           </span>
// //                         )}
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
        
// //         {/* Dots Navigation */}
// //         <div className="flex justify-center mt-8 space-x-2">
// //           {slides.map((_, index) => (
// //             <button
// //               key={index}
// //               onClick={() => setCurrentSlide(index)}
// //               className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-600'}`}
// //               aria-label={`Go to slide ${index + 1}`}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   // Slide 2 - Categories Layout
// //   const renderCategoriesSlide = (slide) => (
// //     <div className="bg-gray-900 text-white p-6">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="grid grid-cols-4 gap-6 h-[450px]">
// //           {slide.content.map((category, index) => (
// //             <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer h-full">
// //               <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`} />
// //               <img 
// //                 src={category.image}
// //                 alt={category.title}
// //                 className="w-full h-full object-cover"
// //               />
// //               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              
// //               <div className="absolute inset-0 p-6 flex flex-col justify-between">
// //                 <div>
// //                   <span className={`inline-block px-3 py-1 rounded text-xs font-bold ${
// //                     category.badge === 'BESTSELLER' 
// //                       ? 'bg-orange-600 text-white' 
// //                       : 'bg-green-600 text-white'
// //                   }`}>
// //                     {category.badge}
// //                   </span>
// //                 </div>
                
// //                 <div>
// //                   <h3 className="text-white font-bold text-xl mb-2">{category.title}</h3>
// //                   <p className="text-gray-200 text-sm">{category.subtitle}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   // Slide 3 - Mobile Layout
// //   const renderMobileSlide = (slide) => (
// //     <div className="bg-gray-900 text-white p-6">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="mb-8">
// //           <h1 className="text-4xl font-bold mb-4 text-white">{slide.title}</h1>
// //           <p className="text-gray-400 text-lg max-w-4xl">{slide.subtitle}</p>
// //         </div>
        
// //         <div className="grid grid-cols-12 gap-6 h-[450px]">
// //           {/* Left Section - Game Cards */}
// //           <div className="col-span-8 grid grid-cols-2 gap-4">
// //             {slide.content.leftSection.map((game, index) => (
// //               <div key={index} className="bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-700">
// //                 <div className="text-xs text-gray-500 mb-3 uppercase">{game.badge}</div>
// //                 <div className="flex gap-4">
// //                   <img 
// //                     src={game.image}
// //                     alt={game.title}
// //                     className="w-16 h-16 rounded-lg object-cover"
// //                   />
// //                   <div className="flex-1">
// //                     <h3 className="font-semibold text-white mb-2 text-sm">{game.title}</h3>
// //                     <div className="flex items-center gap-2 mb-2">
// //                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
// //                       <span className="text-xs text-green-600 font-medium">{game.tag}</span>
// //                     </div>
// //                     <div className="flex items-center justify-between">
// //                       <div className="flex items-center gap-2">
// //                         <span className="font-bold text-lg text-white">{game.price}</span>
// //                         {game.originalPrice && (
// //                           <>
// //                             <span className="text-sm text-gray-500 line-through">{game.originalPrice}</span>
// //                             <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
// //                               {game.discount}
// //                             </span>
// //                           </>
// //                         )}
// //                       </div>
// //                       <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
          
// //           {/* Right Section - Promotional */}
// //           <div className="col-span-4">
// //             <div className="bg-gradient-to-br from-cyan-600 to-blue-800 rounded-lg p-8 h-full flex flex-col justify-center items-center text-center text-white">
// //               <img 
// //                 src={slide.content.rightSection.image}
// //                 alt="Gaming illustration"
// //                 className="w-full max-w-sm mb-6 rounded-lg"
// //               />
// //               <h2 className="text-3xl font-bold mb-2">{slide.content.rightSection.title}</h2>
// //               <p className="text-lg opacity-90">{slide.content.rightSection.subtitle}</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderSlide = (slide) => {
// //     switch (slide.type) {
// //       case "featured":
// //         return renderFeaturedSlide(slide);
// //       case "categories":
// //         return renderCategoriesSlide(slide);
// //       case "mobile":
// //         return renderMobileSlide(slide);
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <div className="relative w-full overflow-hidden">
// //       <div
// //         className="flex transition-transform duration-500 ease-in-out"
// //         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
// //         onMouseEnter={() => setIsAutoPlaying(false)}
// //         onMouseLeave={() => setIsAutoPlaying(true)}
// //       >
// //         {slides.map((slide) => (
// //           <div key={slide.id} className="w-full flex-shrink-0">
// //             {renderSlide(slide)}
// //           </div>
// //         ))}
// //       </div>

// //       {/* Navigation Arrows */}
// //       <button
// //         onClick={prevSlide}
// //         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 md:block hidden"
// //         aria-label="Previous slide"
// //       >
// //         <ChevronLeft className="w-6 h-6" />
// //       </button>
// //       <button
// //         onClick={nextSlide}
// //         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 md:block hidden"
// //         aria-label="Next slide"
// //       >
// //         <ChevronRight className="w-6 h-6" />
// //       </button>

// //       {/* Slide Indicators */}
// //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
// //         {slides.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrentSlide(index)}
// //             className={`w-3 h-3 rounded-full transition-colors ${
// //               index === currentSlide ? "bg-white" : "bg-white/50"
// //             }`}
// //             aria-label={`Go to slide ${index + 1}`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Caro;



// "use client"

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart } from "lucide-react"

// const Caro = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

//   const slides = [
//     // Slide 1 - Featured Layout (Exactly matching the image)
//     {
//       id: 1,
//       type: "featured",
//       content: {
//         mainGame: {
//           title: "Dune: Awakening",
//           subtitle: "Open World Survival Craft",
//           tags: ["Open World", "Survival Craft", "Adventure", "Base Building"],
//           rating: "4/5",
//           score: "80",
//           originalPrice: "₹6,999",
//           currentPrice: "₹5,999",
//           discount: "-15%",
//           platforms: ["steam", "windows"],
//           image: "https://cdn.sega.co.uk/mhc-sega/public/styles/1280/public/content/media/images/raster/sonicracingcrossworlds_horizontal_cover.jpg.webp?itok=CbyPhYHY",
//         },
//         // sideDeals: [  {
//         //     title: "",
//         //     badge: "",
//         //     image: "/1.jpg",
//         //     hasCart: false,
//         //   },
//         //     {
//         //         title: "",
//         //         badge: "",
//         //         price: "",
//         //         originalPrice: "",
//         //         discount: "",
//         //         platforms: ["", "", ""],
//         //         image: "https://image.api.playstation.com/vulcan/ap/rnd/202506/2702/4ec432409752e54f55ddff2be99285ab0b55f720aa7dc6b1.png?w=440&thumb=false",
//         //         hasCart: false,
//         //       },
        
         
         
//         //   {
//         //     title: "",
//         //     badge: "",
//         //     image: "/pkk.jpg",
//         //     hasCart: false,
//         //   },
//         //   {
//         //     title: "",
//         //     subtitle: "",
//         //     badge: "",
//         //     image: "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/07751f86ef4b4b8ebbac1fd74a274153_1024",
//         //     hasCart: false,
//         //   },
//         // ],
//         sideDeals: [
//             {
//               title: "",
//               badge: "",
//               image: "/1.jpg",
//               hasCart: false,
//               url: "https://games.capcomusa.com/#118170", // optional, empty means no redirect
//             },
//             {
//               title: "",
//               badge: "",
//               price: "",
//               originalPrice: "",
//               discount: "",
//               platforms: ["", "", ""],
//               image: "https://image.api.playstation.com/vulcan/ap/rnd/202506/2702/4ec432409752e54f55ddff2be99285ab0b55f720aa7dc6b1.png?w=440&thumb=false",
//               hasCart: false,
//               url: "https://store.playstation.com/en-in/concept/10013248", // example link
//             },
//             {
//               title: "",
//               badge: "",
//               image: "/pkk.jpg",
//               hasCart: false,
//               url: "https://www.nintendo.com/us/store/products/pokemon-brilliant-diamond-switch/",
//             },
//             {
//               title: "",
//               subtitle: "",
//               badge: "",
//               image: "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/07751f86ef4b4b8ebbac1fd74a274153_1024",
//               hasCart: false,
//               url: "https://www.nintendo.com/us/store/products/marvel-ultimate-alliance-3-the-black-order-switch/", // example link
//             },
//           ],
          
//       },
//     },
//     // Slide 2 - Categories Layout
//     {
//       id: 2,
//       type: "categories",
//       content: [
//         {
//           title: "STEAM GIFT CARDS",
//           subtitle: "Steam • Global • Key",
//           badge: "BESTSELLER",
//           image: "https://store.akamai.steamstatic.com/public/images/gift/steamcards_physical.png",
//           url: "https://digistore.co.in/product-category/steam-wallet-cards/", // 🔗 added
//           // gradient: "from-purple-600 to-pink-600",
//         },
//         {
//           title: "SAVE BIG ON E-BOOKS",
//           subtitle: "Discover all the fresh drops",
//           badge: "BESTSELLER",
//           image: "https://picasso.cosmofeed.com/media.cosmofeed.com/Untitled-design--1--2024-22-05-05-10-30.png?w=600&&q=100",
//           url: "https://superprofile.bio/vp/titan-method", // 🔗 added
//           // gradient: "from-orange-600 to-yellow-600",
//         },
//         {
//           title: "LATEST RELEASES",
//           subtitle: "Steam • Global • Account",
//           badge: "NEW",
//           image: "https://cdn.promo.capcomusa.com/boxart/158157.png",
//           url: "https://store.steampowered.com/agecheck/app/2054970/", // 🔗 added
//           // gradient: "from-green-600 to-emerald-600",
//         },
//         {
//           title: "AMAZON GIFT CARDS",
//           subtitle: "Amazon • Global • Key",
//           badge: "BESTSELLER",
//           image: "/ammm.png",
//           url: "https://www.evoucherindia.in/e-vouchers/amazon-e-voucher/6", // 🔗 added
//           // gradient: "from-blue-600 to-cyan-600",
//         },
//       ],
      
//       // content: [
//       //   {
//       //     title: "STEAM GIFT CARDS",
//       //     subtitle: "Steam • Global • Key",
//       //     badge: "BESTSELLER",
//       //     image: "https://store.akamai.steamstatic.com/public/images/gift/steamcards_physical.png",
//       //     // gradient: "from-purple-600 to-pink-600",
//       //   },
//       //   {
//       //     title: "SAVE BIG ON E-BOOKS",
//       //     subtitle: "Discover all the fresh drops",
//       //     badge: "BESTSELLER",
//       //     image: "https://picasso.cosmofeed.com/media.cosmofeed.com/Untitled-design--1--2024-22-05-05-10-30.png?w=600&&q=100",
//       //    // gradient: "from-orange-600 to-yellow-600",
//       //   },
//       //   {
//       //     title: "LATEST RELEASES",
//       //     subtitle: "Steam • Global • Account",
//       //     badge: "NEW",
//       //     image: "https://cdn.promo.capcomusa.com/boxart/158157.png",
//       // //    gradient: "from-green-600 to-emerald-600",
//       //   },
//       //   {
//       //     title: "AMAZON GIFT CARDS",
//       //     subtitle: "Amazon • Global • Key",
//       //     badge: "BESTSELLER",
//       //     image: "/ammm.png",
//       //    // gradient: "from-blue-600 to-cyan-600",
//       //   },
//       // ],
//     },
//     // Slide 3 - Mobile Layout
//     {
//       id: 3,
//       type: "mobile",
//       title: "Get more out of your mobile games",
//       subtitle:
//         "Play anytime, anywhere, and make it even more fun with diamonds, stars, and other in-game currencies. Enhance your games with new gear, items, and other goodies - check out our full offer now!",
//       content: {
//         leftSection: [
//           {
//             badge: "SPONSORED",
//             title: "Spotify Premium 12 Months Subscripton",
//             price: "600 INR",
//             tag: "INDIA",
//            image: "https://images.g2a.com/300x400/1x1x1/spotify-premium-subscription-12-months-spotify-account-global-i10000000243117/590e065bae653a65930c36ea",
//        // image:"https://static.driffle.com/fit-in/720x512/media-gallery/production/2afa6304-de60-46e5-b643-36fcce297292_spotify-subscription-india-12-months-52280jpg"  
//         },
//           {
//             badge: "OFFERS FROM 2 SELLERS",
//             title: "Netflix Account Premium 12 Months Subscription",
//             price: "1695 INR",
//             originalPrice: "1695 INR",
//             discount: "26%",
//             tag: "GLOBAL",
//             platforms: ["steam", "key"],
//            // image: "https://i0.wp.com/breakers-store.site/wp-content/uploads/2023/10/NETFLIX_PREMIUM.png?fit=300%2C428&ssl=1",
//           image: "/nt.png"
//           },
//           {
//             badge: "OFFERS FROM 4 SELLERS",
//             title: "Perplexity Pro 1 Year Subscription",
//             price: "6.00 USD",
//             tag: "GLOBAL",
//             platforms: ["nintendo", "account"],
//             image: "https://genflix.in/cdn/shop/files/1744178680967.jpg?v=1744222584&width=1000",
//           },
//           {
//             badge: "SPONSORED",
//             title: "Nintendo Switch Online",
//             price: "18.10 USD",
//             originalPrice: "19.07 USD",
//             discount: "5%",
//             tag: "UNITED STATES",
//             platforms: ["nintendo", "key"],
//             image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1374&auto=format&fit=crop",
//           },
//         ],
//         rightSection: {
//           title: "Spotify Subscription",
//           subtitle: "Unlimited access to music",
//           image: "https://images.g2a.com/uiadminimages/370x432/1x1x1/6c3d64ec53e8/5b13bf59171a4e46a73f7103",
//         },
//       },
//     },
//   ]

//   useEffect(() => {
//     if (isAutoPlaying) {
//       const interval = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length)
//       }, 8000)
//       return () => clearInterval(interval)
//     }
//   }, [isAutoPlaying, slides.length])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//   }

//   // Desktop Featured Layout - CORRECTED 2x2 Grid
//   const renderFeaturedSlideDesktop = (slide) => (
//     <div className="bg-[--bg-dark] text-white p-8 min-h-[500px]">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-white">Featured Deals</h1>

//         <div className="flex gap-8 h-[400px]">
//           {/* Main Game - Left Side (60% width) */}
//           <div className="flex-[3] relative">
//             <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-800">
//               <img
//                 src="https://image.api.playstation.com/vulcan/ap/rnd/202505/2011/2e5b7d96aad5c1504aa4b78fdd9f06baa14e40ca25cd866c.jpg?w=780&thumb=false"
//                 alt={slide.content.mainGame.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 " />

//               {/* Game Info Overlay */}
//               <div className="absolute bottom-0 left-0 right-0 p-8">
//                 {/* <h2 className="text-5xl font-bold mb-4 text-white tracking-wide">{slide.content.mainGame.title}</h2> */}

//                 {/* Tags */}
//                 {/* <div className="flex flex-wrap gap-3 mb-6">
//                   {slide.content.mainGame.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="px-4 py-2 bg-gray-700/80 text-white text-sm rounded-md backdrop-blur-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div> */}

//                 {/* Rating, Platforms and Price */}
//                 <div className="flex items-center justify-between">
//                   {/* <div className="flex items-center gap-6">
//                     <div className="flex items-center gap-2">
//                       <span className="text-2xl font-bold text-white">{slide.content.mainGame.rating}</span>
//                       <Star className="w-6 h-6 text-yellow-400 fill-current" />
//                     </div>
//                     <div className="bg-green-600 text-white px-3 py-1 rounded-md text-lg font-bold">
//                       {slide.content.mainGame.score}
//                     </div>
//                     <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>

                
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
//                         <span className="text-sm font-bold text-black">S</span>
//                       </div>
//                       <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
//                         <span className="text-sm font-bold text-black">⊞</span>
//                       </div>
//                     </div>
//                   </div> */}

//                   <div className="flex justify gap-4">
//                     {/* <span className="bg-black text-white px-4 py-2 rounded text-xl font-bold">
//                       {slide.content.mainGame.discount}
//                     </span> */}
//                     <div className="text-right">
//                       <div className="text-lg text-gray-400 line-through">{slide.content.mainGame.originalPrice}</div>
//                       <div className="text-3xl font-bold text-[#5593f7]">{slide.content.mainGame.currentPrice}</div>
//                     </div>
//                     <button
//   className="bg-[#5593f7] hover:bg-blue-600 p-3 rounded-lg transition-colors"
//   onClick={() => window.location.href = 'https://store.playstation.com/en-in/product/HP9000-PPSA26358_00-LOSTSOULASIDEDDE'}
// >
//   <ShoppingCart className="w-6 h-6 text-white" />
// </button>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Side Deals - Right Side (40% width) - CORRECTED 2x2 GRID */}
//           <div className="flex-[2] grid grid-cols-2 grid-rows-2 gap-4">
//   {slide.content.sideDeals.map((deal, index) => (
//     <div
//       key={index}
//       className="relative rounded-xl overflow-hidden bg-gray-800 group hover:scale-105 transition-transform cursor-pointer"
//       onClick={() => {
//         if (deal.url) {
//           window.open(deal.url, "_blank"); // opens in new tab
//         }
//       }}
//     >
//       <img
//         src={deal.image || "/placeholder.svg"}
//         alt={deal.title}
//         className="w-full h-full object-cover pointer-events-none"
//       />

//       <div className="absolute inset-0 pointer-events-none" />

//       {/* Deal Info */}
//       <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
//         <div className="flex justify-between items-start">
//           {/* <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">{deal.badge}</span> */}
//           {deal.hasCart && (
//             <button className="bg-[#5593f7] hover:bg-blue-600 p-2 rounded transition-colors pointer-events-auto">
//               <ShoppingCart className="w-4 h-4 text-white" />
//             </button>
//           )}
//         </div>

//         <div>
//           <h3 className="text-white font-bold text-lg mb-1">{deal.title}</h3>
//           {deal.subtitle && <p className="text-gray-300 text-sm mb-2">{deal.subtitle}</p>}
//           {deal.price && (
//             <div className="flex items-center gap-2 mb-2">
//               {deal.originalPrice && (
//                 <span className="text-sm text-gray-400 line-through">{deal.originalPrice}</span>
//               )}
//               <span className="text-orange-400 font-bold text-lg">{deal.price}</span>
//               {deal.discount && (
//                 <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
//                   {deal.discount}
//                 </span>
//               )}
//             </div>
//           )}
//           {/* {deal.platforms && (
//             <div className="flex items-center gap-2">
//               {deal.platforms.map((platform, idx) => (
//                 <div key={idx} className="w-5 h-5 bg-white rounded flex items-center justify-center">
//                   <span className="text-xs font-bold text-black">
//                     {platform === "steam"
//                       ? "S"
//                       : platform === "windows"
//                       ? "⊞"
//                       : platform === "apple"
//                       ? "🍎"
//                       : "N"}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           )} */}
//         </div>
//       </div>
//     </div>
//   ))}
// </div>



//         </div>

//         {/* Dots Navigation */}
//         {/* <div className="flex justify-center mt-12 space-x-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-4 h-4 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-gray-600"}`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div> */}
//       </div>
//     </div>
//   )

//   // Mobile Featured Layout - Completely Different, Spacious Layout
//   const renderFeaturedSlideMobile = (slide) => (
//     <div className="bg-gray-900 text-white min-h-screen p-4">
//       <div className="max-w-md mx-auto">
//         <h1 className="text-3xl font-bold mb-8 text-center">Featured Deals</h1>

//         {/* Main Game - Full Width */}
//         <div className="mb-8">
//           <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-800">
//             <img
//               src={slide.content.mainGame.image || "/placeholder.svg"}
//               alt={slide.content.mainGame.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

//             <div className="absolute bottom-0 left-0 right-0 p-4">
//               <h2 className="text-2xl font-bold mb-2 text-white">{slide.content.mainGame.title}</h2>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg font-bold">{slide.content.mainGame.rating}</span>
//                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="bg-black text-white px-2 py-1 rounded text-sm">
//                     {slide.content.mainGame.discount}
//                   </span>
//                   <span className="text-orange-400 font-bold">{slide.content.mainGame.currentPrice}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Side Deals - Stacked Vertically with Spacing */}
//         <div className="space-y-4">
//           {slide.content.sideDeals.map((deal, index) => (
//             <div key={index} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
//               <div className="flex gap-4">
//                 <img
//                   src={deal.image || "/placeholder.svg"}
//                   alt={deal.title}
//                   className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
//                 />
//                 <div className="flex-1">
//                   <div className="flex justify-between items-start mb-2">
//                     <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">{deal.badge}</span>
//                     {deal.hasCart && (
//                       <button className="bg-orange-500 p-1 rounded">
//                         <ShoppingCart className="w-4 h-4 text-white" />
//                       </button>
//                     )}
//                   </div>
//                   <h3 className="text-white font-semibold text-sm mb-1">{deal.title}</h3>
//                   {deal.subtitle && <p className="text-gray-400 text-xs mb-2">{deal.subtitle}</p>}
//                   {deal.price && (
//                     <div className="flex items-center gap-2">
//                       {deal.originalPrice && (
//                         <span className="text-xs text-gray-500 line-through">{deal.originalPrice}</span>
//                       )}
//                       <span className="text-orange-400 font-bold">{deal.price}</span>
//                       {deal.discount && (
//                         <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs">{deal.discount}</span>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )

//   // Categories Layout - Desktop
//   const renderCategoriesSlideDesktop = (slide) => (
//     <div className="bg-gray-900 text-white p-8 min-h-[500px]">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-4 gap-6 h-[400px] mt-10">
//           {slide.content.map((category, index) => (
//             <div
//               key={index}
//               className="relative rounded-xl overflow-hidden group cursor-pointer"
//               onClick={() => {
//                 if (category.url) {
//                   window.open(category.url, "_blank"); // 🔗 opens URL in new tab
//                 }
//               }}
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`} />
//               <img
//                 src={category.image || "/placeholder.svg"}
//                 alt={category.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
  
//               <div className="absolute inset-0 p-6 flex flex-col justify-between">
//                 <div>
//                   {/* <span
//                     className={`inline-block px-3 py-1 rounded text-xs font-bold ${
//                       category.badge === "BESTSELLER" ? "bg-orange-600 text-white" : "bg-green-600 text-white"
//                     }`}
//                   >
//                     {category.badge}
//                   </span> */}
//                 </div>
  
//                 <div>
//                   <h3 className="text-white font-bold text-xl mb-2">{category.title}</h3>
//                   <p className="text-gray-200 text-sm">{category.subtitle}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
  

//   // Categories Layout - Mobile
//   const renderCategoriesSlideMobile = (slide) => (
//     <div className="bg-gray-900 text-white min-h-screen p-4">
//       <div className="max-w-md mx-auto">
//         <div className="grid grid-cols-1 gap-4">
//           {slide.content.map((category, index) => (
//             <div key={index} className="relative rounded-xl overflow-hidden h-32">
//               <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-80`} />
//               <img
//                 src={category.image || "/placeholder.svg"}
//                 alt={category.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/40" />

//               <div className="absolute inset-0 p-4 flex items-center justify-between">
//                 <div>
//                   <h3 className="text-white font-bold text-lg mb-1">{category.title}</h3>
//                   <p className="text-gray-200 text-sm">{category.subtitle}</p>
//                 </div>
//                 <span
//                   className={`px-2 py-1 rounded text-xs font-bold ${
//                     category.badge === "BESTSELLER" ? "bg-orange-600 text-white" : "bg-green-600 text-white"
//                   }`}
//                 >
//                   {category.badge}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )

//   // Mobile Layout - Desktop
//   const renderMobileSlideDesktop = (slide) => (
//     <div className="bg-gray-900 text-white p-8 min-h-[500px]">
//       <div className="max-w-7xl mx-auto">
//         {/* <div className="mb-12">
//           <h1 className="text-5xl font-bold mb-6 text-white">{slide.title}</h1>
//           <p className="text-gray-400 text-xl max-w-4xl">{slide.subtitle}</p>
//         </div> */}

//         <div className="flex gap-8 h-[400px] mt-5">
//           {/* Left Section - Game Cards */}
//           <div className="flex-[3] grid grid-cols-2 gap-6">
//             {slide.content.leftSection.map((game, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
//               >
//                 <div className="text-xs text-white-500 mb-4 uppercase font-medium">{game.badge}</div>
//                 <div className="flex gap-4">
//                   <img
//                     src={game.image || "/placeholder.svg"}
//                     alt={game.title}
//                     className="w-20 h-30 rounded-lg object-cover flex-shrink-0"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-white mb-3 text-md">{game.title}</h3>
//                     <div className="flex items-center gap-2 mb-3">
//                       <div className="w-2 h-2 bg-[#5593f7] rounded-full"></div>
//                       <span className="text-sm text-[#5593f7] font-medium">{game.tag}</span>
//                       {/* {game.platforms && (
//                         <div className="flex gap-1 ml-2">
//                           {game.platforms.map((platform, idx) => (
//                             <div key={idx} className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
//                               <span className="text-xs text-white">
//                                 {platform === "steam" ? "S" : platform === "key" ? "K" : "N"}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       )} */}
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3">
//                         <span className="font-bold text-xl text-white">{game.price}</span>
//                         {game.originalPrice && (
//                           <>
//                             {/* <span className="text-sm text-gray-500 line-through">{game.originalPrice}</span> */}
//                             {/* <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded font-bold">
//                               {game.discount}
//                             </span> */}
//                           </>
//                         )}
//                       </div>
//                       {/* <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" /> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Section - Promotional */}
//           <div className="flex-[2]">
//             <div className="bg-gradient-to-br from-cyan-600 to-blue-800 rounded-xl p-8 h-full flex flex-col justify-center items-center text-center text-white">
//               <img
//                 src={slide.content.rightSection.image || "/placeholder.svg"}
//                 alt="Gaming illustration"
//                 className="w-full max-w-sm h-[350px] mb-4 rounded-lg"
//               />
//               <h2 className="text-3xl font-bold mb-2">{slide.content.rightSection.title}</h2>
//               <p className="text-xl opacity-90 mb-16">{slide.content.rightSection.subtitle}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )

//   // Mobile Layout - Mobile
//   const renderMobileSlideMobile = (slide) => (
//     <div className="bg-gray-900 text-white min-h-screen p-4">
//       <div className="max-w-md mx-auto">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold mb-4 text-center">{slide.title}</h1>
//           <p className="text-gray-400 text-center">{slide.subtitle}</p>
//         </div>

//         {/* Promotional Section First on Mobile */}
//         <div className="mb-8">
//           <div className="bg-gradient-to-br from-cyan-600 to-blue-800 rounded-xl p-6 text-center text-white">
//             <img
//               src={slide.content.rightSection.image || "/placeholder.svg"}
//               alt="Gaming illustration"
//               className="w-full max-w-xs mx-auto mb-4 rounded-lg"
//             />
//             <h2 className="text-2xl font-bold mb-2">{slide.content.rightSection.title}</h2>
//             <p className="opacity-90">{slide.content.rightSection.subtitle}</p>
//           </div>
//         </div>

//         {/* Game Cards */}
//         <div className="space-y-4">
//           {slide.content.leftSection.map((game, index) => (
//             <div key={index} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
//               <div className="text-xs text-gray-500 mb-3 uppercase">{game.badge}</div>
//               <div className="flex gap-4">
//                 <img
//                   src={game.image || "/placeholder.svg"}
//                   alt={game.title}
//                   className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
//                 />
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-white mb-2 text-sm">{game.title}</h3>
//                   <div className="flex items-center gap-2 mb-2">
//                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                     <span className="text-xs text-green-400">{game.tag}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <span className="font-bold text-white">{game.price}</span>
//                       {game.originalPrice && (
//                         <>
//                           <span className="text-xs text-gray-500 line-through">{game.originalPrice}</span>
//                           <span className="bg-orange-500 text-white text-xs px-1 py-0.5 rounded">{game.discount}</span>
//                         </>
//                       )}
//                     </div>
//                     <Heart className="w-4 h-4 text-gray-400" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )

//   const renderSlide = (slide) => {
//     const isMobile = typeof window !== "undefined" && window.innerWidth < 768

//     switch (slide.type) {
//       case "featured":
//         return isMobile ? renderFeaturedSlideMobile(slide) : renderFeaturedSlideDesktop(slide)
//       case "categories":
//         return isMobile ? renderCategoriesSlideMobile(slide) : renderCategoriesSlideDesktop(slide)
//       case "mobile":
//         return isMobile ? renderMobileSlideMobile(slide) : renderMobileSlideDesktop(slide)
//       default:
//         return null
//     }
//   }

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         onMouseEnter={() => setIsAutoPlaying(false)}
//         onMouseLeave={() => setIsAutoPlaying(true)}
//       >
//         {slides.map((slide) => (
//           <div key={slide.id} className="w-full flex-shrink-0">
//             {renderSlide(slide)}
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows - Hidden on Mobile */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 hidden md:block"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 hidden md:block"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       {/* Slide Indicators */}
//       {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 mb-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div> */}
//     </div>
//   )
// }

// export default Caro



// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, BookOpen } from "lucide-react"

// // // const Caro = () => {
// // //   const [currentSlide, setCurrentSlide] = useState(0)
// // //   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

// // //   const slides = [
// // //     // Slide 1 - Course Marketplace
// // //     {
// // //       id: 1,
// // //       type: "marketplace",
// // //       title: "Get more out of your learning journey",
// // //       subtitle:
// // //         "Study anytime, anywhere, and make it even more engaging with certificates, achievements, and other learning rewards. Enhance your skills with new courses, materials, and other resources - check out our full offer now!",
// // //       content: {
// // //         leftSection: [
// // //           {
// // //             type: "course",
// // //             badge: "OFFER FROM 1 INSTRUCTOR",
// // //             image: "/placeholder.svg?height=120&width=120",
// // //             title: "Complete Web Development Bootcamp",
// // //             price: "28.25 USD",
// // //             tag: "GLOBAL",
// // //             favorite: false,
// // //           },
// // //           {
// // //             type: "course",
// // //             badge: "OFFERS FROM 12 INSTRUCTORS",
// // //             image: "/placeholder.svg?height=120&width=120",
// // //             title: "Data Science Masterclass",
// // //             price: "21.88 USD",
// // //             originalPrice: "29.42 USD",
// // //             discount: "26%",
// // //             tag: "GLOBAL",
// // //             favorite: false,
// // //           },
// // //           {
// // //             type: "course",
// // //             badge: "OFFERS FROM 4 INSTRUCTORS",
// // //             image: "/placeholder.svg?height=120&width=120",
// // //             title: "React Native Mobile Development",
// // //             price: "30.01 USD",
// // //             tag: "GLOBAL",
// // //             favorite: false,
// // //           },
// // //           {
// // //             type: "course",
// // //             badge: "SPONSORED",
// // //             image: "/placeholder.svg?height=120&width=120",
// // //             title: "AI & Machine Learning Fundamentals",
// // //             price: "18.10 USD",
// // //             originalPrice: "19.07 USD",
// // //             discount: "5%",
// // //             tag: "UNITED STATES",
// // //             favorite: false,
// // //           },
// // //         ],
// // //         rightSection: {
// // //           image: "/placeholder.svg?height=400&width=400",
// // //           title: "LEARN ON THE GO",
// // //           subtitle: "BEST FOR CONTINUOUS LEARNING",
// // //         },
// // //       },
// // //     },
// // //     // Slide 2 - Featured Courses
// // //     {
// // //       id: 2,
// // //       type: "featured",
// // //       title: "Featured Courses",
// // //       content: {
// // //         mainCourse: {
// // //           image: "/placeholder.svg?height=400&width=600",
// // //           title: "Full Stack Development: Complete Guide",
// // //           description: "Master modern web development with React, Node.js, and MongoDB",
// // //           rating: "4.8",
// // //           reviews: "2,847",
// // //           tags: ["Web Development", "JavaScript", "React", "Node.js"],
// // //           platforms: ["Online", "Mobile App"],
// // //           price: "₹3,646.29",
// // //           originalPrice: "₹4,289.21",
// // //           discount: "15%",
// // //         },
// // //         sideCourses: [
// // //           {
// // //             image: "/placeholder.svg?height=150&width=200",
// // //             title: "Python Programming",
// // //             badge: "Publisher Sale",
// // //             type: "BESTSELLER",
// // //           },
// // //           {
// // //             image: "/placeholder.svg?height=150&width=200",
// // //             title: "Digital Marketing",
// // //             badge: "Publisher Sale",
// // //             type: "STAR DEAL",
// // //           },
// // //           {
// // //             image: "/placeholder.svg?height=150&width=200",
// // //             title: "UI/UX Design",
// // //             badge: "Publisher Sale",
// // //             type: "NEW",
// // //           },
// // //           {
// // //             image: "/placeholder.svg?height=150&width=200",
// // //             title: "Data Analytics",
// // //             badge: "Publisher Sale",
// // //             type: "TRENDING",
// // //           },
// // //         ],
// // //       },
// // //     },
// // //     // Slide 3 - Categories
// // //     {
// // //       id: 3,
// // //       type: "categories",
// // //       content: [
// // //         {
// // //           title: "COURSE CERTIFICATES",
// // //           subtitle: "Verified • Global • Accredited",
// // //           image: "/placeholder.svg?height=300&width=400",
// // //           badge: "BESTSELLER",
// // //           gradient: "from-purple-600 to-pink-600",
// // //         },
// // //         {
// // //           title: "SAVE BIG ON POPULAR COURSES",
// // //           subtitle: "Programming • Design • Business",
// // //           image: "/placeholder.svg?height=300&width=400",
// // //           badge: "BESTSELLER",
// // //           gradient: "from-blue-600 to-cyan-600",
// // //         },
// // //         {
// // //           title: "LATEST RELEASES",
// // //           subtitle: "Discover all the fresh courses",
// // //           image: "/placeholder.svg?height=300&width=400",
// // //           badge: "NEW",
// // //           gradient: "from-green-600 to-teal-600",
// // //         },
// // //         {
// // //           title: "SKILL ASSESSMENTS",
// // //           subtitle: "Test • Global • Certified",
// // //           image: "/placeholder.svg?height=300&width=400",
// // //           badge: "BESTSELLER",
// // //           gradient: "from-orange-600 to-red-600",
// // //         },
// // //       ],
// // //     },
// // //   ]

// // //   useEffect(() => {
// // //     if (isAutoPlaying) {
// // //       const interval = setInterval(() => {
// // //         setCurrentSlide((prev) => (prev + 1) % slides.length)
// // //       }, 5000)
// // //       return () => clearInterval(interval)
// // //     }
// // //   }, [isAutoPlaying, slides.length])

// // //   const nextSlide = () => {
// // //     setCurrentSlide((prev) => (prev + 1) % slides.length)
// // //   }

// // //   const prevSlide = () => {
// // //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
// // //   }

// // //   const renderMarketplaceSlide = (slide: any) => (
// // //     <div className="bg-gray-900 text-white min-h-screen p-4 md:p-8">
// // //       <div className="max-w-7xl mx-auto">
// // //         <div className="mb-8">
// // //           <h1 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h1>
// // //           <p className="text-gray-300 text-sm md:text-base max-w-4xl">{slide.subtitle}</p>
// // //         </div>

// // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // //           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
// // //             {slide.content.leftSection.map((course: any, index: number) => (
// // //               <div key={index} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors">
// // //                 <div className="text-xs text-gray-400 mb-3">{course.badge}</div>
// // //                 <div className="flex gap-4">
// // //                   <img
// // //                     src={course.image || "/placeholder.svg"}
// // //                     alt={course.title}
// // //                     className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover"
// // //                   />
// // //                   <div className="flex-1">
// // //                     <h3 className="font-semibold text-sm md:text-base mb-2">{course.title}</h3>
// // //                     <div className="flex items-center gap-2 mb-2">
// // //                       <BookOpen className="w-4 h-4 text-gray-400" />
// // //                       <span className="text-xs text-green-400">{course.tag}</span>
// // //                     </div>
// // //                     <div className="flex items-center justify-between">
// // //                       <div className="flex items-center gap-2">
// // //                         <span className="font-bold text-lg">{course.price}</span>
// // //                         {course.originalPrice && (
// // //                           <>
// // //                             <span className="text-sm text-gray-400 line-through">{course.originalPrice}</span>
// // //                             <span className="bg-orange-600 text-xs px-2 py-1 rounded">{course.discount}</span>
// // //                           </>
// // //                         )}
// // //                       </div>
// // //                       <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <div className="relative">
// // //             <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg p-6 h-full flex flex-col justify-center items-center text-center">
// // //               <img
// // //                 src={slide.content.rightSection.image || "/placeholder.svg"}
// // //                 alt="Learning illustration"
// // //                 className="w-full max-w-xs mb-4 rounded-lg"
// // //               />
// // //               <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.content.rightSection.title}</h2>
// // //               <p className="text-sm md:text-base opacity-90">{slide.content.rightSection.subtitle}</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )

// // //   const renderFeaturedSlide = (slide: any) => (
// // //     <div className="bg-gray-900 text-white min-h-screen p-4 md:p-8">
// // //       <div className="max-w-7xl mx-auto">
// // //         <h1 className="text-2xl md:text-4xl font-bold mb-8">{slide.title}</h1>

// // //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
// // //           <div className="lg:col-span-2">
// // //             <div className="relative bg-gray-800 rounded-lg overflow-hidden">
// // //               <img
// // //                 src={slide.content.mainCourse.image || "/placeholder.svg"}
// // //                 alt={slide.content.mainCourse.title}
// // //                 className="w-full h-64 md:h-80 object-cover"
// // //               />
// // //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
// // //               <div className="absolute bottom-0 left-0 right-0 p-6">
// // //                 <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.content.mainCourse.title}</h2>
// // //                 <p className="text-gray-300 mb-4">{slide.content.mainCourse.description}</p>
// // //                 <div className="flex flex-wrap gap-2 mb-4">
// // //                   {slide.content.mainCourse.tags.map((tag: string, index: number) => (
// // //                     <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
// // //                       {tag}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //                 <div className="flex items-center justify-between">
// // //                   <div className="flex items-center gap-4">
// // //                     <div className="flex items-center gap-1">
// // //                       <span className="text-lg font-bold">{slide.content.mainCourse.rating}</span>
// // //                       <Star className="w-5 h-5 text-yellow-400 fill-current" />
// // //                     </div>
// // //                     <span className="text-gray-300">({slide.content.mainCourse.reviews})</span>
// // //                   </div>
// // //                   <div className="flex items-center gap-2">
// // //                     <span className="bg-green-600 text-sm px-2 py-1 rounded">{slide.content.mainCourse.discount}</span>
// // //                     <span className="font-bold text-xl">{slide.content.mainCourse.price}</span>
// // //                     <ShoppingCart className="w-6 h-6 bg-orange-600 p-1 rounded cursor-pointer hover:bg-orange-700" />
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="space-y-4">
// // //             {slide.content.sideCourses.map((course: any, index: number) => (
// // //               <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
// // //                 <div className="relative">
// // //                   <img
// // //                     src={course.image || "/placeholder.svg"}
// // //                     alt={course.title}
// // //                     className="w-full h-24 object-cover"
// // //                   />
// // //                   <div className="absolute top-2 left-2">
// // //                     <span
// // //                       className={`px-2 py-1 rounded text-xs font-bold ${
// // //                         course.type === "BESTSELLER"
// // //                           ? "bg-orange-600"
// // //                           : course.type === "STAR DEAL"
// // //                             ? "bg-blue-600"
// // //                             : course.type === "NEW"
// // //                               ? "bg-green-600"
// // //                               : "bg-purple-600"
// // //                       }`}
// // //                     >
// // //                       {course.type}
// // //                     </span>
// // //                   </div>
// // //                   <div className="absolute bottom-2 right-2">
// // //                     <div className="bg-orange-600 p-1 rounded">
// // //                       <ShoppingCart className="w-4 h-4" />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <div className="p-3">
// // //                   <h3 className="font-semibold text-sm">{course.title}</h3>
// // //                   <span className="text-xs text-blue-400">{course.badge}</span>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="flex justify-center mt-8 space-x-2">
// // //           {[0, 1, 2].map((dot) => (
// // //             <div key={dot} className={`w-3 h-3 rounded-full ${dot === 0 ? "bg-white" : "bg-gray-600"}`} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )

// // //   const renderCategoriesSlide = (slide: any) => (
// // //     <div className="bg-gray-900 text-white min-h-screen p-4 md:p-8">
// // //       <div className="max-w-7xl mx-auto">
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //           {slide.content.map((category: any, index: number) => (
// // //             <div key={index} className="relative group cursor-pointer">
// // //               <div
// // //                 className={`bg-gradient-to-br ${category.gradient} rounded-lg p-6 h-64 md:h-80 flex flex-col justify-between overflow-hidden relative`}
// // //               >
// // //                 <div className="absolute inset-0 opacity-20">
// // //                   <img
// // //                     src={category.image || "/placeholder.svg"}
// // //                     alt={category.title}
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                 </div>
// // //                 <div className="relative z-10">
// // //                   <span
// // //                     className={`inline-block px-3 py-1 rounded text-xs font-bold mb-4 ${
// // //                       category.badge === "BESTSELLER"
// // //                         ? "bg-orange-600"
// // //                         : category.badge === "NEW"
// // //                           ? "bg-green-600"
// // //                           : "bg-blue-600"
// // //                     }`}
// // //                   >
// // //                     {category.badge}
// // //                   </span>
// // //                 </div>
// // //                 <div className="relative z-10">
// // //                   <h3 className="text-xl md:text-2xl font-bold mb-2">{category.title}</h3>
// // //                   <p className="text-sm opacity-90">{category.subtitle}</p>
// // //                 </div>
// // //                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )

// // //   const renderSlide = (slide: any) => {
// // //     switch (slide.type) {
// // //       case "marketplace":
// // //         return renderMarketplaceSlide(slide)
// // //       case "featured":
// // //         return renderFeaturedSlide(slide)
// // //       case "categories":
// // //         return renderCategoriesSlide(slide)
// // //       default:
// // //         return null
// // //     }
// // //   }

// // //   return (
// // //     <div className="relative w-full overflow-hidden">
// // //       <div
// // //         className="flex transition-transform duration-500 ease-in-out"
// // //         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
// // //         onMouseEnter={() => setIsAutoPlaying(false)}
// // //         onMouseLeave={() => setIsAutoPlaying(true)}
// // //       >
// // //         {slides.map((slide) => (
// // //           <div key={slide.id} className="w-full flex-shrink-0">
// // //             {renderSlide(slide)}
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Navigation Arrows */}
// // //       <button
// // //         onClick={prevSlide}
// // //         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
// // //       >
// // //         <ChevronLeft className="w-6 h-6" />
// // //       </button>
// // //       <button
// // //         onClick={nextSlide}
// // //         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
// // //       >
// // //         <ChevronRight className="w-6 h-6" />
// // //       </button>

// // //       {/* Slide Indicators */}
// // //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
// // //         {slides.map((_, index) => (
// // //           <button
// // //             key={index}
// // //             onClick={() => setCurrentSlide(index)}
// // //             className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Caro

// // "use client"

// // import { useState, useEffect } from "react"
// // import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Play } from "lucide-react"

// // const Caro = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0)
// //   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

// //   const slides = [
// //     // Slide 1 - Main Featured Layout (2/3 + 1/3)
// //     {
// //       id: 1,
// //       type: "featured",
// //       content: {
// //         mainCourse: {
// //           title: "Complete Web Development Bootcamp",
// //           subtitle: "Learn HTML, CSS, JavaScript, React, Node.js and MongoDB",
// //           tags: ["Open World", "Web Development", "JavaScript", "Full Stack"],
// //           rating: "4.8",
// //           reviewCount: "2,847",
// //           originalPrice: "₹4,289.21",
// //           currentPrice: "₹3,646.29",
// //           discount: "-15%",
// //           platforms: ["steam", "windows"],
// //           image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop&crop=center"
// //         },
// //         sideDeals: [
// //           {
// //             title: "React Native Development",
// //             badge: "STAR DEAL",
// //             price: "₹771.48",
// //             originalPrice: "₹1,715.45",
// //             discount: "-55%",
// //             platforms: ["steam", "windows"],
// //             image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop&crop=center"
// //           },
// //           {
// //             title: "PlayStation Courses Bundle",
// //             badge: "Publisher Sale",
// //             subtitle: "SAVE UP TO 60%",
// //             image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=200&fit=crop&crop=center"
// //           },
// //           {
// //             title: "Data Science Masterclass",
// //             badge: "Publisher Sale",
// //             image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center"
// //           },
// //           {
// //             title: "AI & Machine Learning",
// //             badge: "Publisher Sale",
// //             image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop&crop=center"
// //           }
// //         ]
// //       }
// //     },
// //     // Slide 2 - 4 Column Grid Layout
// //     {
// //       id: 2,
// //       type: "categories",
// //       content: [
// //         {
// //           title: "PROGRAMMING COURSES",
// //           subtitle: "Python • JavaScript • Java",
// //           badge: "BESTSELLER",
// //           image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center",
// //           gradient: "from-purple-600 to-blue-600"
// //         },
// //         {
// //           title: "SAVE BIG ON POPULAR COURSES",
// //           subtitle: "Web Development • Mobile Apps",
// //           badge: "BESTSELLER", 
// //           image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
// //           gradient: "from-orange-600 to-red-600"
// //         },
// //         {
// //           title: "LATEST RELEASES",
// //           subtitle: "Discover all the fresh courses",
// //           badge: "NEW",
// //           image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
// //           gradient: "from-green-600 to-teal-600"
// //         },
// //         {
// //           title: "CERTIFICATION PROGRAMS",
// //           subtitle: "AWS • Google Cloud • Azure",
// //           badge: "BESTSELLER",
// //           image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center",
// //           gradient: "from-blue-600 to-cyan-600"
// //         }
// //       ]
// //     },
// //     // Slide 3 - Mobile Gaming Layout (2/3 + 1/3)
// //     {
// //       id: 3,
// //       type: "mobile",
// //       title: "Get more out of your learning journey",
// //       subtitle: "Study anytime, anywhere, and make it even more engaging with certificates, achievements, and other learning rewards. Enhance your skills with new courses, materials, and other resources - check out our full offer now!",
// //       content: {
// //         leftSection: [
// //           {
// //             badge: "OFFER FROM 1 INSTRUCTOR",
// //             title: "Mobile App Development with React Native",
// //             price: "28.25 USD",
// //             tag: "GLOBAL",
// //             image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=120&h=120&fit=crop&crop=center"
// //           },
// //           {
// //             badge: "OFFERS FROM 12 INSTRUCTORS",
// //             title: "Full Stack JavaScript Course",
// //             price: "21.88 USD",
// //             originalPrice: "29.42 USD",
// //             discount: "26%",
// //             tag: "GLOBAL",
// //             image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=120&h=120&fit=crop&crop=center"
// //           },
// //           {
// //             badge: "OFFERS FROM 4 INSTRUCTORS",
// //             title: "Python for Data Science",
// //             price: "30.01 USD",
// //             tag: "GLOBAL",
// //             image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=120&h=120&fit=crop&crop=center"
// //           },
// //           {
// //             badge: "SPONSORED",
// //             title: "Cloud Computing Fundamentals",
// //             price: "18.10 USD",
// //             originalPrice: "19.07 USD",
// //             discount: "5%",
// //             tag: "UNITED STATES",
// //             image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=120&h=120&fit=crop&crop=center"
// //           }
// //         ],
// //         rightSection: {
// //           title: "LEARN ON THE GO",
// //           subtitle: "BEST FOR CONTINUOUS LEARNING",
// //           image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=center"
// //         }
// //       }
// //     }
// //   ]

// //   useEffect(() => {
// //     if (isAutoPlaying) {
// //       const interval = setInterval(() => {
// //         setCurrentSlide((prev) => (prev + 1) % slides.length)
// //       }, 6000)
// //       return () => clearInterval(interval)
// //     }
// //   }, [isAutoPlaying, slides.length])

// //   const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev + 1) % slides.length)
// //   }

// //   const prevSlide = () => {
// //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
// //   }

// //   // Slide 1 - Featured Layout
// //   const renderFeaturedSlide = (slide) => (
// //     <div className="bg-gray-900 text-white p-6">
// //       <div className="max-w-7xl mx-auto">
// //         <h1 className="text-4xl font-bold mb-8 text-white">Featured Deals</h1>
        
// //         <div className="grid grid-cols-12 gap-6 h-[500px]">
// //           {/* Main Course - 2/3 width */}
// //           <div className="col-span-8 relative">
// //             <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-800">
// //               <img 
// //                 src={slide.content.mainCourse.image}
// //                 alt={slide.content.mainCourse.title}
// //                 className="w-full h-full object-cover"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
// //               {/* Course Info Overlay */}
// //               <div className="absolute bottom-0 left-0 right-0 p-8">
// //                 <h2 className="text-4xl font-bold mb-3 text-white">{slide.content.mainCourse.title}</h2>
// //                 <p className="text-lg text-gray-300 mb-4">{slide.content.mainCourse.subtitle}</p>
                
// //                 {/* Tags */}
// //                 <div className="flex flex-wrap gap-2 mb-4">
// //                   {slide.content.mainCourse.tags.map((tag, index) => (
// //                     <span key={index} className="px-3 py-1 bg-gray-700 text-white text-sm rounded">
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>
                
// //                 {/* Rating and Price */}
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-4">
// //                     <div className="flex items-center gap-1">
// //                       <span className="text-2xl font-bold text-white">{slide.content.mainCourse.rating}</span>
// //                       <Star className="w-5 h-5 text-yellow-400 fill-current" />
// //                     </div>
// //                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
// //                     <span className="text-lg text-gray-300">({slide.content.mainCourse.reviewCount})</span>
// //                   </div>
                  
// //                   <div className="flex items-center gap-3">
// //                     <span className="bg-black text-white px-3 py-1 rounded text-lg font-bold">
// //                       {slide.content.mainCourse.discount}
// //                     </span>
// //                     <div className="text-right">
// //                       <div className="text-sm text-gray-400 line-through">{slide.content.mainCourse.originalPrice}</div>
// //                       <div className="text-2xl font-bold text-orange-400">{slide.content.mainCourse.currentPrice}</div>
// //                     </div>
// //                     <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded">
// //                       <ShoppingCart className="w-5 h-5 text-white" />
// //                     </button>
// //                   </div>
// //                 </div>
                
// //                 {/* Platforms */}
// //                 <div className="flex items-center gap-2 mt-4">
// //                   <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
// //                     <span className="text-xs font-bold text-black">S</span>
// //                   </div>
// //                   <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
// //                     <span className="text-xs font-bold text-black">W</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
          
// //           {/* Side Deals - 1/3 width */}
// //           <div className="col-span-4 grid grid-rows-4 gap-4">
// //             {slide.content.sideDeals.map((deal, index) => (
// //               <div key={index} className="relative rounded-lg overflow-hidden bg-gray-800 group hover:scale-105 transition-transform">
// //                 <img 
// //                   src={deal.image}
// //                   alt={deal.title}
// //                   className="w-full h-full object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                
// //                 {/* Deal Info */}
// //                 <div className="absolute inset-0 p-4 flex flex-col justify-between">
// //                   <div className="flex justify-between items-start">
// //                     <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
// //                       {deal.badge}
// //                     </span>
// //                     <button className="bg-orange-500 hover:bg-orange-600 p-1 rounded">
// //                       <ShoppingCart className="w-4 h-4 text-white" />
// //                     </button>
// //                   </div>
                  
// //                   <div>
// //                     <h3 className="text-white font-bold text-sm mb-1">{deal.title}</h3>
// //                     {deal.subtitle && (
// //                       <p className="text-gray-300 text-xs mb-2">{deal.subtitle}</p>
// //                     )}
// //                     {deal.price && (
// //                       <div className="flex items-center gap-2">
// //                         {deal.originalPrice && (
// //                           <span className="text-xs text-gray-400 line-through">{deal.originalPrice}</span>
// //                         )}
// //                         <span className="text-orange-400 font-bold">{deal.price}</span>
// //                         {deal.discount && (
// //                           <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs">
// //                             {deal.discount}
// //                           </span>
// //                         )}
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
        
// //         {/* Dots Navigation */}
// //         <div className="flex justify-center mt-8 space-x-2">
// //           {slides.map((_, index) => (
// //             <button
// //               key={index}
// //               onClick={() => setCurrentSlide(index)}
// //               className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-600'}`}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   )

// //   // Slide 2 - Categories Layout
// //   const renderCategoriesSlide = (slide) => (
// //     <div className="bg-gray-900 text-white p-6">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="grid grid-cols-4 gap-6 h-[500px]">
// //           {slide.content.map((category, index) => (
// //             <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer">
// //               <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`} />
// //               <img 
// //                 src={category.image}
// //                 alt={category.title}
// //                 className="w-full h-full object-cover"
// //               />
// //               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              
// //               <div className="absolute inset-0 p-6 flex flex-col justify-between">
// //                 <div>
// //                   <span className={`inline-block px-3 py-1 rounded text-xs font-bold ${
// //                     category.badge === 'BESTSELLER' 
// //                       ? 'bg-orange-600 text-white' 
// //                       : 'bg-green-600 text-white'
// //                   }`}>
// //                     {category.badge}
// //                   </span>
// //                 </div>
                
// //                 <div>
// //                   <h3 className="text-white font-bold text-xl mb-2">{category.title}</h3>
// //                   <p className="text-gray-200 text-sm">{category.subtitle}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   )

// //   // Slide 3 - Mobile Layout
// //   const renderMobileSlide = (slide) => (
// //     <div className="bg-gray-100 text-gray-800 p-6">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="mb-8">
// //           <h1 className="text-4xl font-bold mb-4 text-gray-800">{slide.title}</h1>
// //           <p className="text-gray-600 text-lg max-w-4xl">{slide.subtitle}</p>
// //         </div>
        
// //         <div className="grid grid-cols-12 gap-6">
// //           {/* Left Section - Course Cards */}
// //           <div className="col-span-8 grid grid-cols-2 gap-4">
// //             {slide.content.leftSection.map((course, index) => (
// //               <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
// //                 <div className="text-xs text-gray-500 mb-3 uppercase">{course.badge}</div>
// //                 <div className="flex gap-4">
// //                   <img 
// //                     src={course.image}
// //                     alt={course.title}
// //                     className="w-16 h-16 rounded-lg object-cover"
// //                   />
// //                   <div className="flex-1">
// //                     <h3 className="font-semibold text-gray-800 mb-2 text-sm">{course.title}</h3>
// //                     <div className="flex items-center gap-2 mb-2">
// //                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
// //                       <span className="text-xs text-green-600 font-medium">{course.tag}</span>
// //                     </div>
// //                     <div className="flex items-center justify-between">
// //                       <div className="flex items-center gap-2">
// //                         <span className="font-bold text-lg text-gray-800">{course.price}</span>
// //                         {course.originalPrice && (
// //                           <>
// //                             <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
// //                             <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
// //                               {course.discount}
// //                             </span>
// //                           </>
// //                         )}
// //                       </div>
// //                       <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
          
// //           {/* Right Section - Promotional */}
// //           <div className="col-span-4">
// //             <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg p-8 h-full flex flex-col justify-center items-center text-center text-white">
// //               <img 
// //                 src={slide.content.rightSection.image}
// //                 alt="Learning illustration"
// //                 className="w-full max-w-sm mb-6 rounded-lg"
// //               />
// //               <h2 className="text-3xl font-bold mb-2">{slide.content.rightSection.title}</h2>
// //               <p className="text-lg opacity-90">{slide.content.rightSection.subtitle}</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )

// //   const renderSlide = (slide) => {
// //     switch (slide.type) {
// //       case 'featured':
// //         return renderFeaturedSlide(slide)
// //       case 'categories':
// //         return renderCategoriesSlide(slide)
// //       case 'mobile':
// //         return renderMobileSlide(slide)
// //       default:
// //         return null
// //     }
// //   }

// //   return (
// //     <div className="relative w-full overflow-hidden">
// //       <div 
// //         className="flex transition-transform duration-500 ease-in-out"
// //         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
// //         onMouseEnter={() => setIsAutoPlaying(false)}
// //         onMouseLeave={() => setIsAutoPlaying(true)}
// //       >
// //         {slides.map((slide) => (
// //           <div key={slide.id} className="w-full flex-shrink-0 min-h-screen">
// //             {renderSlide(slide)}
// //           </div>
// //         ))}
// //       </div>

// //       {/* Navigation Arrows */}
// //       <button
// //         onClick={prevSlide}
// //         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
// //       >
// //         <ChevronLeft className="w-6 h-6" />
// //       </button>
// //       <button
// //         onClick={nextSlide}
// //         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
// //       >
// //         <ChevronRight className="w-6 h-6" />
// //       </button>

// //       {/* Slide Indicators */}
// //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
// //         {slides.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrentSlide(index)}
// //             className={`w-3 h-3 rounded-full transition-colors ${
// //               index === currentSlide ? 'bg-white' : 'bg-white/50'
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }

// // export default Caro

// "use client";

// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Play } from "lucide-react";

// const Caro = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const slides = [
//     // Slide 1 - Featured Layout (2/3 + 1/3)
//     {
//       id: 1,
//       type: "featured",
//       content: {
//         mainGame: {
//           title: "Ultimate Open World Adventure",
//           subtitle: "Explore vast lands with stunning graphics and epic quests",
//           tags: ["Open World", "RPG", "Action", "Multiplayer"],
//           rating: "4.8",
//           reviewCount: "12,347",
//           originalPrice: "$59.99",
//           currentPrice: "$49.99",
//           discount: "-17%",
//           platforms: ["steam", "playstation"],
//           image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         sideDeals: [
//           {
//             title: "Battle Royale Pack",
//             badge: "HOT DEAL",
//             price: "$19.99",
//             originalPrice: "$39.99",
//             discount: "-50%",
//             platforms: ["steam", "xbox"],
//             image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           },
//           {
//             title: "Racing Legends Bundle",
//             badge: "Publisher Sale",
//             subtitle: "SAVE UP TO 60%",
//             image: "https://images.unsplash.com/photo-1503376788353-b0988e0d9a89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           },
//           {
//             title: "Strategy War Game",
//             badge: "Publisher Sale",
//             image: "https://images.unsplash.com/photo-1600585154516-58a61f2e6ea0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           },
//           {
//             title: "Fantasy RPG Expansion",
//             badge: "Publisher Sale",
//             image: "https://images.unsplash.com/photo-1617806111677-698e0c8cbce3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           },
//         ],
//       },
//     },
//     // Slide 2 - Categories Layout
//     {
//       id: 2,
//       type: "categories",
//       content: [
//         {
//           title: "ACTION GAMES",
//           subtitle: "Shooter • Fighter • Adventure",
//           badge: "BESTSELLER",
//           image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           gradient: "from-red-600 to-orange-600",
//         },
//         {
//           title: "SAVE BIG ON HIT GAMES",
//           subtitle: "Racing • Sports",
//           badge: "BESTSELLER",
//           image: "https://images.unsplash.com/photo-1503376788353-b0988e0d9a89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           gradient: "from-yellow-600 to-amber-600",
//         },
//         {
//           title: "NEW RELEASES",
//           subtitle: "Check out the latest titles",
//           badge: "NEW",
//           image: "https://images.unsplash.com/photo-1600585154516-58a61f2e6ea0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           gradient: "from-green-600 to-emerald-600",
//         },
//         {
//           title: "MULTIPLAYER PACKS",
//           subtitle: "Online • Co-op",
//           badge: "BESTSELLER",
//           image: "https://images.unsplash.com/photo-1617806111677-698e0c8cbce3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           gradient: "from-blue-600 to-indigo-600",
//         },
//       ],
//     },
//     // Slide 3 - Mobile Layout
//     {
//       id: 3,
//       type: "mobile",
//       title: "Level Up Your Gaming Anywhere",
//       subtitle: "Play anytime, anywhere with exclusive mobile titles, achievements, and rewards. Explore new games and bundles now!",
//       content: {
//         leftSection: [
//           {
//             badge: "OFFER FROM 1 DEVELOPER",
//             title: "Mobile Battle Arena",
//             price: "9.99 USD",
//             tag: "GLOBAL",
//             image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           },
//           {
//             badge: "OFFERS FROM 5 DEVELOPERS",
//             title: "Racing Championship",
//             price: "14.99 USD",
//             originalPrice: "19.99 USD",
//             discount: "25%",
//             tag: "GLOBAL",
//             image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           },
//           {
//             badge: "OFFERS FROM 3 DEVELOPERS",
//             title: "Puzzle Quest",
//             price: "7.49 USD",
//             tag: "GLOBAL",
//             image: "https://images.unsplash.com/photo-1503376788353-b0988e0d9a89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           },
//           {
//             badge: "SPONSORED",
//             title: "Survival Shooter",
//             price: "12.50 USD",
//             originalPrice: "15.00 USD",
//             discount: "17%",
//             tag: "UNITED STATES",
//             image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           },
//         ],
//         rightSection: {
//           title: "GAME ON THE GO",
//           subtitle: "BEST FOR MOBILE PLAYERS",
//           image: "https://images.unsplash.com/photo-1600585154516-58a61f2e6ea0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//       },
//     },
//   ];

//   useEffect(() => {
//     if (isAutoPlaying) {
//       const interval = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 6000);
//       return () => clearInterval(interval);
//     }
//   }, [isAutoPlaying, slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   // Slide 1 - Featured Layout
//   const renderFeaturedSlide = (slide) => (
//     <div className="bg-gray-900 text-white p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold mb-8 text-white">Featured Deals</h1>
        
//         <div className="grid grid-cols-12 gap-6 h-[450px]">
//           {/* Main Game - 2/3 width */}
//           <div className="col-span-8 relative">
//             <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-800">
//               <img 
//                 src={slide.content.mainGame.image}
//                 alt={slide.content.mainGame.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
//               {/* Game Info Overlay */}
//               <div className="absolute bottom-0 left-0 right-0 p-8">
//                 <h2 className="text-4xl font-bold mb-3 text-white">{slide.content.mainGame.title}</h2>
//                 <p className="text-lg text-gray-300 mb-4">{slide.content.mainGame.subtitle}</p>
                
//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {slide.content.mainGame.tags.map((tag, index) => (
//                     <span key={index} className="px-3 py-1 bg-gray-700 text-white text-sm rounded">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
                
//                 {/* Rating and Price */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className="flex items-center gap-1">
//                       <span className="text-2xl font-bold text-white">{slide.content.mainGame.rating}</span>
//                       <Star className="w-5 h-5 text-yellow-400 fill-current" />
//                     </div>
//                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                     <span className="text-lg text-gray-300">({slide.content.mainGame.reviewCount})</span>
//                   </div>
                  
//                   <div className="flex items-center gap-3">
//                     <span className="bg-black text-white px-3 py-1 rounded text-lg font-bold">
//                       {slide.content.mainGame.discount}
//                     </span>
//                     <div className="text-right">
//                       <div className="text-sm text-gray-400 line-through">{slide.content.mainGame.originalPrice}</div>
//                       <div className="text-2xl font-bold text-orange-400">{slide.content.mainGame.currentPrice}</div>
//                     </div>
//                     <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded">
//                       <ShoppingCart className="w-5 h-5 text-white" />
//                     </button>
//                   </div>
//                 </div>
                
//                 {/* Platforms */}
//                 <div className="flex items-center gap-2 mt-4">
//                   <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
//                     <span className="text-xs font-bold text-black">S</span>
//                   </div>
//                   <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
//                     <span className="text-xs font-bold text-black">P</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Side Deals - 1/3 width */}
//           <div className="col-span-4 grid grid-rows-4 gap-4">
//             {slide.content.sideDeals.map((deal, index) => (
//               <div key={index} className="relative rounded-lg overflow-hidden bg-gray-800 group hover:scale-105 transition-transform h-full">
//                 <img 
//                   src={deal.image}
//                   alt={deal.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                
//                 {/* Deal Info */}
//                 <div className="absolute inset-0 p-4 flex flex-col justify-between">
//                   <div className="flex justify-between items-start">
//                     <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
//                       {deal.badge}
//                     </span>
//                     <button className="bg-orange-500 hover:bg-orange-600 p-1 rounded">
//                       <ShoppingCart className="w-4 h-4 text-white" />
//                     </button>
//                   </div>
                  
//                   <div>
//                     <h3 className="text-white font-bold text-sm mb-1">{deal.title}</h3>
//                     {deal.subtitle && (
//                       <p className="text-gray-300 text-xs mb-2">{deal.subtitle}</p>
//                     )}
//                     {deal.price && (
//                       <div className="flex items-center gap-2">
//                         {deal.originalPrice && (
//                           <span className="text-xs text-gray-400 line-through">{deal.originalPrice}</span>
//                         )}
//                         <span className="text-orange-400 font-bold">{deal.price}</span>
//                         {deal.discount && (
//                           <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs">
//                             {deal.discount}
//                           </span>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Dots Navigation */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-600'}`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   // Slide 2 - Categories Layout
//   const renderCategoriesSlide = (slide) => (
//     <div className="bg-gray-900 text-white p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-4 gap-6 h-[450px]">
//           {slide.content.map((category, index) => (
//             <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer h-full">
//               <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`} />
//               <img 
//                 src={category.image}
//                 alt={category.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              
//               <div className="absolute inset-0 p-6 flex flex-col justify-between">
//                 <div>
//                   <span className={`inline-block px-3 py-1 rounded text-xs font-bold ${
//                     category.badge === 'BESTSELLER' 
//                       ? 'bg-orange-600 text-white' 
//                       : 'bg-green-600 text-white'
//                   }`}>
//                     {category.badge}
//                   </span>
//                 </div>
                
//                 <div>
//                   <h3 className="text-white font-bold text-xl mb-2">{category.title}</h3>
//                   <p className="text-gray-200 text-sm">{category.subtitle}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   // Slide 3 - Mobile Layout
//   const renderMobileSlide = (slide) => (
//     <div className="bg-gray-900 text-white p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold mb-4 text-white">{slide.title}</h1>
//           <p className="text-gray-400 text-lg max-w-4xl">{slide.subtitle}</p>
//         </div>
        
//         <div className="grid grid-cols-12 gap-6 h-[450px]">
//           {/* Left Section - Game Cards */}
//           <div className="col-span-8 grid grid-cols-2 gap-4">
//             {slide.content.leftSection.map((game, index) => (
//               <div key={index} className="bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-700">
//                 <div className="text-xs text-gray-500 mb-3 uppercase">{game.badge}</div>
//                 <div className="flex gap-4">
//                   <img 
//                     src={game.image}
//                     alt={game.title}
//                     className="w-16 h-16 rounded-lg object-cover"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-white mb-2 text-sm">{game.title}</h3>
//                     <div className="flex items-center gap-2 mb-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                       <span className="text-xs text-green-600 font-medium">{game.tag}</span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <span className="font-bold text-lg text-white">{game.price}</span>
//                         {game.originalPrice && (
//                           <>
//                             <span className="text-sm text-gray-500 line-through">{game.originalPrice}</span>
//                             <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
//                               {game.discount}
//                             </span>
//                           </>
//                         )}
//                       </div>
//                       <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Right Section - Promotional */}
//           <div className="col-span-4">
//             <div className="bg-gradient-to-br from-cyan-600 to-blue-800 rounded-lg p-8 h-full flex flex-col justify-center items-center text-center text-white">
//               <img 
//                 src={slide.content.rightSection.image}
//                 alt="Gaming illustration"
//                 className="w-full max-w-sm mb-6 rounded-lg"
//               />
//               <h2 className="text-3xl font-bold mb-2">{slide.content.rightSection.title}</h2>
//               <p className="text-lg opacity-90">{slide.content.rightSection.subtitle}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderSlide = (slide) => {
//     switch (slide.type) {
//       case "featured":
//         return renderFeaturedSlide(slide);
//       case "categories":
//         return renderCategoriesSlide(slide);
//       case "mobile":
//         return renderMobileSlide(slide);
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         onMouseEnter={() => setIsAutoPlaying(false)}
//         onMouseLeave={() => setIsAutoPlaying(true)}
//       >
//         {slides.map((slide) => (
//           <div key={slide.id} className="w-full flex-shrink-0">
//             {renderSlide(slide)}
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 md:block hidden"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 md:block hidden"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               index === currentSlide ? "bg-white" : "bg-white/50"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Caro;



"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart } from "lucide-react"

const Caro = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides = [
    // Slide 1 - Featured Layout (Exactly matching the image)
    {
      id: 1,
      type: "featured",
      content: {
        mainGame: {
          title: "Dune: Awakening",
          subtitle: "Open World Survival Craft",
          tags: ["Open World", "Survival Craft", "Adventure", "Base Building"],
          rating: "4/5",
          score: "80",
          originalPrice: "₹6,999",
          currentPrice: "₹5,999",
          discount: "-15%",
          platforms: ["steam", "windows"],
          image: "https://image.api.playstation.com/vulcan/ap/rnd/202505/2011/2e5b7d96aad5c1504aa4b78fdd9f06baa14e40ca25cd866c.jpg?w=780&thumb=false",
        },
        // sideDeals: [  {
        //     title: "",
        //     badge: "",
        //     image: "/1.jpg",
        //     hasCart: false,
        //   },
        //     {
        //         title: "",
        //         badge: "",
        //         price: "",
        //         originalPrice: "",
        //         discount: "",
        //         platforms: ["", "", ""],
        //         image: "https://image.api.playstation.com/vulcan/ap/rnd/202506/2702/4ec432409752e54f55ddff2be99285ab0b55f720aa7dc6b1.png?w=440&thumb=false",
        //         hasCart: false,
        //       },
        
         
         
        //   {
        //     title: "",
        //     badge: "",
        //     image: "/pkk.jpg",
        //     hasCart: false,
        //   },
        //   {
        //     title: "",
        //     subtitle: "",
        //     badge: "",
        //     image: "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/07751f86ef4b4b8ebbac1fd74a274153_1024",
        //     hasCart: false,
        //   },
        // ],
        sideDeals: [
            {
              title: "",
              badge: "",
              image: "/1.jpg",
              hasCart: false,
              url: "https://games.capcomusa.com/#118170", // optional, empty means no redirect
            },
            {
              title: "",
              badge: "",
              price: "",
              originalPrice: "",
              discount: "",
              platforms: ["", "", ""],
              image: "https://image.api.playstation.com/vulcan/ap/rnd/202506/2702/4ec432409752e54f55ddff2be99285ab0b55f720aa7dc6b1.png?w=440&thumb=false",
              hasCart: false,
              url: "https://store.playstation.com/en-in/concept/10013248", // example link
            },
            {
              title: "",
              badge: "",
              image: "/pkk.jpg",
              hasCart: false,
              url: "https://www.nintendo.com/us/store/products/pokemon-brilliant-diamond-switch/",
            },
            {
              title: "",
              subtitle: "",
              badge: "",
              image: "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/07751f86ef4b4b8ebbac1fd74a274153_1024",
              hasCart: false,
              url: "https://www.nintendo.com/us/store/products/marvel-ultimate-alliance-3-the-black-order-switch/", // example link
            },
          ],
          
      },
    },
    // Slide 2 - Categories Layout
    {
      id: 2,
      type: "categories",
      content: [
        {
          title: "STEAM GIFT CARDS",
          subtitle: "Steam • Global • Key",
          badge: "BESTSELLER",
          image: "https://store.akamai.steamstatic.com/public/images/gift/steamcards_physical.png",
          url: "https://digistore.co.in/product-category/steam-wallet-cards/", // 🔗 added
          // gradient: "from-purple-600 to-pink-600",
        },
        {
          title: "SAVE BIG ON E-BOOKS",
          subtitle: "Discover all the fresh drops",
          badge: "BESTSELLER",
          image: "https://picasso.cosmofeed.com/media.cosmofeed.com/Untitled-design--1--2024-22-05-05-10-30.png?w=600&&q=100",
          url: "https://superprofile.bio/vp/titan-method", // 🔗 added
          // gradient: "from-orange-600 to-yellow-600",
        },
        {
          title: "LATEST RELEASES",
          subtitle: "Steam • Global • Account",
          badge: "NEW",
          image: "https://cdn.promo.capcomusa.com/boxart/158157.png",
          url: "https://store.steampowered.com/agecheck/app/2054970/", // 🔗 added
          // gradient: "from-green-600 to-emerald-600",
        },
        {
          title: "AMAZON GIFT CARDS",
          subtitle: "Amazon • Global • Key",
          badge: "BESTSELLER",
          image: "/ammm.png",
          url: "https://www.evoucherindia.in/e-vouchers/amazon-e-voucher/6", // 🔗 added
          // gradient: "from-blue-600 to-cyan-600",
        },
      ],
      
      // content: [
      //   {
      //     title: "STEAM GIFT CARDS",
      //     subtitle: "Steam • Global • Key",
      //     badge: "BESTSELLER",
      //     image: "https://store.akamai.steamstatic.com/public/images/gift/steamcards_physical.png",
      //     // gradient: "from-purple-600 to-pink-600",
      //   },
      //   {
      //     title: "SAVE BIG ON E-BOOKS",
      //     subtitle: "Discover all the fresh drops",
      //     badge: "BESTSELLER",
      //     image: "https://picasso.cosmofeed.com/media.cosmofeed.com/Untitled-design--1--2024-22-05-05-10-30.png?w=600&&q=100",
      //    // gradient: "from-orange-600 to-yellow-600",
      //   },
      //   {
      //     title: "LATEST RELEASES",
      //     subtitle: "Steam • Global • Account",
      //     badge: "NEW",
      //     image: "https://cdn.promo.capcomusa.com/boxart/158157.png",
      // //    gradient: "from-green-600 to-emerald-600",
      //   },
      //   {
      //     title: "AMAZON GIFT CARDS",
      //     subtitle: "Amazon • Global • Key",
      //     badge: "BESTSELLER",
      //     image: "/ammm.png",
      //    // gradient: "from-blue-600 to-cyan-600",
      //   },
      // ],
    },
    // Slide 3 - Mobile Layout
    {
      id: 3,
      type: "mobile",
      title: "Get more out of your mobile games",
      subtitle:
        "Play anytime, anywhere, and make it even more fun with diamonds, stars, and other in-game currencies. Enhance your games with new gear, items, and other goodies - check out our full offer now!",
      content: {
        leftSection: [
          {
            badge: "SPONSORED",
            title: "Spotify Premium 12 Months Subscripton",
            price: "600 INR",
            tag: "INDIA",
           image: "https://images.g2a.com/300x400/1x1x1/spotify-premium-subscription-12-months-spotify-account-global-i10000000243117/590e065bae653a65930c36ea",
       // image:"https://static.driffle.com/fit-in/720x512/media-gallery/production/2afa6304-de60-46e5-b643-36fcce297292_spotify-subscription-india-12-months-52280jpg"  
       url:"https://genflix.in/products/spotify-premium-india?variant=52182923673768"
        },
          {
            badge: "OFFERS FROM 2 SELLERS",
            title: "Netflix Account Premium 12 Months Subscription",
            price: "1,695 INR",
            originalPrice: "",
            discount: "",
            tag: "GLOBAL",
            platforms: ["steam", "key"],
           // image: "https://i0.wp.com/breakers-store.site/wp-content/uploads/2023/10/NETFLIX_PREMIUM.png?fit=300%2C428&ssl=1",
          image: "/nt.png",
          url:"https://premiumatcheap.in/product/netflix-yearly/"
          },
          {
            badge: "OFFERS FROM 4 SELLERS",
            title: "Perplexity Pro 1 Year Subscription",
            price: "6.00 USD",
            tag: "GLOBAL",
            platforms: ["nintendo", "account"],
            image: "/per.png",
            url:"https://ggsel.net/en/catalog/product/4970639"
          },
          {
            badge: "SPONSORED",
            title: "Amazon Prime Video 3 Months Subscription",
            price: "195 INR",
            originalPrice: "",
            discount: "",
            tag: "INDIA",
            platforms: ["nintendo", "key"],
            image: "/app.png",
            url:"https://premiumatcheap.in/product/prime-video/"
          },
        ],
        rightSection: {
          title: "Streaming & AI Subscriptions",
          subtitle: "",
          image: "https://genflix.in/cdn/shop/files/1744560394686.jpg?v=1744560640&width=800",
        },
      },
    },
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Desktop Featured Layout - CORRECTED 2x2 Grid
  const renderFeaturedSlideDesktop = (slide) => (
    <div className="bg-[--bg-dark] text-white p-8 min-h-[500px]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-white">Featured Deals</h1>

        <div className="flex gap-8 h-[400px]">
          {/* Main Game - Left Side (60% width) */}
          <div className="flex-[3] relative">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-800">
              <img
                src="https://image.api.playstation.com/vulcan/ap/rnd/202505/2011/2e5b7d96aad5c1504aa4b78fdd9f06baa14e40ca25cd866c.jpg?w=780&thumb=false"
                alt={slide.content.mainGame.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 " />

              {/* Game Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                {/* <h2 className="text-5xl font-bold mb-4 text-white tracking-wide">{slide.content.mainGame.title}</h2> */}

                {/* Tags */}
                {/* <div className="flex flex-wrap gap-3 mb-6">
                  {slide.content.mainGame.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-700/80 text-white text-sm rounded-md backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}

                {/* Rating, Platforms and Price */}
                <div className="flex items-center justify-between">
                  {/* <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-white">{slide.content.mainGame.rating}</span>
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </div>
                    <div className="bg-green-600 text-white px-3 py-1 rounded-md text-lg font-bold">
                      {slide.content.mainGame.score}
                    </div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>

                
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                        <span className="text-sm font-bold text-black">S</span>
                      </div>
                      <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                        <span className="text-sm font-bold text-black">⊞</span>
                      </div>
                    </div>
                  </div> */}

                  <div className="flex justify gap-4">
                    {/* <span className="bg-black text-white px-4 py-2 rounded text-xl font-bold">
                      {slide.content.mainGame.discount}
                    </span> */}
                    <div className="text-right">
                      <div className="text-lg text-gray-400 line-through">{slide.content.mainGame.originalPrice}</div>
                      <div className="text-3xl font-bold text-[#5593f7]">{slide.content.mainGame.currentPrice}</div>
                    </div>
                    <button
  className="bg-[#5593f7] hover:bg-blue-600 p-3 rounded-lg transition-colors"
  onClick={() => window.location.href = 'https://store.playstation.com/en-in/product/HP9000-PPSA26358_00-LOSTSOULASIDEDDE'}
>
  <ShoppingCart className="w-6 h-6 text-white" />
</button>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Deals - Right Side (40% width) - CORRECTED 2x2 GRID */}
          <div className="flex-[2] grid grid-cols-2 grid-rows-2 gap-4">
  {slide.content.sideDeals.map((deal, index) => (
    <div
      key={index}
      className="relative rounded-xl overflow-hidden bg-gray-800 group hover:scale-105 transition-transform cursor-pointer"
      onClick={() => {
        if (deal.url) {
          window.open(deal.url, "_blank"); // opens in new tab
        }
      }}
    >
      <img
        src={deal.image || "/placeholder.svg"}
        alt={deal.title}
        className="w-full h-full object-cover pointer-events-none"
      />

      <div className="absolute inset-0 pointer-events-none" />

      {/* Deal Info */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start">
          {/* <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">{deal.badge}</span> */}
          {deal.hasCart && (
            <button className="bg-[#5593f7] hover:bg-blue-600 p-2 rounded transition-colors pointer-events-auto">
              <ShoppingCart className="w-4 h-4 text-white" />
            </button>
          )}
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-1">{deal.title}</h3>
          {deal.subtitle && <p className="text-gray-300 text-sm mb-2">{deal.subtitle}</p>}
          {deal.price && (
            <div className="flex items-center gap-2 mb-2">
              {deal.originalPrice && (
                <span className="text-sm text-gray-400 line-through">{deal.originalPrice}</span>
              )}
              <span className="text-orange-400 font-bold text-lg">{deal.price}</span>
              {deal.discount && (
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                  {deal.discount}
                </span>
              )}
            </div>
          )}
          {/* {deal.platforms && (
            <div className="flex items-center gap-2">
              {deal.platforms.map((platform, idx) => (
                <div key={idx} className="w-5 h-5 bg-white rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-black">
                    {platform === "steam"
                      ? "S"
                      : platform === "windows"
                      ? "⊞"
                      : platform === "apple"
                      ? "🍎"
                      : "N"}
                  </span>
                </div>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </div>
  ))}
</div>



        </div>

        {/* Dots Navigation */}
        {/* <div className="flex justify-center mt-12 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-gray-600"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  )

  // Mobile Featured Layout - Completely Different, Spacious Layout
  const renderFeaturedSlideMobile = (slide) => (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 mt-0 md:mt-0 text-center">Featured Deals</h1>

        {/* Main Game - Full Width */}
        <div className="mb-8">
          <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-800">
            <img
              src={slide.content.mainGame.image || "/placeholder.svg"}
              alt={slide.content.mainGame.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" />

            <div className="absolute bottom-0 left-0 right-0 p-4">
              {/* <h2 className="text-2xl font-bold mb-2 text-white">{slide.content.mainGame.title}</h2> */}
              <div className="flex items-center justify-between">
                {/* <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">{slide.content.mainGame.rating}</span>
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div> */}
                <div className="flex items-center gap-2">
                  {/* <span className="bg-black text-white px-2 py-1 rounded text-sm">
                    {slide.content.mainGame.discount}
                  </span> */}
                  <div className="text-lg text-gray-400 line-through">{slide.content.mainGame.originalPrice}</div>
                  <span className="text-[#5593f7] font-bold">{slide.content.mainGame.currentPrice}</span>
                  <button
  className="bg-[#5593f7] hover:bg-blue-600 p-3 rounded-lg transition-colors"
  onClick={() => window.location.href = 'https://store.playstation.com/en-in/product/HP9000-PPSA26358_00-LOSTSOULASIDEDDE'}
>
  <ShoppingCart className="w-4 h-4 text-white" />
</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Deals - Stacked Vertically with Spacing */}
        <div className="space-y-4 p-2 gradient-background">
  {slide.content.sideDeals.map((deal, index) => (
    <div key={index} className="w-[260px] mx-auto relative items-center">
      <img
        src={deal.image || "/placeholder.svg"}
        alt={deal.title || `Deal ${index + 1}`}
        className="w-full h-[200px] object-cover rounded-lg"
        onError={(e) => { e.target.src = "/placeholder.svg"; }}
      />
      <div className="absolute bottom-2 right-2">
        <button
          className="bg-[#5593f7] hover:bg-blue-600 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors"
          onClick={() => window.location.href = deal.url || '#'}
        >
          Buy
        </button>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  )

  // Categories Layout - Desktop
  const renderCategoriesSlideDesktop = (slide) => (
    <div className="bg-gray-900 text-white p-8 min-h-[500px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-6 h-[400px] mt-10">
          {slide.content.map((category, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => {
                if (category.url) {
                  window.open(category.url, "_blank"); // 🔗 opens URL in new tab
                }
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`} />
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
  
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  {/* <span
                    className={`inline-block px-3 py-1 rounded text-xs font-bold ${
                      category.badge === "BESTSELLER" ? "bg-orange-600 text-white" : "bg-green-600 text-white"
                    }`}
                  >
                    {category.badge}
                  </span> */}
                </div>
  
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{category.title}</h3>
                  <p className="text-gray-200 text-sm">{category.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  

  // Categories Layout - Mobile
  const renderCategoriesSlideMobile = (slide) => (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-1 gap-4">
          {slide.content.map((category, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden h-[270px]"  onClick={() => {
              if (category.url) {
                window.open(category.url, "_blank"); // 🔗 opens URL in new tab
              }
            }}>
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-80`} />
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 p-4 flex flex-col justify-end h-full">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{category.title}</h3>
                  <p className="text-gray-200 text-sm">{category.subtitle}</p>
                </div>
                {/* <span
                  className={`px-2 py-1 rounded text-xs font-bold ${
                    category.badge === "BESTSELLER" ? "bg-orange-600 text-white" : "bg-green-600 text-white"
                  }`}
                >
                  {category.badge}
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // Mobile Layout - Desktop
  const renderMobileSlideDesktop = (slide) => (
    <div className="bg-gray-900 text-white p-8 min-h-[500px]">
      <div className="max-w-7xl mx-auto">
        {/* <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6 text-white">{slide.title}</h1>
          <p className="text-gray-400 text-xl max-w-4xl">{slide.subtitle}</p>
        </div> */}

        <div className="flex gap-8 h-[400px] mt-5">
          {/* Left Section - Game Cards */}
          <div className="flex-[3] grid grid-cols-2 gap-6">
            {slide.content.leftSection.map((game, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="text-xs text-white-500 mb-4 uppercase font-medium">{game.badge}</div>
                <div className="flex gap-4">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    className="w-20 h-30 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-3 text-md">{game.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-[#5593f7] rounded-full"></div>
                      <span className="text-sm text-[#5593f7] font-medium">{game.tag}</span>
                      {/* {game.platforms && (
                        <div className="flex gap-1 ml-2">
                          {game.platforms.map((platform, idx) => (
                            <div key={idx} className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                              <span className="text-xs text-white">
                                {platform === "steam" ? "S" : platform === "key" ? "K" : "N"}
                              </span>
                            </div>
                          ))}
                        </div>
                      )} */}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-xl text-white">{game.price}</span>
                        {game.originalPrice && (
                          <>
                            {/* <span className="text-sm text-gray-500 line-through">{game.originalPrice}</span> */}
                            {/* <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded font-bold">
                              {game.discount}
                            </span> */}
                          </>
                        )}
                      </div>
                      {/* <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" /> */}
                      <button
  onClick={() => window.open(game.url, "_blank")}
  className="bg-[#5593f7] text-white px-4 py-2 rounded-lg font-semibold text-xs hover:bg-blue-600 transition-colors"
>
  Buy Now
</button>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Promotional */}
          <div className="flex-[2]">
            <div className="bg-gradient-to-br from-gray-800 to-gray-800 rounded-xl p-8 h-full flex flex-col justify-center items-center text-center text-white">
              <img
                src={slide.content.rightSection.image || "/placeholder.svg"}
                alt="Gaming illustration"
                className="w-full max-w-sm h-[350px] mb-6 rounded-lg mt-36"
              />
              <h2 className="text-xl font-bold mb-2 mt-2">{slide.content.rightSection.title}</h2>
              <p className="text-xl opacity-90 mb-16">{slide.content.rightSection.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Mobile Layout - Mobile
  const renderMobileSlideMobile = (slide) => (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div className="max-w-md mx-auto">
        {/* <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-center">{slide.title}</h1>
          <p className="text-gray-400 text-center">{slide.subtitle}</p>
        </div> */}

        {/* Promotional Section First on Mobile */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-800 rounded-xl p-6 text-center text-white">
            <img
              src={slide.content.rightSection.image || "/placeholder.svg"}
              alt="Gaming illustration"
              className="w-full max-w-xs mx-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold mb-2">{slide.content.rightSection.title}</h2>
            <p className="opacity-90">{slide.content.rightSection.subtitle}</p>
          </div>
        </div>

        {/* Game Cards */}
        <div className="space-y-4">
          {slide.content.leftSection.map((game, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div className="text-xs text-gray-500 mb-3 uppercase">{game.badge}</div>
              <div className="flex gap-4">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  className="w-16 h-25 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2 text-sm">{game.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-[#5593f7] rounded-full"></div>
                    <span className="text-xs text-[#5593f7]">{game.tag}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{game.price}</span>
                      {game.originalPrice && (
                        <>
                          <span className="text-xs text-gray-500 line-through">{game.originalPrice}</span>
                          <span className="bg-orange-500 text-white text-xs px-1 py-0.5 rounded">{game.discount}</span>
                        </>
                      )}
                    </div>
                    {/* <Heart className="w-4 h-4 text-gray-400" /> */}
                    <button
  onClick={() => window.open(game.url, "_blank")}
  className="bg-[#5593f7] text-white px-4 py-2 rounded-lg font-semibold text-xs hover:bg-blue-600 transition-colors"
>
  Buy Now
</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSlide = (slide) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768

    switch (slide.type) {
      case "featured":
        return isMobile ? renderFeaturedSlideMobile(slide) : renderFeaturedSlideDesktop(slide)
      case "categories":
        return isMobile ? renderCategoriesSlideMobile(slide) : renderCategoriesSlideDesktop(slide)
      case "mobile":
        return isMobile ? renderMobileSlideMobile(slide) : renderMobileSlideDesktop(slide)
      default:
        return null
    }
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            {renderSlide(slide)}
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on Mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="md:w-6 md:h-6 w-2 h-2" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 md:block"
        aria-label="Next slide"
      >
        <ChevronRight className="md:w-6 md:h-6 w-2 h-2" />
      </button>

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 mb-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  )
}

export default Caro
